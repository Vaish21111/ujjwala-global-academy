import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Award,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
  Star,
  Shield,
  FlaskConical,
  Bus,
  GraduationCap,
  Monitor,
  Heart,
} from 'lucide-react';

/* ─────────────────────────────────────────
   HERO SLIDES
───────────────────────────────────────── */

const heroSlides = [
  {
    image: '/school building.jpeg',
    eyebrow: 'UJJWALA GLOBAL ACADEMY',
    title: 'Inspiring Excellence,',
    highlight: 'Building Futures',
    subtitle:
      'Nurturing young minds with strong values, modern learning and opportunities to grow with confidence.',
    cta: 'ADMISSION OPEN',
    ctaPath: '/admissions',
  },
  {
    image: '/students.jpg',
    eyebrow: 'ACADEMIC EXCELLENCE',
    title: 'Learning Today,',
    highlight: 'Leading Tomorrow',
    subtitle:
      'A learning environment where curiosity, knowledge and character come together.',
    cta: 'EXPLORE ACADEMICS',
    ctaPath: '/academics',
  },
  {
    image: '/ground.jpeg',
    eyebrow: 'STUDENT LIFE',
    title: 'Beyond Classrooms,',
    highlight: 'Beyond Limits',
    subtitle:
      'Sports, activities and experiences that help every student discover their potential.',
    cta: 'EXPLORE CAMPUS',
    ctaPath: '/campus-life',
  },
];

/* ─────────────────────────────────────────
   FEATURE STRIP
───────────────────────────────────────── */

const highlights = [
  {
    icon: Monitor,
    title: 'Smart Classrooms',
    description: 'Technology-enabled learning',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Qualified and caring mentors',
  },
  {
    icon: Bus,
    title: 'Safe Environment',
    description: 'Security-focused campus',
  },
  {
    icon: Heart,
    title: 'Holistic Growth',
    description: 'Mind • Body • Values',
  },
  {
    icon: FlaskConical,
    title: 'Modern Learning',
    description: 'Practical & experiential',
  },
];

/* ─────────────────────────────────────────
   ACADEMICS
───────────────────────────────────────── */

const academicFeatures = [
  {
    icon: BookOpen,
    title: 'Strong Curriculum',
    description:
      'A structured academic environment focused on concepts, understanding and continuous growth.',
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    description:
      'Dedicated educators who guide students with care, knowledge and individual attention.',
  },
  {
    icon: Star,
    title: 'Innovative Learning',
    description:
      'Activity-based and technology-supported learning that encourages curiosity.',
  },
  {
    icon: Award,
    title: 'Excellence Driven',
    description:
      'A balanced approach to academics, creativity, confidence and life skills.',
  },
];

/* ─────────────────────────────────────────
   FACILITIES
───────────────────────────────────────── */

const facilities = [
  {
    image: '/computer lab.jpeg',
    icon: Monitor,
    title: 'Computer Laboratory',
    description:
      'A dedicated computer lab supporting digital learning, technology skills and practical education.',
  },
  {
    image: '/chemistry lab.jpeg',
    icon: FlaskConical,
    title: 'Chemistry Laboratory',
    description:
      'A practical learning environment where students explore science through experiments.',
  },
  {
    image: '/bio lab.jpeg',
    icon: FlaskConical,
    title: 'Biology Laboratory',
    description:
      'Hands-on scientific learning with equipment and resources for exploration and discovery.',
  },
  {
    image: '/ground.jpeg',
    icon: Heart,
    title: 'Sports & Open Spaces',
    description:
      'Outdoor spaces that encourage physical activity, teamwork and student development.',
  },
];

/* ─────────────────────────────────────────
   GALLERY
───────────────────────────────────────── */

const galleryImages = [
  '/classroom.jpg',
  '/computerlab.jpeg',
  '/sports.jpeg',
  '/art.jpeg',
  '/awardceremony.jpeg',
];

/* ─────────────────────────────────────────
   STATS
───────────────────────────────────────── */

const statsTargets = {
  students: 300,
  teachers: 20,
  awards: 5,
  years: 6,
};

/* ─────────────────────────────────────────
   NOTICES
───────────────────────────────────────── */

const notices = [
  'Admissions are open — contact the school office for details.',
  'Annual Function updates will be announced through the school calendar.',
  'Academic and examination updates will be shared through official school channels.',
  'Transportation facilities are available across selected nearby areas.',
];

