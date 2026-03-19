import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { name, email } = await req.json();

    if (!name || !email || typeof name !== "string" || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Server-side length validation
    const trimmedName = name.trim().slice(0, 100);
    const trimmedEmail = email.trim().slice(0, 255);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // HTML-escape to prevent injection
    const escapeHtml = (str: string) =>
      str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");

    const safeName = escapeHtml(trimmedName);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "IvyLink <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to IvyLink! 🎉",
        html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="display: inline-block; background: linear-gradient(135deg, #7c3aed, #ec4899); width: 48px; height: 48px; border-radius: 12px; line-height: 48px; text-align: center;">
                <span style="color: white; font-size: 24px; font-weight: bold;">🔗</span>
              </div>
              <h1 style="margin: 16px 0 0; font-size: 28px; color: #1a1a2e;">IvyLink</h1>
            </div>

            <h2 style="font-size: 22px; color: #1a1a2e; margin-bottom: 16px;">
              Hey ${name}, you're on the list! 🚀
            </h2>

            <p style="font-size: 16px; color: #64748b; line-height: 1.6; margin-bottom: 16px;">
              Thanks for joining the IvyLink waitlist. You're one step closer to automating your med spa's local partnerships and filling your calendar on autopilot.
            </p>

            <p style="font-size: 16px; color: #64748b; line-height: 1.6; margin-bottom: 24px;">
              Here's what happens next:
            </p>

            <div style="background: #f8f5ff; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <div style="margin-bottom: 16px;">
                <strong style="color: #7c3aed;">✅ Step 1:</strong>
                <span style="color: #1a1a2e;"> We review your application</span>
              </div>
              <div style="margin-bottom: 16px;">
                <strong style="color: #7c3aed;">✅ Step 2:</strong>
                <span style="color: #1a1a2e;"> We match you with local partners in your area</span>
              </div>
              <div>
                <strong style="color: #7c3aed;">✅ Step 3:</strong>
                <span style="color: #1a1a2e;"> Your first "Service Swap" launches within 7 days</span>
              </div>
            </div>

            <p style="font-size: 16px; color: #64748b; line-height: 1.6; margin-bottom: 32px;">
              We're onboarding users in small batches to ensure the best experience. We'll reach out shortly with your next steps.
            </p>

            <div style="text-align: center; margin-bottom: 32px;">
              <a href="https://collab-fill-auto.lovable.app" style="display: inline-block; background: linear-gradient(135deg, #7c3aed, #ec4899); color: white; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-size: 16px; font-weight: 600;">
                Learn More About IvyLink
              </a>
            </div>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />

            <p style="font-size: 13px; color: #94a3b8; text-align: center;">
              © ${new Date().getFullYear()} IvyLink. All rights reserved.<br />
              You're receiving this because you signed up for the IvyLink waitlist.
            </p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", data);
      throw new Error(`Resend API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending welcome email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
