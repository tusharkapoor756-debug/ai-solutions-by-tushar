"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, BarChart3, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Hero = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById("contact");
    contactElem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden scroll-mt-24">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AI Automation Experts
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 font-heading">
            AI Systems That Help Businesses{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Grow Faster
            </span>
            <span className="inline-block ml-2 text-primary">⚡</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link 
              href={siteConfig.cta.bookDemo}
              target="_blank"
              className="px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all transform hover:-translate-y-1"
            >
              Book Free AI Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Section */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/150?u=${i + 10}`}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-white font-medium">
                Trusted by {siteConfig.stats.trustedBusinesses} businesses
              </p>
              <p className="text-xs text-muted-foreground">to automate & grow</p>
            </div>
          </div>
        </motion.div>

        {/* Right Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-12 lg:mt-0"
        >
          {/* Main Dashboard Mockup */}
          <div className="relative z-10 glass-card p-4 md:p-6 border-white/20 shadow-2xl scale-90 md:scale-100 origin-center">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-white">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <div className="w-1 h-1 rounded-full bg-white/40" />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 shrink-0" />
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[80%] border border-white/10">
                  <p className="text-sm text-white/80 leading-relaxed">
                    Hi! 👋 How can I help you today?
                  </p>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-primary/20 p-3 rounded-2xl rounded-tr-none max-w-[80%] border border-primary/30">
                  <p className="text-sm text-white leading-relaxed">
                    I need help with your services.
                  </p>
                  <span className="text-[10px] text-white/40 mt-1 block">10:30 AM</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary shrink-0" />
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 shrink-0" />
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[80%] border border-white/10">
                  <p className="text-sm text-white/80 leading-relaxed">
                    Sure! I can help you with AI solutions for your business. Would you like to book a demo?
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 z-20 glass-card p-4 border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">24/7</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">AI Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -right-12 z-20 glass-card p-4 border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{siteConfig.stats.leadsIncrease}</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">More Leads</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 left-10 z-20 glass-card p-4 border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{siteConfig.stats.clientSatisfaction}</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
