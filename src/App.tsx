import React from "react";
import "./App.css";
import Info from "./components/Info";

const u1 = {
  firstName: "Malek",
  lastName: "Boubakri",
  birthDate: "12-07-1993",
  address: "Trocadero, Sousse",
};

const f1 = {
  label: "React",
  nb_hour: 15,
};

function App() {
  return (
    <div className="container-fluid">
      <h1>Hello, {u1.firstName}</h1>
      <Info user={u1} subject={f1} />
    </div>
  );
}

export default App;
