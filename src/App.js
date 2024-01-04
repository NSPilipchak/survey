import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Emploees from "./pages/Emploees";
import LoadQuestions from "./pages/LoadQuestions";

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<IndexPage />} />
      <Route path="/employees" element={<Emploees />} />
      <Route path="/load" element={<LoadQuestions />} />
    </Routes>
  </div>
);

const IndexPage = () => {
  return (
    <div>
      <h3>
        Load the <Link to="/load">questions</Link>
      </h3>
      <h3>
        Let's go to <Link to="/employees">Emploees</Link>
      </h3>
    </div>
  );
};

export default App;