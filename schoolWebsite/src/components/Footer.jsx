import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Linkedin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const usefulLinks = [
    { name: 'Curriculum Overview', path: '/academics#curriculum' },
    { name: 'Fee Structure', path: '/admissions#fees' },
    { name: 'Apply Now', path: '/admissions#apply' },
    { name: 'Photo Gallery', path: '/campus-life#gallery' },
    { name: 'Student Clubs', path: '/campus-life#clubs' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top CTA stripe */}
      <div className="bg-emerald-700 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Admissions Open for 2025–26</p>
            <p className="text-emerald-200 text-sm">Nursery to Class XII · BSB Affiliated</p>
          </div>
          <Link
            to="/admissions#apply"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-2.5 rounded-full font-bold text-sm transition-colors flex-shrink-0"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/logo_ujjwala.jpg"
                alt="Ujjwala Global Academy"
                className="w-14 h-14 rounded-full object-cover border-2 border-emerald-600"
              />
              <div>
                <div className="font-bold text-white leading-tight">Ujjwala Global Academy</div>
                <div className="text-xs text-gray-400">Excellence in Education</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Nurturing minds, building character, and shaping futures since 2020. Affiliated by the
              National Board of Education (BSB).
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/16GZcUjk8E/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/ujjwala-global-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-600 rounded-full group-hover:bg-emerald-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Useful Links</h3>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-600 rounded-full group-hover:bg-emerald-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Kisan Path, Meesa Road, Noorpur Baheta,<br />
                  Gosaiganj, Lucknow – 226501
                </span>
              </div>
              <a href="tel:+919451690636" className="flex gap-3 hover:text-emerald-400 transition-colors group">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 group-hover:text-emerald-400 text-sm transition-colors">
                  +91 9451690636
                </span>
              </a>
              <a href="mailto:ujjwalaglobalacademy@gmail.com" className="flex gap-3 hover:text-emerald-400 transition-colors group">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 group-hover:text-emerald-400 text-sm transition-colors">
                  ujjwalaglobalacademy@gmail.com
                </span>
              </a>
              <div className="flex gap-3">
                <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Mon–Fri: 8:00 AM – 4:00 PM<br />
                  Sat: 9:00 AM – 1:00 PM
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <span>© {year} Ujjwala Global Academy. All rights reserved.</span>
          <span>Gosaiganj, Lucknow, Uttar Pradesh</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
