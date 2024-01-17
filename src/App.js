import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Emploees from "./pages/Emploees";
import QuestionsPool from "./pages/QuestionsPool";
import QuestionsSetup from "./pages/QuestionsSetup";

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<IndexPage />} />
      {/* <Route path="/employees" element={<Emploees />} /> */}
      <Route path="/pool" element={<QuestionsPool />} />
      <Route path="/setup" element={<QuestionsSetup />} />
    </Routes>
  </div>
);

const IndexPage = () => {
  return (
    <div>
      <h3>
        <Link to="/pool">Question Pool</Link>
      </h3>
      <h3>
        <Link to="/setup">Question Setup</Link>
      </h3>
      {/* <h3>
        Let's go to <Link to="/employees">Emploees</Link>
      </h3> */}
    </div>
  );
};

export default App;