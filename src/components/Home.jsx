import React from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Bio } from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

export function Home() {
  return (
    <div className="Home">
      <Header />
      <Navbar />
      <Bio />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
