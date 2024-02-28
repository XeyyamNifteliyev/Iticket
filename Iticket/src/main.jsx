import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;

const publishableKey = VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={publishableKey}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
