// src/App.jsx
import React from "react";

// All images live in: /public/images
// Example path in code: "/images/your-file-name.png"
const IMG = {
  // People
  angela: "/images/angela.jpg",
  kendra: "/images/kendra.jpg",
  duo: "/images/angela and kendra.jpg",

  // Brand
  // (this is the logo)
  logo: "/images/beauty-sipz-logo.jpg",
  heroDrink: "/images/hero-drink.png",
  heroSetup: "/images/little-beauty-sipz.png",

  // NEW main hero image (the one you said is called "large")
  large: "/images/large.jpg",

  // Pretty product photos (Gallery)
  fruity: "/images/fruity drinks.jpg",
  spicy: "/images/spicy margaritas.jpg",
  espresso: "/images/espresso martini.jpg",
  gummies: "/images/gummies.jpg",
  butterfly: "/images/butterfly gummies.jpg",
  flowers: "/images/flowers.jpg",

  // Event flyers (Services)
  cigarWeek: "/images/chicago-cigar-week.png",
  womensEvent: "/images/womens-event.png",
  fathersDay: "/images/fathers-day-special.png",
};

// All videos live in: /public/videos
// Example path in code: "/videos/your-file-name.mp4"
const VID = {
  promo1: "/videos/promo-1.mp4",
  promo2: "/videos/promo-2.mp4",
  promo3: "/videos/promo-3.mov",
};

const IG_LINK = "https://www.instagram.com/beautysipzbartending/";
const BOOK_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScRgg02h8WejIpR1HijA0_f4sP5EXJ7OY0jHxzMucNJny83oQ/viewform";

// Sends form submissions to beautysipz@gmail.com without a backend.
// Note: FormSubmit may send a one-time confirmation email to activate.
const FORM_ACTION = "https://formsubmit.co/beautysipz@gmail.com";

function GlowBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#06020b]" />

      {/* Purple glow blobs */}
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-violet-700/40 blur-[110px]" />
      <div className="absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full bg-fuchsia-600/35 blur-[120px]" />
      <div className="absolute left-1/2 top-[35%] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[140px]" />
      <div className="absolute -left-40 bottom-[-220px] h-[600px] w-[600px] rounded-full bg-fuchsia-600/20 blur-[140px]" />
      <div className="absolute -right-40 bottom-[-240px] h-[640px] w-[640px] rounded-full bg-violet-700/25 blur-[150px]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,transparent_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

      {/* Soft butterflies (tiny, subtle) */}
      <div className="absolute left-10 top-24 h-6 w-6 opacity-35 blur-[0.3px]">
        <img
          src={IMG.heroDrink}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="absolute right-12 top-28 h-6 w-6 opacity-30 blur-[0.3px]">
        <img
          src={IMG.heroDrink}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="absolute left-16 bottom-28 h-6 w-6 opacity-30 blur-[0.3px]">
        <img
          src={IMG.heroDrink}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="absolute right-16 bottom-24 h-6 w-6 opacity-35 blur-[0.3px]">
        <img
          src={IMG.heroDrink}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

