import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador Web Full Stack",
          "Digital E-commerce Merchandiser",
          "Marketing Online",
          "Posicionamiento SEO y SEM"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
