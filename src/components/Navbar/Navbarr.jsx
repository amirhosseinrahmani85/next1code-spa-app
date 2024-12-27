import React, { useState } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { isLogin } from "../../utils";

function Navbarr() {
  const clickHandler = () => {
    document.cookie = 'username=""';
  };
  const [loginStatus, setLoginStatus] = useState(isLogin() ? "خروج" : "ورود");
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg">
      <Container>
        <Navbar href="/">
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "#ffffff" }}>

              <NavLink to="/" className="link">
                صفحه نخست
              </NavLink>
            </Nav.Link>
          
            <Nav.Link href="/article">
              
              <NavLink to="/article" className="link">
                {" "}
                مقالات
              </NavLink>
            </Nav.Link>
            <Nav.Link href="/about">
              
              <NavLink to="/about" className="link">
                تماس باما
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/panel">
              
              <NavLink to="/panel" className="panel">
                پنل
              </NavLink>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              
              <NavLink to="/login" className="login" onClick={clickHandler}>
                {loginStatus}
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
