import React from "react";
import "./CardInfo.css";
import Container from "react-bootstrap/esm/Container";
const CardInfo = ({ title, desc }) => {
  return (
    <>
      <Container>
        <div className="card6">
          <p className="info_title">{title}</p>
          <p className="info_desc">{desc}</p>
        </div>
      </Container>
    </>
  );
};

export default CardInfo;
