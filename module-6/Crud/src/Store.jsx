// import { createStore } from "redux";
import rootReducer from "./Reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  // other store enhancers if any
);
// const Store = createStore(rootReducer);

export default Store;
