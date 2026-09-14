import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Leaf,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Utensils,
  Users,
  X,
} from "lucide-react";

import logoAsset from "@/assets/cater-kitchen-logo-tight.png.asset.json";
import kitchenImage from "@/assets/central-kitchen.jpg";
import mealsImage from "@/assets/corporate-meals.jpg";
import cafeteriaImage from "@/assets/industrial-cafeteria.jpg";
import eventImage from "@/assets/event-catering.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cater Kitchen | Corporate Catering & Food Solutions" },
      {
        name: "description",
        content:
          "Premium corporate catering, cafeteria management, packed meals, event hospitality, and industrial food solutions from Cater Kitchen.",
      },
      { property: "og:title", content: "Cater Kitchen | Corporate Catering & Food Solutions" },
      {
        property: "og:description",
        content: "Serving quality without compromise across workplaces, institutions, industries, and events.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    number: "01",
    title: "Corporate Catering",
    description: "Daily office meals, executive dining, meetings, conferences, and employee food programs designed around your people.",
    image: mealsImage,
    alt: "Fresh packed meals prepared for corporate dining",
  },
  {
    number: "02",
    title: "Industrial Feeding",
    description: "Nutritious, high-volume meal solutions for factories, manufacturing plants, warehouses, and industrial facilities.",
    image: cafeteriaImage,
    alt: "Professional staff serving meals in an industrial cafeteria",
  },
  {
    number: "03",
    title: "Event Hospitality",
    description: "Refined catering for conferences, product launches, exhibitions, award ceremonies, weddings, and celebrations.",
    image: eventImage,
    alt: "Chef serving guests at an elegant corporate event",
  },
];

const verticals = [
  "Corporate Cafeteria Management",
  "Packed Meal Solutions",
  "Business Events & Conferences",
  "Cloud Kitchen & Food Production",
  "Institutional Catering",
  "Executive Dining",
];

