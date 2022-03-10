import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ForgetPassword from "./components/ForgetPassword";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Dashboard />} />
      <Route path={"login"} element={<Login />} />
      <Route path={"forget"} element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
