import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" }
];

const footerLinks = [
  {
    title: "For Companies",
    links: [
      { name: "Request Engineers", href: "#companies" },
      { name: "Vetting Process", href: "#companies" },
      { name: "Success Stories", href: "#" },
      { name: "Pricing", href: "#" }
    ]
  },
  {
    title: "For Engineers",
    links: [
      { name: "Apply Now", href: "#engineers" },
      { name: "Open Positions", href: "#" },
      { name: "Career Resources", href: "#" },
      { name: "Relocation Guide", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EP</span>
              </div>
              <span className="text-white font-semibold text-xl tracking-wide">Engineers Planet</span>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              Bridging global engineering talent with Italian innovation. 
              The only recruitment agency led by Engineers, for Engineers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Piazza IV Novembre, 720124 Milano MI</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contact@techponte.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+39 02 1234 5678</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Engineers Planet. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}