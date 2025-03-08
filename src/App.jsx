import React from "react";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router";
import Product from "./pages/Product";

const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;
