import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="box-login">
      <div className="login">
        <div className="main-login">
          <h1 className="login-title">Sign in</h1>
          <div className="input-login">
            <input
              className="login-email"
              type="text"
              placeholder="Email"
              autocomplete="new-password"
            />
          </div>
          <div className="input-login">
            <input
              className="login-password"
              type="password"
              placeholder="Password"
              autocomplete="new-password"
            />
          </div>
          <button className="btn-login">Войти</button>
          <div>
            <p style={{ color: "#fff", fontSize: "13px", marginTop: "30px" }}>
              Впервые на Netflix?{" "}
              <Link style={{ color: "#fff" }} to="/register">
                Зарегистрируйтесь
                <br /> сейчас.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
