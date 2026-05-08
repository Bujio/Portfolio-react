import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 90,
            density: { enable: true, value_area: 1000 },
          },
          color: { value: ["#a855f7", "#06b6d4", "#7c3aed"] },
          shape: { type: "circle" },
          size: { value: 1.5, random: true },
          opacity: {
            value: 0.4,
            random: true,
            anim: { enable: true, speed: 0.8, opacity_min: 0.05, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 130,
            color: "#a855f7",
            opacity: 0.08,
            width: 1,
          },
          move: {
            direction: "none",
            speed: 0.4,
            random: true,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.25 } },
            push: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
