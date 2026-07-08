import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Clock,
  Target,
  Eye,
  Users,
  Award,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const coreValues = [
  { icon: '🎓', title: 'Academic Excellence', desc: 'Highest standards in teaching and learning.' },
  { icon: '💡', title: 'Innovation', desc: 'Modern methods and creative thinking in education.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honesty, transparency and ethical conduct.' },
  { icon: '🌱', title: 'Holistic Growth', desc: 'Mind, body and character developed together.' },
];

const About = () => {
  const principalImg = '/principal.png';
  const founderImg = '/baishPapa.jpeg';
  const historyImg = '/IMG_5891.JPG.jpeg';

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-1.5 text-sm font-medium mb-6"
          >
            Est. 2020 • Gosaiganj, Lucknow
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-5"
          >
            About Ujjwala Global Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            Nurturing minds, building character, and shaping futures since 2020
          </motion.p>
        </div>
      </section>

      {/* ── HISTORY ── */}
      <section id="history" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              </div>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                Founded in 2020, Ujjwala Global Academy began with a vision to provide excellence in
                education with higher power. What started as a small institution has grown into one of
                the most respected schools in the Gosaiganj region of Lucknow.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Over the years we have consistently maintained high academic standards while fostering
                a nurturing environment that encourages holistic development — earning the trust of
                hundreds of families across the area.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '5+', label: 'Years of Excellence' },
                  { value: '300+', label: 'Happy Students' },
                  { value: '4+', label: 'Awards Won' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100"
                  >
                    <div className="text-2xl font-extrabold text-emerald-700">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src={historyImg}
                alt="School History"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-emerald-600 text-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-extrabold">2020</div>
                <div className="text-xs text-emerald-100">Year Founded</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section id="vision" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Vision & Mission</h2>
            <p className="text-gray-500 text-lg">Our guiding principles that shape the future of education</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-sm border border-emerald-100 p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be a leading educational institution that nurtures creative minds, builds strong
                character, and prepares students to become responsible global citizens who contribute
                positively to society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-sm border border-green-100 p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide comprehensive, quality education that fosters intellectual growth, moral
                values, and social responsibility, enabling students to achieve their full potential
                and become leaders of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER'S MESSAGE ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative inline-block w-full">
                <img
                  src={founderImg}
                  alt="Mr. Pradeep Singh — Founder & Director"
                  className="rounded-2xl shadow-xl w-full max-w-sm mx-auto object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-emerald-700 text-white rounded-2xl p-4 shadow-lg text-center">
                  <div className="font-bold">Mr. Pradeep Singh</div>
                  <div className="text-xs text-emerald-200">Founder & Director</div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Founder's Message
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from Our Founder & Director</h2>
              <blockquote className="text-lg text-emerald-700 italic border-l-4 border-emerald-400 pl-4 mb-5">
                "True education empowers every child to dream, to persevere, and to achieve greatness
                with integrity and empathy."
              </blockquote>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dear Parents, Students and Well-Wishers,
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                When the idea of Ujjwala Global Academy was first envisioned, the goal was simple yet
                meaningful — to create a place where children receive not only quality education but
                also the guidance needed to become confident, responsible and thoughtful individuals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our institution stands on the values of dedication, discipline and continuous
                improvement. Together, let us nurture young minds who will contribute positively to
                their families, communities and the nation.
              </p>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <div className="font-bold text-gray-900">Mr. Pradeep Singh</div>
                <div className="text-gray-500 text-sm">Founder & Director, Ujjwala Global Academy</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPAL'S MESSAGE ── */}
      <section id="principal" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Principal's Message
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">From the Principal's Desk</h2>
              <blockquote className="text-lg text-emerald-700 italic border-l-4 border-emerald-400 pl-4 mb-5">
                "True education empowers every child to dream, to persevere, and to achieve greatness
                with integrity and empathy."
              </blockquote>
              <p className="text-gray-600 mb-4 leading-relaxed">Dear Parents and Students,</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Ujjwala Global Academy, our vision is to inspire lifelong learners and
                compassionate leaders. We strive to create a vibrant environment where curiosity is
                encouraged, talents are discovered, and every child is valued for their unique
                potential.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our dedicated educators are committed to nurturing not only academic achievement but
                also personal growth, ethical values, and social responsibility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Let us work together to build a community of excellence, joy, and respect — where
                every day is a new opportunity to learn, grow, and make a positive difference.
              </p>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <div className="font-bold text-gray-900">Mrs. Amita Singh</div>
                <div className="text-gray-500 text-sm">Principal, Ujjwala Global Academy</div>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src={principalImg}
                alt="Mrs. Amita Singh — Principal"
                className="rounded-2xl shadow-xl w-full max-w-sm mx-auto object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-emerald-700 text-white rounded-2xl p-4 shadow-lg text-center">
                <div className="font-bold">Mrs. Amita Singh</div>
                <div className="text-xs text-emerald-200">Principal</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT BAR ── */}
      <section className="py-14 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="text-emerald-100">We'd love to hear from you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: MapPin, label: 'Address', value: 'Kisan Path, Meesa Road, Noorpur Baheta,\nGosaiganj, Lucknow – 226501' },
              { icon: Phone, label: 'Phone', value: '+91 9451690636' },
              { icon: Mail, label: 'Email', value: 'ujjwalaglobalacademy@gmail.com' },
            ].map((c) => (
              <div key={c.label} className="text-center">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <c.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{c.label}</h3>
                <p className="text-emerald-100 text-sm whitespace-pre-line">{c.value}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-7 py-3 rounded-full font-bold transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
