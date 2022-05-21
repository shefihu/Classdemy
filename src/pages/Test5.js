import React from "react";
import unnamed from "../assets/images/unnamed.jpg";
const Test5 = () => {
  return (
    <div>
      {" "}
      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
              Explore the classroom
              {/* <span className="text-blue-600 dark:text-blue-400">Idea</span> */}
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
            </p>
            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <a
                href="#"
                className="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <div
            className="w-full h-full bg-cover"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/f4vId1xtHAkOPDspk3NVUuPDJljbo-sugjCQ27et7zy_jNGxDcNyVNNjvh8c7pAI8lJvyxLr8ja0WQ9Krxbbb9XwmtsWxlDEEt4omZR_qQKgnRxLbg=w1296-v1)",
            }}
          >
            <div className="w-full h-full bg-black opacity-25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test5;
