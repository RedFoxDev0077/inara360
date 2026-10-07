// Receives demo requests from the landing form.
// TODO: connect to the real destination (email via Resend/SMTP, CRM, Airtable…) once INARA confirms it.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot filled → silently accept and drop.
  if (body.website) return Response.json({ ok: true });

  const name = String(body.name ?? "").trim();
  const company = String(body.company ?? "").trim();
  const email = String(body.email ?? "").trim();

  if (!name || !company || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  const lead = {
    name: name.slice(0, 200),
    company: company.slice(0, 200),
    email: email.slice(0, 200),
    phone: String(body.phone ?? "").slice(0, 50),
    projects: String(body.projects ?? "").slice(0, 50),
    message: String(body.message ?? "").slice(0, 2000),
    receivedAt: new Date().toISOString(),
  };

  console.log("[demo-request]", lead);

  return Response.json({ ok: true });
}
