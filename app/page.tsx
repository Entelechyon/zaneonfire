'use client'

import { useState } from 'react'
import Image from 'next/image'
import Chatbot from './components/Chatbot'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="bg-black text-white">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-orange-500 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Zane on Fire Digital',
            image: 'https://zaneonfire.com/bella-vista-screenshot.webp',
            '@id': 'https://zaneonfire.com',
            url: 'https://zaneonfire.com',
            telephone: '',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Melbourne',
              addressRegion: 'VIC',
              addressCountry: 'AU',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -37.8136,
              longitude: 144.9631,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              opens: '09:00',
              closes: '17:00',
            },
            sameAs: [
              'https://github.com/entelechyon',
              'https://www.linkedin.com/in/zaneonfire/',
            ],
            priceRange: '$3,500 - $15,000+',
            description:
              'Melbourne-based web development agency building intelligent websites with AI automation that capture leads, book appointments, and convert visitors 24/7.',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '1',
            },
            founder: {
              '@type': 'Person',
              name: 'Zane Priddle',
              url: 'https://zanepriddle.com',
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section id="main-content" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
        {/* Animated gradient background */}
        <div className="absolute inset-0 gradient-animate bg-gradient-to-br from-orange-600 via-red-600 to-yellow-500 opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-8">
            <div className="text-6xl mb-4 md:mb-0 md:mr-3">🔥</div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Zane on Fire Digital
            </h1>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Website Should Work<br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              as Hard as You Do
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We build intelligent websites with AI automation that capture leads, book appointments,
            and convert visitors 24/7 - so your business never sleeps.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-bold text-lg hover:scale-105 transition-transform glow-orange focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Start your project - Open chat"
            >
              Start Your Project
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border-2 border-orange-500 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="View our work - Scroll to projects section"
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-orange-500 text-4xl">↓</div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose<br className="md:hidden" /> <span className="text-orange-500">Zane on Fire?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all hover:scale-105">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Lightning-Fast Delivery</h3>
              <p className="text-gray-300 leading-relaxed">
                While other agencies take months, we deliver in weeks. Modern tools, streamlined process,
                zero bureaucracy. Your competitors are still in meetings while you're already converting.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all hover:scale-105">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">AI That Actually Works</h3>
              <p className="text-gray-300 leading-relaxed">
                Not just another chatbot widget. We build intelligent systems that know your business,
                qualify leads like your best salesperson, and handle inquiries while you focus on what matters.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all hover:scale-105">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Built for Results, Not Awards</h3>
              <p className="text-gray-300 leading-relaxed">
                Every pixel serves a purpose: converting visitors into customers. We obsess over load speeds,
                conversion paths, and user experience because pretty websites that don't make money are just expensive art.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all hover:scale-105">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Future-Proof Technology</h3>
              <p className="text-gray-300 leading-relaxed">
                Next.js, AI integration, mobile-first design, lightning-fast hosting. We build with tomorrow's
                tech today, so you're leading while competitors are <br />catching up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Packages Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Choose the package that fits your ambition</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">IGNITION</h3>
              <p className="text-gray-400 mb-4">High-Converting Landing Pages</p>
              <div className="text-4xl font-bold mb-6 text-orange-500">$3,500</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform visitors into customers with laser-focused landing pages built for conversion.
                Perfect for campaigns, product launches, or service promotions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Custom responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">AI chat integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Mobile optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Analytics setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">2-week delivery</span>
                </li>
              </ul>
              <button
                onClick={() => setIsChatOpen(true)}
                className="w-full py-3 bg-orange-500/20 border border-orange-500 rounded-lg font-bold hover:bg-orange-500 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-gradient-to-b from-orange-900/30 to-gray-900 p-8 rounded-2xl border-2 border-orange-500 relative hover:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-2">BLAZE</h3>
              <p className="text-gray-400 mb-4">AI-Powered Business Websites</p>
              <div className="text-4xl font-bold mb-6 text-orange-500">$8,500</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Complete website transformation with intelligent automation. Custom design, AI chatbot
                that knows your business, appointment booking, lead capture, and 24/7 customer engagement.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Everything in Ignition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Multi-page website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Advanced AI chatbot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Appointment booking system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Lead capture & automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">3-week delivery</span>
                </li>
              </ul>
              <button
                onClick={() => setIsChatOpen(true)}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-bold hover:scale-105 transition-transform glow-orange"
              >
                Get Started
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">INFERNO</h3>
              <p className="text-gray-400 mb-4">Full Digital Ecosystem</p>
              <div className="text-4xl font-bold mb-6 text-orange-500">$15,000+</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Everything in Blaze plus advanced integrations, multi-page sites, e-commerce capability,
                CRM connections, and ongoing optimization. For businesses ready to dominate their market digitally.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Everything in Blaze</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">E-commerce integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">CRM & tool integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Custom features & workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Ongoing optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <button
                onClick={() => setIsChatOpen(true)}
                className="w-full py-3 bg-orange-500/20 border border-orange-500 rounded-lg font-bold hover:bg-orange-500 transition-colors"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Real results, real websites, real AI</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 - This Site */}
            <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 h-48 flex items-center justify-center">
                <div className="text-6xl">🔥</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Zane on Fire Digital</h3>
                <p className="text-orange-500 mb-4 text-sm font-semibold">AGENCY WEBSITE</p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  This very site! A modern agency website with intelligent lead qualification,
                  AI-powered chatbot, and conversion-optimized design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Next.js</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">TypeScript</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">AI Chatbot</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Tailwind</span>
                </div>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Features:</strong> Lead qualification, 24/7 engagement, mobile-responsive
                </p>
              </div>
            </div>

            {/* Project 2 - Bella Vista Restaurant */}
            <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all hover:scale-105">
              <div className="relative h-48 bg-gray-900">
                <Image
                  src="/bella-vista-screenshot.webp"
                  alt="Bella Vista Restaurant Website - Elegant design with reservation chatbot"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Bella Vista Italian Restaurant</h3>
                <p className="text-orange-500 mb-4 text-sm font-semibold">RESTAURANT WEBSITE</p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Elegant restaurant website with AI-powered reservation chatbot. Demonstrates hospitality industry solutions with automated booking and customer service.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Next.js</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Anthropic API</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Tailwind CSS</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://bella-vista.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-bold hover:scale-105 transition-transform text-sm"
                  >
                    View Live
                  </a>
                  <a
                    href="https://github.com/Entelechyon/bella-vista"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center border border-orange-500 rounded-lg font-bold hover:bg-orange-500/10 transition-colors text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 - Sarah Mitchell Consulting */}
            <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all hover:scale-105">
              <div className="relative h-48 bg-gray-900">
                <Image
                  src="/sarah-mitchell-screenshot.webp"
                  alt="Sarah Mitchell Consulting Website - Professional B2B design with lead qualification"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Sarah Mitchell Consulting</h3>
                <p className="text-orange-500 mb-4 text-sm font-semibold">B2B CONSULTING WEBSITE</p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Professional services website with intelligent lead qualification chatbot. Showcases B2B solutions with automated client screening and appointment booking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Next.js</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Anthropic API</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Tailwind CSS</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.sarahmitchell.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-bold hover:scale-105 transition-transform text-sm"
                  >
                    View Live
                  </a>
                  <a
                    href="https://github.com/Entelechyon/sarah-mitchell-consultant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center border border-orange-500 rounded-lg font-bold hover:bg-orange-500/10 transition-colors text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How We <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Simple, streamlined, and fast. Most projects delivered in 2-3 weeks.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-400">Discovery</h3>
              <p className="text-gray-300 leading-relaxed">
                We dive deep into your business, goals, and audience. Understanding what makes you unique
                is the foundation of conversion.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-400">Design</h3>
              <p className="text-gray-300 leading-relaxed">
                Modern, bold designs focused on user experience and conversion.
                Every element serves a purpose - capturing leads and driving action.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-400">Development</h3>
              <p className="text-gray-300 leading-relaxed">
                We build with cutting-edge tech: Next.js, AI integration, and lightning-fast hosting.
                Your site will be fast, secure, and scalable.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-400">Launch</h3>
              <p className="text-gray-300 leading-relaxed">
                We deploy your site, train your AI, and ensure everything works perfectly.
                Then we monitor and optimize for maximum results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Client <span className="text-orange-500">Success Stories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial Placeholder 1 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="text-orange-500 text-4xl mb-4">"</div>
              <p className="text-gray-400 italic mb-6 leading-relaxed">
                Testimonials coming soon as we complete our first projects.
                Want to be our first success story?
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold">Your Name Here</div>
                  <div className="text-sm text-gray-400">Your Company</div>
                </div>
              </div>
            </div>

            {/* Testimonial Placeholder 2 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="text-orange-500 text-4xl mb-4">"</div>
              <p className="text-gray-400 italic mb-6 leading-relaxed">
                Testimonials coming soon as we complete our first projects.
                Want to be our first success story?
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold">Your Name Here</div>
                  <div className="text-sm text-gray-400">Your Company</div>
                </div>
              </div>
            </div>

            {/* Testimonial Placeholder 3 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="text-orange-500 text-4xl mb-4">"</div>
              <p className="text-gray-400 italic mb-6 leading-relaxed">
                Testimonials coming soon as we complete our first projects.
                Want to be our first success story?
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold">Your Name Here</div>
                  <div className="text-sm text-gray-400">Your Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate bg-gradient-to-br from-orange-600 via-red-600 to-yellow-500 opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Build<br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Book a free 15-minute strategy call. We'll audit your current site and show you exactly
            what's possible with AI-powered web development.
          </p>
          <button
            onClick={() => setIsChatOpen(true)}
            className="px-12 py-5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-bold text-xl hover:scale-110 transition-transform glow-orange"
          >
            Let's Talk
          </button>
          <p className="text-gray-400 mt-6">
            30-day launch guarantee or your money back
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Branding */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-2">🔥</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Zane on Fire Digital
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building intelligent websites with AI automation that work as hard as you do.
                Based in Melbourne, working globally.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-orange-500 transition-colors">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsChatOpen(true)} className="text-gray-400 hover:text-orange-500 transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/entelechyon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/zaneonfire/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Zane on Fire Digital. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              A project by{' '}
              <a
                href="https://zanepriddle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                Zane Priddle
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  )
}
