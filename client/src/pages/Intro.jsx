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
import { motion, useScroll, useSpring } from "framer-motion";

const Intro = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="bg-gray-950 pt-20">
      <Header />
      <motion.div
        className="h-3 bg-red-600 fixed left-0 right-0"
        style={{ scaleX }}
      />
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
