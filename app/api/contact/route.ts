import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function sanitize(value: string | undefined) {
  return (value ?? "").trim();
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as ContactPayload;
  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const message = sanitize(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "All fields are required." },
      { status: 400 }
    );
  }

  // Placeholder for integration with email or persistence provider
  console.info("Contact message received", { name, email, message: message.slice(0, 500) });

  return NextResponse.json({ ok: true });
}
