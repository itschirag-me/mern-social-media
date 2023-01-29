import { useEffect, useState } from 'react';
import { Router, useRoutes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

function App() {
  const [routeList, setRouteList] = useState([
    {
      path: "",
      element: <Layout />
    },
    {
      path: "/*",
      element: <NotFound />
    }
  ])

  useEffect(() => {
    document.title = "Matcha"
  }, [])

  const element = useRoutes(routeList)
  return element
}

export default App;
