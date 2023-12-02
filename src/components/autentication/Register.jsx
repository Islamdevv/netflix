import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  return (
    <div className="box-login">
      <div className="login">
        <div className="main-login">
          <h1 className="login-title">Sign up</h1>
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
          <button className="btn-signup">зарегистрироваться</button>
          <button className="btn-signup">Продолжить через Google</button>

          <div>
            <p style={{ color: "#fff", fontSize: "13px", marginTop: "30px" }}>
              <Link style={{ color: "#fff" }} to="/login">
                Войти через аккаунт
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
