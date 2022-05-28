import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { loginInitiate, signin } from "../redux/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  // const [state, setState] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  // const { currentUser } = useSelector((state) => state.user);
  // const { loading } = { currentUser };

  const notify = () => toast("Wow so easy !");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(loading);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password, navigate, toast));
  };
  // console.log(userInfo);
  // const { email, password } = state;
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     return;
  //   }

  //   // setState({ email: "", password: "" });

  //   try {
  //     dispatch(loginInitiate(email, password));
  //     // setLoading(true);
  //   } catch (error) {
  //     alert(error);
  //     // setLoading(false);
  //   }
  //   // Cookies.set("accessToken", user.currentUser.accessToken, {
  //   //   expires: 7,
  //   // });
  // };
  useEffect(() => {
    if (userInfo) {
      navigate("/class");
      toast("d");
    }
  }, [userInfo, navigate]);
  // if (!userInfo.password) {
  //   alert("what");
  // }
  // console.log(currentUser);
  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/login");
  //   }
  // }, [navigate, currentUser]);
  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   setState({ ...state, [name]: value });
  // };
  const handleGoogleSignIn = () => {};
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <section class="w-full h-screen px-8 py-16 bg-gray-100 xl:px-8">
        {/* {error && (
          <>
            <h1>Inalid</h1>
          </>
        )} */}
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col items-center md:flex-row">
            <div class="w-full space-y-5 md:w-3/5 md:pr-16">
              <p class="font-medium text-red-600 uppercase">
                Bla bla bla X stuffs
              </p>
              <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Fine Shefiu In X and find X in Shefiu
              </h2>
              <p class="text-xl text-gray-600 md:pr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                similique veniam repudiandae minus neque, voluptate, cupiditate
                cumque incidunt consequatur sed ipsa aliquid, illo maxime
                inventore sint enim. Dolores, eveniet quae!
              </p>
            </div>

            <div class="w-full mt-16 md:mt-0 md:w-2/5">
              <form
                onSubmit={handleSubmit}
                class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
              >
                <h3 class="mb-6 text-2xl font-medium text-center">
                  Sign in to your Account
                </h3>
                <input
                  type="email"
                  id="inputEmail"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Email address"
                  // value={email}
                  required
                />
                <input
                  type="password"
                  name="password"
                  class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="inputPassword"
                  // value={password}
                  required
                />
                <div class="block">
                  {!loading && (
                    <button
                      type="submit"
                      class="w-full px-3 py-2 font-medium text-white bg-yellow-300 rounded-lg"
                    >
                      Sign In
                    </button>
                  )}
                  {loading && (
                    <button
                      type="submit"
                      disabled
                      class="w-full px-3 py-2 font-medium text-white bg-yellow-300 rounded-lg"
                    >
                      <div className="w-5 h-5 text-center border-4 border-dashed rounded-full animate-spin border-white-400"></div>
                    </button>
                  )}
                </div>
                <button
                  onClick={handleGoogleSignIn}
                  class="inline-block w-full px-3 py-2 mt-3 text-lg font-bold text-center text-yellow-300 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
                >
                  Sign up with Google
                </button>
                <p class="w-full mt-4 text-sm text-center text-gray-500">
                  Don't have an account?{" "}
                  <a href="/register" class="text-red-500 underline">
                    Sign up here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <button onClick={notify}>Notify</button>
      </section>
    </div>
  );
};

export default Login;
