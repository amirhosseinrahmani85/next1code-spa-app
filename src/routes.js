import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Course from "./pages/course/Course";
import NotFound from "./pages/NotFound/NotFound";
import Panel from "./pages/panel/Panel";
import Article from "./pages/Article/Article";
import Setting from "./pages/Setting";
import PrivatePage from "./pages/PrivatePage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  {
    path: "/article/*",
    element: <Article />,
    children: [
      {
        path: "javascript",
        element: <h4 style={{ textAlign: "center" }}>javascript</h4>,
      },
      {
        path: "react",
        element: <h4 style={{ textAlign: "center" }}>React.js</h4>,
      },
      {
        path: "next",
        element: <h4 style={{ textAlign: "center" }}>Next.js</h4>,
      },
    ],
  },
  { path: "/course/:courseId", element: <Course /> },
  { path: "*", element: <NotFound /> },

  {
    path: "/setting",
    element: (
      <PrivatePage>
        <Setting />
      </PrivatePage>
    ),
  },
  {
    path: "/panel",
    element: (
      <PrivatePage>
        <Panel />
      </PrivatePage>
    ),
  },
];

export default routes;
