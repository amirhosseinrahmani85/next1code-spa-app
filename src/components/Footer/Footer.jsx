import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import zarinplaImage from "../../assets/images/zarinpal.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <Container>
          <div
            className="py-5"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#353337",
              color: "#fff",
              height: "300px",
            }}
          >
            <Row style={{ justifyContent: "start" }}>
              <Col
                style={{
                  width: "200px",
                  textAlign: "justify",
                }}
              >
                <p className="resalat">
                  <span></span> رسالت نکست وان کد
                </p>
                <p>
                  نکست وان کد با هدف تولید آموزش هایی ایجاد شده ، که حس شیرینِ
                  یادگیری لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید.
                </p>
              </Col>
              <Col style={{ textAlign: "left" }}>
                <img
                  className="zarinpal_img"
                  src={zarinplaImage}
                  alt="zarinpal"
                />
              </Col>
            </Row>
            <Row
              className="my-5"
              style={{
                display: "flex",
                alignItems: "center",
                height: "680px",
              }}
            >
              <Col>
                <p>تمامی حقوق برای سایت نکست وان کد محفوظ می باشد.</p>
              </Col>
              <Col className="text-center"
                style={{ display: "flex", justifyContent: "end", gap: "5px",cursor:"pointer" }}
              >
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-telegram"></i>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
