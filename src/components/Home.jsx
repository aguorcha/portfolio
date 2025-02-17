import React from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Bio } from "./Bio";
import Projects from "./Projects";

export function Home() {
  return (
    <div className="Home">
      <Header />
      <Navbar />
      <Bio />
      <Projects />
    </div>
  );
}

export default Home;
