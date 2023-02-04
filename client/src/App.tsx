import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { RootState } from "./store";
import { stopLoader } from "./store/LoaderReducer";

export const App = () => {
  const loader = useSelector((state: RootState) => state.loader.value)
  const dispatch = useDispatch()

  const [routeList, setRouteList] = useState([
    {
      path: "",
      element: <Layout />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  useEffect(() => {
    document.title = "MegaChat | Login";
    const auth = false;

    setTimeout(() => {
      dispatch(stopLoader());
    }, 2000);

    if (!auth) {
      setRouteList((prev) => [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "/*",
          element: <Register />,
        },
      ]);
    }
  }, []);

  const element = useRoutes(routeList);

  if(loader) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <Toaster />
      <div className="font-poppin xl:text-base lg:text-base md:text-sm text-xs select-none">
        {element}
      </div>
    </React.Fragment>
  );
};

export default App;
