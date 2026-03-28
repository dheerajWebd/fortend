import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <div className="bg-mint-500">
         <App />
      </div>
   </StrictMode>
);
