import React from "react";
import Home from "../component/Home/Home";
import AboutUs from "../component/AboutUs/AboutUs";
import Features from "../component/Features/Features";
import Testimonials from "../component/Testimonials/Testimonials";
import Faq from "../component/FAQ/Faq";
import Review from "../component/Review/Review";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { Route, Routes } from "react-router-dom";

const Intro = () => {
  return (
    <div className="bg-gray-950 pt-20">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <AboutUs />
              </div>
              <div id="features">
                <Features />
              </div>
              <div id="testimonials">
                <Testimonials />
              </div>
              <div id="faq">
                <Faq />
              </div>
              <div id="review">
                <Review />
              </div>
              <div id="footer">
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Intro;
