"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageSquare, History, User } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const messages = [
  { id: 1, role: "ai", text: "Hello! 👋 I provide AI Chatbots, WhatsApp Automation, and Website Development. Which one are you interested in?", time: "10:30 AM" },
  { id: 2, role: "user", text: "I need a chatbot for my website.", time: "10:31 AM" },
  { id: 3, role: "ai", text: "Great! Our AI chatbots can help you generate more leads and provide 24/7 support. Would you like to book a free demo?", time: "10:31 AM" },
  { id: 4, role: "user", text: "Yes, please book a demo.", time: "10:32 AM" },
  { id: 5, role: "ai", text: "✅ Demo scheduled successfully! Our team will contact you soon.", time: "10:32 AM", isStatus: true },
];

const LiveDemo = () => {
  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Live Demo</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              See Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">AI In Action</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Experience how our AI chatbot engages with your customers and converts them into leads.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Instant Responses",
                "Smart Conversations",
                "Appointment Booking",
                "Lead Qualification",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link 
              href={siteConfig.cta.demoBotLink}
              target="_blank"
              className="inline-flex px-10 py-4 rounded-xl bg-primary text-white font-bold items-center gap-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all"
            >
              Try It Now
              <Send className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Chat UI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden border-white/20 shadow-2xl flex h-[600px]"
          >
            {/* Sidebar */}
            <div className="w-16 md:w-64 border-r border-white/10 bg-white/5 flex flex-col items-center md:items-start p-4">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="hidden md:block font-bold text-white">AI Assistant</span>
              </div>
              <div className="space-y-4 w-full">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/20 border border-primary/30 text-primary">
                  <MessageSquare className="w-5 h-5" />
                  <span className="hidden md:block text-sm font-bold">New Conversation</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground">
                  <History className="w-5 h-5" />
                  <span className="hidden md:block text-sm font-bold">Conversation History</span>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-white/10 w-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 shrink-0" />
                  <div className="hidden md:block">
                    <p className="text-xs text-muted-foreground">Powered by</p>
                    <p className="text-xs font-bold text-white">{siteConfig.name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-white">AI Assistant</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "ai" ? "bg-primary" : "bg-white/20"}`}>
                      {msg.role === "ai" ? <MessageSquare className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
                    </div>
                    <div className={`p-4 rounded-2xl max-w-[85%] border shadow-lg ${
                      msg.role === "ai" 
                        ? msg.isStatus ? "bg-green-500/20 border-green-500/30 text-green-400" : "bg-white/5 border-white/10 text-white/90" 
                        : "bg-primary/20 border-primary/30 text-white"
                    } ${msg.role === "ai" ? "rounded-tl-none" : "rounded-tr-none"}`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <span className="text-[10px] opacity-40 mt-1 block">{msg.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="p-6 border-t border-white/10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary/50 text-white"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
