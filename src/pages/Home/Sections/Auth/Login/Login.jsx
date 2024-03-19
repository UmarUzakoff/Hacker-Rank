// LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import cn from "./login.module.css";
import API_KEY from "../api";

//images and icons
import logo from "/assets/images/logo.png";
import { FaRegUser } from "react-icons/fa";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const admin = {
    username: "admin",
    password: "123",
  };

  const handleLogin = async () => {
    try {
      if (!username.trim() || !password.trim()) {
        setError("Please enter both username and password.");
        return;
      }

      const response = await axios.get(
        `https://crudcrud.com/api/${API_KEY}/users`
      );

      const findUser = await response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (!findUser) {
        setError("Invalid username or password. Please try again.");
        return;
      }

      if (admin.username === username && admin.password === password) {
        alert("Welcome back to dashboard!");
        localStorage.setItem("verified", "admin");
        navigate("/dashboard");
      } else {
        alert("Successfully logged in!");
        localStorage.setItem("verified", "user");
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Error logging in. Please try again later.");
    }
  };

  return (
    <div className={`${cn.login_page}`}>
      <img width="250" height="30" src={logo} alt="logo" />
      <h2>For Developers</h2>
      <p>Practice coding, prepare for interviews, and get hired.</p>
      <div className={`${cn.form}`}>
        <div className={`${cn.btns}`}>
          <Link className={`${cn.btn_reg}`} to={"/auth/register"}>
            Sign up
          </Link>
          <Link className={`${cn.btn_log}`} to={"/auth/login"}>
            Log in
          </Link>
        </div>
        <form
          className={`${cn.inputs}`}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}>
          <div className={`${cn.group}`}>
            <FaRegUser className={`${cn.icon1}`} />
            <input
              className={`${cn.input}`}
              type="text"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={`${cn.group}`}>
            <svg
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`${cn.icon}`}>
              <path
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                strokeLinejoin="round"
                strokeLinecap="round"></path>
            </svg>
            <input
              className={`${cn.input}`}
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={cn.rem_for}>
            <div className={cn.remember}>
              <div className={cn.smth}>
                <input type="checkbox" id="cbx" className={cn.hide} />
                <label htmlFor="cbx" className={cn.check}>
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
              </div>
              <span>Remember me</span>
            </div>
            <span className={cn.forget}>Forgot your password?</span>
          </div>
          <button className={cn.submit} type="submit">
            Log in
          </button>
          {error && <p className={cn.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
