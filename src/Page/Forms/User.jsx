import React from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../components/navbar/Navbar";

const User = () => {
  const navigate = useNavigate();

  return (
    <div className="containerr">
      <Navbar />
      <div className="left">
        <h1>Fill up the details to Recycle your E-waste</h1>
      </div>
      <div className="formm">
        <form action="">
          <input type="text" name="type" placeholder="E-waste type" id="" />

          <input
            className="inputt"
            type="datetime-local"
            name="pickupTime"
            placeholder="Pickup Time"
            id=""
          />
          <input
            className="inputt"
            type="text"
            placeholder="Describe Your E-waste in detail"
            name=""
            id=""
          />
          <input
            className="inputt"
            name="address"
            type="text"
            placeholder="Pickup Address"
          />
          <input
            className="inputt"
            type="telephone"
            name="phone"
            placeholder="Contact Number"
          />
          <input
            className="inputt"
            type="text"
            name="donortoAgentMsg"
            placeholder="Message to Recycler"
            id=""
          />
          <button onClick={() => navigate("/Submit")}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default User;
