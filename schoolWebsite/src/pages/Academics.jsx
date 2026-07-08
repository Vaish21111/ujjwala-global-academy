import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Award, Users, CheckCircle, Target, GraduationCap, Lightbulb } from 'lucide-react';

const curriculum = [
  {
    badge: 'Foundation',
    grade: 'Primary (Grades 1–5)',
    description: 'Foundation years focusing on basic skills, creative development and curiosity-driven learning.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art & Craft', 'Physical Education'],
    color: 'bg-blue-50 border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-700',
    icon: '🌱',
  },
  {
    badge: 'Intermediate',
    grade: 'Middle (Grades 6–8)',
    description: 'Building critical thinking, analytical skills and independent learning habits.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Languages', 'Physical Education'],
    color: 'bg-purple-50 border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-700',
    icon: '📖',
  },
  {
    badge: 'Secondary',
    grade: 'Secondary (Grades 9–10)',
    description: 'Strengthening conceptual understanding and preparing students for board examinations.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Physical Education'],
    color: 'bg-amber-50 border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-700',
    icon: '🔬',
  },
  {
    badge: 'Senior',
    grade: 'Higher Secondary (Grades 11–12)',
    description: 'Advanced academic preparation with stream-focused learning and career readiness.',
    subjects: ['English', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science'],
    color: 'bg-emerald-50 border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    icon: '🎓',
  },
];

const examinationSchedule = [
  {
    exam: 'Mid-Term Examinations',
    date: 'September 15–30',
    description: 'Comprehensive assessment covering the first half of the academic year curriculum.',
    icon: FileText,
    color: 'bg-blue-600',
  },
  {
    exam: 'Annual Examinations',
    date: 'March 1–15',
    description: 'Final examinations covering the entire academic curriculum of the year.',
    icon: Award,
    color: 'bg-emerald-600',
  },
];

const highlights = [
  { icon: Award, label: '98% Pass Rate', desc: 'Consistent academic results year after year.' },
  { icon: Users, label: '20+ Qualified Teachers', desc: 'Experienced and dedicated faculty members.' },
  { icon: BookOpen, label: 'Modern Curriculum', desc: 'Updated curriculum aligned with latest standards.' },
  { icon: Lightbulb, label: 'Practical Learning', desc: 'Hands-on labs and activity-based teaching.' },
];

const Academics = () => {
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
            className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-5 py-1.5 text-sm font-medium mb-6"
          >
            <GraduationCap className="w-4 h-4" /> BSB Affiliated Curriculum
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-5"
          >
            Academics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-2xl mx-auto"
          >
            Excellence in education through a comprehensive curriculum and dedicated faculty
          </motion.p>
        </div>
      </section>

      {/* ── HIGHLIGHTS BAR ── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-3">
                  <h.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="font-bold text-gray-900">{h.label}</div>
                <div className="text-xs text-gray-500 mt-1">{h.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Academic Programmes</h2>
            <p className="text-gray-500 text-lg">Comprehensive academic programs designed for holistic development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.map((level, i) => (
              <motion.div
                key={level.grade}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border-2 ${level.color} p-7 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{level.icon}</div>
                  <div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${level.badgeColor} mr-2`}>
                      {level.badge}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{level.grade}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-5">{level.description}</p>
                <div>
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Subjects Offered</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {level.subjects.map((sub) => (
                      <div key={sub} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAMINATION ── */}
      <section id="examination" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Examinations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Examination Schedule</h2>
            <p className="text-gray-500 text-lg">Important dates and information about academic assessments</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {examinationSchedule.map((exam, i) => (
              <motion.div
                key={exam.exam}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-7 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${exam.color} rounded-xl flex items-center justify-center mb-4`}>
                  <exam.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{exam.exam}</h3>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  📅 {exam.date}
                </div>
                <p className="text-gray-600">{exam.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC EXCELLENCE ── */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Academic Excellence</h2>
            <p className="text-emerald-100 text-lg">Our commitment to quality education and student success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'High Pass Rate', desc: '98% pass rate in examinations — year after year.' },
              { icon: Users, title: 'Expert Faculty', desc: '20+ qualified and experienced teachers on staff.' },
              { icon: BookOpen, title: 'Modern Curriculum', desc: 'Updated curriculum aligned with national standards.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-7 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-emerald-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
