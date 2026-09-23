import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Eye,
  Heart,
  Lightbulb,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

const coreValues = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    desc: 'Building strong foundations through meaningful and purposeful learning.',
  },
  {
    icon: Heart,
    title: 'Character & Integrity',
    desc: 'Encouraging honesty, kindness, discipline and respect in everyday life.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity & Innovation',
    desc: 'Creating an environment where students question, explore and create.',
  },
  {
    icon: Users,
    title: 'Holistic Development',
    desc: 'Nurturing academic, emotional, social and creative growth together.',
  },
];

const highlights = [
  'Student-focused learning environment',
  'Dedicated and supportive educators',
  'Strong emphasis on values and character',
  'Academic and co-curricular development',
];

const About = () => {
  const principalImg = '/principal.png';
  const founderImg = '/baishPapa.jpeg';
  const historyImg = '/IMG_5891.JPG.jpeg';

  return (
    <div className="bg-[#f8f7f2] text-gray-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f8f7f2] pt-16 pb-20 md:pt-24 md:pb-28">

        {/* Decorative shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-100/60" />
        <div className="absolute bottom-0 -left-32 w-72 h-72 rounded-full bg-[#d9b96e]/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full px-5 py-2 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                ABOUT UJJWALA
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-gray-900">
                Where Learning
                <span className="block text-emerald-700">
                  Meets Character.
                </span>
              </h1>

              <p className="mt-7 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Ujjwala Global Academy is a learning community dedicated to
                helping young minds discover their potential, build strong
                character and grow into confident individuals.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-emerald-700/20"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#our-story"
                  className="inline-flex items-center gap-2 border border-gray-300 hover:border-emerald-600 text-gray-700 hover:text-emerald-700 px-7 py-3.5 rounded-full font-semibold transition-all bg-white"
                >
                  Explore Our Story
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -top-5 -left-5 w-full h-full rounded-[2rem] border-2 border-[#d9b96e]/40" />

              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src={historyImg}
                  alt="Ujjwala Global Academy"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="text-2xl font-extrabold text-emerald-700">
                        2020
                      </div>
                      <div className="text-sm text-gray-500">
                        Our journey began
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section id="our-story" className="bg-white py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-[#d9b96e]/15 rounded-full" />

              <img
                src={historyImg}
                alt="Ujjwala Global Academy campus"
                className="relative z-10 rounded-[1.75rem] shadow-xl w-full h-[430px] object-cover"
              />

              <div className="absolute z-20 -bottom-6 -left-5 md:-left-8 bg-emerald-700 text-white rounded-2xl px-6 py-5 shadow-xl">
                <div className="text-3xl font-extrabold">5+</div>
                <div className="text-sm text-emerald-100">
                  Years of Learning
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-bold tracking-[0.18em] text-emerald-700 uppercase">
                Our Story
              </span>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                A place where every child
                <span className="text-emerald-700"> can grow.</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Founded in 2020, Ujjwala Global Academy began with a vision
                of creating an environment where education goes beyond
                textbooks and examinations.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Our approach focuses on developing knowledgeable,
                responsible and confident students. We believe that
                meaningful education combines academic learning with
                character, creativity, discipline and a sense of
                responsibility towards others.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Today, the academy continues to work towards creating a
                supportive learning community where students are encouraged
                to discover their interests, express themselves and work
                towards their aspirations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-9">
                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                  <div className="text-2xl md:text-3xl font-extrabold text-emerald-700">
                    2020
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Founded
                  </div>
                </div>

                <div className="rounded-2xl bg-[#faf7ed] border border-[#eadfbf] p-5">
                  <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    300+
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Students
                  </div>
                </div>

                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                  <div className="text-2xl md:text-3xl font-extrabold text-emerald-700">
                    4+
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Awards
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          WHAT WE BELIEVE
      ====================================================== */}
      <section className="py-20 md:py-24 bg-[#f8f7f2]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-sm font-bold tracking-[0.18em] text-emerald-700 uppercase">
              What We Believe
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Education that shapes
              <span className="text-emerald-700"> more than grades.</span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Our educational philosophy is built around the idea that
              students need knowledge, values and confidence to navigate
              the world around them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {coreValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group bg-white rounded-[1.5rem] p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          VISION + MISSION
      ====================================================== */}
      <section className="py-20 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] bg-emerald-700 text-white p-8 md:p-10"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10" />

              <div className="relative z-10">

                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-7">
                  <Eye className="w-7 h-7" />
                </div>

                <span className="text-sm font-semibold text-emerald-100 uppercase tracking-widest">
                  Our Vision
                </span>

                <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
                  Preparing students for a changing world.
                </h3>

                <p className="text-emerald-50 text-lg leading-relaxed">
                  To nurture creative, confident and responsible individuals
                  who are equipped to learn continuously, think independently
                  and contribute positively to society.
                </p>

              </div>
            </motion.div>


            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative overflow-hidden rounded-[2rem] bg-[#faf7ed] border border-[#eadfbf] p-8 md:p-10"
            >

              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[#d9b96e]/15" />

              <div className="relative z-10">

                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-7 shadow-sm">
                  <Target className="w-7 h-7 text-emerald-700" />
                </div>

                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-widest">
                  Our Mission
                </span>

                <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
                  Learning with purpose.
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide quality education in a supportive environment
                  that encourages intellectual growth, strong values,
                  creativity, discipline and social responsibility.
                </p>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FOUNDER MESSAGE
      ====================================================== */}
      <section className="py-20 md:py-24 bg-[#f8f7f2]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-5 -left-5 w-28 h-28 border-2 border-[#d9b96e]/50 rounded-3xl" />

              <img
                src={founderImg}
                alt="Mr. Pradeep Singh - Founder and Director"
                className="relative z-10 w-full max-w-md mx-auto h-[500px] object-cover rounded-[2rem] shadow-2xl"
              />

              <div className="absolute z-20 -bottom-6 -right-2 md:right-6 bg-emerald-700 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="font-bold">Mr. Pradeep Singh</div>
                <div className="text-sm text-emerald-200">
                  Founder & Director
                </div>
              </div>
            </motion.div>


            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Founder's Message
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-7 leading-tight">
                Building a foundation
                <span className="text-emerald-700"> for life.</span>
              </h2>

              {/* DIFFERENT FOUNDER QUOTE */}
              <blockquote className="relative pl-6 border-l-4 border-[#d9b96e] mb-7">
                <p className="text-xl md:text-2xl font-medium text-emerald-800 italic leading-relaxed">
                  “Education is not merely about preparing a child for a
                  career; it is about preparing them for life.”
                </p>
              </blockquote>

              <p className="text-gray-600 leading-relaxed mb-5">
                Dear Parents, Students and Well-Wishers,
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                When Ujjwala Global Academy was envisioned, the aim was to
                create a learning environment where children could receive
                quality education while also developing confidence,
                discipline and strong values.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We believe that every child deserves opportunities to learn,
                explore and discover their strengths. Our journey continues
                with the support of our students, parents and educators who
                share this vision.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="font-bold text-lg">Mr. Pradeep Singh</div>
                <div className="text-gray-500">
                  Founder & Director, Ujjwala Global Academy
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PRINCIPAL MESSAGE
      ====================================================== */}
      <section id="principal" className="py-20 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >

              <span className="inline-flex items-center gap-2 bg-[#faf7ed] border border-[#eadfbf] text-emerald-700 rounded-full px-4 py-2 text-sm font-semibold">
                <Users className="w-4 h-4" />
                Principal's Message
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-7 leading-tight">
                Every child deserves
                <span className="text-emerald-700"> room to flourish.</span>
              </h2>

              {/* DIFFERENT PRINCIPAL QUOTE */}
              <blockquote className="relative pl-6 border-l-4 border-emerald-500 mb-7">
                <p className="text-xl md:text-2xl font-medium text-emerald-800 italic leading-relaxed">
                  “Every child carries a unique potential; our responsibility
                  is to create the environment where it can flourish.”
                </p>
              </blockquote>

              <p className="text-gray-600 leading-relaxed mb-5">
                Dear Parents and Students,
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                At Ujjwala Global Academy, we strive to create a vibrant
                environment where students feel encouraged to ask questions,
                discover their talents and approach learning with confidence.
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                Our educators work to support both academic development and
                personal growth. We believe that patience, respect,
                responsibility and curiosity are essential parts of a
                student's journey.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Together with parents and our wider school community, we aim
                to help every student take meaningful steps towards their
                aspirations.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="font-bold text-lg">Mrs. Amita Singh</div>
                <div className="text-gray-500">
                  Principal, Ujjwala Global Academy
                </div>
              </div>

            </motion.div>


            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative order-1 lg:order-2"
            >

              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-emerald-100/70 rounded-full" />

              <img
                src={principalImg}
                alt="Mrs. Amita Singh - Principal"
                className="relative z-10 w-full max-w-md mx-auto h-[500px] object-cover rounded-[2rem] shadow-2xl"
              />

              <div className="absolute z-20 -bottom-6 -left-2 md:left-6 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-100">
                <div className="font-bold text-gray-900">
                  Mrs. Amita Singh
                </div>
                <div className="text-sm text-emerald-700">
                  Principal
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          WHY UJJWALA
      ====================================================== */}
      <section className="py-20 md:py-24 bg-[#f8f7f2]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <span className="text-sm font-bold tracking-[0.18em] text-emerald-700 uppercase">
                Why Ujjwala
              </span>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                More than a school.
                <span className="block text-emerald-700">
                  A learning community.
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We aim to create an environment where students can feel
                supported, challenged and inspired throughout their learning
                journey.
              </p>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[2rem] p-7 md:p-9 shadow-sm border border-gray-100"
            >

              <div className="space-y-5">

                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>

                    <p className="text-gray-700 font-medium pt-1.5">
                      {item}
                    </p>
                  </motion.div>
                ))}

              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT CTA
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
              BEGIN THE JOURNEY
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Let's build a brighter future
              <span className="block text-[#e6cf91]">
                together.
              </span>
            </h2>

            <p className="mt-5 text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions about Ujjwala Global Academy? We'd love to
              connect with you and help you learn more about our school.
            </p>

            <div className="mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-emerald-800 hover:bg-[#faf7ed] px-8 py-4 rounded-full font-bold transition-all shadow-xl"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CONTACT INFO
      ====================================================== */}
      <section className="bg-white py-12 border-t border-gray-100">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <div className="text-sm text-gray-400">Visit Us</div>
                <div className="font-semibold text-gray-800">
                  Gosaiganj, Lucknow
                </div>
              </div>
            </div>


            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <div className="text-sm text-gray-400">Call Us</div>
                <div className="font-semibold text-gray-800">
                  +91 9451690636
                </div>
              </div>
            </div>


            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <div className="text-sm text-gray-400">Email Us</div>
                <div className="font-semibold text-gray-800 break-all">
                  ujjwalaglobalacademy@gmail.com
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;