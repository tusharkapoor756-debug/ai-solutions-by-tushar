"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Sparkles, MessageSquare, Clock, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import FadeUp from "@/components/FadeUp";
import { trackFormSubmit } from "@/lib/gtm";

type CurrencyCode = "INR" | "USD" | "GBP" | "EUR" | "AED";

interface CurrencyOption {
  code: CurrencyCode;
  symbol: string;
  label: string;
  budgets: string[];
}

const CURRENCIES: Record<CurrencyCode, CurrencyOption> = {
  INR: {
    code: "INR",
    symbol: "₹",
    label: "INR (₹)",
    budgets: [
      "₹15,000 – ₹30,000",
      "₹30,000 – ₹60,000",
      "₹60,000 – ₹1,20,000",
      "₹1,20,000+",
      "Flexible / To Discuss",
    ],
  },
  USD: {
    code: "USD",
    symbol: "$",
    label: "USD ($)",
    budgets: [
      "$500 – $1,200",
      "$1,200 – $2,500",
      "$2,500 – $5,000",
      "$5,000+",
      "Flexible / To Discuss",
    ],
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    label: "GBP (£)",
    budgets: [
      "£400 – £1,000",
      "£1,000 – £2,000",
      "£2,000 – £4,000",
      "£4,000+",
      "Flexible / To Discuss",
    ],
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    label: "EUR (€)",
    budgets: [
      "€450 – €1,100",
      "€1,100 – €2,200",
      "€2,200 – €4,500",
      "€4,500+",
      "Flexible / To Discuss",
    ],
  },
  AED: {
    code: "AED",
    symbol: "د.إ",
    label: "AED (د.إ)",
    budgets: [
      "AED 2,000 – 5,000",
      "AED 5,000 – 10,000",
      "AED 10,000 – 20,000",
      "AED 20,000+",
      "Flexible / To Discuss",
    ],
  },
};

interface CountryCallingCode {
  country: string;
  code: string;
  placeholder: string;
  minDigits: number;
  maxDigits: number;
}

const COUNTRY_CALLING_CODES: CountryCallingCode[] = [
  { country: "India", code: "+91", placeholder: "98765 43210", minDigits: 10, maxDigits: 10 },
  { country: "USA", code: "+1", placeholder: "(555) 012-3456", minDigits: 10, maxDigits: 10 },
  { country: "UK", code: "+44", placeholder: "7911 123456", minDigits: 10, maxDigits: 11 },
  { country: "UAE", code: "+971", placeholder: "50 123 4567", minDigits: 9, maxDigits: 9 },
  { country: "Canada", code: "+1", placeholder: "416 555 0199", minDigits: 10, maxDigits: 10 },
  { country: "Australia", code: "+61", placeholder: "412 345 678", minDigits: 9, maxDigits: 10 },
  { country: "Singapore", code: "+65", placeholder: "8123 4567", minDigits: 8, maxDigits: 8 },
  { country: "Germany", code: "+49", placeholder: "151 23456789", minDigits: 10, maxDigits: 12 },
];

const SERVICES_OPTIONS = [
  { id: "web", label: "Website Design & Development", badge: "Core" },
  { id: "software", label: "Custom Software & SaaS", badge: "Engineering" },
  { id: "ai", label: "AI & Workflow Automation", badge: "Intelligent" },
  { id: "branding", label: "Branding & Digital Design", badge: "Identity" },
  { id: "consulting", label: "Full-Stack Overhaul / Retainer", badge: "Comprehensive" },
];

