import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // << Tailwind
import App from "./App"; // << Componente React

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
