import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { NavigationProvider } from "./context/Navigation.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);
