import React, { useEffect, useState } from "react";
import "./login.css";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    role: "donor", // Default role
  });

  const { firstName, lastName, email, password1, password2, role } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (
      firstName &&
      lastName &&
      email &&
      password1 &&
      password2 &&
      role &&
      password1 === password2
    ) {
      try {
        const response = await axios.post(
          "https://eco-eats-backend.vercel.app/api/auth/signup",
          formData
        );
        console.log("Registration successful");
        navigate("/login");
      } catch (err) {
        console.error("Error during registration:", err.message);
      }
    } else {
      console.log("Please fill in all fields and ensure passwords match");
    }
  };

  return (
    <div className="Login-Page">
      <div className="contain containn">
        <div className="headerr">
          <div className="textt">Sign Up</div>
          <div className="underline"></div>
        </div>
        <form className="forms" onSubmit={handleRegisterSubmit}>
          <div className="inputss">
            <div className="input">
              <FaRegUser className="img" />
              <input
                type="text"
                placeholder="firstname"
                name="firstName"
                id=""
                value={firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <FaRegUser className="img" />
              <input
                type="text"
                placeholder="lastname"
                name="lastName"
                id=""
                value={lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <MdAlternateEmail className="img" />
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                id=""
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <RiLockPasswordFill className="img" />
              <input
                type="password"
                placeholder="password"
                name="password1"
                id=""
                value={password1}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <RiLockPasswordFill className="img" />
              <input
                type="password"
                placeholder="password"
                name="password2"
                id=""
                value={password2}
                onChange={handleChange}
              />
            </div>

            <select
              style={{ padding: "20px" }}
              className="input"
              name="role"
              value={role}
              onChange={handleChange}
              type="text"
              placeholder="Choose Your Role"
              required={true}
            >
              <option value="donor">Donor</option>
              <option value="agent">Agent</option>
            </select>
          </div>
          <div className="submit-container">
            <button
              style={{ backgroundColor: "#4C00B4" }}
              className="submit"
              type="submit"
            >
              Sign Up
            </button>
            <div onClick={() => navigate("/Login")} className="submit Greybut">
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
