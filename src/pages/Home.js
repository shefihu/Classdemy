import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Content2 from "../components/Content2";
import Contents from "../components/Contents";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Test3 from "./Test3";

import Test5 from "./Test5";
import Test6 from "./Test6";
import Footer from "./Footer";
const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (currentUser) {
  //     toast.success("Welcome back, User");
  //   }
  // }, [navigate, currentUser]);
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <section class="w-full h-96 px-6 pb-4 bg-white antialiased ">
        <div class="mx-auto max-w-7xl">
          <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
            <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
              <span class="inline md:block">Welcome to Sensei</span>{" "}
              <span class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-yellow-300 md:inline-block">
                X Classroom
              </span>
            </h1>
            <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
              Simplifying the creation of landing pages, blog pages, application
              pages and so much more!
            </div>
            <div class="flex flex-col items-center mt-12 text-center">
              <span class="relative inline-flex w-full md:w-auto">
                <a
                  href="#_"
                  class="inline-flex items-center justify-center w-full px-8 py-2 text-base font-bold leading-6 text-white bg-yellow-300 border border-transparent rounded-full md:w-auto hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                >
                  Get Started
                </a>
                <span class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">
                  konnichiwa
                </span>
              </span>
              <a href="#" class="mt-3 text-sm text-indigo-500">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      {/* <Contents /> */}
      <Content2 />
      <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
        <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
          <img
            tabIndex="0"
            role="img"
            aria-label="people smiling"
            className="mx-auto"
            src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"
            alt="people smiling"
          />
        </div>
        <div role="contentinfo" className="w-full lg:w-1/2 h-full">
          <p tabIndex="0" className="text-yellow-300 uppercase text-2xl mb-4">
            Qusique Tincidun sapien
          </p>
          <h1
            tabIndex="0"
            className="text-green-300 text-4xl lg:text-6xl font-black mb-8"
          >
            Classroom for all
          </h1>
          <p tabIndex="0" className="text-gray-800 font-regular mb-8">
            COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offerincare products is
            developed and rigorously tested with leading scientists. Indulge
            yourself in a luxurious and sensorial skincare experience.
            Cutting-edge innovations, proven by Science.
          </p>
          {/* <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
            <div className="sm:flex items-center py-2">
              <div className="flex items-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg4.svg"
                  alt="icon"
                />
                <input
                  aria-label="Doctor name"
                  className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                  placeholder="Doctor Name"
                />
              </div>
              <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg5.svg"
                  alt="icon"
                />
                <input
                  aria-label="zip code"
                  className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                  placeholder="Zip code"
                />
              </div>
              <div className="flex items-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg6.svg"
                  alt="icon"
                />
                <input
                  aria-label="insurance"
                  className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                  placeholder="Insurance"
                />
              </div>
            </div>
            <button
              role="button"
              aria-label="search"
              className="focus:bg-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative"
            >
              <img
                className="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg7.svg"
                alt="search"
              />
              <input
                aria-label="search"
                className="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6"
              />
            </button>
          </div> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Test3 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Test5 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Test6 />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
