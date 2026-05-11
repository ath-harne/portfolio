import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, User, Phone } from "lucide-react"
import { toast } from 'react-toastify'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setIsSubmitting(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      setIsSubmitting(false)
      return
    }

    try {
      const serviceId = 'service_pcg58uh'
      const templateId = 'template_jdj48ta'
      const publicKey = 'tbuGIcNKXe2ETPeA9' // ← Replace with your actual EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'harneatharva11@gmail.com'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      const connectionMessage =
        error?.status === 0 ||
          !navigator.onLine ||
          String(error?.text || error?.message || '').toLowerCase().includes('network')
          ? 'Failed to connect to the email service. Please check your internet connection and EmailJS configuration.'
          : 'Failed to send message. Please try again.'
      setErrorMessage(connectionMessage)
      toast.error(connectionMessage)
    } finally {
      setIsSubmitting(false)
    }
  }


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
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
            </button>
            {errorMessage && (
              <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
