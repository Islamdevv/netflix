import React from "react";
import Register from "./components/autentication/Register";
import Login from "./components/autentication/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

const MyRoutes = () => {
  const PUBLIC = [
    { link: "/register", element: <Register />, id: 1 },
    { link: "/login", element: <Login />, id: 2 },
    { link: "/", element: <Login />, id: 2 },
    { link: "/home", element: <Home />, id: 2 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
