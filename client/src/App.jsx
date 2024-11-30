import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import LoginAndSignUp from "./pages/LoginAndSignUp";
import DashBoard from "./pages/DashBoard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/*" element={<LoginAndSignUp />}></Route>
        <Route path="/dashboard/*" element={<DashBoard />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
