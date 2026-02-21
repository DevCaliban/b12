"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrackingForm from "@/components/TrackingForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-gray-900 text-white min-h-[600px] lg:min-h-[700px]">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source
            src="https://res.cloudinary.com/dpwddkw5t/video/upload/v1770818185/219046_medium_if3trc.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60" />
        {/* Red accent glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600 rounded-full filter blur-[160px] opacity-15" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-red-600 rounded-full filter blur-[140px] opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-red-300 text-sm font-medium mb-6 border border-white/10">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Trusted in 20+ Countries
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Transport &amp;{" "}
                <span className="text-red-500">Logistics</span>{" "}
                Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">
                A global supply-chain distributor delivering your parcels safely,
                on time, and at competitive prices. Track every shipment in
                real-time from pickup to doorstep.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#track"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Track Package
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Our Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: hero illustration (delivery truck SVG) */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-red-600/20 rounded-3xl blur-2xl" />
                <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full drop-shadow-2xl">
                  {/* Road */}
                  <rect x="0" y="310" width="500" height="40" rx="6" fill="#374151" />
                  <line x1="30" y1="330" x2="80" y2="330" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 8" />
                  <line x1="120" y1="330" x2="170" y2="330" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 8" />
                  <line x1="210" y1="330" x2="260" y2="330" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 8" />
                  <line x1="300" y1="330" x2="350" y2="330" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 8" />
                  <line x1="390" y1="330" x2="440" y2="330" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 8" />
                  {/* Truck body */}
                  <rect x="110" y="200" width="220" height="110" rx="8" fill="#DC2626" />
                  <rect x="115" y="205" width="210" height="100" rx="6" fill="#EF4444" />
                  {/* B12 label */}
                  <text x="175" y="265" fontFamily="Arial" fontWeight="800" fontSize="36" fill="white">B12</text>
                  {/* Cab */}
                  <path d="M330 230 L330 310 L400 310 L400 260 L370 230 Z" fill="#B91C1C" />
                  <rect x="340" y="245" width="45" height="30" rx="4" fill="#93C5FD" opacity="0.6" />
                  {/* Wheels */}
                  <circle cx="175" cy="310" r="26" fill="#374151" />
                  <circle cx="175" cy="310" r="14" fill="#6B7280" />
                  <circle cx="175" cy="310" r="5" fill="#9CA3AF" />
                  <circle cx="365" cy="310" r="26" fill="#374151" />
                  <circle cx="365" cy="310" r="14" fill="#6B7280" />
                  <circle cx="365" cy="310" r="5" fill="#9CA3AF" />
                  {/* Boxes in back (peeking out) */}
                  <rect x="125" y="170" width="40" height="35" rx="3" fill="#FCD34D" />
                  <rect x="170" y="175" width="35" height="30" rx="3" fill="#A78BFA" />
                  <rect x="210" y="168" width="38" height="37" rx="3" fill="#34D399" />
                  {/* Location pin */}
                  <g transform="translate(250, 60)">
                    <circle cx="0" cy="0" r="20" fill="#DC2626" opacity="0.2">
                      <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <path d="M0-18C-10-18-18-10-18 0c0 18 18 30 18 30s18-12 18-30c0-10-8-18-18-18z" fill="#DC2626" />
                    <circle cx="0" cy="-2" r="6" fill="white" />
                  </g>
                  {/* Motion lines */}
                  <line x1="60" y1="250" x2="100" y2="250" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
                  <line x1="50" y1="270" x2="100" y2="270" stroke="white" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
                  <line x1="70" y1="290" x2="100" y2="290" stroke="white" strokeWidth="2" opacity="0.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: "50K+", label: "Parcels Delivered", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { value: "20+", label: "Countries Served", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" },
              { value: "99.8%", label: "On-Time Delivery", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "24/7", label: "Customer Support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-6 text-center">
                <svg className="w-6 h-6 text-red-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRACKING SECTION ─── */}
      <section id="track" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">Track Your Package</h2>
              <p className="text-red-100 mb-8 max-w-lg mx-auto">
                Enter your B12 tracking code to get real-time updates on your shipment&apos;s location and delivery status.
              </p>
              <div className="max-w-xl mx-auto">
                <TrackingForm large />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Logistics Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive transport and supply-chain solutions tailored to meet your shipping needs across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Air Freight",
                desc: "Express air cargo delivery for time-critical shipments to any destination worldwide with real-time flight tracking.",
                icon: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5",
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "Ground Shipping",
                desc: "Reliable road freight and last-mile delivery with comprehensive coverage and flexible scheduling options.",
                icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
                color: "bg-red-50 text-red-600",
              },
              {
                title: "Sea Freight",
                desc: "Cost-effective ocean cargo for large shipments with full container and less-than-container load options.",
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9",
                color: "bg-cyan-50 text-cyan-600",
              },
              {
                title: "Real-Time Tracking",
                desc: "Monitor every parcel with live GPS tracking, instant status alerts, and estimated delivery times updated in real-time.",
                icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                color: "bg-green-50 text-green-600",
              },
              {
                title: "Warehousing",
                desc: "Secure storage facilities with inventory management, pick-and-pack fulfillment, and distribution services.",
                icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21",
                color: "bg-purple-50 text-purple-600",
              },
              {
                title: "Insurance Coverage",
                desc: "Full cargo insurance with transparent pricing to protect your valuable shipments against loss or damage during transit.",
                icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
                color: "bg-amber-50 text-amber-600",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section
        id="how-it-works"
        className="parallax-bg py-16 sm:py-20 relative text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-2">Simple Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
              Getting your parcel from point A to point B has never been easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-white/20" />

            {[
              { step: "01", title: "Register Parcel", desc: "Contact us or visit any of our office branches to register your shipment for delivery.", icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15" },
              { step: "02", title: "Get Tracking Code", desc: "Receive a unique B12 tracking code via email once your shipment is confirmed and dispatched.", icon: "M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { step: "03", title: "Track Real-Time", desc: "Enter your tracking code on our website for live updates on location and delivery status.", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
              { step: "04", title: "Safe Delivery", desc: "Your package is delivered to the destination safely, on time, and with full insurance coverage.", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl flex flex-col items-center justify-center mx-auto mb-5 relative z-10">
                  <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-[10px] font-bold text-gray-400 mt-1">STEP {item.step}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-[220px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-2">Why B12parcelHub</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Safety, Speed &amp; Reliability at Competitive Prices
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We are a trusted global logistics partner known for delivering parcels safely and on time.
                With transparent pricing and full insurance coverage, even budget-conscious senders
                get premium service quality.
              </p>
              <div className="space-y-4">
                {[
                  "Transparent pricing with no hidden fees",
                  "Full cargo insurance on every shipment",
                  "On-time delivery guarantee",
                  "Real-time tracking with email notifications",
                  "24/7 dedicated customer support",
                  "Cost optimization for bulk shipments",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side illustration: world map dots */}
            <div className="hidden lg:block">
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-90">
                  {/* Stylized globe/network */}
                  <circle cx="200" cy="125" r="100" stroke="#374151" strokeWidth="1" />
                  <circle cx="200" cy="125" r="70" stroke="#374151" strokeWidth="1" />
                  <circle cx="200" cy="125" r="40" stroke="#374151" strokeWidth="1" />
                  <ellipse cx="200" cy="125" rx="100" ry="40" stroke="#374151" strokeWidth="1" />
                  <line x1="200" y1="25" x2="200" y2="225" stroke="#374151" strokeWidth="1" />
                  <line x1="100" y1="125" x2="300" y2="125" stroke="#374151" strokeWidth="1" />
                  {/* Location dots */}
                  <circle cx="160" cy="90" r="5" fill="#DC2626"><animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" /></circle>
                  <circle cx="240" cy="100" r="4" fill="#EF4444" />
                  <circle cx="190" cy="140" r="4" fill="#EF4444" />
                  <circle cx="270" cy="130" r="5" fill="#DC2626"><animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" /></circle>
                  <circle cx="140" cy="150" r="4" fill="#EF4444" />
                  <circle cx="220" cy="80" r="3" fill="#F87171" />
                  <circle cx="180" cy="110" r="3" fill="#F87171" />
                  <circle cx="250" cy="155" r="3" fill="#F87171" />
                  {/* Connection lines */}
                  <line x1="160" y1="90" x2="240" y2="100" stroke="#DC2626" strokeWidth="1" opacity="0.4" />
                  <line x1="240" y1="100" x2="270" y2="130" stroke="#DC2626" strokeWidth="1" opacity="0.4" />
                  <line x1="160" y1="90" x2="190" y2="140" stroke="#DC2626" strokeWidth="1" opacity="0.4" />
                  <line x1="190" y1="140" x2="140" y2="150" stroke="#DC2626" strokeWidth="1" opacity="0.4" />
                  {/* Label */}
                  <text x="200" y="240" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#6B7280">Global Delivery Network</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source
            src="https://res.cloudinary.com/dpwddkw5t/video/upload/v1770818185/219046_medium_if3trc.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-red-900/50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Ship Your Package?
          </h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Contact us today or use our platform to register your parcel. Competitive rates, fast delivery, and full transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/send"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
              Send a Parcel
            </Link>
            <Link
              href="#track"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Track a Shipment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
