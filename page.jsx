"use client";
import { useState } from "react";

// ── DESIGN SYSTEMS ─────────────────────────────────────────────────────────────
const DS = {
  obsidian: {
    label: "Obsidian", desc: "Dark luxury — premium brands",
    accent: "#e8c97a", bg: "#0a0a0f", surface: "#111118", card: "#16161f",
    border: "#1e1e2c", text: "#f5f0e8", muted: "#7a7a8a", am: "#e8c97a15",
    dark: true, hf: "Playfair Display", bf: "DM Sans",
  },
  arctic: {
    label: "Arctic", desc: "Clean minimal — modern lifestyle",
    accent: "#1a6ef5", bg: "#f7f9fc", surface: "#ffffff", card: "#ffffff",
    border: "#e2e8f0", text: "#0f1923", muted: "#64748b", am: "#1a6ef510",
    dark: false, hf: "Syne", bf: "Outfit",
  },
  ember: {
    label: "Ember", desc: "Bold energetic — fitness brands",
    accent: "#ff4d00", bg: "#0f0a08", surface: "#1a100c", card: "#221510",
    border: "#2e1a14", text: "#fff5f0", muted: "#9b6a5a", am: "#ff4d0015",
    dark: true, hf: "Barlow Condensed", bf: "Barlow",
  },
  sage: {
    label: "Sage", desc: "Organic warm — wellness & beauty",
    accent: "#4a7c59", bg: "#f5f2ed", surface: "#faf8f4", card: "#ffffff",
    border: "#e0d9ce", text: "#2c2416", muted: "#8a7a6a", am: "#4a7c5910",
    dark: false, hf: "Cormorant Garamond", bf: "Jost",
  },
  midnight: {
    label: "Midnight", desc: "Deep navy — tech & modern brands",
    accent: "#38bdf8", bg: "#060d1a", surface: "#0a1525", card: "#0e1f35",
    border: "#0e2a45", text: "#e8f4fd", muted: "#5a7a9b", am: "#38bdf815",
    dark: true, hf: "Space Grotesk", bf: "Inter",
  },
  rose: {
    label: "Rose", desc: "Soft blush — fashion & lifestyle",
    accent: "#c4546a", bg: "#fdf6f7", surface: "#fff9fa", card: "#ffffff",
    border: "#f0d8dd", text: "#2a1018", muted: "#9a6a74", am: "#c4546a10",
    dark: false, hf: "Cormorant Garamond", bf: "Raleway",
  },
  forest: {
    label: "Forest", desc: "Rich green — outdoor & eco brands",
    accent: "#86efac", bg: "#060f0a", surface: "#0c1a10", card: "#112018",
    border: "#1a3022", text: "#e8f5e9", muted: "#5a8a6a", am: "#86efac15",
    dark: true, hf: "Fraunces", bf: "Source Sans 3",
  },
  chrome: {
    label: "Chrome", desc: "Stark contrast — streetwear & hype",
    accent: "#ffffff", bg: "#000000", surface: "#0a0a0a", card: "#111111",
    border: "#222222", text: "#ffffff", muted: "#666666", am: "#ffffff12",
    dark: true, hf: "Bebas Neue", bf: "Barlow",
  },
  modern: {
    label: "Modern", desc: "Sharp & professional — any industry",
    accent: "#6d28d9", bg: "#fafafa", surface: "#ffffff", card: "#ffffff",
    border: "#e4e4e7", text: "#18181b", muted: "#71717a", am: "#6d28d910",
    dark: false, hf: "Plus Jakarta Sans", bf: "Plus Jakarta Sans",
  },
};

const STEPS = [
  { title: "Brand Identity", sub: "Tell us who you are" },
  { title: "Your Products", sub: "What are you selling" },
  { title: "Your Customer", sub: "Who are you selling to" },
  { title: "SEO & Search", sub: "How customers find you" },
  { title: "Design Style", sub: "How you want to look" },
  { title: "Site Pages", sub: "What to include" },
];

const TRAITS = ["Bold","Luxurious","Playful","Minimal","Energetic","Trustworthy","Innovative","Earthy","Premium","Approachable"];

const BLANK = {
  brandName:"", tagline:"", mission:"", personality:[], differentiator:"",
  category:"", products:[{name:"",price:"",desc:""}],
  age:"", lifestyle:"", painPoints:"",
  city:"", state:"", keywords:"", googleQ:"", competitors:"",
  style:"obsidian",
  pages:{about:true,faq:true,blog:false,contact:true,testimonials:true},
  instagram:"", tiktok:"",
};

// ── CONTENT ENGINE ─────────────────────────────────────────────────────────────
function build(f) {
  const n = f.brandName || "Your Brand";
  const cat = f.category || "Products";
  const catL = cat.toLowerCase();
  const city = f.city || "Your City";
  const state = f.state || "";
  const diff = f.differentiator || `premium quality ${catL} built to last`;
  const pain = f.painPoints || "finding quality products they can trust";
  const life = f.lifestyle || "quality-conscious individuals";
  const kw = f.keywords || `${catL}, ${city.toLowerCase()} ${catL}`;
  const traits = f.personality.length > 0 ? f.personality.join(", ").toLowerCase() : "bold and trustworthy";

  const headlines = {
    fit: "Built for People Who Don't Quit",
    skin: "Skin That Speaks for Itself",
    coffee: "Every Sip. Perfectly Sourced.",
    cloth: "Wear What You Stand For",
    apparel: "Wear What You Stand For",
    default: `${n}. Built Different.`,
  };
  const hKey = Object.keys(headlines).find(k => catL.includes(k)) || "default";

  const prods = f.products.map((p, i) => ({
    name: p.name || `${cat} Essential ${i + 1}`,
    price: p.price || String((19.99 + i * 15).toFixed(2)),
    desc: p.desc || `Premium ${catL} crafted for ${life}. ${traits.charAt(0).toUpperCase() + traits.slice(1)} quality you'll feel from day one.`,
    badge: i === 0 ? "Best Seller" : i === 1 ? "New Arrival" : "",
  }));

  const titleTag = `${n} | Premium ${cat} in ${city}${state ? ", " + state : ""}`;
  const metaDesc = `${n} offers premium ${catL} for ${life} in ${city}${state ? ", " + state : ""}. ${diff.charAt(0).toUpperCase() + diff.slice(1)}. Shop now and feel the difference.`;

  return {
    hero: {
      headline: headlines[hKey],
      sub: `${n} was built for ${life} who are done settling. We solve the problem of ${pain} — for good.`,
      cta1: "Shop Now", cta2: "Our Story",
    },
    about: {
      headline: `Why We Built ${n}`,
      story: `${n} started because ${life} deserved better than what was out there. The problem was simple: ${pain}. Our answer was equally simple — ${diff}. Every product is proof of that commitment.`,
      values: ["Quality First", "Built to Last", "Customer Obsessed"],
    },
    products: prods,
    testimonials: [
      { name: "Sarah M.", loc: city, text: `Honestly the best ${catL} I've ever used. The quality is completely different from anything else I've tried. ${n} is the real deal.`, stars: 5 },
      { name: "James R.", loc: state || "Nearby", text: `Was skeptical at first. After my first order I was completely sold. Fast shipping, incredible product, and their support team is outstanding.`, stars: 5 },
      { name: "Taylor K.", loc: `${city} Area`, text: `Finally a brand that delivers on its promise. Recommended ${n} to everyone I know. Won't shop anywhere else.`, stars: 5 },
    ],
    faq: [
      { q: `What makes ${n} different from other ${catL} brands?`, a: `${diff.charAt(0).toUpperCase() + diff.slice(1)}. We back every product with our full satisfaction guarantee — no fine print, no hassle.` },
      { q: "How fast is shipping?", a: "All orders ship within 1-2 business days. Standard delivery 3-5 days. Express options available at checkout." },
      { q: "What is your return policy?", a: "30-day hassle-free returns. If you're not 100% satisfied, we'll make it right — no questions asked." },
      { q: `Do you ship to ${city}?`, a: `Yes! We ship across the US including ${city}${state ? ", " + state : ""} and all surrounding areas. Free shipping on orders over $50.` },
    ],
    trust: [`${(Math.floor(Math.random() * 4) + 1) * 500}+ Happy Customers`, "Free Shipping Over $50", "30-Day Returns", "⭐ 4.9 Star Rating"],
    seo: {
      title: titleTag,
      titleLen: titleTag.length,
      meta: metaDesc,
      metaLen: metaDesc.length,
      keywords: kw,
      h1: `Premium ${cat} for ${life} in ${city}`,
      ogTitle: `${n} — ${cat} That Actually Delivers`,
      ogDesc: `Tired of ${pain}? ${n} was built for ${life} who want better. Shop premium ${catL} and feel the difference today.`,
      blog: [
        `Top 5 ${cat} for ${life} in ${city} (${new Date().getFullYear()} Guide)`,
        `How to Choose the Right ${cat}: What ${f.age || "Smart Shoppers"} Need to Know`,
        `Why ${city} Locals Are Choosing ${n} Over Big Brands`,
        `${diff.charAt(0).toUpperCase() + diff.slice(1)}: The ${n} Story`,
        `${cat} Tips for ${life}: A Complete Beginner's Guide`,
      ],
    },
  };
}

