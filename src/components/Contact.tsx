"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

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
    label: "INR — Indian Rupee (₹)",
    budgets: [
      "Under ₹10,000",
      "₹10,000 – ₹25,000",
      "₹25,000 – ₹50,000",
      "₹50,000 – ₹1,00,000",
      "₹1,00,000+",
      "To Be Determined",
    ],
  },
  USD: {
    code: "USD",
    symbol: "$",
    label: "USD — US Dollar ($)",
    budgets: [
      "Under $500",
      "$500 – $1,000",
      "$1,000 – $3,000",
      "$3,000 – $7,500",
      "$7,500+",
      "To Be Determined",
    ],
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    label: "GBP — British Pound (£)",
    budgets: [
      "Under £500",
      "£500 – £1,000",
      "£1,000 – £3,000",
      "£3,000 – £7,500",
      "£7,500+",
      "To Be Determined",
    ],
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    label: "EUR — Euro (€)",
    budgets: [
      "Under €500",
      "€500 – €1,000",
      "€1,000 – €3,000",
      "€3,000 – €7,500",
      "€7,500+",
      "To Be Determined",
    ],
  },
  AED: {
    code: "AED",
    symbol: "د.إ",
    label: "AED — UAE Dirham (د.إ)",
    budgets: [
      "Under AED 2,000",
      "AED 2,000 – 5,000",
      "AED 5,000 – 10,000",
      "AED 10,000 – 25,000",
      "AED 25,000+",
      "To Be Determined",
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

const Contact = () => {
  const [currency, setCurrency] = useState<CurrencyCode>("INR");
  const [budget, setBudget] = useState<string>(CURRENCIES.INR.budgets[2]);

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
    setBudget(CURRENCIES[newCurrency].budgets[2]);
  };

  const handlePhoneChange = (val: string) => {
    // Disallow alphabetic characters
    const sanitized = val.replace(/[^\d\s\-()]/g, "");
    setPhone(sanitized);

    // Validate digit length
    const digitsOnly = sanitized.replace(/\D/g, "");
    if (digitsOnly.length === 0) {
      setPhoneError("Phone number is required");
    } else if (digitsOnly.length < selectedCountry.minDigits) {
      setPhoneError(
        `Enter at least ${selectedCountry.minDigits} digits for ${selectedCountry.country}`
      );
    } else if (digitsOnly.length > selectedCountry.maxDigits) {
      setPhoneError(
        `Maximum ${selectedCountry.maxDigits} digits for ${selectedCountry.country}`
      );
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
      `Hello Tushar Labs,\n\nProject Enquiry:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${fullPhoneNumber} (${selectedCountry.country})\n- Business: ${formData.businessName || "N/A"}\n- Service: ${formData.service}\n- Currency: ${activeCurrency.code} (${activeCurrency.symbol})\n- Estimated Budget: ${budget}\n- Project Details: ${formData.message}`
    );

    const waUrl = `https://wa.me/919667645518?text=${text}`;
    window.open(waUrl, "_blank");

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 border-b border-white/[0.07] bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Metadata / Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-2">
                07 // Project Inquiries
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-editorial">
                Start a Conversation.
              </h2>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              We take on a limited number of projects simultaneously to guarantee uncompromising focus and architectural craft. Fill in your project specifications or initiate direct dialogue via WhatsApp.
            </p>

            {/* Direct details */}
            <div className="space-y-3 pt-3 border-t border-zinc-800 font-mono text-xs">
              <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-2 sm:gap-4 text-zinc-300">
                <span className="w-16 sm:w-20 text-zinc-500 uppercase shrink-0">Direct</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-studio-orange transition-colors break-all">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-2 sm:gap-4 text-zinc-300">
                <span className="w-16 sm:w-20 text-zinc-500 uppercase shrink-0">Phone</span>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-studio-orange transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-2 sm:gap-4 text-zinc-300">
                <span className="w-16 sm:w-20 text-zinc-500 uppercase shrink-0">Location</span>
                <span className="text-zinc-400">{siteConfig.contact.location}</span>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-2 sm:gap-4 text-zinc-300">
                <span className="w-16 sm:w-20 text-zinc-500 uppercase shrink-0">Hours</span>
                <span className="text-zinc-400">{siteConfig.contact.operatingHours}</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 sm:p-5 bg-zinc-900 border border-zinc-800 space-y-2">
              <div className="text-[11px] font-mono text-studio-orange uppercase tracking-wider">
                Immediate Response
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Need quick architectural feedback or an initial timeline estimate? Reach out to our lead engineer directly.
              </p>
              <a
                href={siteConfig.cta.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-white hover:text-studio-orange font-bold transition-colors pt-1"
              >
                <span>Connect via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-raised border border-white/[0.09] rounded-sm p-5 sm:p-8">
            {submitted ? (
              <div className="py-8 sm:py-10 text-center space-y-3">
                <div className="w-10 h-10 mx-auto bg-brand-dim border border-brand-orange/40 flex items-center justify-center text-brand-orange rounded-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Forwarded</h3>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
                  Your project specifications were opened via WhatsApp with phone number {countryCode} {phone} and budget in {currency} ({CURRENCIES[currency].symbol}). We will review your project requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2 bg-zinc-800 text-xs font-mono uppercase text-zinc-300 hover:text-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-void border border-white/[0.09] rounded-sm px-3.5 py-2.5 text-sm text-prose-primary placeholder:text-prose-muted focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Company / Business
                    </label>
                    <input
                      type="text"
                      placeholder="Company name or URL"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-void border border-white/[0.09] rounded-sm px-3.5 py-2.5 text-sm text-prose-primary placeholder:text-prose-muted focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address & Phone Number (Side-by-side on desktop, stacked on mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-void border border-white/[0.09] rounded-sm px-3.5 py-2.5 text-sm text-prose-primary placeholder:text-prose-muted focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  {/* Phone Number Field with Country Code Selector */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => {
                          setCountryCode(e.target.value);
                          setPhoneError("");
                        }}
                        className="w-28 sm:w-32 shrink-0 bg-void border border-white/[0.09] rounded-sm px-2.5 py-2.5 text-xs text-prose-primary focus:outline-none focus:border-brand-orange transition-colors font-mono"
                        aria-label="Country calling code"
                      >
                        {COUNTRY_CALLING_CODES.map((c) => (
                          <option key={`${c.country}-${c.code}`} value={c.code}>
                            {c.country} ({c.code})
                          </option>
                        ))}
                      </select>

                      <div className="relative flex-1">
                        <input
                          required
                          type="tel"
                          inputMode="numeric"
                          placeholder={selectedCountry.placeholder}
                          value={phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          className={`w-full bg-void border rounded-sm ${
                            phoneError ? "border-red-500/80 focus:border-red-500" : "border-white/[0.09] focus:border-brand-orange"
                          } px-3.5 py-2.5 text-sm text-prose-primary placeholder:text-prose-muted focus:outline-none transition-colors font-mono`}
                        />
                      </div>
                    </div>

                    {phoneError && (
                      <div className="flex items-center gap-1.5 text-red-400 text-[11px] font-mono pt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{phoneError}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Currency and Budget Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5 space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Currency
                    </label>
                    <select
                      value={currency}
                      onChange={(e) => handleCurrencyChange(e.target.value as CurrencyCode)}
                      className="w-full bg-void border border-white/[0.09] rounded-sm px-3.5 py-2.5 text-sm text-prose-primary focus:outline-none focus:border-brand-orange transition-colors font-mono"
                    >
                      {Object.values(CURRENCIES).map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-7 space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Estimated Budget ({CURRENCIES[currency].symbol})
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-void border border-white/[0.09] rounded-sm px-3.5 py-2.5 text-sm text-prose-primary focus:outline-none focus:border-brand-orange transition-colors font-mono"
                    >
                      {CURRENCIES[currency].budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-void border border-white/[0.09] rounded-sm px-3.5 py-2.5 text-sm text-prose-primary focus:outline-none focus:border-brand-orange transition-colors"
                  >
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Branding & Digital Design">Branding & Digital Design</option>
                    <option value="Complete Overhaul / Advisory">Complete Overhaul / Advisory</option>
                  </select>
                </div>

                {/* Project Brief */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Project Brief &amp; Scope *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about your objectives, key requirements, target timeline, or reference systems..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-void border border-white/[0.09] rounded-sm px-3.5 py-2.5 text-sm text-prose-primary placeholder:text-prose-muted focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-studio-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-studio-orange-hover transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Project Brief</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
