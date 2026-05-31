import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MessageCircle,
  PawPrint,
  HeartHandshake,
  Home,
  ShieldCheck,
  Star,
  MapPin,
  Mail,
  CheckCircle2,
  Phone,
  Menu,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "34645317676";
const INSTAGRAM_URL = "https://www.instagram.com/ariacanina24/";
const EMAIL = "ariacanina24@gmail.com";
const VALORACION_URL = "https://calendly.com/patricia-marquez-esteban/valoracion-inicial-ariacanina";
const SEGUIMIENTO_URL = "https://calendly.com/patricia-marquez-esteban/sesion-de-seguimiento-ariacanina";

const services = [
  {
    icon: PawPrint,
    title: "Educación básica",
    text: "Aprende junto a tu perro las órdenes y habilidades esenciales para el día a día.",
  },
  {
    icon: ShieldCheck,
    title: "Modificación de conducta",
    text: "Trabajamos miedos, reactividad, ladridos, ansiedad y otros comportamientos.",
  },
  {
    icon: HeartHandshake,
    title: "Vínculo y confianza",
    text: "Fortalecemos vuestra relación desde el respeto, la calma y la comprensión.",
  },
  {
    icon: Home,
    title: "Cachorros",
    text: "Acompañamiento en los primeros meses para crear una convivencia feliz.",
  },
];

const pricing = [
  {
    name: "Valoración inicial",
    duration: "90 min",
    price: "45 €",
    description: "Primera sesión para conocer al perro, analizar el caso y definir un plan de trabajo.",
    button: "Reservar valoración inicial",
    url: VALORACION_URL,
  },
  {
    name: "Sesión de seguimiento",
    duration: "60 min",
    price: "35 €",
    description: "Sesión individual para continuar trabajando los objetivos definidos en la valoración inicial.",
    button: "Reservar seguimiento",
    url: SEGUIMIENTO_URL,
  },
  {
    name: "Bono 4 sesiones",
    duration: "4 x 60 min",
    price: "125 €",
    description: "Ideal para avanzar con seguimiento y trabajar hábitos de forma progresiva.",
    button: "Consultar bono",
    url: null,
  },
  {
    name: "Bono 8 sesiones",
    duration: "8 x 60 min",
    price: "230 €",
    description: "Pensado para procesos más completos de educación, convivencia o conducta.",
    button: "Consultar bono",
    url: null,
  },
];

const steps = [
  "Escuchamos tu caso y conocemos a tu perro",
  "Diseñamos un plan personalizado",
  "Trabajamos contigo en situaciones reales",
  "Acompañamos la evolución paso a paso",
];

const testimonials = [
  {
    name: "Familia Ariacanina",
    text: "María nos ayudó a entender mejor a nuestro perro y a disfrutar mucho más de los paseos.",
  },
  {
    name: "Cliente Ariacanina",
    text: "Un trato cercano, claro y muy respetuoso. Nos sentimos acompañados desde la primera sesión.",
  },
];

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "Contacto", href: "#contacto" },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-[0.24em] text-[#5AA59D] sm:text-sm">
        <PawPrint size={17} /> {eyebrow} <PawPrint size={17} />
      </p>
      <h2 className="text-3xl font-black tracking-tight text-[#1D2D3A] md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>}
    </div>
  );
}

