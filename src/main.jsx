import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BillSplitterProvider } from "./components/BillSplitterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BillSplitterProvider>
      <App />
    </BillSplitterProvider>
  </StrictMode>
);
