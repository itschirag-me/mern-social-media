import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

function App() {
  const routeList = [
    {
      path: "",
      element: <Layout />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ];

  useEffect(() => {
    document.title = "Matcha";
  }, []);

  const element = useRoutes(routeList);
  return <div className="font-poppin xl:text-base lg:text-base md:text-sm text-xs">{element}</div>;
}

export default App;
