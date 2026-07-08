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
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/15 border border-white/25 rounded-full px-5 py-1.5 text-sm font-medium mb-6"
          >
            📞 We'd Love to Hear from You
          </motion.div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Contact Info
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get in Touch</h2>
            <p className="text-gray-500 text-lg">Reach out to us through any of these channels</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                </div>
                <p className="text-gray-500 text-sm mb-6 ml-13">
                  Have a question? We'll get back to you as soon as possible.
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
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Google Map */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=80.9801202512669,26.719530446791813,81.1801202512669,26.919530446791813&layer=mapnik&marker=26.819530446791813,81.0801202512669"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ujjwala Global Academy Location"
                />
                <div className="p-4 flex items-center gap-2 border-t border-gray-100">
                  <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Kisan Path, Meesa Road, Noorpur Baheta, Gosaiganj, Lucknow – 226501</p>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-5">Quick Contact</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={dept.name} className="bg-emerald-50 rounded-xl p-4">
                      <h4 className="font-bold text-emerald-800 mb-2">{dept.name}</h4>
                      <div className="space-y-1.5 text-sm text-gray-600">
                        <a href={`mailto:${dept.email}`} className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
                          <Mail className="w-3.5 h-3.5 text-emerald-500" />
                          {dept.email}
                        </a>
                        <a href={`tel:${dept.phone}`} className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
                          <Phone className="w-3.5 h-3.5 text-emerald-500" />
                          {dept.phone}
                        </a>
                      </div>
                    </div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Find answers to common questions about our school
            </p>
          </motion.div>

          <div className="space-y-4">
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
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-200"
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-6">{faq.answer}</p>
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
