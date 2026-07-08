import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
  Star,
  Shield,
  Zap,
  Heart,
  GraduationCap,
} from 'lucide-react';

/* ─── Hero slides ─── */
const heroSlides = [
  {
    image: '/IMG_5897.JPG.jpeg',
    title: 'Ujjwala Global Academy',
    subtitle: 'Empowering Young Minds from Nursery to Class XII',
    cta: 'Apply for Admission',
    ctaPath: '/admissions',
  },
  {
    image: '/IMG-20240815-WA0179 (1).jpg',
    title: 'Excellence in Every Classroom',
    subtitle: 'Modern infrastructure • Expert faculty • Holistic education',
    cta: 'Explore Academics',
    ctaPath: '/academics',
  },
  {
    image: '/Untitled design (42).png',
    title: 'Beyond Academics',
    subtitle: 'Sports, arts, clubs & events that shape well-rounded personalities',
    cta: 'See Campus Life',
    ctaPath: '/campus-life',
  },
];

/* ─── Stats ─── */
const statsTargets = { students: 300, teachers: 20, awards: 5, years: 6 };

/* ─── Why Choose Us ─── */
const features = [
  {
    icon: Award,
    title: 'Academic Excellence',
    description: '98% pass rate with a focus on comprehensive, concept-based learning.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Heart,
    title: 'Holistic Education',
    description: 'Nurturing minds, values, and character for total student development.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Zap,
    title: 'Modern Facilities',
    description: 'Computer lab, CCTV-monitored campus, and state-of-the-art classrooms.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Users,
    title: 'Co-curricular Activities',
    description: 'Art, science club, dance, drama, music, and public speaking for every student.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: "CCTV-monitored campus ensuring every child's safety at all times.",
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: GraduationCap,
    title: 'BSB Affiliated',
    description: 'Affiliated by the National Board of Education (BSB) for quality assurance.',
    color: 'bg-orange-50 text-orange-600',
  },
];

/* ─── Quick access ─── */
const quickAccess = [
  { emoji: '🏛️', title: 'About Us', desc: 'History, vision & leadership', path: '/about', bg: 'from-blue-500 to-blue-600' },
  { emoji: '📚', title: 'Academics', desc: 'Curriculum & exam schedule', path: '/academics', bg: 'from-emerald-500 to-emerald-600' },
  { emoji: '🏫', title: 'Campus Life', desc: 'Facilities, events & gallery', path: '/campus-life', bg: 'from-purple-500 to-purple-600' },
  { emoji: '📝', title: 'Admissions', desc: 'Fees & application form', path: '/admissions', bg: 'from-orange-500 to-orange-600' },
];

