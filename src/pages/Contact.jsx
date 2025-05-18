import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="font-sans">
      <Navbar />

      <section className="py-16 px-6 md:px-20 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Contact Us
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-10">
          We'd love to hear from you. Feel free to reach out with any questions or feedback.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>FoodGuide@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>0623595609</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p>123 Lorem Ipsum Street, Jakarta, Indonesia</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-red-600">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-red-600">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-red-600">Twitter</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
