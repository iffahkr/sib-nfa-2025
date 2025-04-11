import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Contact from "./Contact.jsx";
import Team from "./Team.jsx";
import Book from "./Book.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Book />
    <Team />
    <Contact />
  </StrictMode>
);
