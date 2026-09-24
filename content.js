/* ==========================================================================
   ImageIQ Studio: content and configuration
   Everything a client would want to edit lives in this one file.
   The design (index.html) never needs to change to update:
   photos, projects, services, packages, prices, testimonials, contact details.

   PHOTOS
   Any item below with an image field (src / webp / avif / srcset) shows that
   photo. Leave them empty and the site shows a placeholder frame instead.
     src     : path or URL of a JPG/PNG (fallback)
     webp    : path or URL of a WebP version (recommended)
     avif    : path or URL of an AVIF version (optional, smallest)
     srcset  : optional responsive list, for example "a-800.webp 800w, a-1600.webp 1600w"
     credit  : where a stock image came from (keep this if you use stock photos)
   ========================================================================== */

window.IIQ = {

  /* ---------- Brand, contact and switches ---------- */
  site: {
    name: "ImageIQ Studio",
    wordmark: "IMAGEIQ STUDIO",
    tagline: "Capturing Moments. Creating Stories.",
    location: "Islamabad, Pakistan",
    url: "",                                   // set to the live domain, for example "https://imageiqstudio.com"
    email: "imageiqstudio1@gmail.com",
    phone: "3485773701",                       // shown exactly as supplied
    phoneIntl: "+923485773701",                // used for tel: links (assumes a Pakistan number)
    whatsapp: "923485773701",                  // digits only, used for wa.me links
    year: 2026,

    /* Contact form delivery.
       "/api/contact"  : the serverless function in api/contact.js (sends via Resend)
       "https://formspree.io/f/XXXXXXXX" : a Formspree form that forwards to the studio email
       ""              : no backend; the form opens the visitor's email app instead */
    formEndpoint: "/api/contact",

    /* While the site shows placeholder frames, keep this true. Set to false once real photos are in. */
    showSampleNotice: false
  },

  /* Social hub: add more links here later. Linktree is the primary hub. */
  socials: [
    { label: "Instagram", handle: "@imageiqstudio",                 url: "https://www.instagram.com/imageiqstudio/", icon: "instagram" },
    { label: "Facebook",  handle: "facebook.com/ImageIQStudio",     url: "https://www.facebook.com/ImageIQStudio/",  icon: "facebook" },
    { label: "Linktree",  handle: "linktr.ee/imageiqstudio",        url: "https://linktr.ee/imageiqstudio",          icon: "link", primary: true }
  ],

  nav: [
    { label: "Home",      route: "" },
    { label: "About",     route: "about" },
    { label: "Team",      route: "team" },
    { label: "Services",  route: "services" },
    { label: "Portfolio", route: "portfolio" },
    { label: "Films",     route: "films" },
    { label: "Packages",  route: "packages" },
    { label: "FAQs",      route: "faqs" },
    { label: "Contact",   route: "contact" }
  ],

  /* ---------- Home: hero ---------- */
  hero: {
    src: "photos/hero-arch-rose-1365.jpg", webp: "photos/hero-arch-rose-1365.webp", srcset: "photos/hero-arch-rose-800.webp 800w, photos/hero-arch-rose-1200.webp 1200w, photos/hero-arch-rose-1365.webp 1365w", credit: "ImageIQ Studio client work", alt: "Bride and groom exchanging a rose under a stone archway",
    lines: [["CAPTURING", "MOMENTS."], ["CREATING", "STORIES."]],
    sub: "Professional Photography & Videography",
    primaryCta: "Explore our work →",
    secondaryCta: "Start a project →",
    scrollCue: "Scroll to explore ↓"
  },

  /* ---------- Home: introduction ---------- */
  intro: {
    heading: ["WELCOME TO", "IMAGEIQ STUDIO"],
    subheading: "WHERE MEMORIES COME TO LIFE.",
    copy: "Welcome to ImageIQ Studio, where memories come to life! Just click on our page and embark on a visual journey like no other. We specialize in professional photography and videography, capturing the essence of your moments.",
    imageA: { src: "https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=1600&q=80", avif: "", srcset: "https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=2400&q=80 2400w", alt: "Portrait photography, soft studio light", credit: "Photo by Duo Chen on Unsplash" },
    imageB: { src: "https://images.unsplash.com/photo-1624137924753-2bf0d5f9c469?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1624137924753-2bf0d5f9c469?auto=format&fit=crop&w=1600&q=80", avif: "", srcset: "https://images.unsplash.com/photo-1624137924753-2bf0d5f9c469?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1624137924753-2bf0d5f9c469?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1624137924753-2bf0d5f9c469?auto=format&fit=crop&w=2400&q=80 2400w", alt: "Wedding detail, boutonniere", credit: "Photo by Kadarius Seegars on Unsplash" }
  },

  /* ---------- Home: philosophy (scroll-revealed statements) ---------- */
  philosophy: [
    { text: "WE DON'T JUST TAKE PHOTOS.", src: "photos/wed-close-embrace-1365.jpg", webp: "photos/wed-close-embrace-1365.webp", srcset: "photos/wed-close-embrace-800.webp 800w, photos/wed-close-embrace-1200.webp 1200w, photos/wed-close-embrace-1365.webp 1365w", credit: "ImageIQ Studio client work", alt: "Bride and groom in a close, quiet moment" },
    { text: "WE CAPTURE FEELINGS.",       src: "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=1600&q=80", avif: "", srcset: "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=2400&q=80 2400w", alt: "Audience watching a performance", credit: "Photo by Luigi Ritchie on Unsplash" },
    { text: "WE PRESERVE MOMENTS.",       src: "https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=1600&q=80", avif: "", srcset: "https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=2400&q=80 2400w", alt: "Photographer holding a DSLR camera", credit: "Photo by Lisanto 李奕良 on Unsplash" },
    { text: "WE CREATE STORIES.",         src: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80", avif: "", srcset: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=2400&q=80 2400w", alt: "Couple walking together on a road", credit: "Photo by Jakob Owens on Unsplash" }
  ],

  /* ---------- Services (hover a name to change the background; add src to any item) ---------- */
  services: [
    { group: "Photography", items: [
      { name: "Wedding & Engagement Photography", src: "photos/hero-arch-rose-1365.jpg", webp: "photos/hero-arch-rose-1365.webp", srcset: "photos/hero-arch-rose-800.webp 800w, photos/hero-arch-rose-1200.webp 1200w, photos/hero-arch-rose-1365.webp 1365w", credit: "ImageIQ Studio client work", alt: "Bride and groom exchanging a rose" },
      { name: "Event Photography", src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Jakob Dalbjörn on Unsplash" },
      { name: "Corporate Photography", src: "https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Andrew Arrol on Unsplash" },
      { name: "Portrait Photography", src: "https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Duo Chen on Unsplash" },
      { name: "Lifestyle Photography", src: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Jakob Owens on Unsplash" },
      { name: "Fashion Photography", src: "https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Mariah Krafft on Unsplash" },
      { name: "Product Photography", src: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Halil Ibrahim Cetinkaya on Unsplash" },
      { name: "Social Media Photography", src: "https://images.unsplash.com/photo-1700558154233-233332b5fe41?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1700558154233-233332b5fe41?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1700558154233-233332b5fe41?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1700558154233-233332b5fe41?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1700558154233-233332b5fe41?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Virginia Marinova on Unsplash" }
    ]},
    { group: "Videography", items: [
      { name: "Wedding Films", src: "photos/wed-dusk-couple-1365.jpg", webp: "photos/wed-dusk-couple-1365.webp", srcset: "photos/wed-dusk-couple-800.webp 800w, photos/wed-dusk-couple-1200.webp 1200w, photos/wed-dusk-couple-1365.webp 1365w", credit: "ImageIQ Studio client work", alt: "Groom and bride outdoors at dusk" },
      { name: "Event Videography", src: "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Luigi Ritchie on Unsplash" },
      { name: "Corporate Films", src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Jakob Dalbjörn on Unsplash" },
      { name: "Promotional Videos", src: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Kajetan Sumila on Unsplash" },
      { name: "Brand Films", src: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Halil Ibrahim Cetinkaya on Unsplash" },
      { name: "Cinematic Highlight Films", src: "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Jonathan Borba on Unsplash" },
      { name: "Interviews", src: "https://images.unsplash.com/photo-1611550287705-7ff8b459c8eb?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1611550287705-7ff8b459c8eb?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1611550287705-7ff8b459c8eb?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1611550287705-7ff8b459c8eb?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1611550287705-7ff8b459c8eb?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Natilyn Hicks Photography on Unsplash" },
      { name: "Documentary-Style Films", src: "https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by NATHAN MULLET on Unsplash" }
    ]},
    { group: "Creative Production", items: [
      { name: "Social Media Reels", src: "https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Paul Pastourmatzis on Unsplash" },
      { name: "Short-Form Content", src: "https://images.unsplash.com/photo-1665672051874-a1d1541b452c?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1665672051874-a1d1541b452c?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1665672051874-a1d1541b452c?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1665672051874-a1d1541b452c?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1665672051874-a1d1541b452c?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Ariel Domenden on Unsplash" },
      { name: "Video Editing", src: "https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Lisanto 李奕良 on Unsplash" },
      { name: "Color Grading", src: "https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by NATHAN MULLET on Unsplash" },
      { name: "Photo Retouching", src: "https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1532454781337-fc3edff34f91?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Duo Chen on Unsplash" },
      { name: "Motion Graphics", src: "https://images.unsplash.com/photo-1665672051879-bbb5261edfe9?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1665672051879-bbb5261edfe9?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1665672051879-bbb5261edfe9?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1665672051879-bbb5261edfe9?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1665672051879-bbb5261edfe9?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Ariel Domenden on Unsplash" },
      { name: "Creative Campaign Production", src: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Kajetan Sumila on Unsplash" }
    ]}
  ],

  /* ---------- Portfolio ---------- */
  categories: [
    { key: "weddings",  label: "Weddings" },
    { key: "events",    label: "Events" },
    { key: "portraits", label: "Portraits" },
    { key: "corporate", label: "Corporate" },
    { key: "brands",    label: "Brands" },
    { key: "products",  label: "Products" },
    { key: "lifestyle", label: "Lifestyle" }
  ],

  /* Each project: title, category (a key above), description, location, year,
     cover image (src/webp/avif), gallery (more images), video (URL), featured.
     span (1-12) and ratio set its size in the editorial grid.
     sample:true marks a placeholder; remove it when you add a real project. */
  projects: [
    { id: "p01", title: "An evening walk before the reception", category: "weddings", span: 7, ratio: "3/2", featured: false, src: "photos/wed-dusk-couple-1365.jpg", webp: "photos/wed-dusk-couple-1365.webp", srcset: "photos/wed-dusk-couple-800.webp 800w, photos/wed-dusk-couple-1200.webp 1200w, photos/wed-dusk-couple-1365.webp 1365w", credit: "ImageIQ Studio client work", alt: "Groom and bride outdoors at dusk", year: 2022, description: "The couple, moments before stepping into the reception." },
    { id: "p02", title: "Groom, portrait", category: "portraits", span: 5, ratio: "4/5", featured: false, src: "photos/wed-groom-sunglasses-1365.jpg", webp: "photos/wed-groom-sunglasses-1365.webp", srcset: "photos/wed-groom-sunglasses-800.webp 800w, photos/wed-groom-sunglasses-1200.webp 1200w, photos/wed-groom-sunglasses-1365.webp 1365w", credit: "ImageIQ Studio client work", alt: "Groom wearing sunglasses, outdoor portrait", year: 2022, description: "A relaxed portrait taken on the wedding day." },
    { id: "p03", title: "Mehndi function", category: "events", span: 4, ratio: "4/5", featured: false, src: "photos/mehndi-standing-1365.jpg", webp: "photos/mehndi-standing-1365.webp", srcset: "photos/mehndi-standing-800.webp 800w, photos/mehndi-standing-1200.webp 1200w, photos/mehndi-standing-1365.webp 1365w", credit: "ImageIQ Studio client work", alt: "Couple at a mehndi function, orange and maroon outfits", year: 2022, description: "A couple at their mehndi celebration." },
    { id: "p04", title: "Corporate session",  category: "corporate", span: 8,  ratio: "16/10",featured: false, src: "https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1591833383187-a750e84a494c?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Andrew Arrol on Unsplash", alt: "Speaker addressing an audience", location: "Islamabad", year: 2026, description: "A corporate session focused on leadership portraits." },
    { id: "p05", title: "Brand campaign",     category: "brands",    span: 12, ratio: "21/9", featured: false, src: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Kajetan Sumila on Unsplash", alt: "A brand launch on stage", location: "Islamabad", year: 2026, description: "Wide coverage of a brand campaign launch event." },
    { id: "p06", title: "Placing the veil", category: "weddings", span: 5, ratio: "4/5", featured: false, src: "photos/wed-veil-moment-1092.jpg", webp: "photos/wed-veil-moment-1092.webp", srcset: "photos/wed-veil-moment-800.webp 800w, photos/wed-veil-moment-1092.webp 1092w", credit: "ImageIQ Studio client work", alt: "Groom placing a red veil over the bride", year: 2022, description: "A quiet moment as the groom places the bride\u2019s veil." },
    { id: "p07", title: "Lifestyle",          category: "lifestyle", span: 7,  ratio: "3/2",  featured: false, src: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Jakob Owens on Unsplash", alt: "Couple walking together outdoors", location: "Islamabad", year: 2026, description: "A lifestyle session shot on location at golden hour." },
    { id: "p08", title: "Product still",      category: "products",  span: 4,  ratio: "1/1",  featured: false, src: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Halil Ibrahim Cetinkaya on Unsplash", alt: "Camera detail, product-style lighting", location: "Islamabad", year: 2026, description: "A product-style still shot with controlled lighting." },
    { id: "p09", title: "Portrait",           category: "portraits", span: 4,  ratio: "3/4",  featured: false, src: "https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1623783356340-95375aac85ce?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Mariah Krafft on Unsplash", alt: "Portrait in natural light", location: "Islamabad", year: 2026, description: "A portrait session with warm, editorial tones." },
    { id: "p10", title: "Shared laughter", category: "events", span: 4, ratio: "4/5", featured: false, src: "photos/mehndi-sofa-laugh-1092.jpg", webp: "photos/mehndi-sofa-laugh-1092.webp", srcset: "photos/mehndi-sofa-laugh-800.webp 800w, photos/mehndi-sofa-laugh-1092.webp 1092w", credit: "ImageIQ Studio client work", alt: "Groom laughing at the mehndi function", year: 2022, description: "A candid moment at the mehndi celebration." },
    { id: "p11", title: "The groom, before the ceremony", category: "weddings", span: 6, ratio: "3/4", featured: false, src: "photos/wed-groom-profile-1365.jpg", webp: "photos/wed-groom-profile-1365.webp", srcset: "photos/wed-groom-profile-800.webp 800w, photos/wed-groom-profile-1200.webp 1200w, photos/wed-groom-profile-1365.webp 1365w", credit: "ImageIQ Studio client work", alt: "Groom in traditional dress, side profile", year: 2022, description: "A still moment before the day begins." },
    { id: "p12", title: "Team portrait",      category: "corporate", span: 6,  ratio: "4/3",  featured: false, src: "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1763962274119-1a0a0d418520?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Luigi Ritchie on Unsplash", alt: "Audience at a corporate event", location: "Islamabad", year: 2026, description: "Wide shot of a corporate audience." },
    { id: "p13", title: "Lifestyle in motion",category: "lifestyle", span: 8,  ratio: "16/10",featured: false, src: "https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Paul Pastourmatzis on Unsplash", alt: "Couple in motion outdoors", location: "Islamabad", year: 2026, description: "A lifestyle shoot capturing natural movement." },
    { id: "p14", title: "Product detail",     category: "products",  span: 4,  ratio: "4/5",  featured: false, src: "https://images.unsplash.com/photo-1622277583249-4c1fad490804?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1622277583249-4c1fad490804?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1622277583249-4c1fad490804?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1622277583249-4c1fad490804?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1622277583249-4c1fad490804?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Asdrubal luna on Unsplash", alt: "Portrait among greenery", location: "Islamabad", year: 2026, description: "A bridal portrait shot on location." },
    { id: "p15", title: "Mehndi celebration", category: "events", span: 6, ratio: "3/2", featured: false, src: "photos/mehndi-sofa-wide-2047.jpg", webp: "photos/mehndi-sofa-wide-2047.webp", srcset: "photos/mehndi-sofa-wide-800.webp 800w, photos/mehndi-sofa-wide-1200.webp 1200w, photos/mehndi-sofa-wide-1600.webp 1600w, photos/mehndi-sofa-wide-2047.webp 2047w", credit: "ImageIQ Studio client work", alt: "Couple seated together at their mehndi celebration", year: 2022, description: "The couple at their mehndi function." }
    /* Real project example (copy, fill in, and delete the sample rows):
    { id: "p15", title: "Sara & Ahmed", category: "weddings", span: 7, ratio: "3/2",
      description: "A two-day wedding in Islamabad.", location: "Islamabad", year: 2026,
      webp: "photos/sara-ahmed-cover.webp", src: "photos/sara-ahmed-cover.jpg",
      gallery: [ { webp: "photos/sara-ahmed-2.webp", src: "photos/sara-ahmed-2.jpg" } ],
      video: "https://youtu.be/XXXXXXXXXXX", featured: true }
    */
  ],

  /* ---------- Featured stories (4 editable slots; placeholder titles) ---------- */
  stories: {
    heading: "STORIES WE'VE CAPTURED",
    items: [
      { title: "THE MOMENT",       kind: "Wedding Photography & Film",       src: "photos/wed-groom-profile-1365.jpg", webp: "photos/wed-groom-profile-1365.webp", srcset: "photos/wed-groom-profile-800.webp 800w, photos/wed-groom-profile-1200.webp 1200w, photos/wed-groom-profile-1365.webp 1365w", credit: "ImageIQ Studio client work", alt: "Groom in traditional dress, side profile" },
      { title: "BEYOND THE FRAME", kind: "Corporate Photography",            src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Jakob Dalbjörn on Unsplash", alt: "Corporate conference session" },
      { title: "IN MOTION",        kind: "Event Videography",                src: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Kajetan Sumila on Unsplash", alt: "Event stage coverage" },
      { title: "THE BRAND STORY",  kind: "Commercial & Creative Production", src: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Halil Ibrahim Cetinkaya on Unsplash", alt: "Camera detail, brand production" }
    ]
  },

  /* ---------- Films: video is a YouTube, Vimeo or direct .mp4/.webm URL ---------- */
  films: {
    heading: "STORIES IN MOTION",
    copy: "Some moments deserve more than a photograph. They deserve to move.",
    items: [
      { title: "Wedding Films",      kind: "Film",  video: "", src: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Kajetan Sumila on Unsplash", alt: "Wedding film thumbnail", ratio: "16/9", featured: true },
      { title: "Reels",              kind: "Reel",  video: "", src: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1606216836549-f60d04e4a20b?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Jakob Owens on Unsplash", alt: "Vertical reel thumbnail", vertical: true },
      { title: "Event Films",        kind: "Film",  video: "", src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Jakob Dalbjörn on Unsplash", alt: "Event film thumbnail", ratio: "16/9" },
      { title: "Brand Films",        kind: "Film",  video: "", src: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1614607653708-0777e6d003b8?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Halil Ibrahim Cetinkaya on Unsplash", alt: "Brand film thumbnail", ratio: "16/9" },
      { title: "Promotional Videos", kind: "Video", video: "", src: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1633358050629-bb6a292616ff?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Kajetan Sumila on Unsplash", alt: "Promotional video thumbnail", ratio: "16/9" }
    ]
  },

  /* ---------- Visual breaks ---------- */
  breaks: {
    one:   { text: "EVERY FRAME HAS A STORY.", src: "https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1562826772-be179f321470?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Paul Pastourmatzis on Unsplash", alt: "Couple in motion, full-screen" },
    two:   { text: "MOMENTS DON'T REPEAT.",    src: "https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1612051314545-405440dec74a?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by NATHAN MULLET on Unsplash", alt: "Concert crowd, full-screen" },
    three: { text: "MAKE THEM LAST.",          src: "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Jonathan Borba on Unsplash", alt: "Newlywed couple, full-screen" }
  },

  /* ---------- About (add real facts later; nothing is invented) ---------- */
  about: {
    heading: "BEHIND THE LENS",
    copy: [
      "ImageIQ Studio is a creative photography and videography studio focused on capturing authentic moments, meaningful stories and powerful visual experiences.",
      "From personal milestones to events, brands and professional campaigns, we approach every project with creativity, attention to detail and a commitment to creating visuals that last."
    ],
    image: { src: "https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=1600&q=80", webp: "https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=1600&q=80", srcset: "https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1601482918686-329a426d8d3a?auto=format&fit=crop&w=2400&q=80 2400w", credit: "Photo by Lisanto 李奕良 on Unsplash", alt: "The ImageIQ Studio team behind the camera" },
    /* Optional facts, shown only if you add them. Example: [{ value: "8", label: "Years behind the lens" }] */
    facts: []
  },

  /* ---------- Team (send names, roles and photos and I'll fill these in) ---------- */
  team: {
    heading: "BEHIND THE LENS",
    intro: "The people who plan, shoot and edit every ImageIQ Studio project.",
    members: [
      /* Example of a filled-in member (copy this shape for each person):
      { name: "Full Name", role: "Founder & Lead Photographer",
        src: "photos/team-name.jpg", webp: "photos/team-name.webp",
        srcset: "photos/team-name-400.webp 400w, photos/team-name-800.webp 800w",
        alt: "Full Name, Founder and Lead Photographer at ImageIQ Studio" }
      */
    ]
  },

  /* ---------- Process ---------- */
  process: [
    { n: "01", title: "DISCOVER", text: "Understanding your story, vision and requirements." },
    { n: "02", title: "PLAN",     text: "Developing the creative direction and production plan." },
    { n: "03", title: "CAPTURE",  text: "Capturing your moments through professional photography and cinematography." },
    { n: "04", title: "DELIVER",  text: "Professional editing, retouching, color grading and final delivery." }
  ],

  /* ---------- Packages (PKR) ---------- */
  packages: {
    heading: "PACKAGES",
    intro: "Five ways to tell your story. Every price below is a starting point.",
    items: [
      { id: "basic", name: "BASIC", price: "PKR 30,000", budget: "PKR 30,000–50,000", service: "Photography",
        suitable: ["Portrait sessions", "Small events", "Personal shoots", "Short content sessions"],
        includes: ["Up to 2 hours coverage", "1 photographer", "40+ edited photographs", "Basic color correction", "Selected professional retouching", "Digital delivery", "Online gallery"],
        cta: "INQUIRE NOW →" },
      { id: "standard", name: "STANDARD", price: "PKR 50,000", budget: "PKR 50,000–80,000", service: "Photography + Videography",
        suitable: ["Engagements", "Small weddings", "Events", "Corporate sessions", "Brand shoots"],
        includes: ["Up to 4 hours coverage", "1 photographer", "1 videographer", "100+ edited photographs", "60–90 second highlight video", "Professional color grading", "Selected retouching", "Digital gallery", "Social-media-ready highlights"],
        cta: "INQUIRE NOW →" },
      { id: "advanced", name: "ADVANCED", price: "PKR 80,000", budget: "PKR 80,000–120,000", service: "Photography + Videography",
        suitable: ["Weddings", "Larger events", "Corporate productions", "Brand campaigns"],
        includes: ["Up to 6 hours coverage", "1 photographer", "1 videographer", "200+ edited photographs", "2–3 minute cinematic highlight film", "Short-form reels", "Professional color grading", "Advanced photo retouching", "Digital gallery", "Social media content"],
        cta: "INQUIRE NOW →" },
      { id: "premium", name: "PREMIUM", price: "PKR 120,000", budget: "PKR 120,000–175,000", service: "Photography + Videography",
        suitable: ["Full wedding coverage", "Premium events", "Corporate campaigns", "Brand launches", "High-end productions"],
        includes: ["Up to 8 hours coverage", "2 photographers", "1–2 videographers", "300+ edited photographs", "4–5 minute cinematic highlight film", "Multiple social media reels", "Professional cinematic color grading", "Advanced retouching", "Full digital gallery", "Priority post-production", "Social-media-ready content"],
        cta: "BOOK A CONSULTATION →" },
      { id: "signature", name: "SIGNATURE", price: "PKR 175,000+", budget: "PKR 175,000+", service: "Photography + Videography", flagship: true,
        tag: "The flagship ImageIQ experience",
        suitable: ["Full-day weddings", "Major events", "Premium brand campaigns", "Large-scale productions", "Comprehensive photography + cinematography"],
        includes: ["Full-day coverage", "Multiple photographers", "Multiple videographers", "400+ professionally edited photographs", "Premium cinematic film", "Multiple highlight reels", "Advanced photography retouching", "Cinematic color grading", "Social media content package", "Premium digital gallery", "Optional album", "Dedicated creative planning", "Priority delivery"],
        cta: "CREATE YOUR STORY →" }
    ],
    defaultOpen: "standard",
    custom: {
      heading: ["YOUR STORY.", "YOUR PACKAGE."],
      copy: "Not every story fits a standard package. Tell us what you're planning and we'll create a photography and videography package around your requirements.",
      projects: ["Weddings", "Events", "Corporate campaigns", "Product launches", "Brand films", "Fashion", "Social media campaigns", "Documentary projects", "Commercial productions"],
      cta: "REQUEST A CUSTOM QUOTE →"
    },
    note: "All packages are starting prices and may vary depending on location, duration, production requirements, team size and final deliverables. Contact ImageIQ Studio for a customized quotation."
  },

  /* ---------- Testimonials: add only genuine reviews ----------
     Example: { quote: "…", name: "Client name", context: "Wedding, 2026" } */
  testimonials: {
    heading: "KIND WORDS",
    items: []
  },

  /* ---------- FAQs (edit freely; keep answers accurate to how ImageIQ Studio actually works) ---------- */
  faqs: {
    heading: "FREQUENTLY ASKED QUESTIONS",
    intro: "Answers to what people usually ask before booking. Don't see yours? Send us a message.",
    items: [
      { q: "How do we book a session?", a: "Send an inquiry through the Contact page or WhatsApp with your event type, date and location. We'll reply to confirm availability and talk through coverage and package options before anything is booked." },
      { q: "Do you require a deposit?", a: "Yes, a deposit is required to secure your date once you confirm a package. The remaining balance is due as agreed at the time of booking. Exact terms are shared with your quotation." },
      { q: "How far in advance should we book?", a: "As early as possible, especially for weddings and peak-season dates, since our calendar fills up. If your date is close, reach out anyway and we'll check availability." },
      { q: "How long until we receive our photos and film?", a: "Delivery timelines depend on the package and season and are confirmed at booking. We'll keep you updated if anything changes." },
      { q: "Do you travel outside Islamabad?", a: "Yes, we take on projects across Pakistan. Travel and accommodation for out-of-city coverage are discussed as part of your quotation." },
      { q: "Can we customize a package?", a: "Yes. If a standard package doesn't fit your event, use the custom quote option on the Packages page and tell us what you're planning." },
      { q: "What do we receive at the end?", a: "Edited, color-graded photographs delivered through an online gallery, and for videography packages, a highlight film and any reels included in your package." },
      { q: "What is your cancellation or rescheduling policy?", a: "Let us know as early as possible if your date changes. Specific terms depend on how close you are to the event date and are outlined in your booking confirmation." }
    ]
  },

  /* ---------- Privacy policy ---------- */
  privacy: {
    updated: "September 2026",
    intro: "This page explains what information ImageIQ Studio collects through this website and how it is used.",
    sections: [
      { h: "Information we collect", p: "When you submit the contact form, we collect the details you provide: your name, email, phone number, service of interest, event date, location, budget and message. We do not collect payment information through this website." },
      { h: "How we use it", p: "We use this information only to respond to your inquiry, discuss your project and, if you choose to proceed, to plan and deliver your booking. We do not sell, rent or share your information with third parties for marketing purposes." },
      { h: "Email delivery", p: "Contact form submissions are sent to our inbox using Resend, an email delivery service. Resend processes the message only to deliver it to us and does not use it for any other purpose." },
      { h: "Cookies and local storage", p: "This website does not use tracking cookies or analytics. Your browser may store small technical preferences locally on your own device (for example, whether you've dismissed the mobile menu); this data never leaves your device and we cannot see it." },
      { h: "Photography and videography", p: "If you book a session with us, any photographs or footage captured are handled according to the terms agreed at booking. We do not publish client work publicly without permission." },
      { h: "Your rights", p: "You can ask us at any time what information we hold about you, or ask us to delete it, by emailing us at the address below." },
      { h: "Contact", p: "Questions about this policy can be sent to imageiqstudio1@gmail.com." }
    ]
  },

  /* ---------- Contact page ---------- */
  contact: {
    heading: ["LET'S CREATE", "SOMETHING WORTH", "REMEMBERING."],
    copy: ["Have a moment, event, brand or story you want to bring to life?", "Let's talk."],
    services: ["Photography", "Videography", "Photography + Videography", "Wedding", "Event", "Portrait", "Corporate", "Product", "Brand Content", "Social Media Content", "Other"],
    budgets: ["PKR 30,000–50,000", "PKR 50,000–80,000", "PKR 80,000–120,000", "PKR 120,000–175,000", "PKR 175,000+", "Custom / Not Sure"],
    success: "Thank you for contacting ImageIQ Studio. Your inquiry has been received and our team will get back to you soon."
  }
};
