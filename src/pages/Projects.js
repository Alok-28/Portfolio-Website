import React from "react";
import { projects } from "../portfolio";
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";
import uniqid from "uniqid";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles3.json";
import { useState,useEffect } from "react";
const Projects = () => {
    const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesVisible(true);
    });
  }, []);

  if (!projects.length) return null;
  return (
    <section className="section projects">
      <div className="grid gap-8 lg:grid-cols-3 max-w-[1200px]">
        {projects.map((project)=>(
            <ProjectContainer key={uniqid()} project = {project}/>
        ))}
      </div>
      <div className="absolute inset-0 z-[0]">
        {particlesVisible && <Particles options={particlesOptions} />}
      </div>
    </section>
  );
};

export default Projects;
