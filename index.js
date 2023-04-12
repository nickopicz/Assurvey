import React from "react";
import App from "./App.jsx";
import { Store } from "./redux/store.js";
import { Provider } from "react-redux";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";

const NewRootComponent = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};
export default registerRootComponent(NewRootComponent);
