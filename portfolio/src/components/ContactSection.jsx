import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    
    <section id="contact" className="py-12 bg-[#121212] text-white mt-13">
      <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10">    
        {/* Left Section - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5">

          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-300 transition">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-300 transition">
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-300 transition">
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
          className="space-y-5">
          <div>
            <label className="block text-gray-400 text-sm">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="Name"
              required/>
          </div>

          <div>
            <label className="block text-gray-400 text-sm">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="example@email.com"
              required/>
          </div>

          <div>
            <label className="block text-gray-400 text-sm">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="Just saying hi"
              required/>
          </div>

          <div>
            <label className="block text-gray-400 text-sm">Message</label>
            <textarea
              rows="3"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="Let's talk about..."
              required>
              </textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded-md transition text-sm">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
