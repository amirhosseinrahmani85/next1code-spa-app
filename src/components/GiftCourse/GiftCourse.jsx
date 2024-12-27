import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./GiftCourse.css";
import Card from "react-bootstrap/Card";

import regex from "../../assets/images/regex-course.jpg";
import npm from "../../assets/images/npm-course.jpg";
import react from "../../assets/images/reactLib3-course.jpg";
import gitHub from "../../assets/images/github2-course.jpg";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

const GiftCourse = () => {
  let courseData = [
    {
      id: 1,
      courseTitle: "آموزش پروژه محور رجکس (regex)",
      images: regex,
      price: "299,000 ",
      count: "324",
    },
    {
      id: 2,
      courseTitle: "آموزش پکیج منیجر npm",
      images: npm,
      price: "700,000 ",
      count: "1002",
    },
    {
      id: 3,
      courseTitle: "آموزش کتابخانه های ریکت (react)",
      images: react,
      price: "540,000 ",
      count: "304",
    },
    {
      id: 4,
      courseTitle: "دوره آموزش گیت و گیت هاب",
      images: gitHub,
      price: "400,000 ",
      count: "6501",
    },
  ];
  return (
    <>
      <Container>
        <div className="gift_corse">
          <p>دوره های هدیه</p>
          <ul>
            <li>
              اگه دوره <span className="span">js</span> رو بخری{" "}
              <span className="span">npm</span> و{" "}
              <span className="span">regex</span> رو هدیه میگیری
            </li>
            <li>
              اگه دوره <span className="span">react</span> رو بخری{" "}
              <span className="span">npm</span> و{" "}
              <span className="span">regex</span> و{" "}
              <span className="span">git</span> رو هدیه میگیری
            </li>
            <li>
              اگه دوره <span className="span">next</span> رو بخری{" "}
              <span className="span">npm</span> و <span>regex</span> و کتابخونه
              های کاربردی رو هدیه میگیری
            </li>
            <li>
              اگه دوره <span className="span">node</span> رو بخری{" "}
              <span className="span">npm</span> و{" "}
              <span className="span">regex</span> و{" "}
              <span className="span">git</span> رو هدیه میگیری
            </li>
          </ul>
        </div>
        <div className="card_box">
          {courseData.map((course) => (
            <Col key={course.id} className="py-4" md={6} lg={4} xl={3}>
              <Card style={{ width: "18rem", margin: "0", padding: "0" }}>
                <Card.Img variant="top" src={course.images} />
                <Card.Body>
                  <Card.Title
                    className="title"
                    style={{ fontSize: "1rem", cursor: "pointer" }}
                  >
                    <Link
                      to={`/course/${course.id}`}
                      style={{ color: "#000", textDecoration: "none" }}
                    >
                      {" "}
                      {course.courseTitle}
                    </Link>
                  </Card.Title>

                  <Card.Title
                    style={{
                      textAlign: "left",
                      margin: "30px 0px",
                      fontSize: "14px",
                      color: "#6C757D",
                    }}
                  >
                    <i className="fa-solid fa-chalkboard-user"></i> میلاد بهرامی
                  </Card.Title>
                  <div className="box_price">
                    <span>
                      <i
                        className="fa-solid fa-users"
                        style={{ fontSize: "12px", marginLeft: "8px" }}
                      ></i>
                      {course.count}{" "}
                    </span>{" "}
                    <span>{course.price}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Container>
    </>
  );
};

export default GiftCourse;
