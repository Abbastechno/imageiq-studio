# ImageIQ Studio website

A cinematic photography and videography site. Static HTML plus one small serverless function for the contact form.

```
index.html        the design (you should rarely need to edit this)
content.js        ALL editable content: photos, projects, services, packages, prices, contact details
api/contact.js    sends contact-form inquiries to imageiqstudio1@gmail.com through Resend
assets/           logo mark
.env.example      the environment variables the form needs
```

## 1. Put it online (Vercel, free plan is enough)

1. Create a free account at vercel.com and a GitHub repository containing this folder.
2. In Vercel choose **Add New > Project**, import the repository, and click **Deploy**. No build settings are needed.
3. Open the deployed address to check the site. Add your own domain under **Settings > Domains**.
4. After the domain is live, set `site.url` in `content.js` (for example `"https://imageiqstudio.com"`). This turns on the canonical and social-sharing address.

## 2. Make the contact form deliver email

The form posts to `/api/contact`. That function holds the secret key on the server, so nothing secret is ever in the page.

1. Create a free account at resend.com and create an API key.
2. In Vercel open **Settings > Environment Variables** and add:
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO_EMAIL` = `imageiqstudio1@gmail.com`
   - `CONTACT_FROM_EMAIL` = `ImageIQ Studio <inquiries@yourdomain.com>` (a sender on a domain you verified in Resend)
   - `ALLOWED_ORIGIN` = `https://yourdomain.com` (optional, blocks other sites)
3. Redeploy, then send a test inquiry from the Contact page.

Until you have your own domain, leave `CONTACT_FROM_EMAIL` unset. Resend's test sender then only delivers to the email address your Resend account was created with, so sign up to Resend with imageiqstudio1@gmail.com for testing.

Spam protection: a hidden honeypot field, a minimum time on the form, server-side validation, and an hourly limit per visitor.

Prefer Formspree? Create a form there that forwards to the studio email and put its URL in `site.formEndpoint`. If `formEndpoint` is empty the form opens the visitor's email app instead.

## 3. Add your photography

Every image in `content.js` has `src`, `webp` and `avif` fields. Empty fields show a placeholder frame. To use a photo:

1. Save resized copies in a `photos/` folder. Suggested widths: 2400 px for the hero, 1600 px for portfolio images. Export WebP at quality 78 to 82 (free tools: squoosh.app, or `cwebp`).
2. Reference them, for example: `webp: "photos/sara-cover.webp", src: "photos/sara-cover.jpg"`.
3. For responsive loading add `srcset: "photos/sara-800.webp 800w, photos/sara-1600.webp 1600w"`.
4. When the real photos are in, set `site.showSampleNotice` to `false` and delete `sample: true` from projects.

Adding a project is one block in the `projects` list (a filled-in example is commented in the file). Films take a YouTube, Vimeo or direct `.mp4` link in `video`.

If you use stock photos temporarily, note where each came from in that item's `credit` field, and never present them as ImageIQ Studio's own work.

## 4. Still to add before launch

- A social-sharing image: add `<meta property="og:image" content="https://yourdomain.com/share.jpg">` to `index.html` (1200 x 630 px).
- Real testimonials (`testimonials.items`), only genuine ones.
- Optional facts in `about.facts`, only true ones.
- A phone number check: `phoneIntl` and `whatsapp` assume a Pakistan number (+92 348 5773701).

## 5. Growing later

`content.js` is plain structured data, so it can be replaced by a CMS (Sanity, Supabase, Contentful, Strapi, WordPress) without redesigning anything: fetch the same shapes and assign them to `window.IIQ` before the page renders. A Next.js + TypeScript + Tailwind version can be built on the same data shapes when you want automatic uploads.
