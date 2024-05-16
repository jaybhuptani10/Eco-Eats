import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import PacmanLoader from "react-spinners/PacmanLoader";
const Modal = ({ onClose, data }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const height = window.innerHeight;
  const width = window.innerWidth;

  const handleAccept = async () => {
    setOpen(true);

    try {
      const response = await axios.get(
        `http://localhost:4000/api/agent/donation/accept/${data._id}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Donation Accepted");

        // Delay for 3 seconds before reloading the page
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        console.log("Error accepting donation");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleReject = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/agent/donation/reject/${data._id}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Donation Rejected");

        // Delay for 3 seconds before reloading the page
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        console.log("Error accepting donation");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Receive onClose function as props
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={{ duration: 0.5 }}
      className="Modall"
    >
      <Confetti
        className={`${open == true ? "confetti-display" : "confetti-hidden"}`}
        height={height}
        width={width}
      />
      <IoClose className="Icon-close" onClick={onClose} />{" "}
      <div className="Modal-content">
        {/* Call onClose function on click */}
        <p> E-Waste Type : {data.quantity}</p>
        <p>Phone Number : {data.phone}</p>
        <p>Collection Time: {new Date(data.collectionTime).toLocaleString()}</p>
        <p>Address : {data.address}</p>
        <p> Extra Remarks : {data.donorToAgentMsg}</p>
        <div className="buts">
          <button type="submit" className="but" onClick={() => handleAccept()}>
            Accept
          </button>
          <PacmanLoader
            loading={loading}
            className="loaders"
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <button className="but" onClick={handleReject}>
            Reject
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
