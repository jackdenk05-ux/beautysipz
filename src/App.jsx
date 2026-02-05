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

const IG_LINK = "https://www.instagram.com/beautysipzbartending/";

// Original booking form (keep this for event booking)
const BOOK_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScRgg02h8WejIpR1HijA0_f4sP5EXJ7OY0jHxzMucNJny83oQ/viewform";

// New order form (this is what the top button will use)
const ORDER_FORM =
  "https://docs.google.com/forms/d/1bfK6CJNpO2JHLZPC3pxNiSOCM2t4VoqHzbJo8Si1Jj8/preview";

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

              {/* Top button is now Order now */}
              <a
                href={ORDER_FORM}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:bg-violet-500"
              >
                Order now
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
              {/* Primary CTA is now Order now */}
              <a
                href={ORDER_FORM}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:bg-violet-500"
              >
                Order now
              </a>

              <a
                href="tel:3128987836"
                className="rounded-full border border-white/20 bg-black/20 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Call 312-898-7836
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-white/20 bg-black/20 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                View gallery
              </a>
            </div>

            <Card className="mt-8 p-5">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="text-sm text-white/85">
                  Private and corporate bartending
                </div>
                <div className="text-sm text-white/85">
                  Cocktails, mocktails, infused waters
                </div>
                <div className="text-sm text-white/85">
                  Styled setups with decor and florals
                </div>
                <div className="text-sm text-white/85">
                  Alcohol-infused gummies (no THC)
                </div>
                <div className="text-sm text-white/85">Curated gift baskets</div>
                <div className="text-sm text-white/85">
                  Custom menus for your theme
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black/30">
              <img
                src={IMG.large}
                alt="Beauty Sipz main"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-sm text-white/70">
              Luxury bar experience with heart, delivered to you.
            </p>
          </Card>
        </div>
      </SectionShell>

      {/* ABOUT */}
      <SectionShell id="about" className="mt-20">
        <h2 className="text-3xl font-bold">About</h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Our Bio</h3>
            <p className="mt-3 text-white/80">
              Beauty Sipz Mobile Bartending Services LLC is a Black-owned,
              all-women mobile bartending company founded in 2023 with one
              mission: to bring a luxury bar experience with heart directly to
              you.
            </p>
            <p className="mt-3 text-white/80">
              We specialize in private and corporate bartending services. From
              weddings, birthdays, bachelorette parties, girls nights, family
              gatherings, party buses, corporate events, and pop-ups, Beauty
              Sipz delivers a professional, classy, and personalized bar
              experience every time.
            </p>
            <p className="mt-3 text-white/80">
              Inclusivity matters. We cater to non-alcoholic drinkers with
              specialty mocktails and fresh fruit-infused waters so every guest
              feels included.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold">Our Purpose</h3>
            <p className="mt-3 text-white/80">
              Our purpose is to create unforgettable experiences through
              intentional service, beautiful presentation, and genuine
              connection. Bartending is about atmosphere and making people feel
              valued.
            </p>
            <p className="mt-3 text-white/80">
              Our long-term vision includes developing signature beverage lines,
              expanding product offerings, and growing as women entrepreneurs
              while staying rooted in community, creativity, and love.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <h4 className="font-semibold">What you can expect</h4>
              <ul className="mt-3 grid gap-2 text-sm text-white/80 md:grid-cols-2">
                <li>✔ Professional and personable bartenders</li>
                <li>✔ Custom bar setups tailored to your event</li>
                <li>✔ Signature cocktails and mocktails</li>
                <li>✔ Fresh fruit-infused waters</li>
                <li>✔ Alcohol-infused gummies (no THC)</li>
                <li>✔ Curated gift baskets for any occasion</li>
                <li>✔ Stylish decor, florals, intentional service</li>
                <li>✔ Inclusive elevated experience on-site or on-the-go</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* FOUNDERS */}
        <Card className="mt-10 p-6">
          <h3 className="text-xl font-semibold">Meet the Founders</h3>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="aspect-square overflow-hidden rounded-xl bg-black/30">
                <img
                  src={IMG.kendra}
                  alt="Kendra"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="mt-4 font-semibold">Kendra | Co-Founder</h4>
              <p className="mt-2 text-sm text-white/80">
                Kendra is a natural entrepreneur with a passion for people,
                experiences, and building meaningful brands from vision alone.
                With over 25 years in service-based industries, she brings
                professionalism, structure, and heart to Beauty Sipz. Kendra
                leads business operations, marketing strategy, and brand
                direction.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="aspect-square overflow-hidden rounded-xl bg-black/30">
                <img
                  src={IMG.angela}
                  alt="Angela"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="mt-4 font-semibold">
                Angela | Co-Founder and Mixologist
              </h4>
              <p className="mt-2 text-sm text-white/80">
                Angela is a creative visionary and the lead mixologist behind
                Beauty Sipz. With over 25 years in hospitality specializing in
                luxury brands and refined experiences, she designs and crafts
                signature cocktails, mocktails, infused waters, and products,
                with beautiful visual presentation.
              </p>
            </div>
          </div>
        </Card>
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
                className="h-64 w-full object-cover"
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
        </div>

        {/* Videos removed for now */}
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
              className="h-auto w-full rounded-2xl object-contain bg-black/20"
            />
            <img
              src={IMG.spicy}
              alt="Spicy margaritas"
              className="h-auto w-full rounded-2xl object-contain bg-black/20"
            />
            <img
              src={IMG.espresso}
              alt="Espresso martini"
              className="h-auto w-full rounded-2xl object-contain bg-black/20"            />
            <img
              src={IMG.flowers}
              alt="Gift basket"
              className="h-auto w-full rounded-2xl object-contain bg-black/20"
            />
            <img
              src={IMG.gummies}
              alt="Gummies"
              className="h-auto w-full rounded-2xl object-contain bg-black/20"
            />
            <img
              src={IMG.butterfly}
              alt="Butterfly gummies"
              className="h-auto w-full rounded-2xl object-contain bg-black/20"
            />
          </div>
        </div>
      </SectionShell>

      {/* CONTACT */}
      <SectionShell id="contact" className="mt-20 pb-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Tell us about your event and we will follow up with availability and
          next steps.
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Quick info</h3>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>Service area: Chicago and nearby suburbs</p>
              <p>
                Phone{" "}
                <a className="underline" href="tel:3128987836">
                  312-898-7836
                </a>
              </p>
              <p>
                Instagram{" "}
                <a
                  className="underline"
                  href={IG_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  @beautysipzbartending
                </a>
              </p>

              <p>
               Email{" "}
               <a 
                 className="underline" 
                 href="mailto:beautysipz2023@gmail.com"
               >
                 beautysipz2023@gmail.com
                </a>
               </p>


              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href={ORDER_FORM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:bg-violet-500"
                >
                  Order now
                </a>

                <a
                  href={BOOK_FORM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/20 bg-black/20 px-5 py-3 text-sm font-semibold hover:bg-white/10"
                >
                  Open booking form
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold">Book request</h3>

            {/* This form submits to beautysipz@gmail.com via FormSubmit */}
            <form className="mt-4 grid gap-3" action={FORM_ACTION} method="POST">
              {/* Optional FormSubmit settings */}
              <input
                type="hidden"
                name="_subject"
                value="New Beauty Sipz booking request"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://beautysipz.com/#contact"
              />

              <input
                name="name"
                required
                className="rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40"
                placeholder="Name"
              />
              <input
                name="email"
                type="email"
                required
                className="rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40"
                placeholder="Email"
              />
              <input
                name="phone"
                className="rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40"
                placeholder="Phone"
              />
              <input
                name="event_date"
                className="rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40"
                placeholder="Event date"
              />
              <input
                name="event_type"
                className="rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40"
                placeholder="Event type (wedding, birthday, corporate)"
              />
              <textarea
                name="details"
                className="min-h-[120px] rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40"
                placeholder="Tell us your vision, guest count, and location"
              />
              <button
                type="submit"
                className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:bg-violet-500"
              >
                Submit request
              </button>

              <p className="text-xs text-white/60">
                Prefer the Google Form?{" "}
                <a
                  className="underline"
                  href={BOOK_FORM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here
                </a>
                .
              </p>
            </form>
          </Card>
        </div>
      </SectionShell>

      <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Beauty Sipz Mobile Bartending Services LLC
        </div>
      </footer>
    </div>
  );
}
