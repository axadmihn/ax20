# Vercel ASGI entrypoint
import sys, pathlib
sys.path.append(str(pathlib.Path(__file__).resolve().parents[1]))  # ensure repo root on sys.path
from app.main import app as app
