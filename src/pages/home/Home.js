import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbarr";
import Header from "../../components/Header/Header";
import Courses from "../../components/Courses/Courses";
import InfoNext from "../../components/AboutNext1code/InfoNext";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Courses />
      <InfoNext />
      <Footer />
    </div>
  );
};

export default Home;
