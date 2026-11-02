import Link from "next/link";
import Image from "next/image";
import { home } from "@/lib/content";

const practiceLinks = [
  { label: "Website Design & Development", href: "/services#website-development" },
  { label: "Custom Software & SaaS", href: "/services#custom-software" },
  { label: "AI & Workflow Automation", href: "/services#ai-automation" },
  { label: "Branding & Digital Design", href: "/services#branding-design" },
];

const studioLinks = [
  { label: "All Services", href: "/services" },
  { label: "Selected Work", href: "/work" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "About Studio", href: "/about" },
  { label: "Project Inquiry", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-14 border-b border-border">
          <div className="max-w-md">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/tl-logo-transparent.png"
                alt="Tushar Labs"
                width={140}
                height={44}
                className="block h-auto max-h-10 w-auto max-w-full object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {home.footer.tagline}
            </p>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              {home.footer.location}
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start inline-flex items-center px-6 py-3 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {home.footer.cta}
          </Link>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-14">
          {/* Practice Areas */}
          <div>
            <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">
              Practice Areas
            </h3>
            <ul className="flex flex-col gap-3">
              {practiceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">
              Studio
            </h3>
            <ul className="flex flex-col gap-3">
              {studioLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${home.footer.email}`}
                  className="text-sm text-foreground hover:text-primary transition-colors break-all"
                >
                  {home.footer.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${home.footer.phone.replace(/\s/g, "")}`}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {home.footer.phone}
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">{home.footer.hours}</span>
              </li>
            </ul>
          </div>

          {/* Channels */}
          <div>
            <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">
              Channels
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/tushar-kapoor-47a9a61b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  LinkedIn →
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ai.solution_tushar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  Instagram →
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Tushar Labs. All rights reserved.</span>
            <span className="text-border">·</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">·</span>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
          <span>{home.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}
