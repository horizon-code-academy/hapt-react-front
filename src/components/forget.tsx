import React from "react";

function Forgetpassword() {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-6 col-12 login text-center p-5 d-flex flex-column justify-content-center">
                    <h1>Forget Password</h1>

                    <form className="form">

                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPassword">New Password</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="confirm Password"
                            />
                            <label htmlFor="floatingPassword">Confirm Password</label>
                        </div>

                        <button type="button" className="btn btn-dark btn-lg">
                            confirm
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

export default Forgetpassword;
