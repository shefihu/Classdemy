import * as types from "./actionTypes";
import { auth } from "./../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import Cookies from "js-cookie";
const registerStart = () => ({
  type: types.REGISTER_START,
});
const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
const registerFail = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});
const loginStart = () => ({
  type: types.LOGIN_START,
});
const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
const loginFail = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});
const logoutStart = () => ({
  type: types.LOGOUT_START,
});
const logoutSuccess = (user) => ({
  type: types.LOGOUT_SUCCESS,
});
const logoutFail = (error) => ({
  type: types.LOGOUT_FAILURE,
  payload: error,
});
export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // updateProfile({
        //   displayName,
        // });
        dispatch(registerSuccess(user));
      })
      .catch((err) => dispatch(registerFail(err.message)));
  };
};
export const loginInitiate = (email, password, setLoading) => {
  return function (dispatch) {
    dispatch(loginStart());

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // updateProfile({ displayName });

        dispatch(loginSuccess(user));
        // setLoading(false);
        // console.log("ggggggggg", setLoading);
        Cookies.set("accessToken", JSON.stringify(user), {
          expires: 7,
        });
        Cookies.get("accessToken");
        // Cookies.get("accessToken");
        console.log(Cookies.get("accessToken"));
      })
      .catch((err) => dispatch(loginFail(err.message)));
  };
};
export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());

    signOut(auth)
      .then((resp) => {
        // updateProfile({
        //   displayName,
        // });
        Cookies.remove("accessToken");
        dispatch(logoutSuccess());
      })
      .catch((err) => dispatch(logoutFail(err.message)));
  };
};