function AriaLogo({ className = "" }) {
  return (
    <div className={`leading-none text-[#5AA59D] ${className}`}>
      <p className="font-serif text-3xl font-black italic leading-[0.82] tracking-tight md:text-4xl">Aria</p>
      <p className="pl-1 font-serif text-3xl font-black italic leading-[0.82] tracking-tight md:text-4xl">Canina</p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappMessage = encodeURIComponent(
    "Hola, he visto la web de Aria Canina y me gustaría información sobre sesiones de adiestramiento canino."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-white font-sans text-[#1D2D3A]">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm shadow-slate-100/50 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <a href="#inicio" aria-label="Ir al inicio" onClick={() => setMenuOpen(false)}>
            <AriaLogo />
          </a>

          <div className="hidden items-center gap-9 text-sm font-semibold text-[#1D2D3A] lg:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition hover:text-[#5AA59D] ${index === 0 ? "border-b-2 border-[#5AA59D] pb-1 text-[#5AA59D]" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-[#5AA59D] px-5 py-3 text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#4D968E] md:inline-flex"
          >
            <MessageCircle size={20} /> 645 31 76 76
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1D2D3A] lg:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold text-[#1D2D3A] hover:bg-[#F3FAF9] hover:text-[#5AA59D]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#5AA59D] px-5 py-3 font-bold text-white"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-[#F3FAF9] via-white to-[#EFF8F7]">
        <div className="pointer-events-none absolute left-4 top-24 hidden text-[#5AA59D]/12 md:block">
          <PawPrint size={145} />
        </div>
        <div className="pointer-events-none absolute bottom-12 left-10 hidden text-[#5AA59D]/12 md:block">
          <PawPrint size={115} />
        </div>
        <div className="pointer-events-none absolute right-0 top-24 hidden text-[#5AA59D]/12 md:block">
          <PawPrint size={165} />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#5AA59D] sm:text-sm">
              <PawPrint size={22} /> Bienvenidos a Aria Canina
            </p>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-[#1D2D3A] sm:text-5xl md:text-6xl lg:text-7xl">
              Educación canina respetuosa
            </h1>
            <div className="mt-6 h-1 w-12 rounded-full bg-[#5AA59D]" />
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              Ayudo a mejorar la relación con tu perro mediante métodos positivos, basados en el respeto, la confianza y la comunicación.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#5AA59D] px-7 py-4 text-lg font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#4D968E]"
              >
                <PawPrint size={22} /> Mis servicios
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#5AA59D] bg-white/80 px-7 py-4 text-lg font-bold text-[#5AA59D] transition hover:-translate-y-0.5 hover:bg-[#F3FAF9]"
              >
                <MessageCircle size={22} /> Hablemos
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -right-2 top-6 h-[88%] w-[86%] rounded-[44%_56%_55%_45%] bg-[#5AA59D] md:-right-8" />
            <div className="absolute -bottom-4 left-0 h-28 w-28 rounded-full bg-[#5AA59D]/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?auto=format&fit=crop&w=1100&q=85"
              alt="Labrador feliz en una sesión de educación canina"
              className="relative mx-auto h-[390px] w-full rounded-[2rem] object-cover object-center shadow-2xl sm:h-[460px] md:h-[540px]"
            />
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="¿En qué puedo ayudarte?" title="Mis servicios" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#5AA59D] text-white shadow-sm transition group-hover:scale-105">
                    <Icon size={34} />
                  </div>
                  <h3 className="text-xl font-black text-[#1D2D3A]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F3FAF9] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Método"
            title="Acompañamiento para mejorar la convivencia"
            text="El objetivo no es solo enseñar órdenes, sino ayudarte a comprender qué necesita tu perro y cómo podéis avanzar juntos."
          />
          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step} className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#5AA59D] text-lg font-black text-white">{index + 1}</span>
                <p className="font-bold leading-7 text-[#1D2D3A]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <div className="relative order-2 md:order-1">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-[#5AA59D]/20" />
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80"
              alt="Educación canina positiva"
              className="relative h-[430px] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#5AA59D]"><PawPrint size={18} /> Sobre mí</p>
            <h2 className="text-4xl font-black tracking-tight text-[#1D2D3A]">Hola, soy María Márquez</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Soy adiestradora canina en Algeciras y acompaño a familias del Campo de Gibraltar a mejorar la relación con sus perros desde una educación respetuosa y positiva.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              En Aria Canina trabajamos cada caso de forma personalizada, entendiendo el entorno, las rutinas, las necesidades del perro y los objetivos de la familia.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl bg-[#F3FAF9] p-4">
                <CheckCircle2 className="text-[#5AA59D]" size={22} />
                <span className="font-semibold">Adiestramiento canino</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-[#F3FAF9] p-4">
                <CheckCircle2 className="text-[#5AA59D]" size={22} />
                <span className="font-semibold">Enfoque positivo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tarifas" className="bg-[#F3FAF9] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Tarifas"
            title="Elige cómo empezar"
            text="Tarifas orientativas que podremos ajustar según los servicios definitivos, desplazamientos y duración de las sesiones."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map((plan) => (
              <article key={plan.name} className="flex flex-col rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-black text-[#1D2D3A]">{plan.name}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">{plan.duration}</p>
                <p className="mt-5 text-4xl font-black text-[#5AA59D]">{plan.price}</p>
                <p className="mt-5 flex-1 leading-7 text-slate-600">{plan.description}</p>
                <a
                  href={plan.url || whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex justify-center rounded-xl bg-[#5AA59D] px-5 py-3 font-bold text-white transition hover:bg-[#4D968E]"
                >
                  {plan.button}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Opiniones" title="Familias que ya han confiado en Aria Canina" />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex gap-1 text-[#5AA59D]">
                  {[...Array(5)].map((_, index) => <Star key={index} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg leading-8 text-slate-600">“{item.text}”</p>
                <p className="mt-5 font-black text-[#1D2D3A]">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#F3FAF9] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#5AA59D]"><MessageCircle size={18} /> Contacto</p>
              <h2 className="text-4xl font-black tracking-tight text-[#1D2D3A]">¿Tienes dudas antes de reservar?</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                Escríbenos por WhatsApp y te orientamos sobre qué tipo de sesión encaja mejor con tu caso.
              </p>
              <div className="mt-6 space-y-3 text-slate-700">
                <p className="flex items-center gap-3"><MapPin className="text-[#5AA59D]" size={21} /> Algeciras y Campo de Gibraltar</p>
                <p className="flex items-center gap-3"><Phone className="text-[#5AA59D]" size={21} /> 645 31 76 76</p>
                <p className="flex items-center gap-3"><Mail className="text-[#5AA59D]" size={21} /> {EMAIL}</p>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#5AA59D] px-7 py-4 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#4D968E] md:mt-0 md:w-auto"
            >
              <MessageCircle size={20} /> Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#5AA59D] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <AriaLogo className="text-white" />
            <p className="mt-4 text-sm text-white/90">Educación canina respetuosa · Algeciras</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 hover:bg-white/25"><MessageCircle size={16} /> 645 31 76 76</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 hover:bg-white/25"><PawPrint size={16} /> @ariacanina24</a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 hover:bg-white/25"><Mail size={16} /> {EMAIL}</a>
          </div>
        </div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#5AA59D] text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#4D968E]" aria-label="Contactar por WhatsApp">
        <MessageCircle size={26} />
      </a>
    </main>
  );
}

export default App;

