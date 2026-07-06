"use client";

import { Link } from "@/components/link";
import { useState, useEffect, type ReactNode } from "react";
import { Menu, X, Phone, ChevronUp } from "lucide-react";
import { MegaMenu, MobileNav } from "@/components/mega-menu";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader open={menuOpen} setOpen={setMenuOpen} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingCallButton />
      <BackToTopButton />

      {/* Mobile Menu Overlay */}
      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-background flex flex-col md:hidden animate-in fade-in duration-200">
          {/* Header row inside menu */}
          <div className="container-page flex h-16 w-full items-center justify-between gap-6 border-b border-hairline">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              aria-label="Leadweb home"
              className="flex items-center"
            >
              <div className="flex flex-col items-center leading-none">
                <img
                  src="/logo.webp"
                  alt="Leadweb"
                  width={170}
                  height={33}
                  className="h-8 w-auto"
                />
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground">
                  Marketing
                </span>
              </div>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="rounded-md border border-hairline p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {/* Menu contents */}
          <div className="flex-1 overflow-y-auto container-page w-full py-6 flex flex-col pb-20">
            <div className="flex-1">
              <MobileNav onNavigate={() => setMenuOpen(false)} />
            </div>
            <div className="mt-8 pt-4 border-t border-hairline">
              <Link
                to="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-full justify-center rounded-full bg-brand px-5 py-3.5 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/20 active:translate-y-0.5 transition-transform"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FloatingCallButton() {
  return (
    <a
      href="tel:0291918049"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-105 active:scale-95 md:hidden"
      aria-label="Call us"
    >
      <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-25" />
      <Phone className="h-6 w-6 relative z-10" />
    </a>
  );
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 border border-hairline text-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 hover:text-brand"
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

function SiteHeader({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="Leadweb home" className="flex items-center">
          <div className="flex flex-col items-center leading-none">
            <img src="/logo.webp" alt="Leadweb" width={170} height={33} className="h-8 w-auto" />
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground">
              Marketing
            </span>
          </div>
        </Link>
        <MegaMenu />
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact-us"
            className="rounded-full bg-brand px-8 py-2.5 text-base font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a call
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-md border border-hairline p-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface/40 mt-24">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex flex-col items-center leading-none">
            <img src="/logo.webp" alt="Leadweb" width={170} height={33} className="h-8 w-auto" />
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground">
              Marketing
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-dim">
            Sydney digital marketing for owners who measure success in booked jobs, not clicks.
          </p>
          <a
            href="tel:0291918049"
            className="mt-4 inline-flex items-center gap-2 text-sm text-foreground"
          >
            <Phone className="h-4 w-4 text-brand" /> 02 9191 8049
          </a>
        </div>
        <FooterCol
          title="Services"
          links={[
            ["Google Ads", "/services/google-ads"],
            ["SEO", "/services/seo"],
            ["Web Design", "/services/web-design"],
            ["Social Media", "/services/social-media-marketing"],
            ["Pay Per Lead", "/services/pay-per-lead"],
            ["Rent a Website", "/services/rent-website"],
          ]}
        />
        <FooterCol
          title="Industries"
          links={[
            ["Tradies", "/industries/digital-marketing-for-tradie"],
            ["Dentists", "/industries/digital-marketing-for-dentists"],
            ["Law Firms", "/industries/digital-marketing-for-law-firms"],
            ["Real Estate", "/industries/digital-marketing-for-real-estates"],
            ["Small Business", "/industries/digital-marketing-for-small-businesses"],
            ["All industries", "/industries"],
          ]}
        />
        <FooterCol
          title="Locations"
          links={[
            ["Sydney", "/location/google-ads-agency-sydney"],
            ["Melbourne", "/location/google-ads-agency-melbourne"],
            ["Brisbane", "/location/google-ads-agency-brisbane"],
            ["Perth", "/location/google-ads-agency-perth"],
            ["Adelaide", "/location/google-ads-agency-adelaide"],
          ]}
        />
      </div>
      <div className="border-t border-hairline">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-ink-dim md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} DSIGNS AUSTRALIA PTY LIMITED. All rights reserved.</p>
          <p>
            Sydney, Australia · Digital Marketing Agency for Business Owners with Growth Mindset.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-dim">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link to={href} className="text-foreground/80 transition-colors hover:text-brand">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
