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
    emailjs.init("VVZUKwaGyGRJcTdvc"); // Replace with your actual EmailJS public key
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
    },
    {
  grade: 'IX',
  monthlyComputer: '₹1600/-',
  admission: '₹2000/-',
  examFee: '₹400 + ₹400',
  description: 'Grade 9'
},
{
  grade: 'X',
  monthlyComputer: '₹1600/-',
  admission: '₹2000/-',
  examFee: '₹400 + ₹400',
  description: 'Grade 10'
},
{
  grade: 'XI',
  monthlyComputer: '₹1800/-',
  admission: '₹2000/-',
  examFee: '₹500 + ₹500',
  description: 'Grade 11'
},
{
  grade: 'XII',
  monthlyComputer: '₹1800/-',
  admission: '₹2000/-',
  examFee: '₹500 + ₹500',
  description: 'Grade 12'
}
    
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
            🎓 Admissions Open 2025–26
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-5"
          >
            Admissions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            Join Ujjwala Global Academy and begin your journey towards excellence
          </motion.p>
        </div>
      </section>

      {/* Admission Procedure Section */}
      <section id="procedure" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              How to Apply
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Admission Procedure</h2>
            <p className="text-gray-500 text-lg">Simple and transparent process to join our institution</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector line */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-emerald-200 z-0" />
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mb-4 shadow-lg relative z-10">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 w-full border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
                  <div className="text-2xl font-extrabold text-emerald-600 mb-1">0{step.step}</div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section id="fees" className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Fee Structure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Transparent Fee Structure</h2>
            <p className="text-gray-500 text-lg">Quality education at affordable, competitive fees</p>
          </motion.div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-emerald-700 text-white">
                  <th className="px-5 py-4 text-left font-semibold">Class</th>
                  <th className="px-5 py-4 text-left font-semibold">Monthly + Computer Fee</th>
                  <th className="px-5 py-4 text-left font-semibold">Admission Fee</th>
                  <th className="px-5 py-4 text-left font-semibold">Exam Fee (Sept &amp; Dec)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {feeStructure.map((fee, index) => (
                  <tr
                    key={fee.grade}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-emerald-50 transition-colors`}
                  >
                    <td className="px-5 py-3">
                      <div className="font-bold text-emerald-700">{fee.grade}</div>
                      <div className="text-xs text-gray-400">{fee.description}</div>
                    </td>
                    <td className="px-5 py-3 font-semibold text-gray-800">{fee.monthlyComputer}</td>
                    <td className="px-5 py-3 font-semibold text-gray-800">{fee.admission}</td>
                    <td className="px-5 py-3 font-semibold text-gray-800">{fee.examFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">* Fees are subject to revision. Contact the school office for the latest information.</p>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Apply Now
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Start Your Application</h2>
            <p className="text-gray-500 text-lg">Fill in the form below and our team will get back to you shortly</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-10"
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
                  <option value="IX">Class IX</option>
                  <option value="X">Class X</option>
                  <option value="XI">Class XI</option>
                  <option value="XII">Class XII</option>
                 
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
      <section className="py-14 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Need Help with Admissions?
            </h2>
            <p className="text-emerald-100 text-lg mb-10">
              Our admission team is here to guide you through every step
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                <p className="text-emerald-100 text-sm">
                  Monday–Friday: 8:00 AM – 4:00 PM<br />
                  Saturday: 9:00 AM – 1:00 PM
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                <p className="text-emerald-100 text-sm">
                  ujjwalaglobalacademy@gmail.com
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1">Scholarships</h3>
                <p className="text-emerald-100 text-sm">
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
