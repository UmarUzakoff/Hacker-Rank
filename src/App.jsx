import React from "react";
import { Layout } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, PageNotFound } from "./pages";

const App = () => {
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