/* ─── Latest notices ─── */
const notices = [
  'Admissions Open 2025–26 for all classes Nursery to XII — Apply Now!',
  'Annual Function scheduled — watch the school calendar for date updates.',
  'Mid-Term Examinations: September 15–30. Download the admit card from the office.',
  'Transportation service available across Gosaiganj and nearby areas.',
];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [counts, setCounts] = useState({ students: 0, teachers: 0, awards: 0, years: 0 });
  const statsRef = useRef(null);
  const statsAnimated = useRef(false);

  /* Auto-advance hero */
  useEffect(() => {
    const t = setInterval(() => setSlideIndex((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  /* Count-up animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true;
          const steps = 60;
          const duration = 2000;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts({
              students: Math.floor(statsTargets.students * progress),
              teachers: Math.floor(statsTargets.teachers * progress),
              awards: Math.floor(statsTargets.awards * progress),
              years: Math.floor(statsTargets.years * progress),
            });
            if (step >= steps) {
              clearInterval(timer);
              setCounts(statsTargets);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const slide = heroSlides[slideIndex];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-[92vh] min-h-[560px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-1.5 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Affiliated by National Board of Education (BSB)</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-white/85 mb-8 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={slide.ctaPath}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-500/40 flex items-center justify-center gap-2"
            >
              {slide.cta} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold transition-all backdrop-blur-sm"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats mini bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            {[
              { emoji: '🏫', label: 'Nursery – XII' },
              { emoji: '📚', label: 'BSB Affiliated' },
              { emoji: '👩‍🏫', label: 'Expert Faculty' },
              { emoji: '🎯', label: 'Holistic Growth' },
            ].map((b) => (
              <div key={b.label} className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-sm font-medium">
                <div className="text-xl mb-1">{b.emoji}</div>
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slide controls */}
        <button
          onClick={() => setSlideIndex((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setSlideIndex((p) => (p + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === slideIndex ? 'w-6 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/50'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── FRAUD WARNING MARQUEE ── */}
      <div className="bg-red-700 text-white overflow-hidden py-2.5">
        <div className="warning-marquee">
          <div className="warning-marquee-content text-sm font-semibold">
            🚨 IMPORTANT NOTICE: Some fraudulent websites falsely advertise job vacancies in the name of Ujjwala Global Academy. The school does NOT recruit through third-party portals. Apply ONLY via our official website or phone number. Never pay any recruitment fee.
          </div>
        </div>
      </div>

      {/* ── NOTICES TICKER ── */}
      <div className="bg-amber-50 border-y border-amber-200 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
            📢 NOTICE
          </span>
          <div className="overflow-hidden flex-1">
            <div className="notice-ticker flex gap-12">
              {[...notices, ...notices].map((n, i) => (
                <span key={i} className="text-sm text-gray-700 whitespace-nowrap">
                  • {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── QUICK ACCESS ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Quick Access</h2>
            <p className="text-gray-500">Everything you need, just one click away</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {quickAccess.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={item.path}
                  className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center border border-gray-100 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.bg} rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform`}>
                    {item.emoji}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                  <div className="mt-3 flex items-center justify-center gap-1 text-emerald-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Why Ujjwala?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Ujjwala Global Academy?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center mb-4`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Our Institution at a Glance</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: counts.students, suffix: '+', label: 'Students Enrolled', icon: '👨‍🎓' },
              { value: counts.teachers, suffix: '+', label: 'Expert Teachers', icon: '👩‍🏫' },
              { value: counts.awards, suffix: '+', label: 'Awards Won', icon: '🏆' },
              { value: counts.years, suffix: '+', label: 'Years of Excellence', icon: '⭐' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-extrabold mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLIMPSE OF CAMPUS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Glimpse of Campus Life</h2>
            <p className="text-gray-500">A sneak peek into life at Ujjwala Global Academy</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {['/classroom.jpg', '/computerlab.jpeg', '/sports.jpeg', '/art.jpeg', '/awardceremony.jpeg', '/fancyDress.jpeg', '/annualFunction.jpeg', '/swing.jpeg'].map(
              (img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative group overflow-hidden rounded-xl aspect-square"
                >
                  <img src={img} alt={`Campus ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </motion.div>
              )
            )}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/campus-life#gallery"
              className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-6 py-2.5 rounded-full font-semibold transition-all"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-10 text-white shadow-xl"
          >
            <div className="text-5xl mb-4">🎓</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Begin Your Child's Journey</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
              Admissions open for 2025–26. Take the first step towards a world-class education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/50 hover:border-white text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
              >
                Contact Admissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Visit Our Campus</h2>
            <p className="text-gray-500 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              Kisan Path, Meesa Road, Noorpur Baheta, Gosain Ganj, Lucknow – 226501
            </p>
          </motion.div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Ujjwala Global Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6480121316504!2d81.07759897563882!3d26.81933416409682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be1d42dcc663d%3A0x1f77b89f64f7203c!2sUjjwala%20Global%20Academy!5e0!3m2!1sen!2sin!4v1782394444228!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a href="tel:+919451690636" className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Phone className="w-4 h-4 text-emerald-600" /> +91 9451690636
            </a>
            <a href="mailto:ujjwalaglobalacademy@gmail.com" className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Mail className="w-4 h-4 text-emerald-600" /> ujjwalaglobalacademy@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
