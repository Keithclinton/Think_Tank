import React, { useEffect, useState } from "react";
import FadeInSection from "./components/FadeInSection";
import HeadingWithLine from "./components/HeadingWithLine";
import Loader from "./components/Loader";

import Logo from "./assets/Logo.jpg";
import PersonalExcellence from "./assets/Personal Excellence.png";
import ProfessionalExcellence from "./assets/Professional Excellence.png";
import BusinessExcellence from "./assets/Business Exellence.png";
import HelpImage from "./assets/Help.png";
import InnovationStrategies from "./assets/Innovation Strategies.png";

function ThinkTankLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-white text-black font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 bg-yellow-400 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="Logo" className="h-10 w-auto rounded" />
              <h1 className="font-bold text-xl">THINK TANK SOLUTIONS ORIENTED</h1>
            </div>
            <h2 className="text-lg md:text-xl font-bold italic">“Changing Lives, Striving for Excellence”</h2>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-semibold ml-auto">
            <li><a href="#programs" className="hover:text-gray-700">Programs</a></li>
            <li><a href="#blog" className="hover:text-gray-700">Blog</a></li>
            <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 font-semibold text-center bg-yellow-300 rounded shadow-lg p-4">
            <li><a href="#about" className="block hover:text-gray-700">About</a></li>
            <li><a href="#programs" className="block hover:text-gray-700">Programs</a></li>
            <li><a href="#blog" className="block hover:text-gray-700">Blog</a></li>
            <li><a href="#contact" className="block hover:text-gray-700">Contact</a></li>
          </ul>
        )}
      </nav>

      <div className="pt-32">
        {/* Hero Section */}
        <FadeInSection>
          <section className="text-center py-16 bg-black text-white px-4 relative">
            <p className="mt-4 text-xl">“We believe every problem has a solution.”</p>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              We’re dedicated to transforming challenges into opportunities...
            </p>
            <p className="mt-4 text-yellow-400 font-semibold">🎯 That’s where we come in.</p>
            <button className="mt-6 px-8 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transform transition duration-300 hover:scale-105">
              Get Started
            </button>

            {/* Wave Background */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-10">
              <svg viewBox="0 0 1440 320" className="w-full">
                <path
                  fill="#facc15"
                  d="M0,64L48,90.7C96,117,192,171,288,181.3C384,192,480,160,576,160C672,160,768,192,864,192C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L0,320Z"
                ></path>
              </svg>
            </div>
          </section>
        </FadeInSection>

        {/* Transformation Introduction */}
        <FadeInSection>
          <section className="max-w-5xl mx-auto py-14 px-6">
            <HeadingWithLine>Innovative Strategies for Transformation</HeadingWithLine>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img src={InnovationStrategies} alt="Innovation Strategies" className="w-40 h-40 object-cover rounded mb-6 md:mb-0 md:mr-6" />
              <p className="text-gray-700">
                We help you gain clarity, craft strategy, and take action...
              </p>
            </div>
          </section>
        </FadeInSection>

        {/* Empowerment */}
        <FadeInSection>
          <section className="bg-gray-100 py-14 px-6 text-center">
            <HeadingWithLine>Empowering Your Path to Excellence</HeadingWithLine>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We meet you where you are and help you grow...
            </p>
          </section>
        </FadeInSection>

        {/* Excellence Pillars */}
        <section id="programs" className="py-16 px-6 max-w-6xl mx-auto">
          <HeadingWithLine>Our Excellence Pillars</HeadingWithLine>
          <div className="grid md:grid-cols-3 gap-10">
            {[PersonalExcellence, ProfessionalExcellence, BusinessExcellence].map((img, i) => {
              const titles = ["Personal Excellence", "Professional Excellence", "Business Excellence"];
              const descs = [
                "Discover your true self...",
                "Gain adaptability & purpose...",
                "Grow your business with strategy..."
              ];
              return (
                <FadeInSection key={i} delay={i * 0.2}>
                  <div className="bg-white shadow rounded p-6 text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <img src={img} alt={titles[i]} className="h-40 mx-auto mb-4 object-cover rounded" />
                    <h4 className="text-xl font-semibold text-black">{titles[i]}</h4>
                    <p className="mt-2 text-gray-600">{descs[i]}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </section>

        {/* Transformation Steps */}
        <FadeInSection>
          <section className="bg-gray-50 py-16 px-6 max-w-4xl mx-auto text-center">
            <img src={HelpImage} alt="Help" className="mx-auto my-6 w-40 h-40 object-contain rounded-full shadow" />
            <div className="space-y-6">
              {[
                "Our signature approach moves you from confusion to clarity.",
                "💡 Changed Mindset",
                "🔹 Identify the Problem",
                "🔹 Identify Solutions",
                "🔹 Take Action",
                "🔹 Sustain Progress",
                "🔹 Continuous Improvement"
              ].map((text, i) => (
                <p key={i} className="text-gray-700">{text}</p>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Coaching CTA */}
        <FadeInSection>
          <section className="py-16 px-6 bg-yellow-400 text-black text-center">
            <HeadingWithLine>Unleash Your Potential</HeadingWithLine>
            <p className="max-w-2xl mx-auto">
              ✅ Clarity • ✅ Strategy • ✅ Support • ✅ Accountability • ✅ Excellence
            </p>
            <button className="mt-4 px-8 py-3 bg-black text-white font-bold rounded hover:bg-gray-900 transform transition duration-300 hover:scale-105">
              Let’s Talk
            </button>
          </section>
        </FadeInSection>

        <FadeInSection>
  <section id="blog" className="py-16 px-6 max-w-6xl mx-auto">
    <HeadingWithLine>From the Blog</HeadingWithLine>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition duration-300"
        >
          <img
            src={`https://source.unsplash.com/400x250/?growth,coaching,${item}`}
            alt="Blog Post"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h4 className="font-bold text-lg mb-2">Why Mindset Matters in Growth</h4>
            <p className="text-gray-600 text-sm mb-3">
              Discover how your mindset shapes your success — and how to shift it strategically.
            </p>
            <a href="#" className="text-yellow-500 font-semibold hover:underline">
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
</FadeInSection>

{/* Contact Form */}
        <FadeInSection>
          <section id="contact" className="py-16 px-6 max-w-3xl mx-auto">
            <HeadingWithLine>Talk to Us</HeadingWithLine>
            <form className="space-y-4">
            <input
  type="text"
  placeholder="Full Name"
  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
/>

<input
  type="email"
  placeholder="Email Address"
  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
/>

<input
  type="tel"
  placeholder="Phone Number (Optional)"
  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
/>

<select
  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
>
  <option value="">What area do you need help with?</option>
  <option>Personal Excellence</option>
  <option>Professional Growth</option>
  <option>Business Development</option>
  <option>Mindset Coaching</option>
  <option>Career Guidance</option>
  <option>Custom Training/Consulting</option>
  <option>Other</option>
</select>

<textarea
  rows="4"
  placeholder="Briefly describe your need or question"
  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
/>

              <label className="block">
                <input type="checkbox" className="mr-2" /> I agree to the privacy policy and give permission to contact me.
              </label>
              <button type="submit" className="w-full bg-black text-white py-3 rounded font-bold hover:bg-gray-800">
                Let’s Talk
              </button>
            </form>
          </section>
        </FadeInSection>
      </div>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default ThinkTankLanding;
// In this code, we have a React component for a landing page that includes a navigation bar, hero section, and various other sections. The component uses Tailwind CSS for styling and Framer Motion for animations. The page is responsive and includes a scroll-to-top button that appears when the user scrolls down. The loader component is displayed while the page is loading, and the main content is revealed after the loading is complete.
// The page also includes a contact form and sections for different programs and services offered by the organization. The design is clean and modern, with a focus on user experience and engagement.