import React, { useEffect, useState } from "react";
import FadeInSection from "./components/FadeInSection";
import HeadingWithLine from "./components/HeadingWithLine";
import Loader from "./components/Loader";
import ExcellencePillar from "./components/ExcellencePillar";
import ServiceCard from "./components/ServiceCard";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Logo from "./assets/Logo.jpg";
import Solution from "./assets/Solution.jpg";
import PersonalExcellence from "./assets/Personal Excellence.png";
import ProfessionalExcellence from "./assets/Professional Excellence.png";
import BusinessExcellence from "./assets/Business Exellence.png";
import HelpImage from "./assets/Help.png";
import Empowering from "./assets/Empowering.png";
import Founder from "./assets/Founder.png";
import InnovationStrategies from "./assets/Innovation Strategies.png";
import WeBelieve from "./assets/we believe.png";
import SelfAwareness from "./assets/Self Awareness.png";
import BoyProgram from "./assets/Boy Program.png";
import CustomerService from "./assets/Customer Service.png";
import Trial from "./assets/Trial.png"; // Import the trial.png image

const ThinkTankLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_unfjz0q", // Your EmailJS service ID
        "template_5qsnvue", // Your EmailJS template ID
        formRef.current,
        "el2Z4Cg9l44ryqKlK" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your message has been sent!");
          formRef.current.reset(); // Clear the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const toggleSection = (sectionKey) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey], // Toggle the specific section
    }));
  };

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
    <div>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            rel="stylesheet"
          />
        <div>
                  <div className="bg-white text-black font-sans">
                    <div className="pt-32">
                      <FadeInSection>
                        <section
                          className="relative text-center py-16 px-4 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${Trial})`, // Use trial.png as the background image
                          }}
                        >
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                          {/* Content */}
                          <div className="relative z-10 text-white max-w-5xl mx-auto">
                            <p className="text-5xl font-extrabold mb-6 leading-tight">
                              “We believe every problem has a solution.”
                            </p>
                            <p className="text-2xl mb-6 leading-relaxed">
                              We’re dedicated to transforming challenges into opportunities...
                            </p>
                            <p className="text-yellow-400 font-bold text-3xl">
                              🎯 That’s where we come in.
                            </p>
                          </div>
                        </section>
                      </FadeInSection>
                    </div>
                  </div>
        </div>
        
                <div>
                {/* About Us Section */}
<FadeInSection>
  <section id="about" className="py-20 px-6 bg-gray-100 text-center">
    <HeadingWithLine>About Us</HeadingWithLine>
    <div className="max-w-5xl mx-auto text-left mt-8 space-y-8">
      {/* Introduction */}
      <div>
        <p className="text-gray-700 text-lg leading-relaxed">
          At <span className="font-bold text-black">Think Tank Solutions Oriented</span>, we believe every problem has a solution.
          In life, challenges are inevitable, whether personal, professional, or business-related. What truly makes the difference is how prepared and proactive we are in addressing them.
          Our mission is to bridge the gap between where you are and where you want to go because that gap is often filled with what you don’t yet know.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          We exist to help you uncover that knowledge, develop the right skills, and apply practical tools, roadmaps, and proven frameworks that lead to real results.
        </p>
      </div>

      {/* Read More Button */}
      {!isExpanded && (
        <div className="text-center mt-4">
          <button
            className="text-yellow-500 font-semibold hover:underline"
            onClick={() => setIsExpanded(true)}
          >
            Read More
          </button>
        </div>
      )}

      {/* Remaining Content */}
      {isExpanded && (
        <>
          {/* Who We Are */}
          <div>
            <h3 className="text-xl font-bold text-black">Who We Are</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              We are a multidisciplinary team of transformation experts—consultants, trainers, coaches, and mentors—committed to helping individuals and organizations unlock their potential and thrive.
              We don’t offer one-size-fits-all solutions; instead, we take the time to understand your unique challenges and goals so we can guide you toward lasting change.
            </p>
          </div>

          {/* What’s In It For You */}
          <div>
            <h3 className="text-xl font-bold text-black">What’s In It For You?</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Whether you’re a young professional seeking direction, a business leader navigating change, or someone pursuing personal transformation—we equip you with:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>Knowledge to make informed decisions</li>
              <li>Tools and templates to implement change</li>
              <li>Best practices and principles to guide your journey</li>
              <li>Roadmaps and frameworks to create a clear path forward</li>
              <li>Support systems to sustain and continuously improve</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-xl font-bold text-black">Why Choose Us?</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Because we don’t just give you answers, we empower you to become your own solution. We’re here to help you move with clarity, operate with purpose, and rise with excellence in every area of your life and work.
            </p>
          </div>

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

          {/* Our Values Section */}
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

          {/* Read Less Button */}
          <div className="text-center mt-4">
            <button
              className="text-yellow-500 font-semibold hover:underline"
              onClick={() => setIsExpanded(false)}
            >
              Read Less
            </button>
          </div>
        </>
      )}
    </div>
  </section>
