import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  FileText
} from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("VVZUKwaGyGRJcTdvc"); // Replace with your actual EmailJS public key
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
    } else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      errors.name = 'Name should only contain alphabets.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!formData.email.includes('@')) {
      errors.email = 'Email should contain @.';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email directly using EmailJS
      const response = await emailjs.send(
  'service_2h0zn39',
  'template_e9vlrfz',
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  'VVZUKwaGyGRJcTdvc'
);emailjs.send

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Thank you for your message! We will get back to you soon.');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Kisan Path, Meesa Road,Noorpur Baheta,Gosaiganj, Lucknow - 226501',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9451690636',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'ujjwalaglobalacademy@gmail.com',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Friday: 8:00 AM - 4:00 PM',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const departments = [
    {
      name: 'Admissions',
      email: 'ujjwalaglobalacademy@gmail.com',
      phone: '+91 9451690636'
    },
    // {
    //   name: 'Academic Affairs',
    //   email: 'academics@ujjwalaacademy.com',
    //   phone: '+1 (555) 123-4569'
    // },
    // {
    //   name: 'Student Services',
    //   email: 'studentservices@ujjwalaacademy.com',
    //   phone: '+1 (555) 123-4570'
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto"
          >
            Get in touch with us. We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Reach out to us through any of these channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">
                  {info.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Have a question or want to learn more about Ujjwala Global Academy? Send us a message and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Enter your name"
                        />
                        {formErrors.name && (
                          <span className="text-red-500 text-xs mt-1 block">{formErrors.name}</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                        {formErrors.email && (
                          <span className="text-red-500 text-xs mt-1 block">{formErrors.email}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter subject"
                      />
                      {formErrors.subject && (
                        <span className="text-red-500 text-xs mt-1 block">{formErrors.subject}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter your message..."
                    />
                    {formErrors.message && (
                      <span className="text-red-500 text-xs mt-1 block">{formErrors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-emerald-600 hover:bg-emerald-700'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-center text-sm">
                      ✓ Message sent successfully!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-center text-sm">
                      ✗ Error sending message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Map and Department Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Interactive Map */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-100 p-4">
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-inner relative">
                                         {/* OpenStreetMap with custom pin */}
                     {/* 
                       ✅ Coordinates Updated: 26.819530446791813, 81.0801202512669
                       Location: Kisan Path, Meesa Road, Noorpur Baheta, Gosaiganj, Lucknow
                       Map centered around Ujjwala Global Academy with custom pin overlay
                     */}
                     <iframe
                       src="https://www.openstreetmap.org/export/embed.html?bbox=80.9801202512669,26.719530446791813,81.1801202512669,26.919530446791813&layer=mapnik&marker=26.819530446791813,81.0801202512669"
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       allowFullScreen=""
                       loading="lazy"
                       title="Ujjwala Global Academy Location"
                       className="rounded-lg"
                     />
                    
                    {/* Custom Pin Overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative">
                        {/* Pin */}
                        <div className="w-8 h-8 bg-emerald-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        {/* Pin tail */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-emerald-600"></div>
                      </div>
                    </div>
                    
                    {/* Location label */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Ujjwala Global Academy</p>
                          <p className="text-xs text-gray-600">Kisan Path, Meesa Road, Noorpur Baheta, Gosaiganj, Lucknow - 226501</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <motion.div
                      key={dept.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{dept.name}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>{dept.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{dept.phone}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our school
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What are the admission requirements?",
                answer: "Admission requirements include a completed application form, previous academic records, and an entrance assessment. Please visit our Admissions page for detailed information."
              },
              {
                question: "What are the school timings?",
                answer: "School hours are from 8:00 AM to 3:00 PM, Monday through Friday. Office hours are 8:00 AM to 4:00 PM."
              },
              {
                question: "Do you offer transportation services?",
                answer: "Yes, we provide safe and reliable transportation services to various locations. Please contact our transportation department for route information."
              },
              {
                question: "What extracurricular activities are available?",
                answer: "We offer a wide range of extracurricular activities including sports, arts, music, drama, debate, and various clubs. Students can choose based on their interests."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Join Ujjwala Global Academy and begin your educational journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Apply Now
              </button>
              
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
