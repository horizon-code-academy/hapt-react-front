import React from "react";

function ForgetPassword() {
  return (
    <div className="container-fluid">
      <div className="row">
        
        <div className="col-md-6 col-12 login text-center p-5 d-flex flex-column justify-content-center">
          <h1>Forget Password</h1>
          <p>Please put the new password.</p>
          <form className="form">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">New Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Confirmed Password</label>
            </div>
            <button type="button" className="btn btn-dark btn-lg">
              Validation
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

export default ForgetPassword;