import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  School,
  Users,
  GraduationCap,
  Calendar,
  Phone,
  Home,
  Mail,
  Clock,
  Facebook,
  Linkedin,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    {
      name: 'About',
      path: '/about',
      icon: School,
      dropdown: [
        { name: 'Our History', path: '/about#history' },
        { name: 'Vision & Mission', path: '/about#vision' },
        { name: "Principal's Message", path: '/about#principal' },
      ],
    },
    {
      name: 'Academics',
      path: '/academics',
      icon: GraduationCap,
      dropdown: [
        { name: 'Curriculum', path: '/academics#curriculum' },
        { name: 'Examination Schedule', path: '/academics#examination' },
      ],
    },
    {
      name: 'Admissions',
      path: '/admissions',
      icon: Users,
      dropdown: [
        { name: 'Procedure', path: '/admissions#procedure' },
        { name: 'Fee Structure', path: '/admissions#fees' },
        { name: 'Apply Now', path: '/admissions#apply' },
      ],
    },
    {
      name: 'Campus Life',
      path: '/campus-life',
      icon: Calendar,
      dropdown: [
        { name: 'Facilities', path: '/campus-life#facilities' },
        { name: 'Events', path: '/campus-life#events' },
        { name: 'Photo Gallery', path: '/campus-life#gallery' },
        { name: 'Student Clubs', path: '/campus-life#clubs' },
      ],
    },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isActive = (path) => location.pathname === path.split('#')[0];

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-emerald-800 text-emerald-100 text-sm py-2 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919451690636" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9451690636</span>
            </a>
            <a href="mailto:ujjwalaglobalacademy@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>ujjwalaglobalacademy@gmail.com</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon–Fri: 8:00 AM – 4:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/16GZcUjk8E/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/ujjwala-global-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-white shadow-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo_ujjwala.jpg"
                alt="Ujjwala Global Academy Logo"
                className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-emerald-100 group-hover:border-emerald-400 transition-colors"
              />
              <div>
                <div className="text-lg font-bold text-emerald-800 leading-tight">Ujjwala Global Academy</div>
                <div className="text-xs text-gray-500 font-medium">Nursery to Class XII • BSB Affiliated</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                          isActive(item.path)
                            ? 'text-emerald-700 bg-emerald-50'
                            : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </Link>
                      {/* Active underline */}
                      {isActive(item.path) && (
                        <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
                      )}

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                          >
                            {item.dropdown.map((d, i) => (
                              <Link
                                key={d.name}
                                to={d.path}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                {d.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="relative">
                      <Link
                        to={item.path}
                        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                          isActive(item.path)
                            ? 'text-emerald-700 bg-emerald-50'
                            : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                      {isActive(item.path) && (
                        <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
                      )}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/admissions#apply"
                className="ml-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm hover:shadow-md"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-emerald-600 transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 max-h-[75vh] overflow-y-auto shadow-lg"
            >
              {/* Mobile contact strip */}
              <div className="bg-emerald-700 text-emerald-100 px-4 py-2 flex flex-col gap-1 text-xs">
                <a href="tel:+919451690636" className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3" /> +91 9451690636
                </a>
                <a href="mailto:ujjwalaglobalacademy@gmail.com" className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3" /> ujjwalaglobalacademy@gmail.com
                </a>
              </div>

              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        isActive(item.path)
                          ? 'text-emerald-700 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                    {item.dropdown && (
                      <div className="ml-9 mt-1 space-y-0.5 border-l-2 border-emerald-100 pl-3">
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.name}
                            to={d.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 text-sm text-gray-600 hover:text-emerald-700 transition-colors"
                          >
                            {d.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-2 pb-1">
                  <Link
                    to="/admissions#apply"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
