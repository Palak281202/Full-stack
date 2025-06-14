import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { EmotionProvider } from "./store/EmotionsStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <EmotionProvider>
        <App />
      </EmotionProvider>
  </StrictMode>
);
