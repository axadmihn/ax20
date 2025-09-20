import logging

from fastapi import FastAPI, HTTPException, status

from app.forms import ContactForm
from app.database import init_db, save_contact
from app.emailer import send_email_via_sendgrid
from app.settings import settings

logger = logging.getLogger("axnmihn.contact")
logging.basicConfig(level=logging.INFO)

app = FastAPI(title="Axnmihn Contact API")
_engine = None  # populated on startup


@app.on_event("startup")
async def startup() -> None:
    global _engine
    try:
        _engine = init_db(settings.DATABASE_URL)
        logger.info("DB initialized at %s", settings.DATABASE_URL)
    except Exception as exc:  # pragma: no cover
        logger.exception("DB init failed: %s", exc)
        _engine = None


@app.post("/", status_code=status.HTTP_200_OK)
async def submit_contact(payload: ContactForm):
    if not payload.name or not payload.email or not payload.message:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="All fields are required")

    stored = False
    if _engine is not None:
        try:
            save_contact(_engine, payload.name, payload.email, payload.message)
            stored = True
        except Exception as exc:  # pragma: no cover
            logger.exception("Saving contact failed: %s", exc)

    emailed = False
    try:
        emailed = send_email_via_sendgrid(
            settings.SENDGRID_API_KEY,
            settings.CONTACT_EMAIL,
            f"Contact from {payload.name}",
            payload.message,
        )
    except Exception as exc:  # pragma: no cover
        logger.warning("Email send skipped/failed: %s", exc)

    ok = stored or emailed
    if not ok:
        logger.warning("Contact submission from %s could not be persisted or emailed", payload.email)
    return {"ok": ok, "stored": stored, "emailed": emailed}


@app.get("/healthz")
async def healthcheck():
    return {"status": "ok"}
