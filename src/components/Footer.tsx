import React from "react";
import Link from "next/link";
import { Zap, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon, TwitterIcon } from "./SocialIcons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const socials = [
    { icon: InstagramIcon, href: siteConfig.links.instagram, label: "Instagram" },
    { icon: LinkedinIcon, href: siteConfig.links.linkedin, label: "LinkedIn" },
    { icon: TwitterIcon, href: siteConfig.links.twitter, label: "Twitter" },
    { icon: WhatsAppIcon, href: siteConfig.links.whatsapp, label: "WhatsApp" },
  ];

  return (
    <footer className="pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all">
                <Zap className="text-white w-6 h-6 fill-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                {siteConfig.name.split(" ").slice(0, 2).join(" ")} <span className="text-primary">{siteConfig.name.split(" ").slice(2).join(" ")}</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {siteConfig.navigation.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              {["AI Chatbots", "WhatsApp Automation", "Website Development", "AI Integrations", "Support"].map((link) => (
                <li key={link}>
                  <Link href="#services" className="text-muted-foreground hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                {siteConfig.contact.phone}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                {siteConfig.contact.email}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-muted-foreground hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
