import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Content2 from "../components/Content2";
import Contents from "../components/Contents";
import Navbar from "../components/Navbar";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      // toasters.success("Welcome back, User");
      navigate("/login");
    }
  }, [navigate, currentUser]);
  return (
    <div>
      <Navbar />
      <section class="w-full px-6 pb-12  antialiased bg-white">
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
                  class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-yellow-300 border border-transparent rounded-full md:w-auto hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
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
      <Contents />
      <Content2 />
    </div>
  );
};

export default Home;
