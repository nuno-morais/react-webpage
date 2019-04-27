import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-particles-js";
import { Header } from "./pages/header";
import "./styles.css";

function App() {
  return (
    <section class="nm--header">
      <Particles
        style={{ width: "100%", height: "100%", position: "absolute" }}
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 300
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.02
            },
            move: {
              direction: "right",
              speed: 0.05
            },
            size: {
              value: 1
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
              }
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              push: {
                particles_nb: 1
              }
            }
          },
          retina_detect: true
        }}
      />
      <Header />
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
