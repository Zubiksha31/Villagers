import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, Leaf } from "lucide-react";
import React from "react";
import VillagersLogo from "/VillagersLogo.png"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-emerald-600 via-emerald-700 to-green-950 text-white pt-20 pb-10 overflow-hidden">
      {/* Glowing eco shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-lime-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10"
      >
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
          <img src={VillagersLogo} alt="Villagers Global Logo" className="w-8 h-8" />
            <h2 className="text-2xl font-bold text-white">Villagers Glob</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            Building a sustainable tomorrow with every eco-friendly choice you make.  
            Let’s make the world greener, one step at a time 🌱
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-lime-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#why" className="hover:text-white transition">Why Villa Glob</a></li>
            <li><a href="#awards" className="hover:text-white transition">Awards & Values</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-lime-300 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-lime-400" />
              +91 9092117788
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-lime-400" />
              Orders@villagersglobal.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-lime-300 mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-lime-400/20 transition"
            >
              <Facebook className="text-lime-300 w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-lime-400/20 transition"
            >
              <Instagram className="text-lime-300 w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-lime-400/20 transition"
            >
              <Linkedin className="text-lime-300 w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-16 text-center border-t border-emerald-700 pt-6 text-sm text-gray-400"
      >
        © {new Date().getFullYear()} <span className="text-lime-300 font-medium">Villagers Global</span>.  
        All Rights Reserved 🌿
      </motion.div>
    </footer>
  );
};

export default Footer;
