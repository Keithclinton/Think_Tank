import React, { useEffect, useState } from "react";
import FadeInSection from "./components/FadeInSection";
import HeadingWithLine from "./components/HeadingWithLine";
import Loader from "./components/Loader";
import ExcellencePillar from "./components/ExcellencePillar";
import ServiceCard from "./components/ServiceCard";

import Logo from "./assets/Logo.png";
import thinkingman from "./assets/thinking man.png";
import PersonalExcellence from "./assets/Personal Excellence.png";
import ProfessionalExcellence from "./assets/Professional Excellence.png";
import BusinessExcellence from "./assets/Business Exellence.png";
import HelpImage from "./assets/Help.png";
import InnovationStrategies from "./assets/Innovation Strategies.png";

function ThinkTankLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMenuOpen) {
        setIsMenuOpen(false); // Close the menu when scrolling
      }
    };
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isMenuOpen]);

  if (loading) return <Loader />;

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
      <div className="bg-white text-black font-sans">
        <div className="pt-32">
          <FadeInSection>
            <section className="text-center py-16 bg-[#EEC843] text-black px-4 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start md:text-left justify-center mx-auto">
                {/* Image Section */}
                <img
                  src={thinkingman}
                  alt="thinking Man"
                  className="h-60 w-60 mb-6 md:mb-0 md:mr-6 shadow-lg"
                />

                {/* Text Section */}
                <div>
                  <p className="mt-4 text-xl">“We believe every problem has a solution.”</p>
                  <p className="mt-4 text-lg max-w-2xl">
                    We’re dedicated to transforming challenges into opportunities...
                  </p>
                  <p className="mt-4 text-black font-semibold">🎯 That’s where we come in.</p>
                </div>
              </div>
            </section>
          </FadeInSection>
        </div>

        {/* About Us Section */}
        <FadeInSection>
          <section id="about" className="py-20 px-6 bg-gray-100 text-center">
            <HeadingWithLine>About Us</HeadingWithLine>
            <div className="max-w-5xl mx-auto text-left mt-8 space-y-8">
              {/* Vision */}
              <div>
                <h3 className="text-xl font-bold text-black">Our Vision</h3>
                <p className="text-gray-700 mt-2">
                  To create a world where individuals and businesses thrive through effective solutions and continuous improvement.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3 className="text-xl font-bold text-black">Our Mission</h3>
                <p className="text-gray-700 mt-2">
                  To inspire transformation by helping people and businesses understand their challenges, reimagine possibilities, and achieve meaningful success.
                </p>
              </div>

              {/* Intention */}
              <div>
                <h3 className="text-xl font-bold text-black">Our Intention</h3>
                <p className="text-gray-700 mt-2">
                  To cultivate a mentality for extraordinary results.
                </p>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-xl font-bold text-black">Our Values</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                  <li>Integrity</li>
                  <li>Collaboration</li>
                  <li>Empowerment and Holistic Development</li>
                  <li>Excellence</li>
                  <li>Continuous Improvement</li>
                  <li>Client-Centricity</li>
                  <li>Innovation</li>
                  <li>Accountability</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 bg-[#EEC843] shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-3">
                <img src={Logo} alt="Logo" className="h-10 w-auto rounded-full" />
                <div>
                  <h1 className="font-bold text-xl text-black">THINK TANK SOLUTIONS ORIENTED</h1>
                  <h2 className="text-[14px] font-[Gabriola] italic text-black">
                    “Changing Lives, Striving for Excellence”
                  </h2>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 font-semibold ml-auto">
              <li><a href="#about" className="hover:text-gray-700">About Us</a></li>
              <li><a href="#programs" className="hover:text-gray-700">Programs</a></li>
              <li><a href="#services" className="hover:text-gray-700">Services</a></li>
              <li><a href="#testimonials" className="hover:text-gray-700">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
            </ul>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex justify-end">
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

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 space-y-4 font-semibold text-center bg-yellow-300 rounded shadow-lg p-4 max-h-60 overflow-y-auto">
              <li><a href="#about" className="block hover:text-gray-700">About Us</a></li>
              <li><a href="#programs" className="block hover:text-gray-700">Programs</a></li>
              <li><a href="#services" className="block hover:text-gray-700">Services</a></li>
              <li><a href="#testimonials" className="block hover:text-gray-700">Testimonials</a></li>
              <li><a href="#contact" className="block hover:text-gray-700">Contact</a></li>
            </ul>
          )}
        </nav>

        <div className="pt-32"></div>

        {/* Innovative Strategies Section */}
        <FadeInSection>
          <section className="max-w-5xl mx-auto py-14 px-6">
            <HeadingWithLine>Innovative Strategies for Transformation</HeadingWithLine>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img
                src={InnovationStrategies}
                alt="Innovation Strategies"
                className="w-40 h-40 object-cover rounded mb-6 md:mb-0 md:mr-6"
              />
              <div className="text-gray-700">
                <p>
                  We help you gain clarity, craft strategy, and take action to achieve your goals.
                </p>
                {isExpanded && (
                  <p className="mt-4">
                    No challenge is without an answer. The bigger question is:
                    “What should you do, and how should you do it?” 🎯 That’s where we come in.
                    We help you gain clarity, craft strategy, and take action—so you can move from
                    confusion to confidence, from challenge to change.
                  </p>
                )}
                <button
                  className="mt-4 text-yellow-500 font-semibold hover:underline"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-20 px-6 bg-gray-100 text-center">
            <HeadingWithLine>Empowering Your Journey</HeadingWithLine>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Whether you're looking to grow personally, excel professionally, or scale your business,
              our team walks with you every step of the way with custom strategies, coaching, and clarity.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-20 px-6 bg-gray-100 text-center">
            <HeadingWithLine>Unleash Your Potential and Achieve Results</HeadingWithLine>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 mt-4">
              We believe that everyone, every business has untapped capacity within them. Sometimes, all it takes is the right questions, the right tools, and the right environment to bring it to life. That’s where our team steps in—bringing:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: "✅",
                  title: "Clarity",
                  description: "Helping you define where you’re going and why it matters.",
                },
                {
                  icon: "✅",
                  title: "Strategy",
                  description: "Guiding you with proven tools and frameworks customized to your context.",
                },
                {
                  icon: "✅",
                  title: "Support",
                  description: "Walking with you through challenges, decisions, and transitions.",
                },
                {
                  icon: "✅",
                  title: "Accountability",
                  description: "Ensuring you stay on track and aligned with your purpose.",
                },
                {
                  icon: "✅",
                  title: "Excellence",
                  description: "Helping you not just meet your goals, but grow beyond them.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white shadow rounded p-6 text-left hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="text-xl font-semibold text-black">{item.title}</h4>
                  </div>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 mt-8">
              We don’t just consult, coach, or train—we partner with you to build momentum and deliver sustainable transformation.
            </p>
          </section>
        </FadeInSection>

        {/* Excellence Pillars Section */}
        <FadeInSection>
          <section id="programs" className="py-16 px-6 max-w-6xl mx-auto">
            <HeadingWithLine>Our Excellence Pillars</HeadingWithLine>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  img: PersonalExcellence,
                  title: "Personal Excellence",
                  desc: "Discover your true self...",
                  moreContent:
                    "align with your values, and overcome the limiting beliefs that hold you back. Whether it’s gaining clarity on life goals or cultivating a mindset that embraces growth, our personal development programs are designed to bring out the best in you.",
                },
                {
                  img: ProfessionalExcellence,
                  title: "Professional Excellence",
                  desc: "Gain adaptability & purpose...",
                  moreContent:
                    "Equip yourself with the skills, resilience, and adaptability needed to succeed in today’s ever-evolving job market. Through career coaching, skill-building workshops, and customized training, we help you advance with purpose and confidence.",
                },
                {
                  img: BusinessExcellence,
                  title: "Business Excellence",
                  desc: "Grow your business with strategy...",
                  moreContent:
                    "For entrepreneurs and business leaders, excellence means having streamlined processes, clear strategies, and a strong organizational culture. We provide tools for business growth, strategic problem-solving, and Lean Six Sigma-based process improvement, so your business can thrive and stand out.",
                },
              ].map((pillar, index) => (
                <ExcellencePillar key={index} pillar={pillar} />
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Services Section */}
        <FadeInSection>
          <section id="services" className="py-20 px-6 bg-gray-100 text-center">
            <HeadingWithLine>Our Services</HeadingWithLine>
            <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Consulting Services */}
              <ServiceCard
                title="Consulting Services"
                description="Our consulting services provide customized solutions for..."
                moreContent="businesses seeking to enhance performance and efficiency.We conduct comprehensive assessments to identify areas for improvement and develop strategies that align with your goals."
              />

              {/* Training and Workshops */}
              <ServiceCard
                title="Training and Workshops"
                description="We offer interactive training sessions designed to..."
                moreContent="equip individuals and teams with the skills they need for success.Topics include: Self-awareness, Stress and Mental Wealth Awareness, Life Skills, Soft Skills, Entrepreneurship, and Business Re-engineering."
              />

              {/* Coaching */}
              <ServiceCard
                title="Coaching"
                description="Our coaching services are tailored to individuals and teams looking to..."
                moreContent="achieve their personal and professional goals.We focus on mindset transformation, goal setting, and ongoing support to ensure sustainable growth."
              />

              {/* Resources */}
              <ServiceCard
                title="Resources"
                description="Explore our books, collection of articles, tools, and guides..."
                moreContent="that provide valuable insights on personal development and business strategies.These resources are designed to help you achieve continuous improvement and long-term success."
              />
            </div>
          </section>
        </FadeInSection>

        {/* How We Help Section */}
        <FadeInSection>
          <section className="bg-gray-50 py-20 px-6 max-w-4xl mx-auto text-center">
            <img src={HelpImage} alt="Help" className="mx-auto my-6 w-40 h-40 object-contain rounded-full shadow" />
            <HeadingWithLine>How We Help You Achieve Results</HeadingWithLine>
            <div className="space-y-6 mt-6">
            {[
              "🔹 A Changed Mindset: 💡 'You can’t solve a problem with the same thinking that created it.' – Albert Einstein",
              "🔹 Identify the Problem: 💡 'A well-defined problem is half solved.'",
              "🔹 Identify Solutions: 💡 'Don’t limit yourself to what’s obvious. Think in possibilities.'",
              "🔹 Take Action: 💡 'Ideas are easy. Execution is everything.'",
              "🔹 Sustain: 💡 'Success is not just about getting there—it’s staying there.'",
              "🔹 Continuous Improvement: 💡 'Excellence is a moving target. Keep evolving.'",
            ].map((text, i) => (
              <p key={i} className="text-gray-700 text-base">{text}</p>
            ))}
            </div>
          </section>
        </FadeInSection>
      <FadeInSection>
          <section id="testimonials" className="py-20 px-6 bg-gray-100 text-center">
            <HeadingWithLine>What Our Clients Say</HeadingWithLine>
            <div className="max-w-4xl mx-auto mt-8 space-y-8">
              {/* Testimonial 1 */}
              <div className="bg-white shadow rounded p-6 text-left hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700 text-lg italic">
                  "Think Tank helped me identify the root causes of my challenges, and their tailored solutions made all the difference in my personal and professional life."
                </p>
                <p className="mt-4 text-right text-black font-semibold">– Anonymous</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white shadow rounded p-6 text-left hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700 text-lg italic">
                  "The training sessions were interactive and insightful, equipping our team with the skills needed to excel."
                </p>
                <p className="mt-4 text-right text-black font-semibold">– Anonymous</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="contact" className="py-20 px-6 bg-customYellow text-black text-center">
            <HeadingWithLine>Talk to Us</HeadingWithLine>
            <p className="max-w-xl mx-auto text-lg">
              We’re here to listen, support, and walk with you. Whether you’re seeking clarity, exploring our services, or ready to take action—this is your starting point.
            </p>
            <form className="mt-8 max-w-2xl mx-auto text-left">
              <label className="block mb-4">
                <span className="text-black font-bold">Full Name:</span>
                <input type="text" className="w-full mt-2 p-3 border rounded" placeholder="Enter your full name" />
              </label>
              <label className="block mb-4">
                <span className="text-black font-bold">Email Address:</span>
                <input type="email" className="w-full mt-2 p-3 border rounded" placeholder="Enter your email address" />
              </label>
              <label className="block mb-4">
                <span className="text-black font-bold">Phone Number (Optional):</span>
                <input type="text" className="w-full mt-2 p-3 border rounded" placeholder="Enter your phone number" />
              </label>
              <label className="block mb-4">
                <span className="text-black font-bold">What area do you need help with?</span>
                <select className="w-full mt-2 p-3 border rounded">
                  <option>Personal Excellence</option>
                  <option>Professional Growth</option>
                  <option>Business Development</option>
                  <option>Mindset Coaching</option>
                  <option>Career Guidance</option>
                  <option>Custom Training/Consulting</option>
                  <option>Other (please specify)</option>
                </select>
              </label>
              <label className="block mb-4">
                <span className="text-black font-bold">Briefly describe your need or question:</span>
                <textarea className="w-full mt-2 p-3 border rounded" rows="4" placeholder="Tell us what you’re hoping to solve, explore, or achieve."></textarea>
              </label>
              <label className="block mb-4">
                <input type="checkbox" className="mr-2" />
                <span className="text-black">I agree to the privacy policy and give Think Tank Solutions Oriented permission to contact me using the information provided.</span>
              </label>
              <button type="submit" className="mt-4 px-10 py-4 bg-black text-white font-bold rounded hover:bg-gray-900 transform transition hover:scale-105">
                Let’s Talk
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700"
              >
                <i className="fab fa-linkedin text-2xl"></i> {/* LinkedIn Icon */}
              </a>
              <a
                href="mailto:transformationagenda2.0@gmail.com"
                className="text-black hover:text-gray-700"
              >
                <i className="fas fa-envelope text-2xl"></i> {/* Email Icon */}
              </a>
            </div>
          </section>
        </FadeInSection>

        <footer className="bg-gray-800 text-white py-6 text-center">
          <p className="text-sm">© 2025 Think Tank Solutions Oriented. All rights reserved.</p>
          <p className="text-sm">Privacy Policy | Terms of Service</p>
        </footer>
      </div>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[#EEC843] text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          ↑ Top
        </button>
      )}
    </>
  );
}

export default ThinkTankLanding;
