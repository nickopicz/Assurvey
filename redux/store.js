import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import logger from "redux-logger";

const initialState = {};

const Store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  preloadedState: initialState,
});

export { Store };
