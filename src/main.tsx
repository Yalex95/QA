import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18n/index.ts";
import "./styles/index.css";
// Supports weights 100-900
import "@fontsource-variable/inter/wght.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
