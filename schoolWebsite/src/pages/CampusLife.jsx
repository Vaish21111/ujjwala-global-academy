import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  Monitor,
  Trophy,
  Camera,
  Palette,
  FlaskConical,
  Music,
  MessageCircle,
  Dumbbell,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const facilities = [
  {
    icon: Building2,
    title: 'Modern Classrooms',
    description:
      'Comfortable and thoughtfully designed spaces that encourage focused learning, interaction and collaboration.',
    image: '/classroom.jpg',
    tag: 'Learning',
  },
  {
    icon: Monitor,
    title: 'Computer Lab',
    description:
      'A dedicated space where students develop digital skills through practical and hands-on learning.',
    image: '/computerlab.jpeg',
    tag: 'Technology',
  },
  {
    icon: Dumbbell,
    title: 'Sports & Play',
    description:
      'Open spaces that encourage students to stay active, participate in sports and develop teamwork.',
    image: '/sports.jpeg',
    tag: 'Sports',
  },
];

const events = [
  {
    title: 'Annual Function',
    description:
      'A celebration of student talent featuring cultural performances, creativity and memorable moments from the academic year.',
    image: '/annualFunction.jpeg',
    category: 'Celebrations',
  },
  {
    title: 'Fancy Dress Competition',
    description:
      'A fun-filled activity encouraging imagination, confidence and creative expression among students.',
    image: '/fancyDress.jpeg',
    category: 'Activities',
  },
  {
    title: 'Cultural Festival',
    description:
      'An opportunity for students to celebrate art, music, dance and the diversity of our school community.',
    image: '/art.jpeg',
    category: 'Culture',
  },
  {
    title: 'Academic Awards',
    description:
      'Recognising students for their academic achievements, dedication and commitment to learning.',
    image: '/awardceremony.jpeg',
    category: 'Achievements',
  },
];

