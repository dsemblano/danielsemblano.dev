import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  // ✅ Parse JSON body
  const body = await request.json();

  const { name, email, message } = body;

  // ✅ Basic validation
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields' }),
      { status: 400 }
    );
  }

  // ✅ Example: sending email (pseudo-code)
  /*
  await resend.emails.send({
    from: 'Contact <noreply@danielsemblano.dev>',
    to: 'contact@danielsemblano.dev',
    replyTo: email,
    subject: `New message from ${name}`,
    html: `<p>${message}</p>`,
  });
  */

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
};
