import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  Play
} from 'lucide-react';


const Home = () => {
  const localImages = [
    '/WhatsApp Image 2025-08-19 at 8.18.24 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.29 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.32 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.56 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.57 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.18.58 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.32.24 PM.jpeg',
    '/WhatsApp Image 2025-08-19 at 8.32.25 PM.jpeg'
  ];
  
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    awards: 0,
    years: 0
  });
const facts = [
  "Reading for 20 minutes daily improves vocabulary and comprehension.",
  "Education is the passport to the future.",
  "Curiosity is the first step toward learning.",
  "Sports help students develop teamwork and leadership.",
  "Every child has unique talents waiting to be discovered.",
  "Small daily efforts lead to big achievements.",
  "Learning never stops, even outside the classroom.",
  "Good habits built in school last a lifetime.",
  "Creativity and knowledge go hand in hand.",
  "Success begins with consistent practice."
];

const [factIndex, setFactIndex] = useState(0);
const [showFunFact, setShowFunFact] = useState(true);
const scrollTimeoutRef = useRef(null);

const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 300], [0, 100]);
const opacity = useTransform(scrollY, [0, 300], [1, 0]);
useEffect(() => {
  const interval = setInterval(() => {
    setFactIndex((prev) => (prev + 1) % facts.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  useEffect(() => {
    const animateCounts = () => {
      const targets = { students: 300, teachers: 20, awards: 5, years: 6 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let current = { students: 0, teachers: 0, awards: 0, years: 0 };

      const timer = setInterval(() => {
        Object.keys(targets).forEach(key => {
          const target = targets[key];
          const increment = target / steps;
          current[key] = Math.min(current[key] + increment, target);
        });

        setCounts({
          students: Math.floor(current.students),
          teachers: Math.floor(current.teachers),
          awards: Math.floor(current.awards),
          years: Math.floor(current.years)
        });

        if (current.students >= targets.students) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounts();
          observer.unobserve(entry.target);
        }
      });
    });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const quickAccessItems = [
    {
      icon: '🏛️',
      title: 'About Us',
      description: 'Our history and mission',
      path: '/about',
      color: 'bg-blue-500'
    },
    {
      icon: '📅',
      title: 'Curriculum',
      description: 'Course Plan',
      path: '/academics',
      color: 'bg-green-500'
    },
    {
      icon: '🏫',
      title: 'Facilities',
      description: 'Modern infrastructure',
      path: '/campus-life',
      color: 'bg-purple-500'
    },
    // {
    //   icon: '🎓',
    //   title: 'Alumni',
    //   description: 'Our proud graduates',
    //   path: '/about',
    //   color: 'bg-orange-500'
    // },
    {
      icon: '📞',
      title: 'Contact',
      description: 'Get in touch',
      path: '/contact',
      color: 'bg-red-500'
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Consistently achieving outstanding results with a focus on comprehensive learning and skill development.'
    },
    {
      icon: Users,
      title: 'Holistic Education',
      description: 'We focus on the integral development and total formation of our students, nurturing their minds, values, and character.'
    },
    {
      icon: BookOpen,
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure including computer lab, auditorium, library, and CCTV monitoring for student safety.'
    },
    {
      icon: Calendar,
      title: 'Co-curricular Activities',
      description: 'Diverse activities including art, science club, dance, drama, music, and public speaking to develop well-rounded personalities.'
    }
  ];

  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 to-emerald-800/90"
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/IMG_5897.JPG.jpeg)`
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Ujjwala Global Academy
          </motion.h1>
          
          {/* Fun Fact Generator - Moved to bottom right corner */}
          
          <div className="mb-8">
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-xl md:text-2xl text-emerald-100 font-medium"
  >
    Empowering Young Minds from Nursery to Class XII
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="mt-4 inline-block bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2"
  >
    <span className="text-white font-semibold">
      Affiliated by National Board of Education (BSB)
    </span>
  </motion.div>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="mt-4 text-lg text-emerald-100"
  >
    Academic Excellence • Character Building • Future Readiness
  </motion.p>
</div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/admissions"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </motion.div>
        

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
>
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
    <div className="text-2xl mb-2">🏫</div>
    <div className="text-sm font-semibold">Nursery - XII</div>
  </div>

  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
    <div className="text-2xl mb-2">📚</div>
    <div className="text-sm font-semibold">BSB Affiliated</div>
  </div>

  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
    <div className="text-2xl mb-2">👩‍🏫</div>
    <div className="text-sm font-semibold">Expert Faculty</div>
  </div>

  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
    <div className="text-2xl mb-2">🎯</div>
    <div className="text-sm font-semibold">Holistic Development</div>
  </div>
</motion.div>

</div>
</section>
        
      

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need, just one click away
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16  rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <Link
                  to={item.path}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ujjwala Global Academy?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex space-x-4"
              >
                <div className="flex-shrink-0">
                                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{counts.students}+</div>
              <div className="text-emerald-100">Students Enrolled</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{counts.teachers}+</div>
              <div className="text-emerald-100">Expert Teachers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{counts.awards}+</div>
              <div className="text-emerald-100">Awards Won</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{counts.years}+</div>
              <div className="text-emerald-100">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Events
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with what's happening at Ujjwala Global Academy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-emerald-600 font-medium mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    {event.description}
                  </p>
                  <p className="text-gray-600">
                    {event.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Begin Your Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-8 "
          >
            Take the first step towards excellence in education.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/admissions"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Location Map Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Visit Our Campus
      </h2>
      <p className="text-lg text-gray-600">
        Kisan Path, Meesa Road, Noorpur Baheta, Gosain Ganj, Lucknow
      </p>
    </div>

    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      <iframe
        title="Ujjwala Global Academy Location"
        src="https://maps.google.com/maps?q=Kisan%20Path%20Meesa%20Road%20Noorpur%20Baheta%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe><iframe
  title="Ujjwala Global Academy Location"
  src="https://maps.google.com/maps?q=Ujjwala%20Global%20Academy%20Gosainganj%20Lucknow&t=&z=17&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="500"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
/>
    </div>
  </div>
</section>
      {/* Compact Fun Fact Generator */}
      {showFunFact && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="fixed bottom-6 right-6 z-50 w-64 shadow-md"
        >
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden relative">
            {/* Header */}
            <div className="bg-emerald-100 px-3 py-2 flex items-center justify-between border-b border-emerald-200">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-3 h-3 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-emerald-800 text-sm font-medium">Did you know?</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Mobile close button */}
                <button
                  className="md:hidden text-gray-400 hover:text-gray-700 p-1 rounded-full focus:outline-none"
                  onClick={() => setShowFunFact(false)}
                  aria-label="Close Fun Fact"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button
                  onClick={() => setFactIndex((prev) => (prev + 1) % facts.length)}
            
                  className="text-emerald-600 hover:text-emerald-800 p-1 rounded-full hover:bg-emerald-200/50 transition-colors"
                  title="Get another fact"
                >
                  <svg 
                    className="w-3 h-3"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="p-3 bg-white">
  <motion.p
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    className="text-gray-700 text-xs leading-relaxed"
  >
    {facts[factIndex]}
  </motion.p>
</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
