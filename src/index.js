import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-slate-400 h-full min-h-screen">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
