import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Target, 
  Eye, 
  Users, 
  Award, 
  BookOpen,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const About = () => {
  const localImages = [
    '/WhatsApp Image 2025-08-19 at 8.18.24 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.29 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.32 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.56 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.57 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.58 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.32.24 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.32.25 PM.jpeg',
    '/principal.png',
    './baishPapa.jpeg',
    './IMG_5891.JPG.jpeg'
  ];

  // const managementTeam = [
  //   {
  //     name: 'Dr. Sarah Johnson',
  //     position: 'Principal',
  //     image: localImages[0],
  //     description: 'Leading with vision and dedication for over 10 years.'
  //   },
  //   {
  //     name: 'Mr. Michael Chen',
  //     position: 'Vice Principal',
  //     image: localImages[1],
  //     description: 'Overseeing academic excellence and student development.'
  //   },
  //   {
  //     name: 'Mrs. Emily Rodriguez',
  //     position: 'Head of Academics',
  //     image: localImages[2],
  //     description: 'Ensuring quality education and curriculum development.'
  //   }
  // ];

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
            About Ujjwala Global Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto"
          >
            Nurturing minds, building character, and shaping futures since 2020
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our History</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Ujjwala Global Academy began with a vision to provide excellence in education 
                with higher power. What started as a small institution has grown into one of the most 
                respected educational establishments in the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have consistently maintained high academic standards while fostering 
                a nurturing environment that encourages holistic development. Our commitment to quality 
                education has earned us numerous accolades and the trust of thousands of parents.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">5+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">300+</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">4+</div>
                  <div className="text-gray-600">Awards</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={localImages[10]}
                alt="School History"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vision & Mission
            </h2>
            <p className="text-xl text-gray-600">
              Our guiding principles that shape the future of education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600">
                To be a leading educational institution that nurtures creative minds, builds strong 
                character, and prepares students to become responsible global citizens who contribute 
                positively to society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600">
                To provide comprehensive, quality education that fosters intellectual growth, moral 
                values, and social responsibility, enabling students to achieve their full potential 
                and become leaders of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="principal" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                 Message from Our Founder & Director
              </h2>
              <blockquote className="text-lg text-gray-600 mb-6 italic">
                "True education empowers every child to dream, to persevere, and to achieve greatness with integrity and empathy."
              </blockquote>
              <p className="text-lg text-gray-600 mb-6">
                Dear Parents, Students and Well-Wishers,
              </p>
              <p className="text-lg text-gray-600 mb-6">
                When the idea of Ujjwala Global Academy was first envisioned, the goal was simple yet meaningful, to create a place where children receive not only quality education but also the guidance needed to become confident, responsible and thoughtful individuals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                In today’s rapidly changing world, education must go beyond academic excellence. It should develop curiosity, resilience, leadership and a sense of responsibility toward society. At Ujjwala Global Academy, we aim to build a learning culture where students are encouraged to think independently, explore their abilities and prepare themselves for the challenges of the future.
              </p>
              <p className="text-lg text-gray-600">
                Our institution stands on the values of dedication, discipline and continuous improvement. With the support of our teachers, parents and the entire school community, we strive to provide opportunities that help every student grow intellectually, morally and socially. I firmly believe that the true success of a school is reflected in the character and achievements of its students. Together, let us nurture young minds who will contribute positively to their families, communities and the nation.
              </p>
              <div className="mt-6">
                <div className="font-bold text-gray-900">Mr. Pradeep Singh</div>
                <div className="text-gray-600">Founder & Director, Ujjwala Global Academy</div>
              </div>
            </motion.div><motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={localImages[9]}
                alt="Principal"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-4 rounded-lg">
                <div className="text-sm font-medium">Founder</div>
                <div className="text-lg font-bold">Mr. Pradeep Singh</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section id="principal" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={localImages[8]}
                alt="Principal"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-4 rounded-lg">
                <div className="text-sm font-medium">Principal</div>
                <div className="text-lg font-bold">Mrs. Amita Singh</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From the Principal's Desk
              </h2>
              <blockquote className="text-lg text-gray-600 mb-6 italic">
                "True education empowers every child to dream, to persevere, and to achieve greatness with integrity and empathy."
              </blockquote>
              <p className="text-lg text-gray-600 mb-6">
                Dear Parents and Students,
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At Ujjwala Global Academy, our vision is to inspire lifelong learners and compassionate leaders. We strive to create a vibrant environment where curiosity is encouraged, talents are discovered, and every child is valued for their unique potential.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our dedicated educators are committed to nurturing not only academic achievement but also personal growth, ethical values, and social responsibility. We believe that true success comes from a balance of knowledge, character, and kindness.
              </p>
              <p className="text-lg text-gray-600">
                Let us work together to build a community of excellence, joy, and respect—where every day is a new opportunity to learn, grow, and make a positive difference.
              </p>
              <div className="mt-6">
                <div className="font-bold text-gray-900">Mrs. Amita Singh</div>
                <div className="text-gray-600">Principal, Ujjwala Global Academy</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      {/* <section id="management" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Management Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated leaders who guide our institution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
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
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Info Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-emerald-100">
              We'd love to hear from you
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
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-emerald-100">
              Kisan Path, Meesa Road,Noorpur Baheta,<br />
              Gosaiganj, Lucknow - 226501
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-emerald-100">
              +91 9451690636
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-emerald-100">
              ujjwalaglobalacademy@gmail.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
