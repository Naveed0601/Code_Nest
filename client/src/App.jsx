import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import LoginAndSignUp from "./pages/LoginAndSignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/*" element={<LoginAndSignUp />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
