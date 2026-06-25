import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/logo.asset.json";
import heroImg from "@/assets/hero-vidrios.jpg";
import ventanasImg from "@/assets/ventanas.jpg";
import pasamanosImg from "@/assets/pasamanos.jpg";
import mamparasImg from "@/assets/mamparas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vidriería Kevin — Vidrios y Carpintería en Aluminio | San Pedro de Lloc" },
      { name: "description", content: "Instalación de vidrios Directo, Nova y Curvex. Carpintería en aluminio: ventanas, puertas, pasamanos, balcones y cristales de seguridad en San Pedro de Lloc, Perú." },
      { property: "og:title", content: "Vidriería Kevin — Vidrios y Carpintería en Aluminio" },
      { property: "og:description", content: "Más de 10 años instalando vidrios y aluminio en La Libertad, Perú. Presupuestos sin compromiso." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const PHONE_1 = "948190876";
const PHONE_2 = "971297288";
const WHATSAPP = `https://wa.me/51${PHONE_1}?text=${encodeURIComponent("Hola, quiero solicitar una cotización.")}`;

const services = [
  {
    title: "Vidrios en general",
    desc: "Instalación de vidrios Directo, Nova y Curvex con acabados profesionales.",
    img: heroImg,
  },
  {
    title: "Ventanas y puertas",
    desc: "Carpintería en aluminio para ventanas y puertas, sistemas corredizos y proyectantes.",
    img: ventanasImg,
  },
  {
    title: "Pasamanos y balcones",
    desc: "Pasamanos en cristal templado y aluminio para balcones, escaleras y terrazas.",
    img: pasamanosImg,
  },
  {
    title: "Mamparas y cristales de seguridad",
    desc: "Mamparas de baño, divisiones de oficina y cristales templados de seguridad.",
    img: mamparasImg,
  },
];

const features = [
  { n: "10+", t: "Años de experiencia" },
  { n: "500+", t: "Proyectos instalados" },
  { n: "100%", t: "Garantía en trabajos" },
  { n: "24h", t: "Cotización rápida" },
];

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img src={logoAsset.url} alt="Vidriería Kevin" width={40} height={40} className="h-10 w-10 shrink-0 rounded-md object-contain" />
            <div className="min-w-0 leading-tight">
              <p className="truncate font-display text-sm font-bold text-primary sm:text-base">VIDRIERÍA KEVIN</p>
              <p className="truncate text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Vidrios &amp; Aluminio</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Inicio", "#inicio"],
              ["Servicios", "#servicios"],
              ["Nosotros", "#nosotros"],
              ["Galería", "#galeria"],
              ["Contacto", "#contacto"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent">
                {l}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[var(--gradient-accent)] px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Cotizar ahora
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            aria-label="Menú"
          >
            <span className="block h-0.5 w-5 bg-foreground relative before:absolute before:-top-1.5 before:left-0 before:h-0.5 before:w-5 before:bg-foreground after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-5 after:bg-foreground" />
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="flex flex-col px-4 py-3">
              {[
                ["Inicio", "#inicio"],
                ["Servicios", "#servicios"],
                ["Nosotros", "#nosotros"],
                ["Galería", "#galeria"],
                ["Contacto", "#contacto"],
              ].map(([l, h]) => (
                <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                  {l}
                </a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-full bg-[var(--gradient-accent)] px-5 py-2 text-center text-sm font-semibold text-primary-foreground">
                Cotizar ahora
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <img src={heroImg} alt="Fachada de vidrio moderno" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:px-8 lg:py-36">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" /> San Pedro de Lloc · La Libertad · Perú
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Vidrios y aluminio <span className="text-accent">a la medida</span> de tu proyecto
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              Instalación de vidrios Directo, Nova y Curvex. Carpintería en aluminio para ventanas, puertas, pasamanos, balcones y cristales de seguridad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5">
                Solicitar cotización
              </a>
              <a href="#servicios" className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/10">
                Ver servicios
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {features.map((f) => (
                <div key={f.t}>
                  <dt className="font-display text-3xl font-bold text-accent">{f.n}</dt>
                  <dd className="mt-1 text-xs text-primary-foreground/80 sm:text-sm">{f.t}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
              <img src={logoAsset.url} alt="Logo Vidriería Kevin" width={280} height={280} className="h-64 w-64 rounded-2xl bg-white object-contain p-4" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Nuestros servicios</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Soluciones en vidrio y aluminio</h2>
          <p className="mt-4 text-muted-foreground">Trabajos profesionales para hogares, comercios y obras civiles, con materiales certificados y mano de obra calificada.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Sobre nosotros</p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Calidad, puntualidad y acabado profesional</h2>
            <p className="mt-5 text-muted-foreground">
              <strong>Vidriería Kevin</strong>, dirigida por <strong>Carlos Pairazaman P.</strong>, es una empresa peruana especializada en la instalación de vidrios y carpintería en aluminio. Atendemos proyectos residenciales y comerciales en San Pedro de Lloc y toda la región La Libertad.
            </p>
            <p className="mt-4 text-muted-foreground">
              Trabajamos con marcas reconocidas como <em>Directo</em>, <em>Nova</em> y <em>Curvex</em>, garantizando seguridad, durabilidad y un acabado impecable en cada obra.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Asesoría técnica gratuita",
                "Materiales certificados",
                "Personal calificado",
                "Trabajos garantizados",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[var(--gradient-accent)] opacity-20 blur-2xl" />
            <img src={pasamanosImg} alt="Trabajo profesional en aluminio y cristal" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Galería</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Algunos de nuestros trabajos</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[heroImg, ventanasImg, mamparasImg, pasamanosImg, heroImg, ventanasImg].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt={`Proyecto ${i + 1}`} loading="lazy" width={1200} height={900} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA + CONTACTO */}
      <section id="contacto" className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-accent)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 text-primary-foreground sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">¿Listo para tu proyecto?</h2>
            <p className="mt-4 max-w-lg text-primary-foreground/85">
              Escríbenos por WhatsApp o llámanos. Te enviamos una cotización rápida y sin compromiso.
            </p>
            <div className="mt-8 space-y-4 text-sm sm:text-base">
              <ContactRow icon="📍" label="Dirección" value="Jr. Anchash 677 A, San Pedro de Lloc, La Libertad, Perú" />
              <ContactRow icon="📞" label="Teléfonos" value={`${PHONE_1} · ${PHONE_2}`} href={`tel:+51${PHONE_1}`} />
              <ContactRow icon="💬" label="WhatsApp" value={PHONE_1} href={WHATSAPP} />
              <ContactRow icon="📘" label="Facebook" value="/VIDRIERIA KEVIN" href="https://facebook.com/VIDRIERIAKEVIN" />
              <ContactRow icon="👤" label="Propietario" value="Carlos Pairazaman P." />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-foreground shadow-[var(--shadow-soft)] sm:p-8">
            <h3 className="font-display text-xl font-semibold text-primary">Solicita una cotización</h3>
            <p className="mt-1 text-sm text-muted-foreground">Te respondemos en menos de 24 horas.</p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const msg = `Hola, soy ${fd.get("nombre")}. ${fd.get("mensaje")} (Tel: ${fd.get("telefono")})`;
                window.open(`https://wa.me/51${PHONE_1}?text=${encodeURIComponent(msg)}`, "_blank");
              }}
            >
              <Input name="nombre" label="Nombre completo" required />
              <Input name="telefono" label="Teléfono" type="tel" required />
              <div>
                <label className="block text-sm font-medium text-foreground">Mensaje</label>
                <textarea name="mensaje" rows={4} required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/40 focus:ring-2" />
              </div>
              <button type="submit" className="w-full rounded-full bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5">
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Vidriería Kevin" width={40} height={40} className="h-10 w-10 rounded-md bg-white object-contain p-1" />
              <p className="font-display text-lg font-bold">VIDRIERÍA KEVIN</p>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/75">Vidrios y carpintería en aluminio. Calidad y compromiso en cada obra.</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">Contacto</p>
            <p className="mt-3 text-primary-foreground/80">Jr. Anchash 677 A — San Pedro de Lloc</p>
            <p className="text-primary-foreground/80">La Libertad, Perú</p>
            <p className="mt-2 text-primary-foreground/80">{PHONE_1} · {PHONE_2}</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">Horario</p>
            <p className="mt-3 text-primary-foreground/80">Lun – Sáb: 8:00 a.m. – 7:00 p.m.</p>
            <p className="text-primary-foreground/80">Domingo: cerrado</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-primary-foreground/70 sm:px-6 lg:px-8">
            © {new Date().getFullYear()} Vidriería Kevin · Carlos Pairazaman P. — Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatea por WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
      >
        💬
      </a>
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 text-lg ring-1 ring-white/20">{icon}</span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wider text-primary-foreground/70">{label}</span>
        <span className="block truncate font-medium">{value}</span>
      </span>
    </>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-opacity hover:opacity-90">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-3">{content}</div>
  );
}

function Input({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/40 focus:ring-2" />
    </div>
  );
}
