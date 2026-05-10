"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Clock, Globe, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Faster Response",
    description: "Respond instantly and never miss a customer.",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "More Conversions",
    description: "Convert more leads into paying customers.",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    title: "Save Time",
    description: "Automate repetitive tasks and save valuable time.",
    icon: Clock,
    color: "text-blue-500",
  },
  {
    title: "Modern Websites",
    description: "High-converting websites that build trust.",
    icon: Globe,
    color: "text-purple-500",
  },
  {
    title: "24/7 AI Assistance",
    description: "AI works 24/7 while you focus on growth.",
    icon: ShieldCheck,
    color: "text-emerald-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
          <h3 className="text-4xl lg:text-5xl font-bold font-heading">
            We Help <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">Businesses Grow</span> Smarter
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all group"
            >
              <div className={`mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
