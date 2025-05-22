'use client';
import Image from "next/image";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleFadeIn = () => {
      const fadeEls = document.querySelectorAll('.fade-in');
      fadeEls.forEach(el => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleFadeIn);
    window.addEventListener('load', handleFadeIn);
    handleFadeIn();
    return () => {
      window.removeEventListener('scroll', handleFadeIn);
      window.removeEventListener('load', handleFadeIn);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
