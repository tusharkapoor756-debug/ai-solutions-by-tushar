import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Tushar Labs",
  description: "Standard studio engagement terms, payment milestones, and deliverables policy for Tushar Labs.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 lg:pt-36 pb-20 px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="h-0.5 w-16 bg-primary mb-6" />
      <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
        Studio Operating Terms
      </span>
      <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
        Terms of Service
      </h1>
      <p className="font-mono text-xs text-muted-foreground mb-12">
        Last Updated: November 2026 · Tushar Labs Studio, New Delhi
      </p>

      <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            1. Engagement Structure
          </h2>
          <p>
            Tushar Labs operates as an independent technical studio delivering bespoke websites, full-stack software, and automated AI workflows. Every engagement begins with a clear scope specification and mutual sign-off before active engineering commences.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            2. Payment Structure &amp; 50% Advance Policy
          </h2>
          <div className="p-4 rounded-sm border border-border" style={{ background: "hsl(var(--card))" }}>
            <p className="text-foreground font-semibold mb-2">Standard Studio Milestone Terms:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-foreground/90">
              <li>
                <span className="text-primary font-bold">50% Initial Advance:</span> Required prior to architectural kickoff, UI wireframing, and repository provisioning. Work initiates only after advance receipt.
              </li>
              <li>
                <span className="text-primary font-bold">50% Final Settlement:</span> Payable upon project completion, demonstration on staging, and prior to final source code handover / live DNS migration.
              </li>
            </ul>
          </div>
          <p className="text-xs text-muted-foreground">
            * Milestone-based payment schedules may be defined for enterprise software engagements exceeding ₹1,00,000 upon mutual agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            3. Project Timelines &amp; Scope Estimation
          </h2>
          <p>
            All delivery timelines mentioned across the website or proposals are <span className="text-foreground font-semibold">working estimates</span>. Actual delivery schedules depend strictly on:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-foreground/90">
            <li>The full depth, complexity, and custom API requirements of the client&apos;s project.</li>
            <li>Client response turnaround times for assets, copy, approvals, and third-party credentials.</li>
            <li>Third-party service dependencies (e.g., payment gateway KYC, domain verification, OpenAI API limits).</li>
          </ul>
          <p className="text-xs text-muted-foreground">
            We do not issue arbitrary rigid delivery guarantees; we prioritize architectural integrity, security, and real-world performance over rushed, fragile code.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            4. Scope Changes &amp; Revisions
          </h2>
          <p>
            Each fixed-scope project includes standard iterative revisions within the mutually agreed technical brief. Any major feature additions, architecture pivots, or new integration requests outside the original scope will be billed under an amendment or separate phase.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            5. Intellectual Property &amp; Code Ownership
          </h2>
          <p>
            Upon full receipt of the final payment, 100% intellectual property rights, customized frontend/backend source code, and assets created specifically for the project transfer completely to the client. Tushar Labs retains the right to display the completed work in its portfolio and case studies unless restricted by a formal NDA.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            6. Maintenance &amp; Post-Launch Support
          </h2>
          <p>
            Standard builds include handover documentation and deployment verification. Ongoing server maintenance, cloud backups, dependency updates, and feature additions are managed through dedicated monthly retainer packages available separately.
          </p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
        <Link href="/" className="font-mono text-xs text-primary hover:opacity-80 transition-opacity">
          ← Back to Studio Home
        </Link>
        <Link href="/privacy" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
          View Privacy Policy →
        </Link>
      </div>
    </main>
  );
}
