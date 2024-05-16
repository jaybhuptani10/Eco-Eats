import React, { useEffect, useState } from "react";
import "./login.css";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    if (email.length > 0 && password.length > 0) {
      const formData = {
        email,
        password,
      };

      try {
        const response = await axios.post(
          "https://eco-eats-backend.vercel.app/api/auth/login",
          formData,
          {
            withCredentials: true,
          }
        );
        console.log("Login Successful");
        const { role } = response.data;
        if (role === "donor") {
          navigate("/Dashboard");
        } else if (role === "agent") {
          navigate("/AgentDashboard");
        }
      } catch (err) {
        alert("Invalid Credentials");
        console.log(err);
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  return (
    <div className="Login-Page">
      <div className="contain">
        <div className="headerr">
          <div className="textt">Login</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleLoginSubmit}>
          <div className="inputss">
            <div className="input">
              <MdAlternateEmail className="img" />
              <input type="email" placeholder="E-mail" name="email" id="" />
            </div>
            <div className="input">
              <RiLockPasswordFill className="img" />
              <input
                type="password"
                placeholder="password"
                name="password"
                id=""
              />
            </div>
          </div>
          <div className="submit-container">
            <div
              onClick={() => navigate("/Signup")}
              className="submit  Greybut"
            >
              SignUp
            </div>
            <button
              style={{ backgroundColor: "#4C00B4" }}
              type="submit"
              className="submit "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
