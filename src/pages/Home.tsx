import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Courses from "@/src/components/Courses";
import Founder from "@/src/components/Founder";
import Stats from "@/src/components/Stats";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import Gallery from "@/src/components/Gallery";
import Contact from "@/src/components/Contact";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <section id="home">
        <Hero />
      </section>
      
      <section id="stats">
        <Stats />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="founder">
        <Founder />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </motion.div>
  );
}
