import React from "react";
import Navbarr from "../../components/Navbar/Navbarr";
import Container from "react-bootstrap/esm/Container";

const NotFound = () => {
  return (
    <>
      <Navbarr/>
      <Container>
      <p style={{textAlign:"center",color:"red",fontSize:"2rem",marginTop:"10rem"}}>صفحه مورد نظر پیدا نشد!</p>
      <p style={{textAlign:"center",color:"red",fontSize:"2rem",marginTop:"1rem"}}>404</p>
      </Container>
    </>
  );
};

export default NotFound;
