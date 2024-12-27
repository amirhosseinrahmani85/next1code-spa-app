import React, { useState } from "react";
import "./Courses.css";
import Container from "react-bootstrap/esm/Container";
import nextjs from "../../assets/images/nextjs.jpg";
import nodejs from "../../assets/images/nodejs.jpg";
import tailwind from "../../assets/images/tailwind.jpg";
import GiftCourse from "../GiftCourse/GiftCourse";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const Courses = () => {
  const [corses, setCourses] = useState([
    {
      id: 1,
      images: nextjs,
      coursTitle: "آموزش پروژه محور نکست جی اس (next.js)",
      teacher: "میلاد بهرامی",
      price: "2,799,000 ",
      count: "119",
    },
    {
      id: 2,
      images: nodejs,
      coursTitle: "آموزش پروژه محور نود جی اس (nodejs)",
      teacher: "میلاد بهرامی",
      price: "3,499,000 ",
      count: "85",
    },
    {
      id: 3,
      images: tailwind,
      coursTitle: "آموزش پروژه محور تیلویند (tailwind css)",
      teacher: "میلاد بهرامی",
      price: "899,000 ",
      count: "82",
    },
  ]);

  return (
    <Container>
      <div className="dd">
        <p className="title">دوره های پیش فروش</p>

        <div className="courseBox">
          {corses.map((item) => (
            <Col key={item.id} lg="6" xl="4" className="py-4">
              <div className="box" key={item.id}>
                <img src={item.images} alt="nextjs" />
                <div className="desc">
                  <Link
                    to={`/course/${item.id}`}
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    <p>{item.coursTitle}</p>
                  </Link>
                  <span>{item.teacher}</span>
                </div>
                <div className="box_price">
                  <span>
                    <i
                      className="fa-solid fa-users"
                      style={{ fontSize: "12px", marginLeft: "8px" }}
                    ></i>
                    {item.count}
                  </span>{" "}
                  <span>{item.price}</span>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </div>
      <GiftCourse />
    </Container>
  );
};

export default Courses;
