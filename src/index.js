import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-particles-js";
import { Header } from "./pages/header";
import "./styles.css";

function ParticlesCommom() {
  return (
    <Particles
      style={{ width: "100%", height: "100%", position: "absolute" }}
      params={{
        particles: {
          number: {
            value: 55,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          line_linked: {
            enable: true,
            opacity: 0.1
          },
          size: {
            value: 1
          }
        }
      }}
    />
  );
}

function App() {
  return (
    <div class="uk-container uk-container-expand uk-padding-remove">
      <section class="nm--header" uk-parallax="sepia: 100;">
        <ParticlesCommom />
        <Header />
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
