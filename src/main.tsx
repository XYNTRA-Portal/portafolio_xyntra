import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Tailwind
import App from "./App"; // Componente principal
import Proyectos from "./Proyectos"; // Import correcto

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Proyectos />
  </StrictMode>
);
