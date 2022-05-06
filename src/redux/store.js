import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Cookies from "js-cookie";
import rootReducer from "./reducers/rootReducer";
// const initialState = {
//   userSignin: {
//     userInfo: Cookies.get("accessToken")
//       ? JSON.parse(Cookies.get("accessToken"))
//       : null,
//   },
// };
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleware));