</FadeInSection>
        </div>

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
  <section className="max-w-5xl mx-auto pt-30 pb-10 px-6 text-center"> {/* Reduced top padding */}
    <HeadingWithLine>Innovative Strategies for Transformation</HeadingWithLine>
    <div className="flex flex-col items-center mt-8">
      {/* Centered Image */}
      <img
        src={InnovationStrategies}
        alt="Innovation Strategies"
        className="w-60 h-60 object-cover rounded-lg shadow-lg mb-6"
      />
      {/* Text Content */}
      <div className="text-gray-700 max-w-3xl">
        <p className="text-lg">
          We help you gain clarity, craft strategy, and take action to achieve your goals.
        </p>
        {isExpanded && (
          <p className="mt-4 text-lg">
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
        {/* Empowering Image */}
        <img
          src={Empowering} // Replace with the actual image path if different
          alt="Empowering"
          className="w-60 h-60 object-cover rounded-lg shadow-lg mx-auto mt-6" />
      </section>
    </FadeInSection><FadeInSection>
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
    <HeadingWithLine className="text-center">Our Excellence Pillars</HeadingWithLine> {/* Centered the title */}
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
  <section id="services" className="py-16 px-6 bg-gray-100 text-center"> {/* Reduced bottom padding */}
    <HeadingWithLine>Our Services</HeadingWithLine>
    <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Service Cards */}
      <ServiceCard
        title="Consulting Services"
        description="Our consulting services provide customized solutions for..."
        moreContent="businesses seeking to enhance performance and efficiency. We conduct comprehensive assessments to identify areas for improvement and develop strategies that align with your goals."
      />
      <ServiceCard
        title="Training and Workshops"
        description="We offer interactive training sessions designed to..."
        moreContent="equip individuals and teams with the skills they need for success. Topics include: Self-awareness, Stress and Mental Wealth Awareness, Life Skills, Soft Skills, Entrepreneurship, and Business Re-engineering."
      />
      <ServiceCard
        title="Coaching"
        description="Our coaching services are tailored to individuals and teams looking to..."
        moreContent="achieve their personal and professional goals. We focus on mindset transformation, goal setting, and ongoing support to ensure sustainable growth."
      />
      <ServiceCard
        title="Resources"
        description="Explore our books, collection of articles, tools, and guides..."
        moreContent="that provide valuable insights on personal development and business strategies. These resources are designed to help you achieve continuous improvement and long-term success."
      />
    </div>
  </section>
</FadeInSection>

{/* How We Help Section */}
<FadeInSection>
  <section className="bg-gray-50 py-16 px-6 max-w-4xl mx-auto text-center"> {/* Reduced top padding */}
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

        {/* Testimonials Section */}
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

        {/* Knowledge Bridge Section */}
        <FadeInSection>
          <section className="py-16 px-6 bg-gray-50 text-center">
            {/* Founder Image */}
            <img
              src={Founder} // Ensure the correct path to Founder.png is used
              alt="Founder"
              className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg mb-6"
            />

            {/* Text Content */}
            <p className="text-xl font-bold text-black">
              "The gap between where you are and where you want to go is what you don’t know."
            </p>
            <p className="text-lg text-gray-700 mt-2 italic">--- J. Njoki Njuguna ---</p>
            <p className="text-lg text-gray-700 mt-4">
              Founder <span className="font-bold text-black">Think Tank Solutions Oriented</span>
            </p>
            <div className="mt-6">
              <p className="text-lg text-gray-700">
                <span className="font-bold text-black">Knowledge</span> is the bridge.
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold text-black">Growth</span> is the journey.
              </p>
            </div>
            <p className="text-lg text-gray-700 mt-6">
              💡 Let us help you close the gap intentionally, strategically, and sustainably.
            </p>
          </section>
        </FadeInSection>

        {/* Talk to Us Section */}
        <FadeInSection>
      <section id="contact" className="py-20 px-6 bg-customYellow text-black text-center">
        <HeadingWithLine className="text-black">Talk to Us</HeadingWithLine>
        <p className="max-w-xl mx-auto text-lg">
          We’re here to listen, support, and walk with you. Whether you’re seeking clarity, exploring our services, or ready to take action—this is your starting point.
        </p>
        <form ref={formRef} onSubmit={sendEmail} className="mt-8 max-w-2xl mx-auto text-left">
          {/* Full Name */}
          <label className="block mb-4">
            <span className="text-black font-bold">Full Name:</span>
            <input type="text" name="name" className="w-full mt-2 p-3 border rounded" placeholder="Enter your full name" required />
          </label>

          {/* Email */}
          <label className="block mb-4">
            <span className="text-black font-bold">Email Address:</span>
            <input type="email" name="email" className="w-full mt-2 p-3 border rounded" placeholder="Enter your email address" required />
          </label>

          {/* Phone */}
          <label className="block mb-4">
            <span className="text-black font-bold">Phone Number (Optional):</span>
            <input type="text" name="phone" className="w-full mt-2 p-3 border rounded" placeholder="Enter your phone number" />
          </label>

          {/* Help Area */}
          <label className="block mb-4">
            <span className="text-black font-bold">What area do you need help with?</span>
            <select name="help_area" className="w-full mt-2 p-3 border rounded" required>
              <option value="Personal Excellence">Personal Excellence</option>
              <option value="Professional Growth">Professional Growth</option>
              <option value="Business Development">Business Development</option>
              <option value="Mindset Coaching">Enrollment</option>
              <option value="Career Guidance">Coaching</option>
              <option value="Custom Training/Consulting">Custom Training/Consulting</option>
              <option value="Other">Other (please specify)</option>
            </select>
          </label>

          {/* Message */}
          <label className="block mb-4">
            <span className="text-black font-bold">Briefly describe your need or question:</span>
            <textarea name="message" className="w-full mt-2 p-3 border rounded" rows="4" placeholder="Tell us what you’re hoping to solve, explore, or achieve." required></textarea>
          </label>

          {/* Agreement */}
          <label className="block mb-4">
            <input type="checkbox" className="mr-2" required />
            <span className="text-black">I agree to the privacy policy and give Think Tank Solutions Oriented permission to contact me using the information provided.</span>
          </label>

          {/* Submit */}
          <button type="submit" className="mt-4 px-10 py-4 bg-black text-white font-bold rounded hover:bg-gray-900 transform transition hover:scale-105">
            Let’s Talk
          </button>
        </form>
      </section>
    </FadeInSection>

    {/* Resources Section */}
    <FadeInSection>
  <section id="resources" className="py-16 px-6 bg-gray-100 text-center">
    <HeadingWithLine className="text-center">Explore More Resources</HeadingWithLine>
    <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Advanced Self-Awareness Course */}
      <ServiceCard
        title="Advanced Self-Awareness: Mastering the Inner Landscape for Personal and Professional Excellence"
        description="This transformative course is designed for individuals who have begun their journey of self-discovery and are ready to deepen their understanding of the self at a profound level."
        moreContent="Participants will engage with structured frameworks, self-assessment tools, and evidence-informed practices to uncover hidden patterns, challenge limiting identities, and realign with their authentic values and purpose."
      >
        <img
          src={SelfAwareness}
          alt="Self Awareness"
          className="w-full h-40 object-cover rounded-lg shadow-lg"
        />
        <button
          onClick={() => window.location.href = "#contact"}
          className="mt-4 px-6 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition"
        >
          Enroll Now
        </button>
      </ServiceCard>

      {/* Becoming – The Boy Program */}
      <ServiceCard
        title="Becoming – The Boy Program: Personal and Business Leadership for Young Men"
        description="Becoming – The Boy Program is a transformative one-year personal and professional development course designed specifically for young men aged 16 and above."
        moreContent="Through a structured four-phase journey, participants gain practical tools for personal effectiveness, self-management, 21st-century skills, and entrepreneurship."
      >
        <img
          src={BoyProgram}
          alt="Boy Program"
          className="w-full h-40 object-cover rounded-lg shadow-lg"
        />
        <button
          onClick={() => window.location.href = "#contact"}
          className="mt-4 px-6 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition"
        >
          Enroll Now
        </button>
      </ServiceCard>

      {/* Customer Service Excellence */}
      <ServiceCard
        title="Customer Service Excellence Training Course"
        description="This comprehensive 12-week Customer Service Excellence Training Program is designed to equip participants with the foundational, interpersonal, and professional competencies required to deliver exceptional service experiences across various industries."
        moreContent="Participants will explore topics such as self-awareness, service ethics, communication excellence, conflict resolution, customer segmentation, digital tools in service, stress management, and continuous professional development."
      >
        <img
          src={CustomerService}
          alt="Customer Service"
          className="w-full h-40 object-cover rounded-lg shadow-lg"
        />
        <button
          onClick={() => window.location.href = "#contact"}
          className="mt-4 px-6 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition"
        >
          Enroll Now
        </button>
      </ServiceCard>
    </div>
  </section>
