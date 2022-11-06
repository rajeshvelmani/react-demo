import { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import TodoScreen from "./components/TodoScreen";
import App from "./App";
import MyForm from "./components/MyForm";
import Router from "./Router";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <TodoScreen />
    <App />
    <MyForm /> */}
    <Router />
  </StrictMode>
);
