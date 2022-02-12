import { useState, ChangeEvent } from "react";

function ForgetPassword() {
  const [email, setEmail] = useState<string>("");

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12 login text-center p-5 d-flex flex-column justify-content-center">
          <h1>Forget password</h1>
          <form className="form">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={changeEmail}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <button type="button" className="btn btn-dark btn-lg">
              Send
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
