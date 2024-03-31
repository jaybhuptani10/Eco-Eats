import React, { useState, useEffect } from "react";
import "./style.css";

import img from "./eco2.png";
import { CgProfile } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Hook to get current location
  const [menu, setMenu] = React.useState(false);
  const [open, close] = useState(true);
  const [navblack, setNavBlack] = useState(false);
  const onMenuClick = () => {
    setMenu(!menu);
    close(!open);
  };
  const navigate = useNavigate();
  useEffect(() => {
    // Check if current location is home page, set navblack accordingly
    if (location.pathname === "/") {
      setNavBlack(false);
    } else {
      setNavBlack(true);
    }
  }, [location.pathname]);
  const onNewLink = (e) => {
    const link = e.target.innerHTML;

    if (link === "E-Waste") {
      navigate("/E-waste");
      setNavBlack(true);
    } else if (link === "Food-Waste") {
      navigate("/Food-Waste");
      setNavBlack(true);
    } else if (link === "About") {
      navigate("/About");
      setNavBlack(true);
    } else if (link === "Clothes-Donation") {
      navigate("/Clothes");
      setNavBlack(true);
    } else {
      navigate("/");
      setNavBlack(false);
    }
  };
  return (
    <div className="nav">
      <div className="logo">
        <img
          onClick={(e) => {
            onNewLink(e);
          }}
          src={img}
          alt=""
        />
      </div>
      {open == true ? (
        <CiMenuBurger
          onClick={() => onMenuClick()}
          className={`menu || ${navblack ? "black" : ""}`}
        />
      ) : (
        <IoClose
          onClick={() => {
            onMenuClick();
          }}
          className={`menu || ${navblack ? "black" : ""}`}
        />
      )}

      <div
        className={`links ${menu ? "open" : ""} || ${
          navblack ? "nav-black" : ""
        }`}
      >
        {["E-Waste", "Food-Waste", "Clothes-Donation", "About"].map(
          (item, index) => (
            <a
              onClick={(e) => {
                onNewLink(e);
              }}
              key={index}
              className={`a-link ${index === 4 && "ml-12"}`}
            >
              {item}
            </a>
          )
        )}

        <CgProfile onClick={() => navigate("/Dashboard")} className="Profile" />
      </div>
    </div>
  );
};

export default Navbar;
