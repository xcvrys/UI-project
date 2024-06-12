import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AnimatedTabs from "./components/Nav.tsx";
import AppWrapper from "./components/AppWrapper";
import React from "react";
import ReactDOM from "react-dom/client";
import RouteHandler from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/*" element={<RouteHandler />} />
        </Routes>
      </AppWrapper>
      <AnimatedTabs />
    </BrowserRouter>
  </React.StrictMode>
);
