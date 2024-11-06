"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "SMART ROSE",
      description:
        "Smart health tools to help people live longer (startup). Our technology integrates weekly biometric measurements with machine learning algorithms to provide personalized health insights and coaching. We've successfully launched a working product, including a custom smart ring for real-time health monitoring, and have a small but dedicated user base.",
      image: "/SmartRose.jpeg",
    },
    {
      title: "CHAT AUDIO",
      description:
        "Generating music, sound effects and piano covers using diffusion & transformer A.I models (startup). We've developed proprietary algorithms that understand musical structure and emotion, resulting in high-quality, royalty-free audio generation.",
      image: "/ChatAudio.jpeg",
    },
    {
      title: "CITEBOT",
      description:
        "A medical chatbot researcher with citations (Retrieval-Augmented generation). This AI-powered tool assists healthcare professionals and researchers by providing quick, accurate medical information with proper citations. It leverages a vast database of peer-reviewed medical literature and uses advanced natural language processing to understand complex queries.",
      image: "/CiteBot.jpeg",
    },
    {
      title: "CHORD WIZ",
      description:
        "A functional ear trainer web app for musicians, focused on chord recognition. Made it for myself and friends after struggling to find a solution. The app features custom drones, instruments and a user-friendly interface.",
      image: "/ChordWiz.jpeg",
    },
  ];

  // Slideshow images
  const slideshowImages = [
    {
      src: "/RoseBoxes.png",
      description: "Opening our shipped custom smart rings",
    },
    {
      src: "/LookUp.png",
      description: "First time doing 3D web development",
    },
    {
      src: "/LogicPro.png",
      description: "First time making music in Logic Pro",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    const yOffset = 0;
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

    // Slideshow interval
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % slideshowImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Add Twitter script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
                  href="#favorites"
                  onClick={(e) => handleScroll(e, "favorites")}
                  className="hover:text-[#639cd9] transition duration-300"
                >
                  Favorites
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
                href="#favorites"
                onClick={(e) => handleScroll(e, "favorites")}
                className="block px-3 py-2 rounded-md hover:text-[#639cd9] transition duration-300"
              >
                Favorites
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
          onClick={(e) => handleScroll(e, "about")}
          className="flex justify-center items-center border-4 border-white w-[70%] md:w-[40%] h-[72px] rounded-full mt-12 hover:bg-[#c1d5f4] transition duration-300 z-10"
        >
          <h2 className="text-white text-2xl font-bold">Find out more</h2>
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
            intelligence, and startups.
            <br /> <br />
            This portfolio showcases my journey as a full-stack developer,
            machine learning enthusiast, and startup co-founder.
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
      <section
        id="resume"
        className="py-20 px-4 bg-[#f8e5a6] flex flex-col items-center justify-center"
      >
        <h2 className="text-6xl font-bold text-center mb-8">Resume</h2>
        <div className="max-w-3xl mx-auto text-lg text-center flex flex-col justify-center items-center">
          <Image
            src={"/Resume.jpeg"}
            alt={"Resume"}
            width={360}
            height={100}
            className="rounded-2xl mb-4"
          />
          <p>
            Download my resume to see my professional experience, education, and
            skills in detail.
          </p>
          <div className="text-center mt-6">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-4 border-[#5a3e36] rounded-full text-[#5a3e36] font-semibold hover:bg-[#c1d5f4] hover:text-white transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Favorites Section */}
      <section id="favorites" className="py-20 px-4 bg-[#d5c1f4]">
        <h2 className="text-6xl font-bold text-center mb-8">Favorite Media</h2>

        {/* Video Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div
            className="relative"
            style={{
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/evQsOFQju08"
              title="Inspirational Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: 32,
              }}
            ></iframe>
          </div>
          <p className="text-xl mt-4">
            Vsauce was my introduction to the magnificent concept of questioning
            everything.
          </p>
        </div>

        {/* Audio Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-4xl font-bold mb-4">Mystery - Matt Maltese</h3>
          <audio controls className="w-full">
            <source src="Mystery.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-xl mt-4">
            I listened to this song over 40 times in a row when I first heard
            it.
          </p>
        </div>

        {/* Slideshow Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative w-full h-[50vh] overflow-hidden mb-4">
            <Image
              src={slideshowImages[currentImageIndex].src}
              alt="Slideshow Image"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <p className="text-xl text-center">
            {slideshowImages[currentImageIndex].description}
          </p>
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
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/johnny-vishnevskiy-29782919a/"
                className="text-[#639cd9]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Johnny Vishnevskiy
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
