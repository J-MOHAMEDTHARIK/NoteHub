import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";

import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#171717",
            color: "#fff",
            border: "1px solid #22d3ee",
            borderRadius: "14px",
            padding: "14px 18px",
            fontSize: "15px",
            fontWeight: "500",
          },

          success: {
            iconTheme: {
              primary: "#22d3ee",
              secondary: "#171717",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#171717",
            },
          },
        }}
      />
    </AuthProvider>
  </BrowserRouter>,
);
