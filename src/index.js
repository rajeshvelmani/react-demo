import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoScreen from "./components/TodoScreen";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoScreen />
  </StrictMode>
);
