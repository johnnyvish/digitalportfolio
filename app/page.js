"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "SMART ROSE",
      description: "Smart health tools to help people live longer (startup).",
      image: "/SmartRose.jpeg",
    },
    {
      title: "CHATAUDIO",
      description:
        "Generating music, sound effects and piano covers using diffusion & transformer A.I models (startup).",
      image: "/ChatAudio.jpeg",
    },
    {
      title: "CITEBOT",
      description:
        "A medical chatbot researcher with citations (Retrieval-Augmented generation).",
      image: "/CiteBot.jpeg",
    },
    {
      title: "CHORD WIZ",
      description:
        "A functional ear trainer web app for musicians, focused on chord recognition. Made it for myself and friends after struggling to find a solution.",
      image: "/ChordWiz.jpeg",
    },
  ];

  // Array to hold cloud data

  const cloudData = [
    {
      top: "10%",
      left: "20%",
      width: "25vw",
      height: "12.5vw",
      x: "+=100vw",
    },
    {
      top: "14%",
      left: "50%",
      width: "30vw",
      height: "15vw",
      x: "-=100vw",
    },
    {
      top: "18%",
      left: "70%",
      width: "20vw",
      height: "10vw",
      x: "+=100vw",
    },
    {
      top: "12%",
      left: "10%",
      width: "23vw",
      height: "11.5vw",
      x: "-=100vw",
    },
    {
      top: "16%",
      left: "40%",
      width: "27vw",
      height: "13.5vw",
      x: "+=100vw",
    },
    {
      top: "20%",
      left: "60%",
      width: "22vw",
      height: "11vw",
      x: "-=100vw",
    },
    {
      top: "24%",
      left: "80%",
      width: "25vw",
      height: "12.5vw",
      x: "+=100vw",
    },
  ];

  // Function to calculate duration based on cloud width
  const calculateDuration = (width) => {
    const baseWidth = 25; // Reference width in vw
    const baseDuration = 240; // Base duration in seconds
    const widthValue = parseFloat(width);
    return Math.round((widthValue / baseWidth) * baseDuration);
  };

  // Update cloud data with calculated durations
  cloudData.forEach((cloud) => {
    cloud.duration = calculateDuration(cloud.width);
  });

  // Refs for clouds
  const cloudRefs = useRef([]);

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element =
      target === "hero" ? document.body : document.getElementById(target);
    const yOffset = target === "hero" ? 0 : -80;
    const yPosition =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  useEffect(() => {
    // Animate each cloud
    cloudRefs.current.forEach((cloudRef, index) => {
      const cloud = cloudData[index];
      gsap.to(cloudRef, {
        x: cloud.x,
        duration: cloud.duration,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    });
  }, [cloudData]);

  return (
    <div className="bg-[#f8e5a6] min-h-screen w-full text-[#5a3e36] font-serif">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-[#5a3e36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 text-[#5a3e36] text-3xl font-bold">
              Johnny V.
            </div>
            <div className="hidden md:block text-2xl">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  onClick={(e) => handleScroll(e, "hero")}
                  className="hover:text-[#639cd9] transition duration-300"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, "about")}
                  className="hover:text-[#639cd9] transition duration-300"
                >
                  About Me
                </a>
                <a
                  href="#projects"
                  onClick={(e) => handleScroll(e, "projects")}
                  className="hover:text-[#639cd9] transition duration-300"
                >
                  Projects
                </a>
                <a
                  href="#resume"
                  onClick={(e) => handleScroll(e, "resume")}
                  className="hover:text-[#639cd9] transition duration-300"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="hover:text-[#639cd9] transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[#5a3e36] hover:text-[#639cd9] focus:outline-none focus:text-[#639cd9]"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-2xl">
              <a
                href="#"
                onClick={(e) => handleScroll(e, "hero")}
                className="block px-3 py-2 rounded-md hover:text-[#639cd9] transition duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="block px-3 py-2 rounded-md hover:text-[#639cd9] transition duration-300"
              >
                About Me
              </a>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="block px-3 py-2 rounded-md hover:text-[#639cd9] transition duration-300"
              >
                Projects
              </a>
              <a
                href="#resume"
                onClick={(e) => handleScroll(e, "resume")}
                className="block px-3 py-2 rounded-md hover:text-[#639cd9] transition duration-300"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="block px-3 py-2 rounded-md hover:text-[#639cd9] transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col relative justify-center items-center min-h-screen w-full bg-[#799AD5] overflow-hidden">
        {cloudData.map((cloud, index) => (
          <div
            key={index}
            ref={(el) => (cloudRefs.current[index] = el)}
            style={{
              position: "absolute",
              top: cloud.top,
              left: cloud.left,
              width: cloud.width,
              height: cloud.height,
              zIndex: 0,
            }}
          >
            <Image
              src="/clouds.png"
              layout="fill"
              objectFit="contain"
              alt="Clouds"
              priority
            />
          </div>
        ))}

        <h1 className="text-4xl md:text-7xl text-white font-bold text-center mt-24 z-10">
          Hello, I&apos;m{" "}
          <span className="text-[#FFE103]">Johnny Vishnevskiy</span>.
          <br />
          I&apos;m a web and app developer.
        </h1>
        <button
          onClick={(e) => handleScroll(e, "projects")}
          className="flex justify-center items-center border-4 border-white w-[70%] md:w-[40%] h-[72px] rounded-full mt-12 hover:bg-[#c1d5f4] transition duration-300 z-10"
        >
          <h2 className="text-white text-2xl font-bold">View my work</h2>
        </button>
      </div>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <h2 className="text-6xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
          <Image
            src="/face.png"
            width={200}
            height={100}
            className="rounded-2xl border-4 border-[#5a3e36] md:w-1/4"
            alt="Johnny's face"
          />
          <p className="text-2xl md:w-1/2">
            I have a passion for consumer-facing app development, artificial
            intelligence and startups. <br /> <br />
            My goal is to leverage A.I to dramatically impact the world. This
            portfolio showcases my journey as a full-stack developer, machine
            learning enthusiast, and startup co-founder.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#c1f4d5]">
        <h2 className="text-6xl font-bold text-center mb-8">Projects</h2>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border-4 border-[#5a3e36] flex flex-col items-center justify-center h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={100}
                className="rounded-md mb-4"
              />
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#5a3e36] text-xl">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-[#f8e5a6]">
        <h2 className="text-6xl font-bold text-center mb-8">Resume</h2>
        <div className="max-w-3xl mx-auto text-lg text-center">
          <p>
            Download my resume to see my professional experience, education, and
            skills in detail.
          </p>
          <div className="text-center mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-4 border-[#5a3e36] rounded-full text-[#5a3e36] font-semibold hover:bg-[#c1d5f4] hover:text-white transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section with Integrated Footer */}
      <section id="contact" className="py-20 px-4 bg-[#f4c1c1] flex flex-col">
        <h2 className="text-6xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-3xl mx-auto text-lg text-center">
          <p>
            Feel free to reach out if you&apos;re looking for a passionate
            developer, have a question, or just want to connect.
          </p>
          <div className="mt-6">
            <p>
              Email:{" "}
              <a
                href="mailto:johnny.vishnevskiy@gmail.com"
                className="text-[#639cd9]"
              >
                johnny.vishnevskiy@gmail.com
              </a>
            </p>
            <p>
              Phone: <span className="text-[#639cd9]">201-968-7506</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