// ── MAIN ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [phase, setPhase] = useState("intake"); // intake | preview
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(BLANK);
  const [site, setSite] = useState(null);
  const [tab, setTab] = useState("preview");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [err, setErr] = useState("");

  const ds = DS[form.style];
  const upd = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const updProd = (i, k, v) => { const a = [...form.products]; a[i] = { ...a[i], [k]: v }; upd("products", a); };
  const toggleTrait = t => { const c = form.personality; upd("personality", c.includes(t) ? c.filter(x => x !== t) : c.length < 3 ? [...c, t] : c); };

  const generate = () => {
    if (!form.brandName.trim()) { setErr("Please enter a brand name to continue."); return; }
    setErr(""); setSite(build(form)); setPhase("preview"); setTab("preview");
  };

  const addToCart = p => setCart(prev => {
    const ex = prev.find(i => i.name === p.name);
    return ex ? prev.map(i => i.name === p.name ? { ...i, qty: i.qty + 1 } : i) : [...prev, { ...p, qty: 1 }];
  });
  const cartTotal = cart.reduce((s, i) => s + parseFloat(i.price || 0) * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const exportHTML = () => {
    if (!site) return;
    const s = site.seo;
    const d = ds;
    const storeSchemaStr = JSON.stringify({ "@context": "https://schema.org", "@type": "Store", "name": form.brandName, "description": s.meta, "address": { "@type": "PostalAddress", "addressLocality": form.city, "addressRegion": form.state, "addressCountry": "US" } });
    const prodSchemaStr = site.products.map(p => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Product", "name": p.name, "description": p.desc, "offers": { "@type": "Offer", "price": p.price, "priceCurrency": "USD", "availability": "https://schema.org/InStock" } })}</script>`).join("\n");
    const faqSchemaStr = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": site.faq.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${s.title}</title>
  <meta name="description" content="${s.meta}"/>
  <meta name="keywords" content="${s.keywords}"/>
  <meta property="og:title" content="${s.ogTitle}"/>
  <meta property="og:description" content="${s.ogDesc}"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://www.${form.brandName.toLowerCase().replace(/\s+/g, "")}.com/"/>
  <script type="application/ld+json">${storeSchemaStr}</script>
  ${prodSchemaStr}
  <script type="application/ld+json">${faqSchemaStr}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=${d.hf.replace(/ /g, "+")}:wght@700;900&family=${d.bf.replace(/ /g, "+")}:wght@400;500;600&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: ${d.bg}; --surface: ${d.surface}; --card: ${d.card};
      --border: ${d.border}; --text: ${d.text}; --muted: ${d.muted};
      --accent: ${d.accent}; --am: ${d.am};
    }
    body { background: var(--bg); color: var(--text); font-family: '${d.bf}', sans-serif; line-height: 1.6; }
    .hf { font-family: '${d.hf}', serif; }
    nav { background: var(--surface); border-bottom: 1px solid var(--border); padding: 0 40px; height: 64px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
    .nav-logo { font-family: '${d.hf}', serif; font-size: 22px; font-weight: 900; color: var(--accent); text-decoration: none; }
    .nav-links { display: flex; gap: 28px; list-style: none; }
    .nav-links a { color: var(--muted); text-decoration: none; font-size: 14px; transition: color 0.2s; }
    .nav-links a:hover { color: var(--text); }
    .btn-primary { background: var(--accent); color: ${d.dark ? "#000" : "#fff"}; border: none; border-radius: 12px; padding: 14px 28px; font-weight: 700; font-size: 15px; cursor: pointer; text-decoration: none; display: inline-block; transition: opacity 0.2s; }
    .btn-primary:hover { opacity: 0.85; }
    .btn-secondary { background: transparent; color: var(--text); border: 1px solid var(--border); border-radius: 12px; padding: 14px 28px; font-weight: 600; font-size: 15px; cursor: pointer; text-decoration: none; display: inline-block; transition: opacity 0.2s; }
    .btn-secondary:hover { opacity: 0.85; }
    .hero { padding: 90px 48px 76px; background: linear-gradient(150deg, var(--surface) 0%, var(--bg) 65%); border-bottom: 1px solid var(--border); }
    .hero-inner { max-width: 660px; }
    .hero-tag { display: inline-block; background: var(--am); border: 1px solid ${d.accent}33; border-radius: 20px; padding: 5px 16px; font-size: 11px; color: var(--accent); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; }
    .hero h1 { font-family: '${d.hf}', serif; font-size: clamp(32px,5vw,62px); font-weight: 900; line-height: 1.06; margin-bottom: 20px; letter-spacing: -0.5px; }
    .hero p { font-size: 17px; color: var(--muted); line-height: 1.75; margin-bottom: 36px; max-width: 500px; }
    .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
    .trust-strip { background: var(--surface); border-bottom: 1px solid var(--border); padding: 20px 40px; display: flex; justify-content: center; gap: clamp(14px,4vw,52px); flex-wrap: wrap; }
    .trust-strip span { font-size: 13px; font-weight: 600; color: var(--muted); }
    .section { padding: 76px 40px; max-width: 1160px; margin: 0 auto; }
    .section-alt { padding: 76px 40px; background: var(--surface); border-top: 1px solid var(--border); }
    .section-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 42px; }
    .section-header h2 { font-family: '${d.hf}', serif; font-size: 34px; font-weight: 800; }
    .section-header a { color: var(--accent); font-size: 14px; font-weight: 600; text-decoration: none; }
    .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }
    .product-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; }
    .product-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.22); }
    .product-img { height: 180px; background: linear-gradient(135deg, var(--surface), var(--bg)); display: flex; align-items: center; justify-content: center; font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 2px; position: relative; }
    .product-badge { position: absolute; top: 12px; right: 12px; background: var(--accent); color: ${d.dark ? "#000" : "#fff"}; font-size: 10px; font-weight: 800; border-radius: 6px; padding: 3px 10px; }
    .product-body { padding: 18px 20px 22px; }
    .product-name { font-size: 15px; font-weight: 700; margin-bottom: 6px; line-height: 1.3; }
    .product-desc { font-size: 13px; color: var(--muted); margin-bottom: 16px; line-height: 1.6; }
    .product-footer { display: flex; align-items: center; justify-content: space-between; }
    .product-price { font-family: '${d.hf}', serif; font-size: 22px; font-weight: 900; color: var(--accent); }
    .about-inner { max-width: 640px; margin: 0 auto; text-align: center; }
    .about-eyebrow { font-size: 10px; letter-spacing: 4px; color: var(--accent); text-transform: uppercase; margin-bottom: 14px; }
    .about-inner h2 { font-family: '${d.hf}', serif; font-size: 36px; font-weight: 800; margin-bottom: 20px; }
    .about-inner p { font-size: 17px; color: var(--muted); line-height: 1.8; margin-bottom: 34px; }
    .values { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .value-pill { background: var(--am); border: 1px solid ${d.accent}33; border-radius: 10px; padding: 9px 18px; font-size: 13px; color: var(--accent); font-weight: 600; }
    .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }
    .testimonial-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 26px; }
    .stars { color: var(--accent); font-size: 17px; margin-bottom: 14px; }
    .testimonial-text { font-size: 15px; line-height: 1.75; font-style: italic; margin-bottom: 18px; }
    .testimonial-name { font-size: 13px; font-weight: 700; }
    .testimonial-loc { color: var(--muted); font-weight: 400; }
    .faq-inner { max-width: 680px; margin: 0 auto; }
    .faq-inner h2 { font-family: '${d.hf}', serif; font-size: 34px; font-weight: 800; text-align: center; margin-bottom: 42px; }
    .faq-item { border-bottom: 1px solid var(--border); padding: 22px 0; }
    .faq-q { font-size: 16px; font-weight: 700; margin-bottom: 10px; }
    .faq-a { font-size: 15px; color: var(--muted); line-height: 1.7; }
    footer { background: var(--surface); border-top: 1px solid var(--border); padding: 48px 40px 28px; }
    .footer-inner { max-width: 1100px; margin: 0 auto; }
    .footer-top { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 32px; margin-bottom: 40px; }
    .footer-brand-name { font-family: '${d.hf}', serif; font-size: 24px; font-weight: 900; color: var(--accent); margin-bottom: 12px; }
    .footer-brand-desc { font-size: 14px; color: var(--muted); line-height: 1.7; max-width: 260px; }
    .footer-links { display: flex; gap: 48px; flex-wrap: wrap; }
    .footer-col-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 14px; }
    .footer-col a { display: block; font-size: 14px; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color 0.2s; }
    .footer-col a:hover { color: var(--text); }
    .footer-bottom { border-top: 1px solid var(--border); padding-top: 20px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .footer-copy { font-size: 13px; color: var(--muted); }
    .footer-legal { display: flex; gap: 20px; }
    .footer-legal a { font-size: 13px; color: var(--muted); text-decoration: none; }
    @media (max-width: 768px) {
      .hero { padding: 60px 24px 48px; }
      .section { padding: 56px 24px; }
      .section-alt { padding: 56px 24px; }
      nav { padding: 0 20px; }
      .nav-links { display: none; }
      .trust-strip { padding: 16px 20px; gap: 16px; }
      .footer-inner { padding: 0 4px; }
    }
  </style>
</head>
<body>

<nav>
  <a class="nav-logo" href="/">${form.brandName}</a>
  <ul class="nav-links">
    <li><a href="#products">Shop</a></li>
    ${form.pages.about ? '<li><a href="#about">About</a></li>' : ""}
    ${form.pages.faq ? '<li><a href="#faq">FAQ</a></li>' : ""}
    ${form.pages.contact ? '<li><a href="#contact">Contact</a></li>' : ""}
  </ul>
</nav>

<section class="hero">
  <div class="hero-inner">
    <div class="hero-tag">${form.category || "Premium Products"}</div>
    <h1 class="hf">${site.hero.headline}</h1>
    <p>${site.hero.sub}</p>
    <div class="hero-btns">
      <a href="#products" class="btn-primary">${site.hero.cta1}</a>
      ${form.pages.about ? `<a href="#about" class="btn-secondary">${site.hero.cta2}</a>` : ""}
    </div>
  </div>
</section>

<div class="trust-strip">
  ${site.trust.map(t => `<span>✦ ${t}</span>`).join("\n  ")}
</div>

<section class="section" id="products">
  <div class="section-header">
    <h2 class="hf">Featured Products</h2>
    <a href="#">View All →</a>
  </div>
  <div class="products-grid">
    ${site.products.map(p => `
    <div class="product-card">
      <div class="product-img">
        ${form.category || "Product"}
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="product-price hf">$${parseFloat(p.price || 0).toFixed(2)}</span>
          <button class="btn-primary" style="padding:10px 16px;font-size:13px;border-radius:10px;">Add to Cart</button>
        </div>
      </div>
    </div>`).join("\n")}
  </div>
</section>

${form.pages.about ? `
<section class="section-alt" id="about">
  <div class="about-inner">
    <div class="about-eyebrow">Our Story</div>
    <h2 class="hf">${site.about.headline}</h2>
    <p>${site.about.story}</p>
    <div class="values">
      ${site.about.values.map(v => `<div class="value-pill">✦ ${v}</div>`).join("\n      ")}
    </div>
  </div>
</section>` : ""}

${form.pages.testimonials ? `
<section class="section" id="testimonials">
  <div style="max-width:1100px;margin:0 auto;">
    <h2 class="hf" style="font-size:34px;font-weight:800;text-align:center;margin-bottom:42px;">What Customers Say</h2>
    <div class="testimonials-grid">
      ${site.testimonials.map(t => `
      <div class="testimonial-card">
        <div class="stars">${"★".repeat(t.stars)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-name">${t.name} <span class="testimonial-loc">— ${t.loc}</span></div>
      </div>`).join("\n")}
    </div>
  </div>
</section>` : ""}

${form.pages.faq ? `
<section class="section-alt" id="faq">
  <div class="faq-inner">
    <h2 class="hf">Frequently Asked</h2>
    ${site.faq.map(f => `
    <div class="faq-item">
      <div class="faq-q">${f.q}</div>
      <div class="faq-a">${f.a}</div>
    </div>`).join("\n")}
  </div>
</section>` : ""}

<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <div class="footer-brand-name">${form.brandName}</div>
        <p class="footer-brand-desc">${form.mission || site.hero.sub}</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <div class="footer-col-title">Shop</div>
          <a href="#">All Products</a>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Company</div>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Press</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Support</div>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#">Returns</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} ${form.brandName}. All rights reserved.</span>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
</footer>

</body>
</html>`;

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    a.download = `${form.brandName.replace(/\s+/g, "-")}-website.html`;
    a.click();
  };

  const exportReport = () => {
    if (!site) return;
    const s = site.seo;
    const storeSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "Store", "name": form.brandName, "description": s.meta, "address": { "@type": "PostalAddress", "addressLocality": form.city, "addressRegion": form.state, "addressCountry": "US" } }, null, 2);
    const prodSchemas = site.products.map(p => JSON.stringify({ "@context": "https://schema.org", "@type": "Product", "name": p.name, "description": p.desc, "offers": { "@type": "Offer", "price": p.price, "priceCurrency": "USD", "availability": "https://schema.org/InStock" } }, null, 2)).join("\n\n");
    const faqSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": site.faq.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }, null, 2);
    const txt = [
      `SEO REPORT — ${form.brandName}`,
      `Generated: ${new Date().toLocaleDateString()}`,
      "=".repeat(60),
      `\nBRAND: ${form.brandName}`,
      `LOCATION: ${form.city}${form.state ? ", " + form.state : ""}`,
      "\n━━━ META TAGS",
      `Page Title (${s.titleLen} chars — ideal 50-60):\n${s.title}`,
      `\nMeta Description (${s.metaLen} chars — ideal 150-160):\n${s.meta}`,
      `\nTarget Keywords:\n${s.keywords}`,
      "\n━━━ ON-PAGE SEO",
      `H1 Tag: ${s.h1}`,
      "\n━━━ OPEN GRAPH (Social Sharing)",
      `OG Title: ${s.ogTitle}`,
      `OG Description: ${s.ogDesc}`,
      "\n━━━ STORE SCHEMA MARKUP (paste into <head>)",
      storeSchema,
      "\n━━━ PRODUCT SCHEMAS",
      prodSchemas,
      "\n━━━ FAQ SCHEMA",
      faqSchema,
      "\n━━━ BLOG CONTENT STRATEGY",
      ...s.blog.map((t, i) => `${i + 1}. ${t}`),
      "\n━━━ ROBOTS.TXT",
      `User-agent: *\nAllow: /\nSitemap: https://www.${form.brandName.toLowerCase().replace(/\s+/g, "")}.com/sitemap.xml`,
      "\n━━━ PRE-LAUNCH CHECKLIST",
      "[ ] Add meta title + description to Shopify theme settings",
      "[ ] Verify domain in Google Search Console",
      "[ ] Submit sitemap to Google Search Console",
      "[ ] Set up Google Analytics 4",
      "[ ] Paste schema markup into theme.liquid <head>",
      "[ ] Optimize all product images (under 200kb, descriptive filenames)",
      "[ ] Set up Google Business Profile",
      "[ ] Test site on mobile before launch",
      "[ ] Run Google PageSpeed Insights",
      "[ ] Connect all social accounts",
      `\nEND OF REPORT — ${form.brandName}`,
    ].join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([txt], { type: "text/plain" }));
    a.download = `${form.brandName.replace(/\s+/g, "-")}-SEO-Report.txt`;
    a.click();
  };


  const exportHTML = () => {
    if (!site) return;
    const d = DS[form.style];
    const s = site.seo;
    const bc = d.dark ? "#000" : "#fff";
    const slug = form.brandName.toLowerCase().replace(/\s+/g, "");
    const storeSchemaStr = JSON.stringify({"@context":"https://schema.org","@type":"Store","name":form.brandName,"description":s.meta,"address":{"@type":"PostalAddress","addressLocality":form.city,"addressRegion":form.state,"addressCountry":"US"}});
    const faqSchemaStr = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":site.faq.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});
    const prodSchemaBlocks = site.products.map(p => `<${"script"} type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Product","name":p.name,"description":p.desc,"offers":{"@type":"Offer","price":p.price,"priceCurrency":"USD","availability":"https://schema.org/InStock"}})}</${"script"}>`).join("\n");
    const prodCards = site.products.map(p => `<div class="pc"><div class="pi">${form.category||"Product"}${p.badge ? `<span class="pb-badge">${p.badge}</span>` : ""}</div><div class="pb"><div class="pn">${p.name}</div><p class="pd">${p.desc}</p><div class="pf"><span class="pp hf">$${parseFloat(p.price||0).toFixed(2)}</span><a href="#shop" class="btn-p" style="padding:10px 16px;font-size:13px;border-radius:10px;">Add to Cart</a></div></div></div>`).join("");
    const testiCards = site.testimonials.map(t => `<div class="tc"><div class="stars">${"★".repeat(t.stars)}</div><p class="tt">"${t.text}"</p><div class="tn">${t.name} <span class="tl">— ${t.loc}</span></div></div>`).join("");
    const faqItems = site.faq.map(f => `<div class="fi"><div class="fq">${f.q}</div><div class="fa">${f.a}</div></div>`).join("");
    const valTags = site.about.values.map(v => `<div class="vtag">✦ ${v}</div>`).join("");
    const trustItems = site.trust.map(t => `<span>✦ ${t}</span>`).join("");
    const css = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{background:${d.bg};color:${d.text};font-family:'${d.bf}',system-ui,sans-serif}a{color:${d.accent};text-decoration:none}.hf{font-family:'${d.hf}',serif}nav{background:${d.surface};border-bottom:1px solid ${d.border};padding:0 40px;height:64px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}.nav-brand{font-family:'${d.hf}',serif;font-size:22px;font-weight:900;color:${d.accent}}.nav-links{display:flex;gap:28px;font-size:14px;list-style:none}.nav-links a{color:${d.muted};transition:color .2s}.nav-links a:hover{color:${d.accent}}.btn-p{background:${d.accent};color:${bc};border:none;border-radius:12px;padding:14px 28px;font-weight:700;font-size:15px;cursor:pointer;font-family:inherit;transition:opacity .2s;display:inline-block}.btn-p:hover{opacity:.85}.btn-s{background:transparent;color:${d.text};border:1px solid ${d.border};border-radius:12px;padding:14px 28px;font-weight:600;font-size:15px;display:inline-block}.hero{padding:90px 48px 76px;background:linear-gradient(150deg,${d.surface} 0%,${d.bg} 65%);border-bottom:1px solid ${d.border}}.hero-badge{display:inline-block;background:${d.am};border:1px solid ${d.accent}33;border-radius:20px;padding:5px 16px;font-size:11px;color:${d.accent};font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:20px}.hero h1{font-size:clamp(32px,5vw,62px);font-weight:900;line-height:1.06;margin-bottom:20px}.hero p{font-size:17px;color:${d.muted};line-height:1.75;margin-bottom:36px;max-width:500px}.hero-btns{display:flex;gap:12px;flex-wrap:wrap}.trust{background:${d.surface};border-bottom:1px solid ${d.border};padding:20px 40px;display:flex;justify-content:center;gap:48px;flex-wrap:wrap}.trust span{font-size:13px;font-weight:600;color:${d.muted}}.products{padding:76px 40px;max-width:1160px;margin:0 auto}.sec-hdr{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:42px}.sec-hdr h2{font-size:34px;font-weight:800}.pg{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px}.pc{background:${d.card};border:1px solid ${d.border};border-radius:16px;overflow:hidden;transition:transform .2s,box-shadow .2s}.pc:hover{transform:translateY(-5px);box-shadow:0 20px 50px rgba(0,0,0,.22)}.pi{height:180px;background:linear-gradient(135deg,${d.surface},${d.bg});display:flex;align-items:center;justify-content:center;font-size:12px;color:${d.muted};text-transform:uppercase;letter-spacing:2px;position:relative}.pb-badge{position:absolute;top:12px;right:12px;background:${d.accent};color:${bc};font-size:10px;font-weight:800;border-radius:6px;padding:3px 10px}.pb{padding:18px 20px 22px}.pn{font-size:15px;font-weight:700;margin-bottom:6px;line-height:1.3}.pd{font-size:13px;color:${d.muted};margin-bottom:16px;line-height:1.6}.pf{display:flex;align-items:center;justify-content:space-between}.pp{font-size:22px;font-weight:900;color:${d.accent}}.about{padding:76px 40px;background:${d.surface};border-top:1px solid ${d.border}}.about-in{max-width:640px;margin:0 auto;text-align:center}.sec-lbl{font-size:10px;letter-spacing:4px;color:${d.accent};text-transform:uppercase;margin-bottom:14px}.about h2{font-size:36px;font-weight:800;margin-bottom:20px}.about p{font-size:17px;color:${d.muted};line-height:1.8;margin-bottom:34px}.values{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}.vtag{background:${d.am};border:1px solid ${d.accent}33;border-radius:10px;padding:9px 18px;font-size:13px;color:${d.accent};font-weight:600}.testi{padding:76px 40px;max-width:1100px;margin:0 auto}.testi h2{font-size:34px;font-weight:800;text-align:center;margin-bottom:42px}.tg{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px}.tc{background:${d.card};border:1px solid ${d.border};border-radius:16px;padding:26px}.stars{color:${d.accent};font-size:17px;margin-bottom:14px}.tt{font-size:15px;line-height:1.75;font-style:italic;margin-bottom:18px}.tn{font-size:13px;font-weight:700}.tl{color:${d.muted};font-weight:400}.faq{padding:76px 40px;background:${d.surface};border-top:1px solid ${d.border}}.faq-in{max-width:680px;margin:0 auto}.faq h2{font-size:34px;font-weight:800;text-align:center;margin-bottom:42px}.fi{border-bottom:1px solid ${d.border};padding:22px 0}.fq{font-size:16px;font-weight:700;margin-bottom:10px}.fa{font-size:15px;color:${d.muted};line-height:1.7}footer{background:${d.surface};border-top:1px solid ${d.border};padding:48px 40px 28px}.ft-in{max-width:1100px;margin:0 auto}.ft-top{display:flex;justify-content:space-between;flex-wrap:wrap;gap:32px;margin-bottom:40px}.ft-brand{font-size:24px;font-weight:900;color:${d.accent};margin-bottom:12px}.ft-desc{font-size:14px;color:${d.muted};line-height:1.7;max-width:260px}.ft-links{display:flex;gap:48px;flex-wrap:wrap}.ft-ct{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:14px}.ft-col a{display:block;font-size:14px;color:${d.muted};margin-bottom:10px}.ft-bot{border-top:1px solid ${d.border};padding-top:20px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:13px;color:${d.muted}}.ft-bot a{color:${d.muted}}@media(max-width:768px){nav{padding:0 20px}.nav-links{display:none}.hero{padding:60px 24px 50px}.trust{gap:20px;padding:16px 20px}.products,.about,.testi,.faq{padding:50px 20px}footer{padding:40px 20px 24px}.ft-top{flex-direction:column}.ft-links{gap:28px}}`;
    const html = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8"/>\n<meta name="viewport" content="width=device-width,initial-scale=1.0"/>\n<title>${s.title}</title>\n<meta name="description" content="${s.meta}"/>\n<meta name="keywords" content="${s.keywords}"/>\n<meta property="og:title" content="${s.ogTitle}"/>\n<meta property="og:description" content="${s.ogDesc}"/>\n<meta property="og:type" content="website"/>\n<meta name="robots" content="index,follow"/>\n<link rel="canonical" href="https://www.${slug}.com/"/>\n<link rel="preconnect" href="https://fonts.googleapis.com"/>\n<link href="https://fonts.googleapis.com/css2?family=${d.hf.replace(/ /g,"+")}:wght@700;900&family=${d.bf.replace(/ /g,"+")}:wght@400;500;600&display=swap" rel="stylesheet"/>\n<${"script"} type="application/ld+json">${storeSchemaStr}</${"script"}>\n${prodSchemaBlocks}\n<${"script"} type="application/ld+json">${faqSchemaStr}</${"script"}>\n<style>\n${css}\n</style>\n</head>\n<body>\n<nav>\n  <div class="nav-brand hf">${form.brandName}</div>\n  <ul class="nav-links">\n    <li><a href="#shop">Shop</a></li>\n    ${form.pages.about ? "<li><a href=\"#about\">About</a></li>" : ""}\n    ${form.pages.faq ? "<li><a href=\"#faq\">FAQ</a></li>" : ""}\n    ${form.pages.contact ? "<li><a href=\"#contact\">Contact</a></li>" : ""}\n  </ul>\n</nav>\n<section class="hero">\n  <div style="max-width:660px">\n    <div class="hero-badge">${form.category || "Premium Products"}</div>\n    <h1 class="hf">${site.hero.headline}</h1>\n    <p>${site.hero.sub}</p>\n    <div class="hero-btns">\n      <a href="#shop" class="btn-p">${site.hero.cta1}</a>\n      ${form.pages.about ? `<a href="#about" class="btn-s">${site.hero.cta2}</a>` : ""}\n    </div>\n  </div>\n</section>\n<div class="trust">${trustItems}</div>\n<section class="products" id="shop">\n  <div class="sec-hdr"><h2 class="hf">Featured Products</h2><a href="#shop" style="color:${d.accent};font-size:14px;font-weight:600;">View All →</a></div>\n  <div class="pg">${prodCards}</div>\n</section>\n${form.pages.about ? `<section class="about" id="about"><div class="about-in"><div class="sec-lbl">Our Story</div><h2 class="hf">${site.about.headline}</h2><p>${site.about.story}</p><div class="values">${valTags}</div></div></section>` : ""}\n${form.pages.testimonials ? `<section class="testi"><h2 class="hf">What Customers Say</h2><div class="tg">${testiCards}</div></section>` : ""}\n${form.pages.faq ? `<section class="faq" id="faq"><div class="faq-in"><h2 class="hf">Frequently Asked</h2>${faqItems}</div></section>` : ""}\n<footer id="contact">\n  <div class="ft-in">\n    <div class="ft-top">\n      <div><div class="ft-brand hf">${form.brandName}</div><p class="ft-desc">${form.mission || site.hero.sub}</p></div>\n      <div class="ft-links">\n        <div class="ft-col"><div class="ft-ct">Shop</div><a href="#shop">All Products</a><a href="#shop">New Arrivals</a><a href="#shop">Best Sellers</a></div>\n        <div class="ft-col"><div class="ft-ct">Company</div>${form.pages.about ? "<a href=\"#about\">About Us</a>" : ""}<a href="#">Blog</a><a href="#">Press</a></div>\n        <div class="ft-col"><div class="ft-ct">Support</div>${form.pages.faq ? "<a href=\"#faq\">FAQ</a>" : ""}<a href="#contact">Contact</a><a href="#">Returns</a></div>\n      </div>\n    </div>\n    <div class="ft-bot"><span>© ${new Date().getFullYear()} ${form.brandName}. All rights reserved.</span><div style="display:flex;gap:20px"><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="#">Sitemap</a></div></div>\n  </div>\n</footer>\n</body>\n</html>`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    a.download = `${form.brandName.replace(/\s+/g, "-")}-Website.html`;
    a.click();
  };

  // shared input style
  const IS = { width: "100%", background: "#0e0e14", border: "1px solid #2a2a3a", borderRadius: 10, padding: "12px 14px", color: "#f0f0f8", fontSize: 15, outline: "none", fontFamily: "inherit", resize: "vertical", boxSizing: "border-box", transition: "border 0.2s" };

  // ── INTAKE ────────────────────────────────────────────────────────────────────
  if (phase === "intake") return (
    <div style={{ minHeight: "100vh", background: "#080810", fontFamily: "'Segoe UI',system-ui", display: "flex", flexDirection: "column" }}>
      <style>{`*{box-sizing:border-box} input:focus,textarea:focus,select:focus{border-color:#6c63ff!important;outline:none} textarea{font-family:inherit} button{cursor:pointer}`}</style>

      {/* Header */}
      <div style={{ padding: "16px 28px", borderBottom: "1px solid #1a1a28", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 4, color: "#6c63ff", textTransform: "uppercase" }}>SiteForge Pro</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: "#f0f0f8" }}>Ecommerce Generator</div>
        </div>
        <div style={{ fontSize: 12, color: "#3a3a5a" }}>Step {step + 1} of {STEPS.length}</div>
      </div>

      {/* Progress */}
      <div style={{ height: 3, background: "#1a1a28" }}>
        <div style={{ height: "100%", width: `${(step / (STEPS.length - 1)) * 100}%`, background: "linear-gradient(90deg,#6c63ff,#a78bfa)", transition: "width 0.4s" }} />
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        <div style={{ width: "100%", maxWidth: 560 }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#6c63ff", textTransform: "uppercase", marginBottom: 6 }}>{STEPS[step].sub}</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#f0f0f8", margin: 0 }}>{STEPS[step].title}</h2>
          </div>

          {err && <div style={{ background: "#1a0808", border: "1px solid #4a1010", borderRadius: 10, padding: "12px 16px", color: "#f87171", fontSize: 13, marginBottom: 18 }}>{err}</div>}

          {/* Step 0 — Brand */}
          {step === 0 && <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Field label="Brand Name *" val={form.brandName} set={v => upd("brandName", v)} ph="e.g. Apex, Nova, Bloom" IS={IS} />
            <Field label="Tagline" val={form.tagline} set={v => upd("tagline", v)} ph="e.g. Built for the bold" IS={IS} />
            <Field label="Brand Mission" val={form.mission} set={v => upd("mission", v)} ph="What do you stand for and why does your brand exist?" IS={IS} multi />
            <Field label="What makes you different from competitors?" val={form.differentiator} set={v => upd("differentiator", v)} ph="e.g. We source directly from farms, cutting out the middleman" IS={IS} multi />
            <div>
              <div style={{ fontSize: 11, color: "#9090a8", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Brand Personality (pick up to 3)</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TRAITS.map(t => (
                  <button key={t} onClick={() => toggleTrait(t)} style={{ background: form.personality.includes(t) ? "#6c63ff" : "#16161f", color: form.personality.includes(t) ? "#fff" : "#9090a8", border: `1px solid ${form.personality.includes(t) ? "#6c63ff" : "#2a2a3a"}`, borderRadius: 20, padding: "7px 14px", fontSize: 13 }}>{t}</button>
                ))}
              </div>
            </div>
          </div>}

          {/* Step 1 — Products */}
          {step === 1 && <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Field label="Product Category *" val={form.category} set={v => upd("category", v)} ph="e.g. Fitness Equipment, Skincare, Coffee, Apparel" IS={IS} />
            <div>
              <div style={{ fontSize: 11, color: "#9090a8", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Products (up to 6)</div>
              {form.products.map((p, i) => (
                <div key={i} style={{ background: "#16161f", border: "1px solid #2a2a3a", borderRadius: 12, padding: 16, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 11, color: "#6c63ff", fontWeight: 700, letterSpacing: 1 }}>PRODUCT {i + 1}</span>
                    {form.products.length > 1 && <button onClick={() => upd("products", form.products.filter((_, j) => j !== i))} style={{ background: "none", border: "none", color: "#f87171", fontSize: 12, padding: 0 }}>Remove</button>}
                  </div>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <input value={p.name} onChange={e => updProd(i, "name", e.target.value)} placeholder="Product name" style={{ ...IS, padding: "10px 12px", fontSize: 14 }} />
                    <input value={p.price} onChange={e => updProd(i, "price", e.target.value)} placeholder="$0.00" style={{ ...IS, width: 80, flexShrink: 0, padding: "10px 12px", fontSize: 14 }} />
                  </div>
                  <textarea value={p.desc} onChange={e => updProd(i, "desc", e.target.value)} placeholder="Key features and benefits..." rows={2} style={IS} />
                </div>
              ))}
              {form.products.length < 6 && (
                <button onClick={() => upd("products", [...form.products, { name: "", price: "", desc: "" }])} style={{ width: "100%", background: "transparent", border: "1px dashed #2a2a3a", borderRadius: 10, padding: 13, color: "#6c63ff", fontSize: 14 }}>+ Add Product</button>
              )}
            </div>
          </div>}

          {/* Step 2 — Audience */}
          {step === 2 && <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Field label="Target Age Range" val={form.age} set={v => upd("age", v)} ph="e.g. 25-45 year olds" IS={IS} />
            <Field label="Who is your ideal customer?" val={form.lifestyle} set={v => upd("lifestyle", v)} ph="e.g. Active professionals who prioritize health but have limited time" IS={IS} multi />
            <Field label="What problem do you solve for them?" val={form.painPoints} set={v => upd("painPoints", v)} ph="e.g. Finding quality gear that doesn't break after a month" IS={IS} multi />
          </div>}

          {/* Step 3 — SEO */}
          {step === 3 && <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1 }}><Field label="Primary City" val={form.city} set={v => upd("city", v)} ph="Salt Lake City" IS={IS} /></div>
              <div style={{ width: 72 }}><Field label="State" val={form.state} set={v => upd("state", v)} ph="UT" IS={IS} /></div>
            </div>
            <Field label="Keywords you want to rank for" val={form.keywords} set={v => upd("keywords", v)} ph="e.g. resistance bands, home gym equipment, workout gear" IS={IS} multi />
            <Field label="What would your customer type into Google?" val={form.googleQ} set={v => upd("googleQ", v)} ph="e.g. best resistance bands for home workouts" IS={IS} multi />
            <Field label="Main competitors (optional)" val={form.competitors} set={v => upd("competitors", v)} ph="Helps us position you differently in your market" IS={IS} />
          </div>}

          {/* Step 4 — Design */}
          {step === 4 && (
            <div>
              <div style={{ fontSize: 11, color: "#9090a8", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Choose a Style — {Object.keys(DS).length} options</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {Object.entries(DS).map(([key, d]) => (
                  <button key={key} onClick={() => upd("style", key)} style={{ background: d.bg, border: `2px solid ${form.style === key ? d.accent : d.border}`, borderRadius: 12, padding: "16px 14px", textAlign: "left", transition: "border 0.2s", position: "relative" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: 6, background: d.accent, flexShrink: 0 }} />
                      <div style={{ width: 16, height: 16, borderRadius: 4, background: d.surface, border: `1px solid ${d.border}`, flexShrink: 0 }} />
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: d.text, marginBottom: 3 }}>{d.label}</div>
                    <div style={{ fontSize: 11, color: d.muted, lineHeight: 1.4 }}>{d.desc}</div>
                    <div style={{ fontSize: 10, color: d.muted, marginTop: 6, opacity: 0.7 }}>{d.hf}</div>
                    {form.style === key && (
                      <div style={{ position: "absolute", top: 10, right: 10, background: d.accent, color: d.dark ? "#000" : "#fff", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>✓</div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 — Pages */}
          {step === 5 && <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, color: "#9090a8", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Pages to Include</div>
              {[["about", "About Us"], ["faq", "FAQ"], ["blog", "Blog (placeholder)"], ["contact", "Contact"], ["testimonials", "Testimonials"]].map(([k, label]) => (
                <label key={k} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#16161f", border: "1px solid #2a2a3a", borderRadius: 10, marginBottom: 8 }}>
                  <input type="checkbox" checked={form.pages[k]} onChange={e => upd("pages", { ...form.pages, [k]: e.target.checked })} style={{ width: 16, height: 16, accentColor: "#6c63ff" }} />
                  <span style={{ color: "#f0f0f8", fontSize: 14 }}>{label}</span>
                </label>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#9090a8", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Social Links (optional)</div>
              <Field label="Instagram" val={form.instagram} set={v => upd("instagram", v)} ph="@yourbrand" IS={IS} />
              <div style={{ marginTop: 10 }}><Field label="TikTok" val={form.tiktok} set={v => upd("tiktok", v)} ph="@yourbrand" IS={IS} /></div>
            </div>
          </div>}

          {/* Nav */}
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            {step > 0 && <button onClick={() => setStep(s => s - 1)} style={{ flex: 1, background: "transparent", border: "1px solid #2a2a3a", borderRadius: 10, padding: 14, color: "#9090a8", fontSize: 14 }}>← Back</button>}
            {step < STEPS.length - 1
              ? <button onClick={() => { if (step === 0 && !form.brandName.trim()) { setErr("Brand name is required."); return; } setErr(""); setStep(s => s + 1); }} style={{ flex: 2, background: "#6c63ff", border: "none", borderRadius: 10, padding: 14, color: "#fff", fontSize: 15, fontWeight: 700 }}>Continue →</button>
              : <button onClick={generate} style={{ flex: 2, background: "linear-gradient(135deg,#6c63ff,#a78bfa)", border: "none", borderRadius: 10, padding: 14, color: "#fff", fontSize: 15, fontWeight: 700 }}>⚡ Generate My Site</button>
            }
          </div>
        </div>
      </div>
    </div>
  );

  // ── PREVIEW ───────────────────────────────────────────────────────────────────
  const seo = site.seo;
  const storeSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "Store", "name": form.brandName, "description": seo.meta, "address": { "@type": "PostalAddress", "addressLocality": form.city, "addressRegion": form.state, "addressCountry": "US" } }, null, 2);

  return (
    <div style={{ fontFamily: "'Segoe UI',system-ui" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&family=Outfit:wght@400;500;600&family=Barlow+Condensed:wght@700;900&family=Barlow:wght@400;500;600&family=Cormorant+Garamond:wght@600;700&family=Jost:wght@400;500;600&family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=Raleway:wght@400;500;600&family=Fraunces:ital,wght@0,700;0,900;1,700&family=Source+Sans+3:wght@400;500;600&family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .hf{font-family:'${ds.hf}',serif!important}
        .pc{transition:transform .2s,box-shadow .2s}
        .pc:hover{transform:translateY(-5px);box-shadow:0 20px 50px rgba(0,0,0,.22)}
        .bh:hover{opacity:.85}
        @keyframes fi{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .fi{animation:fi .4s ease forwards}
        button{cursor:pointer}
      `}</style>

      {/* TOOLBAR */}
      <div style={{ background: "#0a0a12", borderBottom: "1px solid #1a1a28", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 999 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {[["preview", "🖥 Site Preview"], ["seo", "📊 SEO Report"], ["code", "💻 Schema Code"]].map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)} style={{ background: tab === t ? "#6c63ff" : "transparent", border: tab === t ? "none" : "1px solid #2a2a3a", borderRadius: 8, padding: "7px 14px", color: tab === t ? "#fff" : "#9090a8", fontSize: 13, fontWeight: tab === t ? 700 : 400 }}>{label}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={exportHTML} style={{ background: "linear-gradient(135deg,#6c63ff,#a78bfa)", border: "none", borderRadius: 8, padding: "7px 16px", color: "#fff", fontSize: 13, fontWeight: 700 }}>⬇ Download Site</button>
          <button onClick={exportReport} style={{ background: "#0a2018", border: "1px solid #1a4a2a", borderRadius: 8, padding: "7px 14px", color: "#4ade80", fontSize: 13, fontWeight: 600 }}>↓ Export SEO Report</button>
          <button onClick={() => { setPhase("intake"); setStep(0); setSite(null); setCart([]); }} style={{ background: "transparent", border: "1px solid #2a2a3a", borderRadius: 8, padding: "7px 14px", color: "#9090a8", fontSize: 13 }}>← New Client</button>
        </div>
      </div>

      {/* ── SEO TAB ── */}
      {tab === "seo" && (
        <div style={{ background: "#080810", minHeight: "100vh", padding: "40px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ color: "#f0f0f8", fontSize: 22, fontWeight: 800, marginBottom: 6 }}>SEO Package — {form.brandName}</h2>
            <p style={{ color: "#5a5a7a", fontSize: 14, marginBottom: 32 }}>Review before client handoff. Hit Export above to download the full report.</p>
            {[
              { label: "Page Title Tag", value: seo.title, chars: seo.titleLen, ideal: [50, 60] },
              { label: "Meta Description", value: seo.meta, chars: seo.metaLen, ideal: [140, 165] },
              { label: "Primary H1 Tag", value: seo.h1 },
              { label: "Target Keywords", value: seo.keywords },
              { label: "Open Graph Title", value: seo.ogTitle },
              { label: "Open Graph Description", value: seo.ogDesc },
            ].map(item => (
              <div key={item.label} style={{ background: "#13131a", border: "1px solid #1e1e2e", borderRadius: 12, padding: "16px 20px", marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 10, color: "#6c63ff", textTransform: "uppercase", letterSpacing: 2, fontWeight: 700 }}>{item.label}</span>
                  {item.chars && <span style={{ fontSize: 11, color: item.chars >= item.ideal[0] && item.chars <= item.ideal[1] ? "#4ade80" : "#f59e0b", fontWeight: 600 }}>{item.chars} chars — {item.chars >= item.ideal[0] && item.chars <= item.ideal[1] ? "✓ Good" : "⚠ Adjust"}</span>}
                </div>
                <p style={{ color: "#e0e0f0", fontSize: 14, lineHeight: 1.65 }}>{item.value}</p>
              </div>
            ))}
            <div style={{ background: "#13131a", border: "1px solid #1e1e2e", borderRadius: 12, padding: "16px 20px" }}>
              <div style={{ fontSize: 10, color: "#6c63ff", textTransform: "uppercase", letterSpacing: 2, fontWeight: 700, marginBottom: 14 }}>Blog Content Strategy (Long-tail SEO)</div>
              {seo.blog.map((t, i) => (
                <div key={i} style={{ padding: "10px 0", borderBottom: i < seo.blog.length - 1 ? "1px solid #1e1e2e" : "none", color: "#e0e0f0", fontSize: 14 }}>{i + 1}. {t}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── CODE TAB ── */}
      {tab === "code" && (
        <div style={{ background: "#080810", minHeight: "100vh", padding: "40px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ color: "#f0f0f8", fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Schema Markup</h2>
            <p style={{ color: "#5a5a7a", fontSize: 14, marginBottom: 28 }}>Paste these into the {"<head>"} of every page. Tells Google exactly what your site is and improves how it shows in search results.</p>
            <div style={{ fontSize: 12, color: "#6c63ff", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Store Schema</div>
            <pre style={{ background: "#0e0e14", border: "1px solid #1e1e2e", borderRadius: 12, padding: 20, color: "#a78bfa", fontSize: 12, overflowX: "auto", lineHeight: 1.8, whiteSpace: "pre-wrap", marginBottom: 20 }}>{`<script type="application/ld+json">\n${storeSchema}\n</script>`}</pre>
            {site.products.map((p, i) => (
              <div key={i}>
                <div style={{ fontSize: 12, color: "#6c63ff", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Product Schema — {p.name}</div>
                <pre style={{ background: "#0e0e14", border: "1px solid #1e1e2e", borderRadius: 12, padding: 20, color: "#a78bfa", fontSize: 12, overflowX: "auto", lineHeight: 1.8, whiteSpace: "pre-wrap", marginBottom: 16 }}>{`<script type="application/ld+json">\n${JSON.stringify({ "@context": "https://schema.org", "@type": "Product", "name": p.name, "description": p.desc, "offers": { "@type": "Offer", "price": p.price, "priceCurrency": "USD", "availability": "https://schema.org/InStock" } }, null, 2)}\n</script>`}</pre>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── SITE PREVIEW ── */}
      {tab === "preview" && (
        <div style={{ background: ds.bg, color: ds.text, minHeight: "100vh", fontFamily: `'${ds.bf}',sans-serif` }}>

          {/* NAV */}
          <nav style={{ background: ds.surface, borderBottom: `1px solid ${ds.border}`, padding: "0 40px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 44, zIndex: 100 }}>
            <div className="hf" style={{ fontSize: 22, fontWeight: 900, color: ds.accent }}>{form.brandName}</div>
            <div style={{ display: "flex", gap: 28, fontSize: 14, color: ds.muted }}>
              {["Shop", form.pages.about && "About", form.pages.faq && "FAQ", form.pages.contact && "Contact"].filter(Boolean).map(l => (
                <span key={l} className="bh" style={{ cursor: "pointer" }}>{l}</span>
              ))}
            </div>
            <button onClick={() => setCartOpen(!cartOpen)} className="bh" style={{ background: ds.am, border: `1px solid ${ds.accent}44`, borderRadius: 10, padding: "9px 18px", color: ds.accent, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
              🛒 Cart
              {cartCount > 0 && <span style={{ background: ds.accent, color: ds.dark ? "#000" : "#fff", borderRadius: "50%", width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>{cartCount}</span>}
            </button>
          </nav>

          {/* CART DRAWER */}
          {cartOpen && (
            <div className="fi" style={{ position: "fixed", right: 0, top: 106, bottom: 0, width: 310, background: ds.surface, borderLeft: `1px solid ${ds.border}`, zIndex: 200, padding: 26, overflowY: "auto" }}>
              <h3 className="hf" style={{ fontSize: 20, fontWeight: 800, marginBottom: 22 }}>Your Cart</h3>
              {cart.length === 0
                ? <p style={{ color: ds.muted, fontSize: 14 }}>Nothing added yet.</p>
                : <>
                  {cart.map(item => (
                    <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: `1px solid ${ds.border}` }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</div>
                        <div style={{ fontSize: 12, color: ds.muted, marginTop: 2 }}>Qty: {item.qty}</div>
                      </div>
                      <div style={{ fontWeight: 700, color: ds.accent }}>${(parseFloat(item.price || 0) * item.qty).toFixed(2)}</div>
                    </div>
                  ))}
                  <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: 16 }}>
                    <span>Total</span>
                    <span style={{ color: ds.accent }}>${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="bh" style={{ width: "100%", marginTop: 18, background: ds.accent, color: ds.dark ? "#000" : "#fff", border: "none", borderRadius: 12, padding: 14, fontWeight: 700, fontSize: 15 }}>Checkout</button>
                </>}
            </div>
          )}

          {/* HERO */}
          <section style={{ padding: "90px 48px 76px", background: `linear-gradient(150deg,${ds.surface} 0%,${ds.bg} 65%)`, borderBottom: `1px solid ${ds.border}`, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 340, height: 340, borderRadius: "50%", background: ds.accent + "08", pointerEvents: "none" }} />
            <div style={{ maxWidth: 660, position: "relative" }} className="fi">
              <div style={{ display: "inline-block", background: ds.am, border: `1px solid ${ds.accent}33`, borderRadius: 20, padding: "5px 16px", fontSize: 11, color: ds.accent, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
                {form.category || "Premium Products"}
              </div>
              <h1 className="hf" style={{ fontSize: "clamp(32px,5vw,62px)", fontWeight: 900, lineHeight: 1.06, marginBottom: 20, letterSpacing: -0.5 }}>{site.hero.headline}</h1>
              <p style={{ fontSize: 17, color: ds.muted, lineHeight: 1.75, marginBottom: 36, maxWidth: 500 }}>{site.hero.sub}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="bh" style={{ background: ds.accent, color: ds.dark ? "#000" : "#fff", border: "none", borderRadius: 12, padding: "14px 28px", fontWeight: 700, fontSize: 15 }}>{site.hero.cta1}</button>
                <button className="bh" style={{ background: "transparent", color: ds.text, border: `1px solid ${ds.border}`, borderRadius: 12, padding: "14px 28px", fontWeight: 600, fontSize: 15 }}>{site.hero.cta2}</button>
              </div>
            </div>
          </section>

          {/* TRUST STRIP */}
          <section style={{ background: ds.surface, borderBottom: `1px solid ${ds.border}`, padding: "20px 40px" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "clamp(14px,4vw,52px)", flexWrap: "wrap" }}>
              {site.trust.map((t, i) => <span key={i} style={{ fontSize: 13, fontWeight: 600, color: ds.muted }}>✦ {t}</span>)}
            </div>
          </section>

          {/* PRODUCTS */}
          <section style={{ padding: "76px 40px", maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 42 }}>
              <h2 className="hf" style={{ fontSize: 34, fontWeight: 800 }}>Featured Products</h2>
              <span style={{ color: ds.accent, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>View All →</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
              {site.products.map((p, i) => (
                <div key={i} className="pc" style={{ background: ds.card, border: `1px solid ${ds.border}`, borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ height: 180, background: `linear-gradient(135deg,${ds.surface},${ds.bg})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: ds.muted, textTransform: "uppercase", letterSpacing: 2, position: "relative" }}>
                    {form.category || "Product"}
                    {p.badge && <span style={{ position: "absolute", top: 12, right: 12, background: ds.accent, color: ds.dark ? "#000" : "#fff", fontSize: 10, fontWeight: 800, borderRadius: 6, padding: "3px 10px" }}>{p.badge}</span>}
                  </div>
                  <div style={{ padding: "18px 20px 22px" }}>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{p.name}</div>
                    <p style={{ fontSize: 13, color: ds.muted, marginBottom: 16, lineHeight: 1.6 }}>{p.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span className="hf" style={{ fontSize: 22, fontWeight: 900, color: ds.accent }}>${parseFloat(p.price || 0).toFixed(2)}</span>
                      <button onClick={() => addToCart(p)} className="bh" style={{ background: ds.accent, color: ds.dark ? "#000" : "#fff", border: "none", borderRadius: 10, padding: "10px 16px", fontWeight: 700, fontSize: 13 }}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          {form.pages.about && (
            <section style={{ padding: "76px 40px", background: ds.surface, borderTop: `1px solid ${ds.border}` }}>
              <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
                <div style={{ fontSize: 10, letterSpacing: 4, color: ds.accent, textTransform: "uppercase", marginBottom: 14 }}>Our Story</div>
                <h2 className="hf" style={{ fontSize: 36, fontWeight: 800, marginBottom: 20 }}>{site.about.headline}</h2>
                <p style={{ fontSize: 17, color: ds.muted, lineHeight: 1.8, marginBottom: 34 }}>{site.about.story}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                  {site.about.values.map((v, i) => <div key={i} style={{ background: ds.am, border: `1px solid ${ds.accent}33`, borderRadius: 10, padding: "9px 18px", fontSize: 13, color: ds.accent, fontWeight: 600 }}>✦ {v}</div>)}
                </div>
              </div>
            </section>
          )}

          {/* TESTIMONIALS */}
          {form.pages.testimonials && (
            <section style={{ padding: "76px 40px", maxWidth: 1100, margin: "0 auto" }}>
              <h2 className="hf" style={{ fontSize: 34, fontWeight: 800, textAlign: "center", marginBottom: 42 }}>What Customers Say</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
                {site.testimonials.map((t, i) => (
                  <div key={i} style={{ background: ds.card, border: `1px solid ${ds.border}`, borderRadius: 16, padding: 26 }}>
                    <div style={{ color: ds.accent, fontSize: 17, marginBottom: 14 }}>{"★".repeat(t.stars)}</div>
                    <p style={{ fontSize: 15, lineHeight: 1.75, fontStyle: "italic", marginBottom: 18 }}>"{t.text}"</p>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{t.name} <span style={{ color: ds.muted, fontWeight: 400 }}>— {t.loc}</span></div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {form.pages.faq && (
            <section style={{ padding: "76px 40px", background: ds.surface, borderTop: `1px solid ${ds.border}` }}>
              <div style={{ maxWidth: 680, margin: "0 auto" }}>
                <h2 className="hf" style={{ fontSize: 34, fontWeight: 800, textAlign: "center", marginBottom: 42 }}>Frequently Asked</h2>
                {site.faq.map((f, i) => (
                  <div key={i} style={{ borderBottom: `1px solid ${ds.border}`, padding: "22px 0" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{f.q}</div>
                    <div style={{ fontSize: 15, color: ds.muted, lineHeight: 1.7 }}>{f.a}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FOOTER */}
          <footer style={{ background: ds.surface, borderTop: `1px solid ${ds.border}`, padding: "48px 40px 28px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
                <div style={{ maxWidth: 260 }}>
                  <div className="hf" style={{ fontSize: 24, fontWeight: 900, color: ds.accent, marginBottom: 12 }}>{form.brandName}</div>
                  <p style={{ fontSize: 14, color: ds.muted, lineHeight: 1.7 }}>{form.mission || site.hero.sub}</p>
                </div>
                <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                  {[["Shop", ["All Products", "New Arrivals", "Best Sellers"]], ["Company", ["About Us", "Blog", "Press"]], ["Support", ["FAQ", "Contact", "Returns"]]].map(([title, links]) => (
                    <div key={title}>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 14, color: ds.text }}>{title}</div>
                      {links.map(l => <div key={l} style={{ fontSize: 14, color: ds.muted, marginBottom: 10, cursor: "pointer" }}>{l}</div>)}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: `1px solid ${ds.border}`, paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                <span style={{ fontSize: 13, color: ds.muted }}>© {new Date().getFullYear()} {form.brandName}. All rights reserved.</span>
                <div style={{ display: "flex", gap: 20, fontSize: 13, color: ds.muted }}>
                  {["Privacy Policy", "Terms", "Sitemap"].map(l => <span key={l} style={{ cursor: "pointer" }}>{l}</span>)}
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

function Field({ label, val, set, ph, IS, multi }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 11, color: "#9090a8", marginBottom: 7, textTransform: "uppercase", letterSpacing: 1 }}>{label}</label>
      {multi
        ? <textarea value={val} onChange={e => set(e.target.value)} placeholder={ph} rows={3} style={IS} />
        : <input value={val} onChange={e => set(e.target.value)} placeholder={ph} style={IS} />}
    </div>
  );
}
