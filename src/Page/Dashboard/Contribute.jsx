import React, { useState } from "react";
import "./dashboard.css";
import { motion } from "framer-motion";
import IMG from "./truck.png";
import axios from "axios";
const ContributeFood = () => {
  const [donation, setDonation] = useState({
    wasteType: "ewaste",
    quantity: "",
    address: "",
    phone: "",
    donorToAgentMsg: "",
    collectionTime: "",
  });

  const handleChange = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://eco-eats-backend.vercel.app/api/donor/donate",
        { donation },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Contribute">
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity">
          EWaste Description
          <input
            className="entry"
            type="text"
            placeholder="Describe"
            name="quantity"
            value={donation.quantity}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="address">
          Pickup Address
          <input
            className="entry"
            name="address"
            type="text"
            value={donation.address}
            placeholder="Pickup Address"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="pickupTime">
          Pickup Time
          <input
            className="entry"
            type="datetime-local"
            name="collectionTime"
            value={donation.collectionTime}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="pickupTime">
          Phone
          <input
            className="entry"
            type="text"
            name="phone"
            value={donation.phone}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="donorToAgentMsg">
          Any message for agent
          <input
            className="entry"
            type="text"
            name="donorToAgentMsg"
            value={donation.donorToAgentMsg}
            placeholder="Message for agent"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="donationPic">
          Upload a pic of your Ewaste
          <input type="file" name="donationPic" id="" onChange={handleChange} />
        </label>
        <button className="contributebtn" type="submit">
          Submit
        </button>
      </form>
      <motion.img className="ok" src={IMG} alt="" />
    </div>
  );
};

export default ContributeFood;
