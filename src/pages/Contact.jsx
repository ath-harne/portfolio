import React from 'react'


import { Mail, MapPin, User, Phone } from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-6">
      
      <div className="w-full max-w-4xl bg-white/40 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white/30">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Let's Connect 
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <User className="text-indigo-600" size={28} />
              <div>
                <p className="text-lg font-semibold">Name</p>
                <p className="text-gray-700">Atharva Harne</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600" size={28} />
              <div>
                <p className="text-lg font-semibold">Email</p>
                <p className="text-gray-700">harneatharva11@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600" size={28} />
              <div>
                <p className="text-lg font-semibold">Location</p>
                <p className="text-gray-700">Pune, Maharashtra</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600" size={28} />
              <div>
                <p className="text-lg font-semibold">Phone</p>
                <p className="text-gray-700">+91 84465 07451 </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
