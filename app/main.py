from fastapi import FastAPI, Request, Form, status, Response
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse, PlainTextResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from pydantic import ValidationError
from contextlib import asynccontextmanager
import os, pathlib, datetime, logging

from .settings import settings
from .forms import ContactForm
from .database import init_db, save_contact
from .emailer import send_email_via_sendgrid

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("axnmihn")
BASE_DIR = pathlib.Path(__file__).resolve().parent

@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        app.state.engine = init_db(settings.DATABASE_URL)      # lazy init at startup
        logger.info("DB initialized at %s", settings.DATABASE_URL)
    except Exception as e:
        logger.exception("DB init failed: %s", e)
        app.state.engine = None
    yield

app = FastAPI(title=settings.PROJECT_NAME, lifespan=lifespan)
app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in settings.ALLOW_ORIGINS.split(",")],
    allow_credentials=True, allow_methods=["*"], allow_headers=["*"],
)
app.add_middleware(SessionMiddleware, secret_key=os.environ.get("SESSION_SECRET", "dev-secret"))

class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        r = await call_next(request)
        r.headers["X-Content-Type-Options"] = "nosniff"
        r.headers["X-Frame-Options"] = "DENY"
        r.headers["Referrer-Policy"] = "no-referrer-when-downgrade"
        r.headers["Permissions-Policy"] = "interest-cohort=()"
        r.headers["Content-Security-Policy"] = "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:"
        return r
app.add_middleware(SecurityHeadersMiddleware)

@app.get("/favicon.ico")  # avoid favicon errors if not in /public
def favicon(): return Response(status_code=204)

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "settings": settings})

@app.get("/healthz")
def healthz():
    return {"status": "ok", "time": datetime.datetime.utcnow().isoformat() + "Z"}

@app.post("/contact")
async def contact_post(request: Request, Name: str = Form(...), Email: str = Form(...), Message: str = Form(...)):
    try:
        form = ContactForm(name=Name, email=Email, message=Message)
    except ValidationError as e:
        return JSONResponse(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, content={"errors": e.errors()})
    if getattr(app.state, "engine", None) is not None:
        try: save_contact(app.state.engine, form.name, form.email, form.message)
        except Exception as e: logger.exception("Saving contact failed: %s", e)
    try: send_email_via_sendgrid(settings.SENDGRID_API_KEY, settings.CONTACT_EMAIL, f"Contact from {form.name}", form.message)
    except Exception as e: logger.warning("Email send skipped/failed: %s", e)
    return RedirectResponse(url=request.url_for("home") + "?sent=1", status_code=status.HTTP_303_SEE_OTHER)

@app.get("/robots.txt", response_class=PlainTextResponse)
def robots(): return "User-agent: *\nAllow: /\nSitemap: /sitemap.xml"

@app.get("/sitemap.xml", response_class=PlainTextResponse)
def sitemap():
    base = os.environ.get("SITE_URL", "https://axnmihn.com").rstrip("/")
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>{base}/</loc></url>
</urlset>"""
