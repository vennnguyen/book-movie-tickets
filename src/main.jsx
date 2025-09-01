import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/configStore.js"; // Make sure you have a store.js or store/index.js file exporting your Redux store

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
