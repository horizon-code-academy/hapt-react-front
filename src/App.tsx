import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ForgetPassword from "./components/ForgetPassword";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isForget, setIsForget] = useState<boolean>(false);

  return isLogin ? (
    <Login
      goToForget={() => {
        setIsForget(true);
        setIsLogin(false);
      }}
      goToDashboard={() => {
        setIsForget(false);
        setIsLogin(false);
      }}
    />
  ) : isForget ? (
    <ForgetPassword
      goToLogin={() => {
        setIsForget(false);
        setIsLogin(true);
      }}
    />
  ) : (
    <Dashboard
      goToLogin={() => {
        setIsForget(false);
        setIsLogin(true);
      }}
    />
  );
}

export default App;
