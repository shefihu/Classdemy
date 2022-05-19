import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import { registerInitiate } from "../redux/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  });
  const [loading, setLoading] = useState();
  console.log(state);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/");
  //   }
  // }, [currentUser, navigate]);
  const dispatch = useDispatch();
  const { email, password, displayName, confirmPassword } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast("cant see these passwords working");
    } else {
      dispatch(registerInitiate(email, password, displayName));
    }

    // setState({ email: "", displayName: "", password: "", confirmPassword: "" });
    navigate("/login");
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleGoogleSignIn = () => {};
  return (
    <div>
      <Navbar />
      <section class="w-full bg-white">
        <div class="mx-auto max-w-7xl">
          <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div class="relative">
                    <p class="mb-2 font-medium text-gray-700 uppercase">
                      Work smarter
                    </p>
                    <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl">
                      Features to help you work smarter
                    </h2>
                  </div>
                  <p class="text-2xl text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde fugiat reprehenderit eveniet temporibus doloremque
                    saepe id at? Dolorem in, eius quis soluta nostrum tenetur
                    non provident! Ducimus magnam cum unde?
                  </p>
                  <a
                    href="/login"
                    class="inline-block  px-3 py-2 text-xl font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg hover:bg-yellow-200 ease"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 class="w-full text-3xl font-bold">Signup</h4>
                <p class="text-lg text-gray-500">
                  or, if you have an account you can{" "}
                  <a href="/login" class="text-yellow-300 underline">
                    Sign in
                  </a>
                </p>
                <form
                  onSubmit={handleSubmit}
                  class="relative w-full mt-10 space-y-8"
                >
                  <div class="relative">
                    <label class="font-medium text-gray-900">Name</label>
                    <input
                      type="text"
                      name="displayName"
                      value={displayName}
                      onChange={handleChange}
                      required
                      id="fullName"
                      class="block w-full px-4 py-2 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div class="relative">
                    <label class="font-medium text-gray-900">Email</label>
                    <input
                      type="email"
                      id="user-email"
                      value={email}
                      onChange={handleChange}
                      required
                      name="email"
                      class="block w-full px-4 py-2 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <div class="relative">
                    <label class="font-medium text-gray-900">Password</label>
                    <input
                      type="password"
                      name="password"
                      class="block w-full px-4 py-2 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                      placeholder="Password"
                      onChange={handleChange}
                      id="inputPassword"
                      value={password}
                      required
                    />
                  </div>
                  <div class="relative">
                    <label class="font-medium text-gray-900">Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      required
                      onChange={handleChange}
                      value={confirmPassword}
                      class="block w-full px-4 py-2 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                      placeholder="Password"
                    />
                  </div>
                  <div class="relative">
                    {!loading && (
                      <button
                        type="submit"
                        class="inline-block w-full px-3 py-2 text-lg font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg hover:bg-yellow-400 ease"
                      >
                        Create Account
                      </button>
                    )}
                    {loading && (
                      <button
                        type="submit"
                        disabled
                        class="inline-block w-full px-3 py-2 text-lg font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg hover:bg-yellow-400 ease"
                      >
                        <div className="w-5 h-5 text-center border-4 border-dashed rounded-full animate-spin border-white-400"></div>
                      </button>
                    )}

                    {/* <a
                      href="#_"
                      class="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
                    >
                      Sign up with Google
                    </a> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
