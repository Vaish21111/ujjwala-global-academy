import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building,
  Calendar,
  Users,
  Monitor,
  Trophy,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const facilities = [
  {
    icon: Building,
    title: 'Modern Classrooms',
    description:
      'Spacious, well-ventilated classrooms equipped with modern teaching aids and comfortable seating for an ideal learning environment.',
    image: '/classroom.jpg',
    tag: 'Infrastructure',
  },
  {
    icon: Monitor,
    title: 'Computer Lab',
    description:
      'State-of-the-art computer laboratory with the latest hardware and software for practical, hands-on digital learning.',
    image: '/computerlab.jpeg',
    tag: 'Technology',
  },
  {
    icon: Trophy,
    title: 'Sports Complex',
    description:
      'Multi-purpose sports facilities including a large playground, indoor games area, and equipment for fitness and team sports.',
    image: '/sports.jpeg',
    tag: 'Sports',
  },
];

const events = [
  {
    title: 'Annual Function',
    description:
      "Showcasing cultural performances, creative talents, and the year's finest achievements of students across all grades.",
    image: '/annualFunction.jpeg',
    emoji: '🎭',
  },
  {
    title: 'Fancy Dress Competition',
    description:
      'Highlighting creativity, imagination, and confidence of young participants who dress up as their favourite characters.',
    image: '/fancyDress.jpeg',
    emoji: '🎨',
  },
  {
    title: 'Cultural Festival',
    description:
      'A grand celebration of arts, music, dance, and cultural diversity that brings the whole school community together.',
    image: '/art.jpeg',
    emoji: '🎵',
  },
  {
    title: 'Academic Awards Ceremony',
    description:
      'Recognition and celebration of academic excellence, outstanding achievements, and exemplary conduct.',
    image: '/awardceremony.jpeg',
    emoji: '🏆',
  },
];

const clubs = [
  { name: 'Science Club', desc: 'Exploring scientific concepts through experiments and projects.', members: 45, icon: '🔬', color: 'bg-blue-50 border-blue-100' },
  { name: 'Art & Craft Club', desc: 'Expressing creativity through various art forms and crafts.', members: 38, icon: '🎨', color: 'bg-pink-50 border-pink-100' },
  { name: 'Music Club', desc: 'Learning and performing various musical instruments and vocals.', members: 52, icon: '🎵', color: 'bg-purple-50 border-purple-100' },
  { name: 'Drama Club', desc: 'Developing acting skills and performing theatrical productions.', members: 30, icon: '🎭', color: 'bg-amber-50 border-amber-100' },
  { name: 'Debate Club', desc: 'Enhancing public speaking and critical thinking skills.', members: 42, icon: '💬', color: 'bg-orange-50 border-orange-100' },
  { name: 'Sports Club', desc: 'Training in various sports and physical fitness activities.', members: 65, icon: '⚽', color: 'bg-emerald-50 border-emerald-100' },
];

const galleryImages = [
  '/classroom.jpg',
  '/computerlab.jpeg',
  '/sports.jpeg',
  '/art.jpeg',
  '/awardceremony.jpeg',
  '/fancyDress.jpeg',
  '/annualFunction.jpeg',
  '/swing.jpeg',
];

const CampusLife = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);
  const nextImage = () => setLightboxIndex((p) => (p + 1) % galleryImages.length);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/15 border border-white/25 rounded-full px-5 py-1.5 text-sm font-medium mb-6"
          >
            🏫 Experience Campus Life
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-5"
          >
            Campus Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            Experience the vibrant and enriching campus environment at Ujjwala Global Academy
          </motion.p>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section id="facilities" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Facilities</h2>
            <p className="text-gray-500 text-lg">
              State-of-the-art infrastructure for comprehensive learning and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {facilities.map((facility, i) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    {facility.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <facility.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              School Events
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Events & Activities</h2>
            <p className="text-gray-500 text-lg">
              Exciting events and activities throughout the academic year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row"
              >
                <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="text-2xl mb-2">{event.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT CLUBS ── */}
      <section id="clubs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Extracurricular
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Student Clubs</h2>
            <p className="text-gray-500 text-lg">
              Join a club, discover a passion, and build lifelong friendships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club, i) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl border-2 ${club.color} p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-3xl mb-3">{club.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{club.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{club.desc}</p>
                <div className="flex items-center gap-2 text-sm text-emerald-700 font-semibold">
                  <Users className="w-4 h-4" />
                  {club.members} members
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Photo Gallery</h2>
            <p className="text-gray-500 text-lg">Glimpses of life at Ujjwala Global Academy</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={image}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 bg-white/10 hover:bg-white/25 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.img
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={galleryImages[lightboxIndex]}
            alt={`Gallery ${lightboxIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}

      {/* ── HIGHLIGHTS BAR ── */}
      <section className="py-14 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">What Makes Our Campus Special</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { icon: Users, title: 'Diverse Community', desc: 'Students from various backgrounds creating a rich learning environment.' },
              { icon: Trophy, title: 'Achievement Focus', desc: 'Recognition and celebration of student achievements and talents.' },
              { icon: Calendar, title: 'Year-Round Activities', desc: 'Continuous engagement through events, competitions, and celebrations.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-7 backdrop-blur-sm"
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-emerald-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
