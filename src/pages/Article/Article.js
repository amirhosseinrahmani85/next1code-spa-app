import React from "react";
import "./Article.css";
import Navbarr from "../../components/Navbar/Navbarr";

import { Link, Outlet } from "react-router-dom";
const Article = () => {
  // let infoArticle = [
  //   { id: 1, title: "Javascript" },
  //   { id: 2, title: "React.js" },
  //   { id: 3, title: "Next.js" },
  // ];

  // const articleId = useParams().articleId;
  // console.log(articleId);
  // const info = infoArticle.find((article) => article.title == articleId);
  return (
    <>
      <Navbarr />
      <>
        <h1 style={{ textAlign: "center" }}>مقالات</h1>
        <hr />
        <div style={{ textAlign: "center", padding: "20px" }}>
          <Link className="a" to="javascript">
            Javascript
          </Link>

          <Link className="a" to="react">
            React.js
          </Link>

          <Link className="a" to="next">
            Next.js
          </Link>
        </div>
        <hr />
        <Outlet />
      </>
    </>
  );
};

export default Article;
