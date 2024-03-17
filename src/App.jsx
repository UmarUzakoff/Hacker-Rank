import React, { useEffect } from "react";
import { Layout } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, PageNotFound } from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Layout>
  );
};

export default App;