/* ─────────────────────────────────────────
   HOME
───────────────────────────────────────── */

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    awards: 0,
    years: 0,
  });

  const statsRef = useRef(null);
  const statsAnimated = useRef(false);

  /* Hero autoplay */

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((previous) => (previous + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  /* Stats animation */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || statsAnimated.current) return;

        statsAnimated.current = true;

        const steps = 60;
        const duration = 1800;
        let step = 0;

        const timer = setInterval(() => {
          step++;

          const progress = Math.min(step / steps, 1);

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
      },
      { threshold: 0.35 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slide = heroSlides[slideIndex];

  return (
    <div className="bg-[#f8f7f2] text-[#18332b]">

      {/* ═════════════════════════════════════
          HERO
      ═════════════════════════════════════ */}

      <section className="relative min-h-[680px] h-[88vh] max-h-[850px] overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        </AnimatePresence>

        {/* Dark overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Hero content */}

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

            <AnimatePresence mode="wait">

              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.65 }}
                className="max-w-3xl text-white"
              >

                <div className="mb-5 flex items-center gap-3">

                  <div className="h-px w-10 bg-[#d9a62e]" />

                  <span className="text-sm font-semibold tracking-[0.25em] text-[#e4b84a]">
                    {slide.eyebrow}
                  </span>

                </div>

                <h1 className="font-serif text-5xl leading-[1.08] sm:text-6xl md:text-7xl lg:text-[82px]">

                  {slide.title}

                  <br />

                  <span className="text-[#e3b23c]">
                    {slide.highlight}
                  </span>

                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                  {slide.subtitle}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <Link
                    to={slide.ctaPath}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#d9a62e] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#18332b] transition hover:bg-[#e7bc51]"
                  >
                    {slide.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 bg-black/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-[#07583f]"
                  >
                    Explore Campus
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

        {/* Previous */}

        <button
          onClick={() =>
            setSlideIndex(
              (previous) =>
                (previous - 1 + heroSlides.length) % heroSlides.length
            )
          }
          className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#07583f]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Next */}

        <button
          onClick={() =>
            setSlideIndex(
              (previous) => (previous + 1) % heroSlides.length
            )
          }
          className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#07583f]"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">

          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === slideIndex
                  ? 'w-8 bg-[#d9a62e]'
                  : 'w-2 bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

        </div>

      </section>

      {/* ═════════════════════════════════════
          FEATURE STRIP
      ═════════════════════════════════════ */}

      <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-4">

        <div className="grid overflow-hidden rounded-xl bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] sm:grid-cols-2 lg:grid-cols-5">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-3 border-b border-gray-100 p-5 last:border-0 lg:border-b-0 lg:border-r"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eaf3ef] text-[#07583f]">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#18332b]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-gray-500">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* ═════════════════════════════════════
          FRAUD NOTICE
      ═════════════════════════════════════ */}

      <div className="mt-8 bg-[#a92d24] py-2.5 text-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-4">

          <div className="warning-marquee whitespace-nowrap text-center text-xs font-semibold sm:text-sm">
            🚨 IMPORTANT NOTICE: Ujjwala Global Academy does not charge recruitment fees.
            Apply only through official school channels.
          </div>

        </div>
      </div>

      {/* ═════════════════════════════════════
          NOTICE BAR
      ═════════════════════════════════════ */}

      <div className="border-b border-[#e8d8ad] bg-[#fff9e8] py-3">

        <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-hidden px-4">

          <span className="shrink-0 bg-[#07583f] px-3 py-1 text-xs font-bold text-white">
            NOTICE
          </span>

          <div className="overflow-hidden">

            <div className="notice-ticker flex gap-14 whitespace-nowrap text-sm text-gray-600">

              {[...notices, ...notices].map((notice, index) => (
                <span key={index}>• {notice}</span>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ═════════════════════════════════════
          ABOUT
      ═════════════════════════════════════ */}

      <section className="py-20 md:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <img
              src="/IMG_5897.JPG.jpeg"
              alt="Ujjwala Global Academy"
              className="h-[430px] w-full rounded-sm object-cover shadow-lg"
            />

            <div className="absolute -bottom-7 -right-5 hidden w-48 bg-[#07583f] p-5 text-white shadow-xl sm:block">

              <GraduationCap className="mb-3 h-8 w-8 text-[#d9a62e]" />

              <p className="font-serif text-xl">
                Growing Minds.
              </p>

              <p className="text-sm text-white/70">
                Building Futures.
              </p>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b48820]">
              Welcome To
            </span>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#07583f] md:text-5xl">
              Ujjwala Global Academy
            </h2>

            <div className="mt-4 h-1 w-14 bg-[#d9a62e]" />

            <p className="mt-7 leading-7 text-gray-600">
              Ujjwala Global Academy is committed to creating a nurturing
              learning environment where students develop academically,
              creatively and personally.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Through dedicated educators, meaningful experiences and a
              strong focus on values, we help young learners grow into
              confident individuals.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 border-y border-gray-200 py-6 sm:grid-cols-4">

              <div>
                <strong className="block font-serif text-2xl text-[#07583f]">
                  300+
                </strong>
                <span className="text-xs text-gray-500">
                  Students
                </span>
              </div>

              <div>
                <strong className="block font-serif text-2xl text-[#07583f]">
                  20+
                </strong>
                <span className="text-xs text-gray-500">
                  Teachers
                </span>
              </div>

              <div>
                <strong className="block font-serif text-2xl text-[#07583f]">
                  6+
                </strong>
                <span className="text-xs text-gray-500">
                  Years
                </span>
              </div>

              <div>
                <strong className="block font-serif text-2xl text-[#07583f]">
                  100%
                </strong>
                <span className="text-xs text-gray-500">
                  Commitment
                </span>
              </div>

            </div>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 bg-[#07583f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#03432f]"
            >
              READ MORE ABOUT US
              <ArrowRight className="h-4 w-4" />
            </Link>

          </motion.div>

        </div>

      </section>

      {/* ═════════════════════════════════════
          ACADEMICS
      ═════════════════════════════════════ */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-12 text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b48820]">
              Academics
            </span>

            <h2 className="mt-3 font-serif text-4xl text-[#07583f] md:text-5xl">
              Explore. Learn. Excel.
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {academicFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group border border-gray-100 bg-[#f8f7f2] p-7 transition-shadow hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07583f] text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#18332b]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#07583f]">
                    Discover
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ═════════════════════════════════════
          STATS
      ═════════════════════════════════════ */}

      <section
        ref={statsRef}
        className="bg-[#07583f] py-16 text-white"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

            {[
              {
                value: counts.students,
                suffix: '+',
                label: 'Students',
              },
              {
                value: counts.teachers,
                suffix: '+',
                label: 'Expert Teachers',
              },
              {
                value: counts.awards,
                suffix: '+',
                label: 'Awards',
              },
              {
                value: counts.years,
                suffix: '+',
                label: 'Years of Excellence',
              },
            ].map((stat) => (

              <div
                key={stat.label}
                className="text-center"
              >

                <div className="font-serif text-4xl text-[#e0b33e] md:text-5xl">
                  {stat.value}
                  {stat.suffix}
                </div>

                <div className="mt-2 text-sm text-white/70">
                  {stat.label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ═════════════════════════════════════
          FACILITIES
      ═════════════════════════════════════ */}

      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b48820]">
                Facilities
              </span>

              <h2 className="mt-3 font-serif text-4xl text-[#07583f] md:text-5xl">
                World-Class Infrastructure
              </h2>

            </div>

            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 self-start border-b border-[#07583f] pb-1 text-sm font-semibold text-[#07583f]"
            >
              VIEW ALL FACILITIES
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden bg-white shadow-sm"
                >

                  <div className="relative h-52 overflow-hidden">

                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#07583f] text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>

                  </div>

                  <div className="p-5">

                    <h3 className="font-bold text-[#18332b]">
                      {facility.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {facility.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ═════════════════════════════════════
          STUDENT LIFE
      ═════════════════════════════════════ */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b48820]">
                Student Life
              </span>

              <h2 className="mt-3 font-serif text-4xl text-[#07583f] md:text-5xl">
                Learning Beyond Classrooms
              </h2>

            </div>

            <Link
              to="/campus-life#gallery"
              className="inline-flex items-center gap-2 self-start border-b border-[#07583f] pb-1 text-sm font-semibold text-[#07583f]"
            >
              VIEW GALLERY
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">

            {galleryImages.map((image, index) => (

              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group aspect-[4/5] overflow-hidden"
              >

                <img
                  src={image}
                  alt={`Student life ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ═════════════════════════════════════
          ADMISSIONS CTA
      ═════════════════════════════════════ */}

      <section className="px-4 py-12">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 bg-[#07583f] px-8 py-10 text-white md:flex-row md:px-12">

          <div className="flex items-center gap-5">

            <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d9a62e] text-[#18332b] sm:flex">
              <GraduationCap className="h-7 w-7" />
            </div>

            <div>

              <p className="font-serif text-2xl md:text-3xl">
                Admissions Open
              </p>

              <p className="mt-1 text-sm text-white/70">
                Give your child the best start for a bright tomorrow.
              </p>

            </div>

          </div>

          <Link
            to="/admissions"
            className="inline-flex shrink-0 items-center gap-2 bg-[#d9a62e] px-7 py-3 font-bold text-[#18332b] transition hover:bg-[#e7bc51]"
          >
            ENQUIRE NOW
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </section>

      {/* ═════════════════════════════════════
          VISIT CAMPUS
      ═════════════════════════════════════ */}

      <section className="bg-[#f8f7f2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-10 text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b48820]">
              Visit Us
            </span>

            <h2 className="mt-3 font-serif text-4xl text-[#07583f]">
              Come Visit Our Campus
            </h2>

            <p className="mx-auto mt-4 flex max-w-2xl items-center justify-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4 text-[#07583f]" />
              Kisan Path, Meesa Road, Noorpur Baheta,
              Gosain Ganj, Lucknow – 226501
            </p>

          </div>

          <div className="overflow-hidden rounded-xl shadow-xl">

            <iframe
              title="Ujjwala Global Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6480121316504!2d81.07759897563882!3d26.81933416409682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be1d42dcc663d%3A0x1f77b89f64f7203c!2sUjjwala%20Global%20Academy!5e0!3m2!1sen!2sin!4v1782394444228!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600">

            <a
              href="tel:+919451690636"
              className="flex items-center gap-2 transition hover:text-[#07583f]"
            >
              <Phone className="h-4 w-4 text-[#07583f]" />
              +91 9451690636
            </a>

            <a
              href="mailto:ujjwalaglobalacademy@gmail.com"
              className="flex items-center gap-2 transition hover:text-[#07583f]"
            >
              <Mail className="h-4 w-4 text-[#07583f]" />
              ujjwalaglobalacademy@gmail.com
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;