const clubs = [
  {
    name: 'Science Club',
    desc: 'Exploring scientific concepts through experiments and projects.',
    icon: FlaskConical,
  },
  {
    name: 'Art & Craft',
    desc: 'Encouraging creativity through drawing, design and hands-on art.',
    icon: Palette,
  },
  {
    name: 'Music Club',
    desc: 'Discovering the joy of music through performance and practice.',
    icon: Music,
  },
  {
    name: 'Drama Club',
    desc: 'Building confidence and expression through theatre and performance.',
    icon: Users,
  },
  {
    name: 'Debate Club',
    desc: 'Developing communication, public speaking and critical thinking.',
    icon: MessageCircle,
  },
  {
    name: 'Sports Club',
    desc: 'Promoting fitness, teamwork, discipline and sporting spirit.',
    icon: Trophy,
  },
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

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const nextImage = () => {
    setLightboxIndex(
      (prev) => (prev + 1) % galleryImages.length
    );
  };

  return (
    <div className="bg-[#f8f7f2] text-gray-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-100/60" />

        <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-[#d9b96e]/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full px-5 py-2 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                LIFE AT UJJWALA
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                Learn.
                <span className="text-emerald-700"> Explore.</span>
                <span className="block">Belong.</span>
              </h1>

              <p className="mt-7 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Campus life at Ujjwala Global Academy goes beyond the
                classroom — giving students opportunities to discover
                interests, express themselves, participate and create
                lasting memories.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-emerald-700/20"
                >
                  Explore Gallery
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#activities"
                  className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-emerald-600 text-gray-700 hover:text-emerald-700 px-7 py-3.5 rounded-full font-semibold transition-all"
                >
                  Explore Activities
                </a>

              </div>

            </motion.div>


            {/* RIGHT - IMAGE COLLAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="grid grid-cols-2 gap-4">

                <div className="space-y-4 pt-10">

                  <img
                    src="/annualFunction.jpeg"
                    alt="Annual Function"
                    className="w-full h-56 object-cover rounded-[1.75rem] shadow-xl"
                  />

                  <img
                    src="/students.jpg"
                    alt="Students at Ujjwala Global Academy"
                    className="w-full h-40 object-cover rounded-[1.75rem] shadow-xl"
                  />

                </div>


                <div className="space-y-4">

                  <img
                    src="/fancyDress.jpeg"
                    alt="Fancy Dress Competition"
                    className="w-full h-40 object-cover rounded-[1.75rem] shadow-xl"
                  />

                  <img
                    src="/ground.jpeg"
                    alt="School Ground"
                    className="w-full h-56 object-cover rounded-[1.75rem] shadow-xl"
                  />

                </div>

              </div>


              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3 whitespace-nowrap">

                <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>

                <div>
                  <div className="font-bold text-gray-900">
                    A vibrant community
                  </div>

                  <div className="text-sm text-gray-500">
                    Learn, participate & grow
                  </div>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="text-sm font-bold tracking-[0.18em] text-emerald-700 uppercase">
              More Than A Classroom
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Experiences that become
              <span className="text-emerald-700"> memories.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From academic achievements and cultural celebrations to
              creative activities and sports, students have opportunities
              to discover new interests and build confidence outside the
              classroom.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ====================================================== */}
      <section
        id="facilities"
        className="py-20 md:py-24 bg-[#f8f7f2]"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-emerald-700 uppercase">
                Our Spaces
              </span>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold">
                Spaces designed for
                <span className="text-emerald-700"> growth.</span>
              </h2>

            </div>

            <p className="text-gray-500 max-w-md leading-relaxed">
              Our campus provides spaces that support learning,
              exploration, collaboration and physical activity.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {facilities.map((facility, index) => {

              const Icon = facility.icon;

              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -7 }}
                  className="group bg-white rounded-[1.75rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                >

                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      {facility.tag}
                    </span>

                  </div>


                  <div className="p-7">

                    <div className="flex items-center gap-4 mb-4">

                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-bold">
                        {facility.title}
                      </h3>

                    </div>

                    <p className="text-gray-500 leading-relaxed">
                      {facility.description}
                    </p>

                  </div>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          EVENTS
      ====================================================== */}
      <section
        id="activities"
        className="py-20 md:py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <span className="text-sm font-bold tracking-[0.18em] text-emerald-700 uppercase">
              School Life
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Moments worth
              <span className="text-emerald-700"> celebrating.</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg">
              School events give students a chance to perform,
              participate, compete and celebrate together.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

            {events.map((event, index) => (

              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group bg-[#f8f7f2] rounded-[1.75rem] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >

                <div className="grid grid-cols-1 sm:grid-cols-2">

                  <div className="h-64 sm:h-full overflow-hidden">

                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                  </div>


                  <div className="p-7 flex flex-col justify-center">

                    <span className="inline-block self-start bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                      {event.category}
                    </span>

                    <h3 className="text-2xl font-bold mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed">
                      {event.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CLUBS
      ====================================================== */}
      <section className="py-20 md:py-24 bg-[#f8f7f2]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">

            <div className="lg:sticky lg:top-24">

              <span className="text-sm font-bold tracking-[0.18em] text-emerald-700 uppercase">
                Student Activities
              </span>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                Find something
                <span className="block text-emerald-700">
                  you love.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Clubs and extracurricular activities allow students to
                explore interests beyond academics while developing
                confidence, teamwork and communication skills.
              </p>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {clubs.map((club, index) => {

                const Icon = club.icon;

                return (
                  <motion.div
                    key={club.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                  >

                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold mb-2">
                      {club.name}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {club.desc}
                    </p>

                  </motion.div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ====================================================== */}
      <section
        id="gallery"
        className="py-20 md:py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">

            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-emerald-700 uppercase">
                Photo Gallery
              </span>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold">
                A glimpse into
                <span className="text-emerald-700"> campus life.</span>
              </h2>

            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Camera className="w-5 h-5 text-emerald-700" />
              <span>Click any photo to explore</span>
            </div>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {galleryImages.map((image, index) => (

              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                onClick={() => openLightbox(index)}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 || index === 5
                    ? 'md:row-span-2'
                    : ''
                }`}
              >

                <img
                  src={image}
                  alt={`Ujjwala campus life ${index + 1}`}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    index === 0 || index === 5
                      ? 'h-full min-h-[320px]'
                      : 'h-52'
                  }`}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md rounded-full p-4">
                    <Camera className="w-6 h-6 text-white" />
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ====================================================== */}
      {lightboxIndex !== null && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >

          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>


          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>


          <motion.img
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={galleryImages[lightboxIndex]}
            alt={`Gallery ${lightboxIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />


          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>


          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>

        </motion.div>
      )}


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-emerald-800 py-20">

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />

        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-[#d9b96e]/10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-block bg-white/10 border border-white/20 text-emerald-100 rounded-full px-5 py-2 text-sm font-semibold mb-6">
              LIFE AT UJJWALA
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Every day is an opportunity
              <span className="block text-[#e6cf91]">
                to learn something new.
              </span>
            </h2>

            <p className="mt-5 text-emerald-100 text-lg max-w-2xl mx-auto">
              Discover a school environment where learning,
              participation and personal growth go hand in hand.
            </p>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default CampusLife;