import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Calendar, 
  Image, 
  Users, 
  Wifi,
  BookOpen,
  Monitor,
  Music,
  Trophy,
  Camera
} from 'lucide-react';

const CampusLife = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const localImages = [
    '/classroom.jpg',
    '/computerlab.jpeg',
    '/sports.jpeg',
    '/art.jpeg',
    '/awardceremony.jpeg',
    '/fancyDress.jpeg',
    '/annualFunction.jpeg',
    '/swing.jpeg',
    // '/WhatsApp Image 2025-08-19 at 8.18.29 PM.jpeg',
    // '/WhatsApp Image 2025-08-19 at 8.18.32 PM.jpeg',
    // '/WhatsApp Image 2025-08-19 at 8.18.56 PM.jpeg',
    // '/WhatsApp Image 2025-08-19 at 8.18.57 PM.jpeg',
    // '/WhatsApp Image 2025-08-19 at 8.18.58 PM.jpeg',
    // '/WhatsApp Image 2025-08-19 at 8.32.24 PM.jpeg',
    // '/WhatsApp Image 2025-08-19 at 8.32.25 PM.jpeg'
  ];

  const facilities = [
    {
      icon: Building,
      title: 'Modern Classrooms',
      description: 'Spacious, well-ventilated classrooms equipped with modern teaching aids and comfortable seating.',
      image: localImages[0]
    },
    {
      icon: Monitor,
      title: 'Computer Lab',
      description: 'State-of-the-art computer laboratory with latest technology and software for practical learning.',
      image: localImages[1]
    },
    // {
    //   icon: BookOpen,
    //   title: 'Library',
    //   description: 'Extensive collection of books, reference materials, and digital resources for comprehensive learning.',
    //   image: localImages[2]
    // },
    // {
    //   icon: Music,
    //   title: 'Auditorium',
    //   description: 'Large auditorium with advanced audio-visual equipment for performances and events.',
    //   image: localImages[3]
    // },
    // {
    //   icon: Wifi,
    //   title: 'Wi-Fi Campus',
    //   description: 'High-speed internet connectivity throughout the campus for digital learning.',
    //   image: localImages[4]
    // },
    {
      icon: Trophy,
      title: 'Sports Complex',
      description: 'Multi-purpose sports facilities including playground, indoor games, and fitness center.',
      image: localImages[2]
    }
  ];

  const events = [
    {
      title: 'Annual Function',
      // date: 'December 15, 2024',
      description: 'Annual Function showcasing cultural performances, creative talents, and achievements of students.',
      image: localImages[5]
    },
    {
      title: 'Fancy Dress Competition',
      // date: 'January 20, 2025',
      description: 'Fancy Dress Competition highlighting creativity, imagination, and confidence of young participants.',
      image: localImages[6]
    },
    {
      title: 'Cultural Festival',
      // date: 'February 10, 2025',
      description: 'Celebration of arts, music, dance, and cultural diversity.',
      image: localImages[3]
    },
    {
      title: 'Academic Awards Ceremony',
      // date: 'March 25, 2025',
      description: 'Recognition of academic excellence and outstanding achievements.',
      image: localImages[4]
    }
  ];

  const clubs = [
    {
      name: 'Science Club',
      description: 'Exploring scientific concepts through experiments and projects.',
      members: 45,
      icon: '🔬'
    },
    {
      name: 'Art & Craft Club',
      description: 'Expressing creativity through various art forms and crafts.',
      members: 38,
      icon: '🎨'
    },
    {
      name: 'Music Club',
      description: 'Learning and performing various musical instruments and vocals.',
      members: 52,
      icon: '🎵'
    },
    {
      name: 'Drama Club',
      description: 'Developing acting skills and performing theatrical productions.',
      members: 30,
      icon: '🎭'
    },
    {
      name: 'Debate Club',
      description: 'Enhancing public speaking and critical thinking skills.',
      members: 42,
      icon: '💬'
    },
    {
      name: 'Sports Club',
      description: 'Training in various sports and physical activities.',
      members: 65,
      icon: '⚽'
    }
  ];

  const galleryImages = [
    localImages[0],
    localImages[1],
    localImages[2],
    localImages[3],
    localImages[4],
    localImages[5],
    localImages[6],
    localImages[7]
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
            Campus Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto"
          >
            Experience the vibrant and enriching campus environment at Ujjwala Academy
          </motion.p>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
                              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Facilities</h2>
            </div>
            <p className="text-xl text-gray-600">
              State-of-the-art infrastructure for comprehensive learning and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <facility.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
                              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Events</h2>
            </div>
            <p className="text-xl text-gray-600">
              Exciting events and activities throughout the academic year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
                              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Student Clubs</h2>
            </div>
            <p className="text-xl text-gray-600">
              Join various clubs to explore your interests and develop new skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{club.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{club.name}</h3>
                <p className="text-gray-600 mb-4">{club.description}</p>
                <div className="flex items-center text-sm text-emerald-600">
                  <Users className="w-4 h-4 mr-2" />
                  {club.members} members
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Photo Gallery</h2>
            </div>
            <p className="text-xl text-gray-600">
              Glimpses of life at Ujjwala Academy
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 5,
                  z: 10
                }}
                className="relative group cursor-pointer perspective-1000"
                onClick={() => setSelectedImage(image)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-lg"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-40 md:h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm text-center px-2">
                      Click to view
                    </p>
                  </div>
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-emerald-400/50 transition-all duration-300" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            {/* Image with enhanced styling */}
            <motion.img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' }}
            />
            
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-emerald-400 rounded-full opacity-60"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 -left-4 w-6 h-6 bg-emerald-300 rounded-full opacity-60"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Campus Life Highlights */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Campus Life Highlights
            </h2>
            <p className="text-xl text-emerald-100">
              What makes our campus special
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
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Community</h3>
              <p className="text-emerald-100">
                Students from various backgrounds creating a rich learning environment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achievement Focus</h3>
              <p className="text-emerald-100">
                Recognition and celebration of student achievements and talents
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Year-Round Activities</h3>
              <p className="text-emerald-100">
                Continuous engagement through events, competitions, and celebrations
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
