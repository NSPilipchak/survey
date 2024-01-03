import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Emploees from "./pages/Emploees";

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<IndexPage />} />
      <Route path="/employees" element={<Emploees />} />
    </Routes>
  </div>
);

const IndexPage = () => {
  return (
    <h3>
      Let's go to <Link to="/employees">Emploees</Link>
    </h3>
  );
};

export default App;