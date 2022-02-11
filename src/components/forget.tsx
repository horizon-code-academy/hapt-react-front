import React from "react";

function forget() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12 login text-center p-5 d-flex flex-column justify-content-center">
          <h1>Find Your Account</h1>
          <p>Please enter your email to for your account.</p>
          <form className="form">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Your email</label>
            </div>
        
            <button type="button" className="btn btn-dark btn-lg">
              Search
            </button>
          </form>
          <footer className="text-center">
            Copyright 2022 ©, Horizon code academy
          </footer>
        </div>
        <div className="col-md-6 col-12 screen bg-dark "></div>
      </div>
    </div>
  );
}

export default forget;