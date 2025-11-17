import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CarsPage from "../pages/CarsPage";
import Layout from "../components/Layout";
import React from "react";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