</FadeInSection>

{/* Excellence Toolkit Section */}
<FadeInSection>
  <section className="py-20 px-6 bg-black text-white text-center">
    <div className="max-w-4xl mx-auto">
      <img
       src={Logo} 
       alt="Logo"
        className="mx-auto mb-6"
        style={{ marginTop: "-40px" }}
        width="150"
      />
      <h1 className="text-3xl font-bold mb-4">
        Ready to Become Who You Were Meant to Be?
      </h1>
      <p className="text-lg leading-relaxed mb-6">
        Download our <span className="text-yellow-500 font-bold">Free Excellence Starter Toolkit</span> – a powerful self-reflection and planning guide that helps you identify what’s holding you back and sets you on a path to your best self.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Based on our holistic, principle-based framework (<strong>who + what + where + how = why + result</strong>), this guide is your first step toward clarity, personal power, and transformation.
      </p>
      <a
        href="Excellence_Starter_Toolkit_ThinkTank.pdf" // Replace with the actual file path
        download
        className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
      >
        Download the Free Toolkit
      </a>
      <div className="mt-10">
        <p className="text-lg mb-4">
          Want more tools to unlock your excellence? Join our email series and stay inspired!
        </p>
        <form action="#" method="POST" className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="p-3 w-2/3 md:w-1/2 border-none rounded-l-lg"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</FadeInSection>

    {/* Social Links */}
    <div className="mt-8 flex flex-col items-center space-y-4">
      <a href="https://www.linkedin.com/in/njoki-njuguna-bb84ab115" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-black hover:text-gray-700">
        <i className="fab fa-linkedin text-2xl"></i>
        <span>Njoki Njuguna</span>
      </a>
      <a href="tel:+254722671084" className="flex items-center space-x-3 text-black hover:text-gray-700">
        <i className="fas fa-phone text-2xl"></i>
        <span>+254 722 671 084</span>
      </a>
      <a href="mailto:transformationagenda2.0@gmail.com" className="flex items-center space-x-3 text-black hover:text-gray-700">
        <i className="fas fa-envelope text-2xl"></i>
        <span>thinktanksolutionsoriented@gmail.com</span>
      </a>
    </div>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="text-sm">© 2025 Think Tank Solutions Oriented. All rights reserved.</p>
      <p className="text-sm">Privacy Policy | Terms of Service</p>
    </footer>

    {/* Scroll to Top */}
    {isScrolled && (
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 bg-[#EEC843] text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
        ↑ Top
      </button>
    )}
  </div>
);
};

export default ThinkTankLanding;