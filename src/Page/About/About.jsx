import React from "react";
import "./style.css";
import Navbar from "../../components/navbar/Navbar";
const About = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="body">
        <h3>
          Everything <br /> <span>a team needs</span>
        </h3>
        <h1>
          Jay Bhuptani{" "}
          <div className="user">Front-End Developer and Presentation</div>
        </h1>
         <h1>
          Varun Jethani <div className="user">Chat-Bot Developer</div>
        </h1> 
        <h1>
          Vidhan Prajapti{" "}
          <div className="user">Back-End Developer and Testor</div>
        </h1>
        
        
      </div>
    </div>
  );
};

export default About;
