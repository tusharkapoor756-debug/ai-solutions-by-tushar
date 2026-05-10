"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Globe, ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import Link from "next/link";

const services = [
  {
    title: "AI Chatbots",
    description: "AI-powered chatbots for websites that automate customer support, lead capture, and business inquiries.",
    icon: Bot,
    color: "from-purple-500 to-primary",
    linkText: "Book Free AI Demo",
    href: siteConfig.cta.bookDemo,
  },
  {
    title: "WhatsApp Automation",
    description: "Automate replies, follow-ups, reminders, and customer communication using smart WhatsApp workflows.",
    icon: MessageSquare,
    color: "from-green-500 to-emerald-600",
    linkText: "Book Automation Call",
    href: siteConfig.cta.bookDemo,
  },
  {
    title: "Website Development",
    description: "Modern high-converting business websites designed to generate leads and build trust.",
    icon: Globe,
    color: "from-blue-500 to-secondary",
    linkText: "Discuss Your Website",
    href: siteConfig.cta.bookDemo,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Services</h2>
          <h3 className="text-4xl lg:text-5xl font-bold font-heading">
            Smart <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">AI Solutions</span> For Your Business
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Background & Border */}
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] -z-10 transition-all duration-300 group-hover:from-primary/30 group-hover:to-transparent" />
              <div className="glass-card p-10 h-full flex flex-col items-center text-center group-hover:-translate-y-2 transition-all duration-500 border-white/5 group-hover:border-primary/20">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors font-heading">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <Link 
                  href={service.href}
                  target="_blank"
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors cursor-pointer"
                >
                  {service.linkText}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Hover Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[80px] -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
