import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, X, Heart, Palette, Download, Sparkles, Mail, ShoppingBag, Users, Leaf } from 'lucide-react';
import './styles.css';

const products = [
  {
    title: 'Creative Calm Workbook',
    price: '$9',
    description: '30 guided art wellness exercises for stress relief, reflection, and mindful creativity.',
    tag: 'Best starter product'
  },
  {
    title: 'Printable Wellness Bundle',
    price: '$15',
    description: 'Mood trackers, creative journaling pages, coloring sheets, and weekly planning printables.',
    tag: 'Best value'
  },
  {
    title: 'Color Mood Journal',
    price: '$7',
    description: 'A printable journal for tracking emotions through color, symbols, and short reflections.',
    tag: 'Low-cost entry'
  }
];

const posts = [
  '5-Minute Art Practices for Stress Relief',
  'How to Start a Color Mood Journal',
  'Mindful Drawing for Beginners',
  'Creative Self-Care When You Feel Overwhelmed'
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Shop', 'Membership', 'Blog', 'About', 'Contact'];
  return (
    <header className="site-header">
      <a className="logo" href="#home"><span>Calm</span> Canvas</a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'open' : ''}>
        {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Art wellness for real life</p>
        <h1>Creative practices for a calmer mind.</h1>
        <p className="hero-text">Calm Canvas helps beginners use simple drawing, color, journaling, and mindful creativity to reduce stress and build a gentle self-care routine.</p>
        <div className="hero-actions">
          <a className="button primary" href="#lead">Get the free guide</a>
          <a className="button secondary" href="#shop">View digital products</a>
        </div>
      </div>
      <div className="hero-card">
        <Sparkles size={34} />
        <h2>21 Days of Creative Calm</h2>
        <p>A free printable starter guide with daily prompts, reflection questions, and mood check-ins.</p>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const items = [
    ['Mindful drawing', 'Short guided exercises for focus, calm, and self-expression.', Palette],
    ['Printable tools', 'Workbooks, trackers, coloring pages, and journaling templates.', Download],
    ['Gentle support', 'Beginner-friendly prompts that do not require artistic skill.', Heart]
  ];
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Start small</p>
        <h2>Wellness through simple creative rituals</h2>
      </div>
      <div className="grid three">
        {items.map(([title, text, Icon]) => (
          <div className="card" key={title}>
            <Icon className="icon" />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section id="shop" className="section muted">
      <div className="section-heading">
        <p className="eyebrow">Digital shop</p>
        <h2>Products ready to sell</h2>
        <p>Add Gumroad, Payhip, Etsy, or Stripe links to the buttons when you are ready.</p>
      </div>
      <div className="grid three">
        {products.map(product => (
          <div className="card product" key={product.title}>
            <span className="pill">{product.tag}</span>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
            <a className="button primary full" href="#contact">Buy now</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeadMagnet() {
  return (
    <section id="lead" className="section">
      <div className="lead-box">
        <div>
          <p className="eyebrow">Free download</p>
          <h2>Get “21 Days of Creative Calm”</h2>
          <p>Use this section to collect emails and build the audience that eventually buys your workbooks, printables, and membership.</p>
        </div>
        <form className="email-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" aria-label="Email address" />
          <button className="button primary" type="submit"><Mail size={18} /> Send me the guide</button>
        </form>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section id="membership" className="section membership">
      <div className="section-heading">
        <p className="eyebrow">Recurring revenue</p>
        <h2>Calm Canvas Studio Membership</h2>
        <p>A simple $7/month membership concept for weekly prompts, monthly printable packs, and occasional live creative wellness sessions.</p>
      </div>
      <div className="membership-card">
        <div className="price">$7<span>/month</span></div>
        <ul>
          <li>Weekly mindful art prompts</li>
          <li>Monthly printable pack</li>
          <li>Private creative wellness newsletter</li>
          <li>Replay library for workshops</li>
        </ul>
        <a className="button primary" href="#contact">Join the waitlist</a>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="section muted">
      <div className="section-heading">
        <p className="eyebrow">SEO content</p>
        <h2>Blog starter topics</h2>
      </div>
      <div className="grid two">
        {posts.map(post => (
          <article className="card blog-card" key={post}>
            <Leaf className="icon" />
            <h3>{post}</h3>
            <p>Use this as a search-friendly article to attract people interested in art, mindfulness, stress relief, and creative self-care.</p>
            <a href="#contact">Read more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div>
        <p className="eyebrow">Our mission</p>
        <h2>Art does not have to be perfect to be healing.</h2>
      </div>
      <p>Calm Canvas is built for people who want a softer, more creative way to care for themselves. The brand focuses on approachable exercises, printable resources, and encouraging guidance for beginners.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact-card">
        <ShoppingBag />
        <h2>Ready to launch?</h2>
        <p>Replace this contact area with your real email, checkout links, and newsletter platform.</p>
        <a className="button secondary" href="mailto:hello@calmcanvas.com">hello@calmcanvas.com</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <a className="logo" href="#home"><span>Calm</span> Canvas</a>
          <p>Mindful art prompts, printables, and creative self-care resources.</p>
        </div>
        <div>
          <h4>Revenue goals</h4>
          <p>Digital products, membership, workshops, and affiliate links.</p>
        </div>
        <div>
          <h4>Launch checklist</h4>
          <p>Connect email, add checkout links, publish 5 blog posts, and deploy.</p>
        </div>
      </div>
      <p className="copyright">© 2026 Calm Canvas. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <Shop />
        <LeadMagnet />
        <Membership />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
