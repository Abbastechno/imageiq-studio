/**
 * ImageIQ Studio: contact form endpoint
 *
 * Works as a Vercel Serverless Function (place at /api/contact.js) and needs no npm packages.
 * It validates the inquiry, blocks basic spam, and emails it to the studio through Resend.
 *
 * Environment variables (set them in the Vercel dashboard, never in the site code):
 *   RESEND_API_KEY      required. From https://resend.com/api-keys
 *   CONTACT_TO_EMAIL    optional. Where inquiries go. Defaults to imageiqstudio1@gmail.com
 *   CONTACT_FROM_EMAIL  optional. A sender on a domain you verified in Resend,
 *                       for example "ImageIQ Studio <inquiries@yourdomain.com>".
 *                       Defaults to Resend's test sender, which only delivers to the
 *                       email address your Resend account was created with.
 *   ALLOWED_ORIGIN      optional. For example "https://yourdomain.com". Rejects other sites.
 */

const TO = process.env.CONTACT_TO_EMAIL || 'imageiqstudio1@gmail.com';
const FROM = process.env.CONTACT_FROM_EMAIL || 'ImageIQ Studio <onboarding@resend.dev>';
const KEY = process.env.RESEND_API_KEY;
const ALLOWED = process.env.ALLOWED_ORIGIN;

/* Best-effort rate limit: 5 inquiries per IP per hour (resets when the function restarts). */
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 3600 * 1000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (s, max) => String(s == null ? '' : s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
const json = (res, code, body) => {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(code).json(body);
};

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }
  if (ALLOWED && req.headers.origin && req.headers.origin !== ALLOWED) {
    return json(res, 403, { ok: false, error: 'Forbidden' });
  }

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};

  /* Spam: hidden field filled in, or form submitted implausibly fast. Pretend success, send nothing. */
  if (b.company || (typeof b.t === 'number' && b.t < 2000)) return json(res, 200, { ok: true });

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (limited(ip)) return json(res, 429, { ok: false, error: 'Too many requests. Please try again later.' });

  const d = {
    name: clean(b.name, 120),
    email: clean(b.email, 160),
    phone: clean(b.phone, 40),
    service: clean(b.service, 80),
    date: clean(b.date, 40),
    location: clean(b.location, 160),
    budget: clean(b.budget, 60),
    message: clean(b.message, 5000),
  };

  if (d.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email) || !d.service || d.message.length < 10) {
    return json(res, 400, { ok: false, error: 'Please complete the required fields.' });
  }
  if (!KEY) {
    console.error('RESEND_API_KEY is not set');
    return json(res, 500, { ok: false, error: 'Email service is not configured.' });
  }

  const rows = [
    ['Name', d.name], ['Email', d.email], ['Phone / WhatsApp', d.phone || '-'], ['Service', d.service],
    ['Event / project date', d.date || '-'], ['Location', d.location || '-'], ['Budget', d.budget || '-'],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nMessage:\n${d.message}\n`;
  const html =
    `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#111">` +
    `<h2 style="margin:0 0 16px">New inquiry from the ImageIQ Studio website</h2>` +
    `<table cellpadding="6" style="border-collapse:collapse">` +
    rows.map(([k, v]) => `<tr><td style="color:#666;padding-right:18px">${esc(k)}</td><td><strong>${esc(v)}</strong></td></tr>`).join('') +
    `</table><h3 style="margin:24px 0 8px">Message</h3><p style="white-space:pre-wrap">${esc(d.message)}</p></div>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: d.email,
        subject: `New inquiry: ${d.service} (${d.name})`,
        text,
        html,
      }),
    });
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text());
      return json(res, 502, { ok: false, error: 'Could not send your inquiry.' });
    }
    return json(res, 200, { ok: true });
  } catch (err) {
    console.error('Send failed', err);
    return json(res, 502, { ok: false, error: 'Could not send your inquiry.' });
  }
};
