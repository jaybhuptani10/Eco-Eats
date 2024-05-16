import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
const Modal = ({ onClose, data }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        delay: 1.5,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
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
      <IoClose className="Icon-close" onClick={onClose} />{" "}
      <div className="Modal-content">
        {/* Call onClose function on click */}
        <p>E-Waste Type : {data.quantity}</p>
        <p>Phone Number : {data.phone}</p>
        <p>Collection Time: {new Date(data.collectionTime).toLocaleString()}</p>
        <p>Address : {data.address}</p>
        <p> Extra Remarks : {data.donorToAgentMsg}</p>
        <p>Status : {data.status}</p>
      </div>
    </motion.div>
  );
};

export default Modal;
