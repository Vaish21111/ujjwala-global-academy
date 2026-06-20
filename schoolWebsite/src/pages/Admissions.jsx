import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  DollarSign, 
  Send, 
  CheckCircle,
  Clock,
  Users,
  Award,
  Download
} from 'lucide-react';
import emailjs from 'emailjs-com';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
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
    emailjs.init("KPFBdqfnUlag-ZKY"); // Replace with your actual EmailJS public key
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.studentName.trim()) {
      errors.studentName = 'Student name is required.';
    } else if (!/^[A-Za-z ]+$/.test(formData.studentName.trim())) {
      errors.studentName = 'Student name should only contain alphabets.';
    }
    if (!formData.parentName.trim()) {
      errors.parentName = 'Parent name is required.';
    } else if (!/^[A-Za-z ]+$/.test(formData.parentName.trim())) {
      errors.parentName = 'Parent name should only contain alphabets.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!formData.email.includes('@')) {
      errors.email = 'Email should contain @.';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (!/^[0-9]+$/.test(formData.phone.trim())) {
      errors.phone = 'Phone number should only contain numbers.';
    } else if (formData.phone.trim().length !== 10) {
      errors.phone = 'Phone number must be exactly 10 digits.';
    }
    if (!formData.grade.trim()) {
      errors.grade = 'Class is required.';
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
      // Prepare the template parameters
      const templateParams = {
        to_email: 'ujjwalaglobalacademy@gmail.com',
        from_name: formData.studentName,
        from_email: formData.email,
        reply_to: formData.email,
        subject: `New Admission Enquiry - ${formData.studentName}`,
        message: `
          <h3>New Admission Enquiry</h3>
          <p><strong>Student Name:</strong> ${formData.studentName}</p>
          <p><strong>Parent/Guardian Name:</strong> ${formData.parentName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Class Applying For:</strong> ${formData.grade}</p>
          <p><strong>Additional Information:</strong> ${formData.message || 'None provided'}</p>
        `,
        // Include all form data as separate parameters for template use
        student_name: formData.studentName,
        parent_name: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        grade: formData.grade,
        additional_message: formData.message || 'None provided'
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_2h0zn39',
        'template_j6ioj5m',
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({ 
          studentName: '', 
          parentName: '', 
          email: '', 
          phone: '', 
          grade: '', 
          message: '' 
        });
        alert('Application submitted successfully! We will contact you soon.');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      alert('Sorry, there was an error submitting your application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const admissionSteps = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Submit the completed application form with required documents.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Our team will verify all submitted documents and information.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Entrance Test',
      description: 'Students may be required to take an entrance assessment.',
      icon: Award
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Personal interview with student and parents.',
      icon: Users
    },
    {
      step: 5,
      title: 'Admission Confirmation',
      description: 'Final admission confirmation and fee payment.',
      icon: CheckCircle
    }
  ];

  const feeStructure = [
    {
      grade: 'P.G.',
      monthlyComputer: '₹800/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Pre-Primary foundation'
    },
    {
      grade: 'L.K.G.',
      monthlyComputer: '₹850/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Lower Kindergarten'
    },
    {
      grade: 'U.K.G.',
      monthlyComputer: '₹900/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Upper Kindergarten'
    },
    {
      grade: 'I',
      monthlyComputer: '₹1150/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Grade 1'
    },
    {
      grade: 'II',
      monthlyComputer: '₹1200/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Grade 2'
    },
    {
      grade: 'III',
      monthlyComputer: '₹1250/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Grade 3'
    },
    {
      grade: 'IV',
      monthlyComputer: '₹1300/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Grade 4'
    },
    {
      grade: 'V',
      monthlyComputer: '₹1350/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Grade 5'
    },
    {
      grade: 'VI',
      monthlyComputer: '₹1400/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Grade 6'
    },
    {
      grade: 'VII',
      monthlyComputer: '₹1450/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Grade 7'
    },
    {
      grade: 'VIII',
      monthlyComputer: '₹1500/-',
      admission: '₹2000/-',
      examFee: '₹300 + ₹300',
      description: 'Grade 8'
    }
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
            Admissions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto"
          >
            Join Ujjwala Global Academy and begin your journey towards excellence
          </motion.p>
        </div>
      </section>

      {/* Admission Procedure Section */}
      <section id="procedure" className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Admission Procedure</h2>
            </div>
            <p className="text-base sm:text-xl text-gray-600">
              Simple and transparent process to join our institution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 z-0" />
                  )}
                </div>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 h-full">
                  <div className="text-lg sm:text-2xl font-bold text-emerald-600 mb-2">Step {step.step}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section id="fees" className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Fee Structure</h2>
            </div>
            <p className="text-base sm:text-xl text-gray-600">
              Transparent and competitive fee structure for quality education
            </p>
          </motion.div>

          <div className="w-full flex justify-center">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-[900px] align-middle">
                <table className="min-w-[900px] divide-y divide-gray-200 text-xs">
                  <thead className="bg-emerald-50">
                    <tr>
                      <th className="px-2 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Class</th>
                      <th className="px-2 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Monthly + Computer Fee</th>
                      <th className="px-2 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Admission Fee</th>
                      <th className="px-2 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Exam Fee (Sept & Dec)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {feeStructure.map((fee, index) => (
                      <motion.tr
                        key={fee.grade}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-2 py-2 whitespace-nowrap">
                          <div className="font-bold text-emerald-600">{fee.grade}</div>
                          <div className="text-gray-500">{fee.description}</div>
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap">
                          <div className="font-semibold text-gray-900">{fee.monthlyComputer}</div>
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap">
                          <div className="font-semibold text-gray-900">{fee.admission}</div>
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap">
                          <div className="font-semibold text-gray-900">{fee.examFee}</div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Send className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Apply Now</h2>
            </div>
            <p className="text-base sm:text-xl text-gray-600">
              Start your application process today
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-4 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student's Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  {formErrors.studentName && (
                    <span className="text-red-500 text-xs mt-1 block">{formErrors.studentName}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent's Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  {formErrors.parentName && (
                    <span className="text-red-500 text-xs mt-1 block">{formErrors.parentName}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  {formErrors.email && (
                    <span className="text-red-500 text-xs mt-1 block">{formErrors.email}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  {formErrors.phone && (
                    <span className="text-red-500 text-xs mt-1 block">{formErrors.phone}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class Applying For *
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select Class</option>
                  <option value="P.G.">P.G.</option>
                  <option value="L.K.G.">L.K.G.</option>
                  <option value="U.K.G.">U.K.G.</option>
                  <option value="I">Class I</option>
                  <option value="II">Class II</option>
                  <option value="III">Class III</option>
                  <option value="IV">Class IV</option>
                  <option value="V">Class V</option>
                  <option value="VI">Class VI</option>
                  <option value="VII">Class VII</option>
                  <option value="VIII">Class VIII</option>
                </select>
                {formErrors.grade && (
                  <span className="text-red-500 text-xs mt-1 block">{formErrors.grade}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-emerald-600 hover:bg-emerald-700'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
                {/* <button
                  type="button"
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Prospectus</span>
                </button> */}
              </div>
              
              {submitStatus === 'success' && (
                <div className="text-green-600 text-center text-sm">
                  ✓ Application submitted successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center text-sm">
                  ✗ Error submitting application. Please try again.
                </div>
                )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help with Admissions?
            </h2>
            <p className="text-base sm:text-xl text-emerald-100 mb-8">
              Our admission team is here to help you through the process
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-emerald-100 text-sm sm:text-base">
                  Monday - Friday: 8:00 AM - 4:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-emerald-100 text-sm sm:text-base">
                  ujjwalaglobalacademy@gmail.com
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Scholarships</h3>
                <p className="text-emerald-100 text-sm sm:text-base">
                  Merit-based scholarships available for deserving students
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
