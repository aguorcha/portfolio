import React from "react";
import { Header } from "./Header";
import { Bio } from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

export function Home() {
  return (
    <div className="Home">
      <Header />
      <Bio />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
