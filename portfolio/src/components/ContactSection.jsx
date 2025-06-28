import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      //use local port to run it locally
      // const response = await fetch(
      //   "http://localhost:5000/api/email",
      const response = await fetch(
        "https://portfolio-website-backend-ct3d.onrender.com/api/email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Email Sent Successfully!", {
          position: "top-right",
          autoClose: 2500,
          theme: "dark",
        });
        e.target.reset();
      } else {
        toast.error("Failed to send email. Try again!", {
          position: "top-right",
          autoClose: 2500,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("⚠ Error sending email!", {
        position: "top-right",
        autoClose: 2500,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-[#121212] text-white mt-13">
      <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10">
        {/* Left Section - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-3">
            <a
              href="https://github.com/Priyanshu-2109"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-chaniyara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/priyanshu_chaniyara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-300 transition"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Contact Details */}
          <div className="mt-12 space-y-3 text-gray-400 text-sm">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-lg" />
              <span>Vadodara, Gujarat, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-lg" />
              <span>+91 9054442111</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-lg" />
              <span>priyanshuchaniyara42@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-gray-400 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="example@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="Just saying hi"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm">Message</label>
            <textarea
              rows="3"
              name="message"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="Let's talk about..."
              required
            />
          </div>

          {/* Submit Button */}
          {/* <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded-md transition text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button> */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded-md transition text-sm flex justify-center items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </section>
  );
};

export default ContactSection;
