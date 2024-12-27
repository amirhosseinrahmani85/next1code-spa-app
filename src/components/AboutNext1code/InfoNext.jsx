import React from "react";
import "./InfoNext.css";
import Container from "react-bootstrap/esm/Container";
import CardInfo from "./CardInfo";
import Col from "react-bootstrap/esm/Col";
const InfoNext = () => {
  let information = [
    {
      id: 1,
      title: "بروز رسانی",
      desc: "اپدیت همیشگی دوره ها",
    },
    {
      id: 2,
      title: "سادگی",
      desc: "ساده ترین روش تدریس",
    },
    {
      id: 3,
      title: "پشتیبانی",
      desc: "پاسخگویی به سوالات شما",
    },
    {
      id: 4,
      title: "ضمانت",
      desc: "ضمانت کیفیت دوره ها",
    },
  ];
  return (
    <>
      <Container>
        <div className="box-info">
          <h4>چرا نکست وان کد؟</h4>
          <p>آماده ی یادگیری ، با طعم شیرین تر از عسل هستید؟</p>
          <div className="card_info">
            {information.map((card) => (
              <Col key={card.id} md={6} lg={4} xl={3}>
                <CardInfo title={card.title} desc={card.desc} />
              </Col>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default InfoNext;
