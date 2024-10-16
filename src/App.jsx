import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import NotFound from "./components/not-found";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  );
};

export default App;