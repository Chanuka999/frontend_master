import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

const App = () => {
  const cartHook = useState([]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
