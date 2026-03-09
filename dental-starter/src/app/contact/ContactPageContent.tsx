"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { siteConfig } from "@/config/site";

export default function ContactPageContent() {
  const ref = useScrollAnimation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    note: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
    setForm({ firstName: "", lastName: "", email: "", phone: "", note: "" });
  }

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Get in Touch"
        subtitle="Reach out to us for top-notch dental care services and appointments"
      />

      {/* Contact Section */}
      <section ref={ref} className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A2332] text-center mb-16">
            Contact Us Today
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Contact Info */}
            <div className="animate-on-scroll delay-1">
              <p className="text-gray-600 leading-relaxed mb-10">
                We would love to hear from you. Whether you need to schedule an
                appointment, have a question about our services, or just want to
                say hello, feel free to reach out using any of the methods below.
              </p>

              <ul className="space-y-8">
                {/* Phone */}
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0075C9]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#0075C9]" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1A2332]">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                      className="text-gray-600 hover:text-[#0075C9] transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0075C9]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#0075C9]" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1A2332]">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-gray-600 hover:text-[#0075C9] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>

                {/* Address */}
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0075C9]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#0075C9]" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1A2332]">Address</h3>
                    <a
                      href={siteConfig.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#0075C9] transition-colors"
                    >
                      {siteConfig.address.full}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right — Contact Form */}
            <div className="animate-on-scroll delay-2">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-[#1A2332] mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#1A2332] outline-none focus:border-[#0075C9] focus:ring-1 focus:ring-[#0075C9] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-[#1A2332] mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#1A2332] outline-none focus:border-[#0075C9] focus:ring-1 focus:ring-[#0075C9] transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1A2332] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#1A2332] outline-none focus:border-[#0075C9] focus:ring-1 focus:ring-[#0075C9] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#1A2332] mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#1A2332] outline-none focus:border-[#0075C9] focus:ring-1 focus:ring-[#0075C9] transition-colors"
                  />
                </div>

                {/* Note */}
                <div>
                  <label
                    htmlFor="note"
                    className="block text-sm font-medium text-[#1A2332] mb-1"
                  >
                    Note
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={5}
                    value={form.note}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#1A2332] outline-none focus:border-[#0075C9] focus:ring-1 focus:ring-[#0075C9] transition-colors resize-vertical"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#0075C9] text-white text-sm font-semibold rounded hover:bg-[#0063ab] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner variant="bottom" />
    </>
  );
}
