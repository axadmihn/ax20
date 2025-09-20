from typing import Optional
import os

def send_email_via_sendgrid(api_key: Optional[str], to_email: str, subject: str, body: str) -> bool:
    if not api_key:
        return False
    try:
        from sendgrid import SendGridAPIClient
        from sendgrid.helpers.mail import Mail
        message = Mail(from_email=os.environ.get("FROM_EMAIL","noreply@axnmihn.com"), to_emails=to_email, subject=subject, html_content=body)
        sg = SendGridAPIClient(api_key)
        response = sg.send(message)
        return 200 <= response.status_code < 300
    except Exception:
        return False