function SectionShell({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <GlowBackground />

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white">
              <img
                src={IMG.logo}
                alt="Beauty Sipz"
                className="h-9 w-9 object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Beauty Sipz</div>
              <div className="text-xs text-white/60">
                Mobile Bartending Services
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a className="hover:text-white" href="#home">
                Home
              </a>
              <a className="hover:text-white" href="#about">
                About
              </a>
              <a className="hover:text-white" href="#services">
                Services
              </a>
              <a className="hover:text-white" href="#gallery">
                Gallery
              </a>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>

              {/* Book us now goes directly to your Google Form */}
              <a
                href={BOOK_FORM}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:bg-violet-500"
              >
                Book us
              </a>
            </nav>

            {/* Top-right logo */}
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white">
              <img
                src={IMG.logo}
                alt="Beauty Sipz logo"
                className="h-9 w-9 object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* HOME */}
      <SectionShell id="home" className="pt-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm text-white/70">Mobile Bartending Services</p>

            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Beauty Sipz Mobile Bartending
            </h1>

            <p className="mt-4 max-w-xl text-white/80">
              Beauty Sipz is a Black-owned, all-women mobile bartending company
              founded in 2023 with one mission: to bring a luxury bar experience
              with heart directly to you.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Optional: this also goes to Google Form */}
              <a
                href={BOOK_FORM}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:bg-violet-500"
              >
                Book us
              </a>

              <a
                href="tel:3128987836"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Call 312-898-7836
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                View gallery
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4 text-sm text-white/70">
              <a
                href={IG_LINK}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <a href="#contact" className="hover:text-white">
                Get a quote
              </a>
            </div>
          </div>

          <Card className="relative overflow-hidden p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-fuchsia-500/5 to-transparent" />
            <img
              src={IMG.large}
              alt="Luxury mobile bar setup"
              className="relative h-[420px] w-full rounded-2xl object-cover"
            />
          </Card>
        </div>
      </SectionShell>

      {/* ABOUT */}
      <SectionShell id="about" className="mt-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Card className="p-6">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="mt-4 text-white/80">
              We specialize in stylish, professional mobile bartending for
              private events, brand activations, pop-ups, and celebrations.
              Whether you want an elegant full bar or a fun themed setup, we
              make it easy and unforgettable.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Luxury presentation</div>
                <div className="mt-1 text-sm text-white/70">
                  Clean setup, polished details, and a premium feel.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">With heart</div>
                <div className="mt-1 text-sm text-white/70">
                  Friendly service that keeps guests comfortable and happy.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Custom menus</div>
                <div className="mt-1 text-sm text-white/70">
                  Signature cocktails, mocktails, and themed specials.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Easy booking</div>
                <div className="mt-1 text-sm text-white/70">
                  Quick form and fast response so you can lock in your date.
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="overflow-hidden">
              <img
                src={IMG.duo}
                alt="Angela and Kendra"
                className="h-64 w-full object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src={IMG.heroSetup}
                alt="Bar setup"
                className="h-64 w-full object-cover"
              />
            </Card>
          </div>
        </div>
      </SectionShell>

      {/* SERVICES */}
      <SectionShell id="services" className="mt-20">
        <h2 className="text-3xl font-bold">Services</h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Events we serve</h3>
            <ul className="mt-4 grid gap-2 text-sm text-white/80">
              <li>Weddings</li>
              <li>Birthdays</li>
              <li>Bachelorette parties</li>
              <li>Girls nights</li>
              <li>Family gatherings</li>
              <li>Party buses</li>
              <li>Corporate events</li>
              <li>Pop-ups</li>
              <li>Game watch parties</li>
              <li>Community and brand events</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold">Bar experiences</h3>
            <ul className="mt-4 grid gap-2 text-sm text-white/80">
              <li>Full bar setup</li>
              <li>Cash bar setup</li>
              <li>Grab-and-go setup</li>
              <li>Custom bar experience</li>
              <li>Theme-matched styling and decor</li>
              <li>Custom menus and drink names</li>
            </ul>
            <p className="mt-4 text-sm text-white/70">
              Every setup is tailored to your vision, theme, and vibe.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold">Specialty items</h3>
            <ul className="mt-4 grid gap-2 text-sm text-white/80">
              <li>Signature cocktails</li>
              <li>Specialty mocktails</li>
              <li>Fresh fruit-infused waters</li>
              <li>Alcohol-infused gummies (no THC)</li>
              <li>Curated gift baskets</li>
              <li>Travel-friendly drinks and gummies</li>
            </ul>
          </Card>
        </div>

        {/* Featured flyers */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold">Featured events and promos</h3>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            Examples of how we show up for brand activations, pop-ups, and themed
            nights.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Card className="overflow-hidden">
              <img
                src={IMG.cigarWeek}
                alt="Chicago Cigar Week"
                className="h-64 w-full object-bottom"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src={IMG.womensEvent}
                alt="Women’s event"
                className="h-64 w-full object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src={IMG.fathersDay}
                alt="Father’s Day special"
                className="h-64 w-full object-cover"
              />
            </Card>
          </div>

          {/* Featured videos */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Featured videos</h4>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Quick clips from recent setups and events.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="overflow-hidden">
                <video
                  className="h-64 w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={VID.promo1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Card>

              <Card className="overflow-hidden">
                <video
                  className="h-64 w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={VID.promo2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Card>

              <Card className="overflow-hidden">
                <video
                  className="h-64 w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={VID.promo3} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              </Card>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* GALLERY */}
      <SectionShell id="gallery" className="mt-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            A peek into our bar setups, cocktails, mocktails, gummies, and
            curated gift baskets.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-5xl">
          <div className="grid place-items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src={IMG.fruity}
              alt="Fruity drinks"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src={IMG.spicy}
              alt="Spicy margaritas"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src={IMG.espresso}
              alt="Espresso martini"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src={IMG.flowers}
              alt="Gift basket"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src={IMG.gummies}
              alt="Gummies"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src={IMG.butterfly}
              alt="Butterfly gummies"
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </SectionShell>

      {/* CONTACT */}
      <SectionShell id="contact" className="mt-20 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-3 text-white/80">
              Ready to book or have a question? Send us a message and we will
              get back to you quickly.
            </p>

            <form className="mt-6 grid gap-4" action={FORM_ACTION} method="POST">
              {/* FormSubmit options */}
              <input type="hidden" name="_subject" value="Beauty Sipz inquiry" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-violet-400/60"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-violet-400/60"
                />
              </div>

              <input
                name="phone"
                placeholder="Phone (optional)"
                className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-violet-400/60"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your event (date, location, guest count, vibe)"
                className="w-full resize-none rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-violet-400/60"
              />

              <button
                type="submit"
                className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:bg-violet-500"
              >
                Send message
              </button>

              <p className="text-xs text-white/50">
                Or book instantly using the Book us button at the top.
              </p>
            </form>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold">Quick info</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/80">
              <div>
                <div className="text-white/60">Phone</div>
                <a className="hover:text-white" href="tel:3128987836">
                  312-898-7836
                </a>
              </div>
              <div>
                <div className="text-white/60">Instagram</div>
                <a
                  className="hover:text-white"
                  href={IG_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  @beautysipzbartending
                </a>
              </div>
              <div>
                <div className="text-white/60">Booking form</div>
                <a
                  className="hover:text-white"
                  href={BOOK_FORM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open booking form
                </a>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={IMG.heroSetup}
                alt="Beauty Sipz setup"
                className="h-64 w-full object-cover"
              />
            </div>
          </Card>
        </div>
      </SectionShell>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/30 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/60">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Beauty Sipz</div>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#home">
                Back to top
              </a>
              <a
                className="hover:text-white"
                href={IG_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
