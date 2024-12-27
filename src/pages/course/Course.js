import React, { useState } from "react";
import "./Course.css";
import Navbar from "../../components/Navbar/Navbarr";
import { useParams } from "react-router-dom";
import nextjs from "../../assets/images/nextjs.jpg";
import nodejs from "../../assets/images/nodejs.jpg";
import tailwind from "../../assets/images/tailwind.jpg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Course = () => {
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
  const courseId = useParams().courseId;
  const courseInfo = corses.find((course) => course.id == courseId);
  
  
  return (
    <>
      <Navbar />
      
        <Container>
          <Row className="my-5">
            <Col>
              <img style={{ height: "300px" }} src={courseInfo.images} />
            </Col>
            <Col>
              <p> نام دوره :  {courseInfo.coursTitle}</p>
              <p> نام مدرس : {courseInfo.teacher}</p>
            </Col>
          </Row>
          <Row>
            <iframe style={{width:"100%",height:"380px"}} src="https://sh-varna.ir/Blog/Advantages-Disadvantages-tailwind" frameborder="10" ></iframe>
          </Row>
        </Container>
      
    </>
  );
};

export default Course;
