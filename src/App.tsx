import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12 screen bg-dark "></div>
        <div className="col-md-6 col-12 login text-center p-5 d-flex flex-column justify-content-center">
          <h1>Login</h1>
          <p>Please login to your account.</p>
          <form className="form">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="row">
              <div className="col d-flex">
                <div className="form-check text-left">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col">
                <a href="#">Forget password</a>
              </div>
            </div>
            <button type="button" className="btn btn-dark btn-lg">
              Login
            </button>
          </form>
          <footer className="text-center">
            Copyright 2022 ©, Horizon code academy
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
