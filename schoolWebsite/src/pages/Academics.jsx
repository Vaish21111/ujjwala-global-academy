import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  FileText, 
  Award, 
  Clock,
  CheckCircle,
  GraduationCap,
  Target
} from 'lucide-react';

const Academics = () => {
  const localImages = [
    '/WhatsApp Image 2025-08-19 at 8.18.24 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.29 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.32 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.56 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.57 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.58 PM.jpeg'
  ];

  const curriculum = [
    {
      grade: 'Primary (Grades 1-5)',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art & Craft', 'Physical Education'],
      description: 'Foundation years focusing on basic skills and creative development.'
    },
    {
      grade: 'Middle (Grades 6-8)',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Languages', 'Physical Education'],
      description: 'Building critical thinking and analytical skills.'
    },
    {
  title: "Secondary (Grades 9-10)",
  description: "Strengthening conceptual understanding and preparing students for board examinations.",
  subjects: [
    "English",
    "Mathematics",
    "Science",
    "Social Studies",
    "Computer Science",
    "Physical Education"
  ]
},
{
  title: "Higher Secondary (Grades 11-12)",
  description: "Advanced academic preparation with stream-focused learning and career readiness.",
  subjects: [
    "English",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "Computer Science"
  ]
}
    // {
    //   grade: 'Secondary (Grades 9-10)',
    //   subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Languages', 'Physical Education'],
    //   description: 'Preparing for board examinations with comprehensive study.'
    // },
    // {
    //   grade: 'Higher Secondary (Grades 11-12)',
    //   subjects: ['Science Stream', 'Commerce Stream', 'Arts Stream'],
    //   description: 'Specialized streams preparing for higher education.'
    // }
  ];

  

  const examinationSchedule = [
    {
      exam: 'Mid-Term Examinations',
      date: 'September 15-30',
      description: 'Comprehensive assessment of first half of the academic year.'
    },
    {
      exam: 'Annual Examinations',
      date: 'March 1-15',
      description: 'Final examinations covering the entire academic curriculum.'
    },
    // {
    //   exam: 'Board Examinations (Class 10)',
    //   date: 'February 20-25, 2025',
    //   description: 'State board examinations for secondary students.'
    // },
    // {
    //   exam: 'Board Examinations (Class 12)',
    //   date: 'March 10-25, 2025',
    //   description: 'State board examinations for higher secondary students.'
    // }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Academics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto"
          >
            Excellence in education through comprehensive curriculum and dedicated faculty
          </motion.p>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
                              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Curriculum</h2>
            </div>
            <p className="text-xl text-gray-600">
              Comprehensive academic programs designed for holistic development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((level, index) => (
              <motion.div
                key={level.grade}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{level.grade}</h3>
                <p className="text-gray-600 mb-6">{level.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Subjects:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {level.subjects.map((subject) => (
                      <div key={subject} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      {/* <section id="faculty" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Faculty</h2>
            </div>
            <p className="text-xl text-gray-600">
              Meet our experienced and dedicated teaching professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Experience: {member.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{member.education}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Examination Section */}
      <section id="examination" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
                              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Examination Schedule</h2>
            </div>
            <p className="text-xl text-gray-600">
              Important dates and information about academic assessments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examinationSchedule.map((exam, index) => (
              <motion.div
                key={exam.exam}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exam.exam}
                    </h3>
                    <div className="text-emerald-600 font-medium mb-3">
                      {exam.date}
                    </div>
                    <p className="text-gray-600">
                      {exam.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic Excellence
            </h2>
            <p className="text-xl text-emerald-100">
              Our commitment to quality education and student success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Pass Rate</h3>
              <p className="text-emerald-100">
                98% pass rate in examinations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-emerald-100">
                20+ qualified and experienced teachers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Curriculum</h3>
              <p className="text-emerald-100">
                Updated curriculum aligned with latest standards
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
