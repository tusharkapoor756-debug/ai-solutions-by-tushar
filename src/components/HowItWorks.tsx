"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Bot, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Customer Contacts You",
    description: "Your customer reaches out via website, WhatsApp, or any platform.",
    icon: User,
    color: "bg-purple-500",
  },
  {
    number: "02",
    title: "AI Responds Instantly",
    description: "Our AI system replies instantly, answers questions, and engages like a human.",
    icon: Bot,
    color: "bg-blue-500",
  },
  {
    number: "03",
    title: "Leads Get Converted",
    description: "AI qualifies leads, books appointments, and helps you close more deals.",
    icon: TrendingUp,
    color: "bg-green-500",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">How It Works</h2>
          <h3 className="text-4xl lg:text-5xl font-bold font-heading">
            Simple Process. <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">Powerful Results.</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Outer Glow Ring */}
                  <div className={`absolute -inset-4 rounded-full ${step.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-black text-white/5 select-none">
                    {step.number}
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
