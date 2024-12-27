import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbarr";
import Container from "react-bootstrap/esm/Container";
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <header
        fluid
        style={{
          height:"128px",
          backgroundColor: "#353337",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent:"center"
        }}
        className="fluid py-4 my-2"
      >
        <Container>
          <p style={{ fontSize: "1.7rem" }}>تماس با ما</p>
        </Container>
      </header>
      <Container className="my-5">
        <ul>
          <li className="about-title">راه های ارتباطی</li>
          <li>ایدی تلگرام : nextcode_support</li>
          <li>آدرس ایمیل : amirhosseinrahmani @gmail.com</li>
        </ul>
        <div className="icon">
          <i className="fa-brands fa-youtube "></i>
          <i className="fa-brands fa-telegram "></i>
          <i className="fa-brands fa-instagram "></i>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
