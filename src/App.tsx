import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
    // return <Login />;
    // return <Forget />;
    // <Dashboard />;
    return (
        <Routes>
            <Route path={"/"} element={<Login/>}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
        </Routes>
    )
}

export default App;
