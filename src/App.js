import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from "./Home/Home";
import Check from "./Check";
import About from "./About";
import Navbar from "./Navbar";
import DragDropFile from "./DragDropFile";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </>
  );
};

export default App;
