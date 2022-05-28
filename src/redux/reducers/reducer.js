// import * as types from "./../actions/actionTypes";
// const initialState = {
//   loading: false,
//   currentUser: null,
//   error: null,
// };
// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.REGISTER_START:
//     case types.LOGIN_START:
//     case types.LOGOUT_START:
//       return {
//         ...state,
//         loading: true,
//       };
//     case types.LOGOUT_SUCCESS:
//       return {
//         ...state,
//         currentUser: null,
//       };
//     case types.REGISTER_SUCCESS:
//     case types.LOGIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         currentUser: action.payload,
//       };
//     case types.REGISTER_FAILURE:
//     case types.LOGIN_FAILURE:
//     case types.LOGOUT_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
} from "../constants/userConstants";

// export default userReducer;
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_START:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case REGISTER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case LOGOUT:
      return {};

    default:
      return state;
  }
};
