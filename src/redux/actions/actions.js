// import * as types from "./actionTypes";
import { auth } from "./../../firebase";
// import REGISTER_START from "../actions/actionTypes";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import Cookies from "js-cookie";
import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
} from "../constants/userConstants";
// const registerStart = () => ({
//   type: types.REGISTER_START,
// });
// const registerSuccess = (user) => ({
//   type: types.REGISTER_SUCCESS,
//   payload: user,
// });
// const registerFail = (error) => ({
//   type: types.REGISTER_FAILURE,
//   payload: error,
// });
// const loginStart = () => ({
//   type: types.LOGIN_START,
// });
// const loginSuccess = (user) => ({
//   type: types.LOGIN_SUCCESS,
//   payload: user,
// });
// const loginFail = (error) => ({
//   type: types.LOGIN_FAILURE,
//   payload: error,
// });
// const logoutStart = () => ({
//   type: types.LOGOUT_START,
// });
// const logoutSuccess = (user) => ({
//   type: types.LOGOUT_SUCCESS,
// });
// const logoutFail = (error) => ({
//   type: types.LOGOUT_FAILURE,
//   payload: error,
// });
// export const registerInitiate = (email, password) => {
//   return function (dispatch) {
//     dispatch(registerStart());

//     createUserWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         // updateProfile({
//         //   displayName,
//         // });
//         dispatch(registerSuccess(user));
//       })
//       .catch((err) => dispatch(registerFail(err.message)));
//   };
// };
// export const loginInitiate = (email, password, setLoading) => {
//   return function (dispatch) {
//     dispatch(loginStart());

//     signInWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         // updateProfile({ displayName });

//         dispatch(loginSuccess(user));
//         // setLoading(false);
//         // console.log("ggggggggg", setLoading);
//         Cookies.set("accessToken", JSON.stringify(user), {
//           expires: 7,
//         });
//         Cookies.get("accessToken");
//         // Cookies.get("accessToken");
//         console.log(Cookies.get("accessToken"));
//       })
//       .catch((err) => dispatch(loginFail(err.message)));
//   };
// };
// export const logoutInitiate = () => {
//   return function (dispatch) {
//     dispatch(logoutStart());

//     signOut(auth)
//       .then((resp) => {
//         // updateProfile({
//         //   displayName,
//         // });
//         Cookies.remove("accessToken");
//         dispatch(logoutSuccess());
//       })
//       .catch((err) => dispatch(logoutFail(err.message)));
//   };
// };
export const register = (email, password) => async (dispatch) => {
  dispatch({ type: REGISTER_START, payload: { email, password } });
  try {
    const { data } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((response) => {
      console.log(response);
    });
    dispatch({ type: REGISTER_SUCCESS, payload: data });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.message,
    });
  }
};
export const signin =
  (email, password, navigate, toast) => (dispatch, getState) => {
    dispatch({ type: LOGIN_START, payload: { email, password } });

    // const {
    //   userSignin: { user },
    // } = getState();
    // const { data } = await signInWithEmailAndPassword(auth, email, password);
    // dispatch({ type: LOGIN_SUCCESS, payload: data });
    // // dispatch({ type: LOGIN_SUCCESS, payload: data });
    // Cookies.set("userInfo", JSON.stringify(data), {
    //   expires: 7,
    // });
    // Cookies.get("userInfo");
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        Cookies.set("userInfo", JSON.stringify(user), {
          expires: 7,
        });
        Cookies.get("userInfo");
        // navigate("/class");
        // toast.success("welcome boss");

        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        dispatch({
          type: LOGIN_FAILURE,
          payload: err.message,
        });
      });
  };
export const signout = () => (dispatch) => {
  Cookies.remove("userInfo");

  dispatch({ type: LOGOUT });
};
