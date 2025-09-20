# Axnmihn — FastAPI Site (Python)

## Local dev
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
export SESSION_SECRET=dev-secret
uvicorn app.main:app --reload  # http://127.0.0.1:8000

## Env (.env)
CONTACT_EMAIL=axadmihn@axnmihn.com
ADMIN_HANDLE=axadmihn
SITE_URL=https://axnmihn.com