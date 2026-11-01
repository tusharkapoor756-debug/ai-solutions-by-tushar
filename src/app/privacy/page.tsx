import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Tushar Labs",
  description: "Privacy policy and client data handling practices for Tushar Labs.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 lg:pt-36 pb-20 px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="h-0.5 w-16 bg-primary mb-6" />
      <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
        Legal &amp; Data Transparency
      </span>
      <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
        Privacy Policy
      </h1>
      <p className="font-mono text-xs text-muted-foreground mb-12">
        Last Updated: November 2026 · Tushar Labs Studio, New Delhi
      </p>

      <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            1. Overview
          </h2>
          <p>
            Tushar Labs (&quot;we&quot;, &quot;our&quot;, &quot;studio&quot;) respects the privacy of our clients, prospective clients, and visitors. This Privacy Policy outlines what information we collect when you use our website or submit project briefs, and how that information is handled with complete confidentiality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            2. Information We Collect
          </h2>
          <p>
            When you initiate a project inquiry via our contact form or WhatsApp bridge, we collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-foreground/90">
            <li>Contact details: Name, email address, phone number, and company name.</li>
            <li>Project specifications: Required service, estimated investment range, timeline expectations, and scope brief.</li>
            <li>Technical communications: Requirements discussed during scoping and discovery calls.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            3. How We Use Your Data
          </h2>
          <p>
            We use your submitted data exclusively for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-foreground/90">
            <li>Evaluating project technical feasibility and preparing formal architectural proposals.</li>
            <li>Direct communication with our founder and technical lead via WhatsApp or email.</li>
            <li>Invoicing, contract execution, and project deployment coordination.</li>
          </ul>
          <p className="font-mono text-xs text-primary pt-1">
            * We never sell, rent, or trade your personal data or business plans to any third-party brokers or advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            4. Cookies &amp; Local Storage
          </h2>
          <p>
            Our website uses minimal, essential cookies and browser storage strictly to remember your preferences (such as dark theme settings and cookie consent state) and to ensure rapid page load speeds. We do not use intrusive cross-site tracking cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            5. Intellectual Property &amp; Non-Disclosure
          </h2>
          <p>
            Any proprietary business logic, product roadmaps, or unreleased ideas shared with Tushar Labs during pre-contractual discussions are treated as strictly confidential under industry-standard non-disclosure practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            6. Contact Regarding Privacy
          </h2>
          <p>
            If you have questions regarding your data or wish to have your contact details purged from our records, contact us directly at:
          </p>
          <div className="p-4 rounded-sm border border-border font-mono text-xs" style={{ background: "hsl(var(--card))" }}>
            <p className="text-foreground font-semibold">Tushar Labs Data Desk</p>
            <p>Email: tusharkapoor756@gmail.com</p>
            <p>Direct WhatsApp: +91 9315569638</p>
            <p>New Delhi, India</p>
          </div>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
        <Link href="/" className="font-mono text-xs text-primary hover:opacity-80 transition-opacity">
          ← Back to Studio Home
        </Link>
        <Link href="/terms" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
          View Terms of Service →
        </Link>
      </div>
    </main>
  );
}
