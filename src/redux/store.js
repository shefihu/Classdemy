import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Cookies from "js-cookie";
import rootReducer from "./reducers/rootReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/reducer";
const initialState = {
  userSignin: {
    userInfo: Cookies.get("userInfo")
      ? JSON.parse(Cookies.get("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  userSignin: userLoginReducer,
  userRegister: userRegisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
