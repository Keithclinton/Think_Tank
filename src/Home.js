import React, { useState } from "react";
import Image1 from "./assets/Business Strategy Image.jpg";
import Image2 from "./assets/Consultation Image.png";
import Image3 from "./assets/Market Strategy Image.jpg";
import Image4 from "./assets/Personal Growth Image.png";
import Logo from "./assets/Logo.jpg";

const ThinkTankLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-white text-black min-h-screen scroll-smooth">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-xl text-yellow-500">Think Tank</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-yellow-500 font-medium">About</a>
          <a href="#programs" className="hover:text-yellow-500 font-medium">Programs</a>
          <a href="#newsletter" className="hover:text-yellow-500 font-medium">Newsletter</a>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 md:hidden z-40">
            <a href="#about" className="hover:text-yellow-500 font-medium" onClick={toggleMenu}>About</a>
            <a href="#programs" className="hover:text-yellow-500 font-medium" onClick={toggleMenu}>Programs</a>
            <a href="#newsletter" className="hover:text-yellow-500 font-medium" onClick={toggleMenu}>Newsletter</a>
          </div>
        )}
      </nav>

      {/* Header Section */}
      <header className="flex flex-col items-center justify-center text-center py-32 px-4 bg-yellow-400">
        <h1 className="text-5xl font-bold text-black animate-fadeIn">Think Tank Solutions</h1>
        <p className="text-lg mt-2 text-gray-800 animate-fadeIn delay-100">
          Innovative Strategies for Personal and Organizational Transformation
        </p>
        <a href="#newsletter" className="mt-4 px-6 py-2 bg-black text-white font-bold rounded hover:bg-gray-800 transition">
          Get Started
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto text-center py-16 px-4 animate-fadeIn">
        <h2 className="text-3xl font-bold text-yellow-500">About Us</h2>
        <p className="mt-4 text-gray-700">
          Think Tank Solutions is a professional development and transformation organization committed to nurturing excellence. 
          We offer holistic programs designed to cultivate leaders, empower youth, and enable businesses to thrive in dynamic environments. 
          We believe in purpose-driven transformation that not only improves systems and structures, but also transforms mindsets.
        </p>
        <img src={Image1} alt="Business Strategy" className="mx-auto mt-8 rounded-lg shadow-lg w-full max-w-xl" />
      </section>

      {/* Services Section */}
      <section id="programs" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-yellow-500 text-center animate-fadeIn">Our Programs & Services</h2>
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {[
            {
              title: "Business & Personal Excellence Training",
              desc: "Realize your full potential through mindset coaching, vision alignment, and purpose discovery.",
              img: Image2
            },
            {
              title: "Organizational Strategy & Market Positioning",
              desc: "Identify market gaps, build strategic plans, and align your brand with client needs.",
              img: Image3
            },
            {
              title: "The Boy Program",
              desc: "Mentoring boys into responsible leaders through coaching, safe spaces, and purpose-driven learning.",
              img: Image4
            },
            {
              title: "Future Leaders Mentorship",
              desc: "Early purpose discovery, values education, and practical skills development for the next generation.",
              img: Image4
            }
          ].map((item, idx) => (
            <div key={idx} className="animate-fadeInUp delay-100">
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
              <img src={item.img} alt={item.title} className="mt-4 rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="text-center py-16 px-4 bg-yellow-400">
        <h2 className="text-3xl font-bold text-black">Join Our Mailing List</h2>
        <p className="mt-2 text-gray-800">Get updates on new programs, events, and inspirational content.</p>
        <form className="mt-6 max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none"
          />
          <button type="submit" className="px-6 py-2 bg-black text-white font-bold rounded hover:bg-gray-800 transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default ThinkTankLanding;