const Contact = () => {
  const [currency, setCurrency] = useState<CurrencyCode>("INR");
  const [budget, setBudget] = useState<string>(CURRENCIES.INR.budgets[1]);

  const [countryCode, setCountryCode] = useState<string>("+91");
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    service: "Website Design & Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCountry =
    COUNTRY_CALLING_CODES.find((c) => c.code === countryCode) || COUNTRY_CALLING_CODES[0];

  const handleCurrencyChange = (newCurrency: CurrencyCode) => {
    setCurrency(newCurrency);
    setBudget(CURRENCIES[newCurrency].budgets[1]);
  };

  const handlePhoneChange = (val: string) => {
    const sanitized = val.replace(/[^\d\s\-()]/g, "");
    setPhone(sanitized);

    const digitsOnly = sanitized.replace(/\D/g, "");
    if (digitsOnly.length === 0) {
      setPhoneError("Phone number is required");
    } else if (digitsOnly.length < selectedCountry.minDigits) {
      setPhoneError(`Enter at least ${selectedCountry.minDigits} digits for ${selectedCountry.country}`);
    } else if (digitsOnly.length > selectedCountry.maxDigits) {
      setPhoneError(`Maximum ${selectedCountry.maxDigits} digits for ${selectedCountry.country}`);
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const digitsOnly = phone.replace(/\D/g, "");
    if (!digitsOnly || digitsOnly.length < selectedCountry.minDigits) {
      setPhoneError(
        `Please enter a valid ${selectedCountry.minDigits}-digit phone number for ${selectedCountry.country}`
      );
      return;
    }

    setIsSubmitting(true);

    const activeCurrency = CURRENCIES[currency];
    const fullPhoneNumber = `${countryCode} ${phone.trim()}`;

    const text = encodeURIComponent(
      `Hello Tushar Labs,\n\nProject Brief Submission:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${fullPhoneNumber} (${selectedCountry.country})\n- Company: ${formData.businessName || "Independent"}\n- Service: ${formData.service}\n- Currency: ${activeCurrency.code} (${activeCurrency.symbol})\n- Estimated Budget: ${budget}\n- Scope Details: ${formData.message}`
    );

    trackFormSubmit({
      form_id: "contact_brief_form",
      form_name: "Project Brief Submission",
      service: formData.service,
      currency: activeCurrency.code,
      budget: budget,
      country: selectedCountry.country,
    });

    const waUrl = `https://wa.me/919315569638?text=${text}`;
    window.open(waUrl, "_blank");

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact-form-section" className="py-16 lg:py-24" style={{ background: "hsl(var(--background))" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── Left Sidebar Info (Studio Credentials & WhatsApp) ── */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <FadeUp>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
                Direct Dialogue
              </span>
              <h2
                className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Let&apos;s build your system right.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you need a performant custom web platform, a production-grade SaaS, or autonomous AI pipelines — we operate with clear milestones, rapid iterations, and complete transparency.
              </p>
            </FadeUp>

            {/* Direct Contact Cards */}
            <FadeUp delay={80} className="flex flex-col gap-3 font-mono text-xs">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center justify-between p-4 rounded-sm border border-border group hover:border-primary transition-colors"
                style={{ background: "hsl(var(--card))" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    @
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Email Inquiry</span>
                    <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-between p-4 rounded-sm border border-border group hover:border-primary transition-colors"
                style={{ background: "hsl(var(--card))" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    #
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Direct Studio Line</span>
                    <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {siteConfig.contact.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </FadeUp>

            {/* Direct WhatsApp Instant Action Card */}
            <FadeUp delay={140}>
              <div
                className="p-6 rounded-sm border border-border relative overflow-hidden"
                style={{ background: "hsl(var(--secondary))" }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase">
                    Instant Channel
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Need immediate technical evaluation?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  Connect straight with our founder on WhatsApp. Share a brief, request an architectural quote, or get answers to quick questions.
                </p>
                <a
                  href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-xs font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity uppercase tracking-wider"
                >
                  <MessageSquare size={14} />
                  <span>Chat on WhatsApp Directly</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </FadeUp>

            {/* Studio Operating Facts */}
            <FadeUp delay={180} className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-sm border border-border" style={{ background: "hsl(var(--card))" }}>
                <Clock size={16} className="text-primary mb-2" />
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block">Working Hours</span>
                <span className="text-xs text-foreground font-semibold">10:00 - 19:00 IST</span>
              </div>
              <div className="p-4 rounded-sm border border-border" style={{ background: "hsl(var(--card))" }}>
                <Globe size={16} className="text-primary mb-2" />
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block">Deployment</span>
                <span className="text-xs text-foreground font-semibold">Delhi &amp; Global Remote</span>
              </div>
            </FadeUp>
          </div>

          {/* ── Right Column (Modern Interactive Brief Form) ── */}
          <div className="lg:col-span-7">
            <FadeUp delay={80}>
              <div
                className="rounded-sm border border-border p-6 sm:p-10 relative"
                style={{ background: "hsl(var(--card))" }}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary pointer-events-none" />
                <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary pointer-events-none" />

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                      Project Brief Dispatched!
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Your project brief was opened via WhatsApp with phone contact <span className="text-foreground font-mono">{countryCode} {phone}</span> and allocated budget in <span className="text-foreground font-mono">{currency} ({CURRENCIES[currency].symbol})</span>. Our team reviews all incoming requirements and follows up within 24 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 text-xs font-mono uppercase tracking-widest font-semibold border border-border text-foreground hover:border-primary hover:text-primary transition-colors rounded-sm"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-1">
                        Step 01 / Requirements
                      </span>
                      <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                        Select Primary Service
                      </h3>
                    </div>

                    {/* Service Chip Selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES_OPTIONS.map((svc) => {
                        const isSelected = formData.service === svc.label;
                        return (
                          <button
                            key={svc.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: svc.label })}
                            className={`p-3.5 rounded-sm border text-left transition-all flex items-center justify-between text-xs font-mono ${
                              isSelected
                                ? "border-primary bg-primary/10 text-foreground font-semibold"
                                : "border-border bg-background/50 text-muted-foreground hover:border-border hover:text-foreground"
                            }`}
                          >
                            <span>{svc.label}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${isSelected ? "bg-primary text-primary-foreground font-bold" : "text-muted-foreground border border-border"}`}>
                              {svc.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2 border-t border-border">
                      <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                        Step 02 / Project Details
                      </span>

                      {/* Name & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="font-mono text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                            Your Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors font-sans"
                          />
                        </div>

                        <div>
                          <label className="font-mono text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                            Company / Startup
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Acme Studio or Website URL"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors font-sans"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="font-mono text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                            Email Address *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="rahul@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors font-sans"
                          />
                        </div>

                        <div>
                          <label className="font-mono text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                            Phone / WhatsApp Number *
                          </label>
                          <div className="flex gap-2">
                            <select
                              value={countryCode}
                              onChange={(e) => {
                                setCountryCode(e.target.value);
                                setPhoneError("");
                              }}
                              className="w-28 shrink-0 bg-background border border-border rounded-sm px-2.5 py-3 text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-mono cursor-pointer"
                              aria-label="Country calling code"
                            >
                              {COUNTRY_CALLING_CODES.map((c) => (
                                <option key={`${c.country}-${c.code}`} value={c.code} className="bg-background text-foreground">
                                  {c.country} ({c.code})
                                </option>
                              ))}
                            </select>

                            <input
                              required
                              type="tel"
                              inputMode="numeric"
                              placeholder={selectedCountry.placeholder}
                              value={phone}
                              onChange={(e) => handlePhoneChange(e.target.value)}
                              className={`w-full bg-background border rounded-sm px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors font-mono ${
                                phoneError ? "border-red-500/80 focus:border-red-500" : "border-border focus:border-primary"
                              }`}
                            />
                          </div>
                          {phoneError && (
                            <div className="flex items-center gap-1.5 text-red-400 text-[11px] font-mono pt-1">
                              <AlertCircle size={12} className="shrink-0" />
                              <span>{phoneError}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Currency & Budget */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-4">
                        <div className="sm:col-span-4">
                          <label className="font-mono text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                            Currency
                          </label>
                          <div className="flex gap-1.5">
                            {(["INR", "USD", "EUR", "AED"] as CurrencyCode[]).map((cur) => (
                              <button
                                key={cur}
                                type="button"
                                onClick={() => handleCurrencyChange(cur)}
                                className={`flex-1 py-2.5 text-xs font-mono rounded-sm border transition-all ${
                                  currency === cur
                                    ? "bg-primary text-primary-foreground font-bold border-primary"
                                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                {cur}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="sm:col-span-8">
                          <label className="font-mono text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                            Estimated Investment Range ({CURRENCIES[currency].symbol})
                          </label>
                          <select
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full bg-background border border-border rounded-sm px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors font-mono cursor-pointer"
                          >
                            {CURRENCIES[currency].budgets.map((b) => (
                              <option key={b} value={b} className="bg-background text-foreground">
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Project Brief */}
                      <div className="mb-6">
                        <label className="font-mono text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                          Project Scope &amp; Target Timeline *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Describe what you want to build, existing bottlenecks, reference sites, or specific deliverables..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none font-sans"
                        />
                      </div>
                    </div>

                    {/* Submit Action */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg shadow-primary/20"
                    >
                      <Sparkles size={16} />
                      <span>{isSubmitting ? "Opening WhatsApp..." : "Submit Project Brief"}</span>
                      <ArrowUpRight size={16} />
                    </button>
                    <p className="text-[11px] font-mono text-center text-muted-foreground">
                      Guaranteed privacy · No spam · Response directly from leadership
                    </p>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
