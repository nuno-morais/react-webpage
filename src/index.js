import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-particles-js";

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
      <div class="uk-section">
        <div class="uk-position-center nm--loading_container">
          <div class="uk-card uk-width-1-2@m uk-position-center">
            <div class="uk-card-header">
              <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
                <div class="uk-width-auto uk-first-column">
                  <img
                    class="uk-border-circle"
                    width="50"
                    height="50"
                    src="images/photo.jpg"
                  />
                </div>
                <div class="uk-width-expand">
                  <h3 class="uk-card-title uk-margin-remove-bottom">
                    Nuno Morais
                  </h3>
                  <p class="uk-text-meta uk-margin-remove-top">
                    <span>Software Engineer</span>
                  </p>
                </div>
              </div>
            </div>
            <h3 class="uk-h5 uk-text-center uk-animation-fade">
              <a
                href="https://www.linkedin.com/in/moraisnuno/"
                uk-icon="icon: linkedin"
                target="_blank"
                class="uk-icon"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="linkedin"
                >
                  <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z" />
                  <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z" />
                </svg>
              </a>
              &nbsp;&nbsp;
              <a
                href="https://github.com/nuno-morais"
                uk-icon="icon: github"
                target="_blank"
                class="uk-icon"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="github"
                >
                  <path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z" />
                </svg>
              </a>
              &nbsp; &nbsp;
              <a
                href="mailto:webpage@nuno-morais.eu"
                target="_top"
                uk-icon="icon: mail"
                class="uk-icon"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="mail"
                >
                  <polyline
                    fill="none"
                    stroke="#000"
                    points="1.4,6.5 10,11 18.6,6.5"
                  />
                  <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z" />
                </svg>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
