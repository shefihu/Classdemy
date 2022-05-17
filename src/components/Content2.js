import React from "react";
import "./contents.css";
const Content2 = () => {
  return (
    <div>
      {" "}
      <div className="overflow-y-hidden">
        <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
          {/* Code block starts */}
          <dh-component>
            <div className="pt-16">
              <div className="py-12 bg-gray-100">
                <div className="max-w-8xl mx-auto container">
                  <div
                    tabIndex={0}
                    aria-label="group of cards"
                    className="focus:outline-none flex flex-wrap items-center justify-center sm:justify-between"
                  >
                    <div
                      tabIndex={0}
                      aria-label="card 1"
                      className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                    >
                      <div className="w-20 h-20 relative ml-6">
                        <div className="absolute top-0 right-0 bg-yellow-100 rounded w-16 h-16 mt-2 mr-1" />
                        <div className="text-white absolute bottom-0 left-0 bg-yellow-300 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG1.svg"
                            alt="drawer"
                          />
                        </div>
                      </div>
                      <h4
                        tabIndex={0}
                        className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                      >
                        Classroom for X
                        <br />
                        components
                      </h4>
                    </div>
                    <div
                      tabIndex={0}
                      aria-label="card 2"
                      className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                    >
                      <div className="w-20 h-20 relative ml-6">
                        <div className="absolute top-0 right-0 bg-yellow-100 rounded w-16 h-16 mt-2 mr-1" />
                        <div className="text-white absolute bottom-0 left-0 bg-yellow-300 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG2.svg"
                            alt="check"
                          />
                        </div>
                      </div>
                      <h4
                        tabIndex={0}
                        className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                      >
                        Classroom for X
                        <br />
                        for X
                      </h4>
                    </div>
                    <div
                      tabIndex={0}
                      aria-label="card 3"
                      className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                    >
                      <div className="w-20 h-20 relative ml-6">
                        <div className="absolute top-0 right-0 bg-yellow-100 rounded w-16 h-16 mt-2 mr-1" />
                        <div className="text-white absolute bottom-0 left-0 bg-yellow-300 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG3.svg"
                            alt="html tag"
                          />
                        </div>
                      </div>
                      <h4
                        tabIndex={0}
                        className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                      >
                        Classroom for X
                        <br />X
                      </h4>
                    </div>
                    <div
                      tabIndex={0}
                      aria-label="card 4"
                      className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                    >
                      <div className="w-20 h-20 relative ml-6">
                        <div className="absolute top-0 right-0 bg-yellow-100 rounded w-16 h-16 mt-2 mr-1" />
                        <div className="text-white absolute bottom-0 left-0 bg-yellow-300 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_heading_with_icon-SVG4.svg"
                            alt="monitor"
                          />
                        </div>
                      </div>
                      <h4
                        tabIndex={0}
                        className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                      >
                        X
                        <br />
                        Classroom for X
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dh-component>
          {/* Code block ends */}
        </div>
      </div>
    </div>
  );
};

export default Content2;
