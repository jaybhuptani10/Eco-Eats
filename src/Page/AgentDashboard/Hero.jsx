import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillSkin } from "react-icons/ai";
import "./dashboard.css";
import Modal from "./Modal";

const Hero = ({ ok }) => {
  const datas = [ok];

  const [selectedId, setSelectedId] = useState(null); // Change to null to indicate no modal is open

  const handleOpenModal = (index) => {
    setSelectedId(index);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
  };
  const variants = {
    hidden: { opacity: 0, y: -50, x: -100 }, // Initial position for all cards
    visible: { opacity: 1, y: 0, x: 0 }, // Target position when visible
  };

  return (
    <motion.div className="carddss">
      {ok.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.2, delay: 0.2 * index }}
            whileHover={{ scale: 1.1 }}
            layoutId={index}
            onClick={() => handleOpenModal(index)} // Pass the index to identify which modal to open
            className={`ccard-dashboardd ${
              item.status == "pending"
                ? "card-bg-yellow"
                : item.status == "rejected"
                ? "card-bg-red"
                : "card-bg-green"
            }`}
          >
            <p>{item.quantity}</p>
            <p>{item.address}</p>
          </motion.div>
        );
      })}
      <AnimatePresence>
        {selectedId !== null && (
          <Modal data={ok[selectedId]} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero;
