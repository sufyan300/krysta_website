"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setSubmitted(true)

      // Reset form after submission
      setFormData({
        firstName: "",
        lastName: "",
        jobTitle: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      {/* Hero Section with gradient background */}
      <section className="bg-gradient-to-b from-[#e6f0ff] to-[#2563eb] py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-4">Contact Us</h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Contact customer support</h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Chat with us</h2>

          {submitted ? (
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="text-gray-700 mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
              <Button onClick={() => setSubmitted(false)} className="bg-black hover:bg-gray-800 text-white">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">First Name</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border-0"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Job Title</label>
                  <Input
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-0"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Company Name</label>
                  <Input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Business email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-0"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Phone number</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-0"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  required
                  className="w-full bg-gray-50 border-0"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-4 md:py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
