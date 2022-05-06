import React from "react";
import "./contents.css";
const Content2 = () => {
  return (
    <div>
      {" "}
      <section class="px-2 pt-32 bg-white md:px-0">
        <div class="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
          <h1 class="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
            <span class="block">
              Level Up Your{" "}
              <span class="block mt-1 text-purple-500 lg:inline lg:mt-0">
                Landing Pages
              </span>
            </span>
          </h1>
          <p class="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
            Award winning pages that will take your game to the next level!
          </p>
          <div class="relative flex flex-col justify-center md:flex-row md:space-x-4">
            <a
              href="#_"
              class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto"
            >
              Try It Free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a
              href="#_"
              class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
            >
              Learn More
            </a>
          </div>
        </div>
        <div class="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
          <img src="https://cdn.devdojo.com/images/november2020/hero-image.png" />
        </div>
      </section>
      {/* <div className="sign">
        <span className="fast-flicker">W</span>elc
        <span className="flicker">o</span>me
      </div> */}
      {/* <a href="https://www.youtube.com/watch?v=szLmLFsisbY" target="_blank">
        <section className="section">
          <div className="container">
            <div className="row mt-15">
              <div className="text-center widthset">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #f8e739, #f1d42d, #eac222, #e1b019, #d89e10)",
                  }}
                >
                  <div className="wave" style={{ bottom: "80%" }}>
                    <h1 className="heading-style">L</h1>
                  </div>
                </div>
              </div>
              <div className="text-center widthset">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #d89e10, #e28f00, #ec7f00, #f66b00, #ff5200)",
                  }}
                >
                  <div className="wave" style={{ bottom: "80%" }}>
                    <h1 className="heading-style">I</h1>
                  </div>
                </div>
              </div>
              <div className="text-center widthset">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #e2130b, #e1110c, #e00f0d, #df0c0d, #de090e)",
                  }}
                >
                  <div className="wave" style={{ bottom: "80%" }}>
                    <h1 className="heading-style">Q</h1>
                  </div>
                </div>
              </div>
              <div className="text-center widthset">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #ce0061, #d50079, #d60094, #d000b3, #c115d4)",
                  }}
                >
                  <div className="wave" style={{ bottom: "80%" }}>
                    <h1 className="heading-style">U</h1>
                  </div>
                </div>
              </div>
              <div className="text-center widthset">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #6a0ddc, #5f0ddd, #530edd, #450fde, #3210de)",
                  }}
                >
                  <div className="wave" style={{ bottom: "80%" }}>
                    <h1 className="heading-style">I</h1>
                  </div>
                </div>
              </div>
              <div className="text-center widthset">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #0c2fd4, #0045d8, #0056d9, #0065d8, #1b73d5)",
                  }}
                >
                  <div className="wave" style={{ bottom: "80%" }}>
                    <h1 className="heading-style">D</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </a> */}
    </div>
  );
};

export default Content2;
