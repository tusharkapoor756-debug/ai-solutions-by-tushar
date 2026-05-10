"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative glass-card p-12 lg:p-20 border-white/20 overflow-hidden text-center"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-[120px] -z-10" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10 animate-pulse-slow" />

          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight font-heading">
            Ready To Automate <br className="hidden lg:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">Your Business?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's build smart AI systems that save time and generate more revenue for you. 
            Join the future of business automation today.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href={siteConfig.cta.bookDemo}
              target="_blank"
              className="px-10 py-4 rounded-xl bg-primary text-white font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all transform hover:-translate-y-1"
            >
              Book Free AI Demo
              <Zap className="w-5 h-5" />
            </Link>
            <Link 
              href="#contact"
              className="px-10 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              Contact Us
              <MessageSquare className="w-5 h-5" />
            </Link>
          </div>

          {/* Floating Element */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 opacity-20"
          >
            <div className="w-32 h-32 border border-primary/30 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 border border-secondary/30 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