const process = [
  ["01", "Understand", "We study your workforce, event size, dietary preferences, and expectations."],
  ["02", "Design", "Our culinary team develops customized menus and service plans."],
  ["03", "Prepare", "Meals are prepared in controlled kitchens using standardized processes."],
  ["04", "Deliver", "Food reaches every location fresh, safe, and on time."],
  ["05", "Serve", "Professional teams ensure smooth and delightful dining experiences."],
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-brand-cream text-brand-dark">
      <header className="sticky top-0 z-50 border-b border-brand-dark/10 bg-brand-cream/95 backdrop-blur-md">
        <div className="bg-brand-dark px-5 py-2.5 text-brand-cream">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 font-ui text-[0.62rem] font-semibold uppercase tracking-[0.18em]">
            <span className="hidden sm:inline">Serving quality without compromise</span>
            <div className="flex items-center gap-4 sm:gap-7">
              <a href="tel:+917738057411" className="transition-colors hover:text-brand-sand">+91 77380 57411</a>
              <a href="mailto:Pinakinhospitality9@gmail.com" className="hidden transition-colors hover:text-brand-sand md:inline">Pinakinhospitality9@gmail.com</a>
            </div>
          </div>
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#top" onClick={closeMenu} className="shrink-0" aria-label="Cater Kitchen home">
            <img src={logoAsset.url} alt="Cater Kitchen" className="h-10 w-auto object-contain sm:h-12" />
          </a>
          <div className="hidden items-center gap-8 font-ui text-[0.68rem] font-bold uppercase tracking-[0.17em] lg:flex">
            <a href="#about" className="transition-colors hover:text-brand-maroon">About</a>
            <a href="#solutions" className="transition-colors hover:text-brand-maroon">Solutions</a>
            <a href="#process" className="transition-colors hover:text-brand-maroon">Process</a>
            <a href="#sustainability" className="transition-colors hover:text-brand-maroon">Sustainability</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden bg-brand-dark px-5 py-3 font-ui text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-cream transition-colors hover:bg-brand-maroon sm:inline-flex">
              Start a conversation
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center border border-brand-dark/15 text-brand-dark lg:hidden"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-brand-dark/10 bg-brand-cream px-5 py-5 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 font-ui text-xs font-bold uppercase tracking-[0.16em]">
              {[
                ["About", "#about"],
                ["Solutions", "#solutions"],
                ["Process", "#process"],
                ["Sustainability", "#sustainability"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu} className="border-b border-brand-dark/10 pb-3">{label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <div id="top" />
      <section className="relative px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="animate-[rise-in_700ms_ease-out_both]">
            <p className="eyebrow mb-6">Premium food solutions / India</p>
            <h1 className="font-display text-[4.6rem] uppercase leading-[0.82] tracking-[-0.02em] sm:text-[6.8rem] lg:text-[8.5rem]">
              Food that <span className="text-brand-maroon">moves</span> business.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-brand-dark/75 sm:text-lg">
              Reliable corporate catering, cafeteria management, and event hospitality built around quality, consistency, and care.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#solutions" className="inline-flex items-center gap-3 bg-brand-dark px-6 py-4 font-ui text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-cream transition-colors hover:bg-brand-maroon">
                Explore solutions <ArrowUpRight size={16} />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 border-b border-brand-dark px-2 py-4 font-ui text-[0.7rem] font-bold uppercase tracking-[0.14em] transition-colors hover:text-brand-maroon">
                Our story <ArrowDown size={15} />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <div className="border border-brand-dark/20 px-5 py-4">
                <span className="block font-display text-4xl leading-none">5K+</span>
                <span className="mt-1 block font-ui text-[0.62rem] font-bold uppercase tracking-[0.13em] text-brand-dark/55">Meals designed for scale</span>
              </div>
              <div className="border border-brand-dark/20 px-5 py-4">
                <span className="block font-display text-4xl leading-none">24/7</span>
                <span className="mt-1 block font-ui text-[0.62rem] font-bold uppercase tracking-[0.13em] text-brand-dark/55">Operational reliability</span>
              </div>
            </div>
          </div>
          <div className="relative lg:pl-8">
            <div className="absolute -left-5 top-10 hidden h-44 w-px bg-brand-maroon/30 lg:block" />
            <div className="overflow-hidden bg-brand-sand">
              <img src={kitchenImage} alt="Chefs preparing meals in Cater Kitchen's central kitchen" width={1008} height={1264} className="aspect-[4/5] w-full object-cover grayscale-[18%] transition duration-700 hover:scale-[1.02] hover:grayscale-0" />
            </div>
            <p className="mt-4 flex items-center justify-between font-ui text-[0.62rem] font-bold uppercase tracking-[0.17em] text-brand-dark/50">
              <span>Central kitchen operations</span>
              <span>01 / 06</span>
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-brand-dark py-20 text-brand-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5 text-brand-sand">02 / Core capabilities</p>
              <h2 className="font-display text-6xl uppercase leading-[0.85] sm:text-8xl">Built for<br />every table.</h2>
            </div>
            <p className="max-w-sm font-ui text-sm uppercase leading-6 tracking-[0.05em] text-brand-sand/75">
              From industrial workforce feeding to premium corporate events, we manage the entire food lifecycle with precision.
            </p>
          </div>
          <div className="grid gap-px border border-brand-cream/15 bg-brand-cream/15 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="group bg-brand-dark p-7 transition-colors hover:bg-brand-maroon/80 sm:p-9">
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-ui text-[0.65rem] font-bold tracking-[0.2em] text-brand-sand/55 transition-colors group-hover:text-brand-sand">{service.number}</span>
                  <ArrowUpRight size={18} className="text-brand-sand/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="font-display text-4xl uppercase leading-none">{service.title}</h3>
                <p className="mt-5 min-h-24 text-sm leading-6 text-brand-sand/70">{service.description}</p>
                <div className="mt-8 overflow-hidden">
                  <img src={service.image} alt={service.alt} width={944} height={704} loading="lazy" className="aspect-video w-full object-cover grayscale-[25%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-rule px-5 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5">03 / The foundation</p>
            <h2 className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl">Serve better.<br /><span className="text-brand-maroon">Cook better.</span><br />Care better.</h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-xl leading-8 text-brand-dark/85 sm:text-2xl sm:leading-9">At Cater Kitchen, food is more than a meal. It is an experience that brings people together, fuels productivity, strengthens relationships, and creates lasting memories.</p>
            <p className="mt-7 max-w-2xl leading-7 text-brand-dark/65">Built on the foundation of quality, consistency, and innovation, we deliver customized food programs for businesses, institutions, industries, and events of every scale. Every meal is thoughtfully prepared using fresh ingredients, balanced nutrition, and recipes inspired by regional and global cuisines.</p>
            <div className="mt-12 grid gap-8 border-t border-brand-dark/15 pt-8 sm:grid-cols-2">
              <div>
                <ShieldCheck className="mb-4 text-brand-maroon" size={24} />
                <h3 className="font-ui text-sm font-bold uppercase tracking-[0.12em]">Food safety first</h3>
                <p className="mt-2 text-sm leading-6 text-brand-dark/60">Hygiene is our responsibility, built into every kitchen and service practice.</p>
              </div>
              <div>
                <Users className="mb-4 text-brand-maroon" size={24} />
                <h3 className="font-ui text-sm font-bold uppercase tracking-[0.12em]">Customer obsession</h3>
                <p className="mt-2 text-sm leading-6 text-brand-dark/60">We listen, customize, improve, and continuously innovate around every client.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-dark/10 bg-brand-sand/25 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 overflow-hidden px-5 lg:px-8">
          {['Hygiene excellence', 'Reliability first', 'Nutritional balance', 'Sustainability', 'Operational precision'].map((item, index) => (
            <span key={item} className={`shrink-0 font-display text-3xl uppercase sm:text-4xl ${index % 2 === 0 ? 'text-brand-dark/20' : 'text-brand-maroon'}`}>{item}</span>
          ))}
        </div>
      </section>

      <section id="process" className="px-5 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-5">04 / How we work</p>
            <h2 className="font-display text-6xl uppercase leading-[0.86] sm:text-8xl">The kitchen<br /><span className="text-brand-maroon">behind</span><br />the promise.</h2>
            <p className="mt-8 max-w-md leading-7 text-brand-dark/65">From the first conversation to the final service, our process is designed for transparency, consistency, and continuous improvement.</p>
          </div>
          <div className="border-t border-brand-dark/15">
            {process.map(([number, title, description]) => (
              <div key={number} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-brand-dark/15 py-7 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-9">
                <span className="font-display text-3xl text-brand-maroon/50">{number}</span>
                <div>
                  <h3 className="font-display text-4xl uppercase leading-none">{title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-brand-dark/65">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sustainability" className="bg-brand-maroon py-20 text-brand-cream sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:px-8">
          <div>
            <p className="eyebrow mb-5 text-brand-sand">05 / Responsible service</p>
            <h2 className="font-display text-6xl uppercase leading-[0.86] sm:text-8xl">Good food.<br /><span className="text-brand-sand">Better future.</span></h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-sand/80">Responsible food service begins with responsible choices. We work toward reducing food waste, optimizing energy consumption, encouraging responsible sourcing, minimizing plastic usage, and implementing environmentally conscious kitchen practices.</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-brand-cream/20">
            {[
              [Leaf, 'Waste reduction'],
              [Utensils, 'Responsible sourcing'],
              [Truck, 'Smarter logistics'],
              [Check, 'Continuous improvement'],
            ].map(([Icon, label]) => (
              <div key={label as string} className="bg-brand-maroon p-6 sm:p-8">
                <Icon size={22} className="mb-10 text-brand-sand" />
                <span className="font-ui text-xs font-bold uppercase leading-5 tracking-[0.12em] text-brand-cream/75">{label as string}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow mb-5">06 / Start a conversation</p>
            <h2 className="font-display text-6xl uppercase leading-[0.85] sm:text-8xl">Let’s make<br /><span className="text-brand-maroon">every meal</span><br />meaningful.</h2>
            <p className="mt-8 max-w-md leading-7 text-brand-dark/65">Tell us what your workplace, institution, industry, or event needs. We’ll shape a food program around it.</p>
            <div className="mt-10 space-y-5">
              <a href="tel:+917738057411" className="group flex items-center gap-4 font-ui text-sm font-bold uppercase tracking-[0.1em]"><Phone size={18} className="text-brand-maroon" /><span className="transition-transform group-hover:translate-x-1">+91 77380 57411</span></a>
              <a href="mailto:Pinakinhospitality9@gmail.com" className="group flex items-center gap-4 font-ui text-sm font-bold uppercase tracking-[0.1em]"><Mail size={18} className="text-brand-maroon" /><span className="transition-transform group-hover:translate-x-1">Pinakinhospitality9@gmail.com</span></a>
            </div>
          </div>
          <form onSubmit={handleInquiry} className="border border-brand-dark/15 bg-brand-sand/25 p-7 sm:p-10">
            <p className="font-ui text-xs font-bold uppercase tracking-[0.15em] text-brand-maroon">Request a proposal</p>
            <div className="mt-8 space-y-6">
              <label className="block"><span className="eyebrow mb-2 block text-brand-dark/55">Your name</span><input required name="name" className="w-full border-b border-brand-dark/25 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-brand-dark/35 focus:border-brand-maroon" placeholder="Name" /></label>
              <label className="block"><span className="eyebrow mb-2 block text-brand-dark/55">Company or organization</span><input required name="company" className="w-full border-b border-brand-dark/25 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-brand-dark/35 focus:border-brand-maroon" placeholder="Company" /></label>
              <label className="block"><span className="eyebrow mb-2 block text-brand-dark/55">What do you need?</span><select name="service" className="w-full border-b border-brand-dark/25 bg-transparent py-3 text-base outline-none focus:border-brand-maroon"><option>Corporate catering</option><option>Cafeteria management</option><option>Industrial catering</option><option>Event hospitality</option><option>Packed meal solutions</option></select></label>
              <button type="submit" className="mt-3 inline-flex w-full items-center justify-center gap-3 bg-brand-dark px-6 py-4 font-ui text-xs font-bold uppercase tracking-[0.15em] text-brand-cream transition-colors hover:bg-brand-maroon">{submitted ? 'Thank you — we’ll be in touch' : 'Send inquiry'} <ArrowUpRight size={16} /></button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-brand-dark/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <img src={logoAsset.url} alt="Cater Kitchen" className="h-10 w-auto object-contain" />
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-ui text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-dark/45">
            <a href="#about" className="hover:text-brand-maroon">About</a>
            <a href="#solutions" className="hover:text-brand-maroon">Solutions</a>
            <a href="#contact" className="hover:text-brand-maroon">Contact</a>
            <span>© 2026 Cater Kitchen</span>
          </div>
        </div>
      </footer>
    </main>
  );
}