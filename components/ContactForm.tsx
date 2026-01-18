"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import type { ContactFormData } from "@/types";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@philitech.com",
      href: "mailto:info@philitech.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Innovation Drive, Tech City, TC 12345",
      href: null,
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      href: null,
    },
  ];

  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-brand-navy-light border ${
                    errors.name
                      ? "border-red-500"
                      : "border-brand-navy-light focus:border-brand-cyan"
                  } focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-brand-navy-light border ${
                    errors.email
                      ? "border-red-500"
                      : "border-brand-navy-light focus:border-brand-cyan"
                  } focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-brand-navy-light border border-brand-navy-light focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-brand-navy-light border border-brand-navy-light focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-brand-cyan">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-brand-navy-light border ${
                    errors.message
                      ? "border-red-500"
                      : "border-brand-navy-light focus:border-brand-cyan"
                  } focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-colors resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {submitStatus && (
                <div
                  className={`p-4 rounded-lg flex items-start space-x-3 ${
                    submitStatus === "success"
                      ? "bg-green-500/10 border border-green-500/30"
                      : "bg-red-500/10 border border-red-500/30"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                  ) : (
                    <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                  )}
                  <p
                    className={
                      submitStatus === "success" ? "text-green-400" : "text-red-400"
                    }
                  >
                    {submitMessage}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-brand-cyan text-brand-navy-dark font-semibold rounded-lg hover:bg-brand-cyan-light transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                We're here to help! Reach out to us through any of the following channels, 
                and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 rounded-lg bg-brand-navy-light/50 border border-brand-navy-light hover:border-brand-cyan/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-cyan-dark flex items-center justify-center">
                      <Icon size={24} className="text-brand-navy-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">{info.label}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-brand-cyan transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
