import React from "react";
import "./style.css";
import Navbar from "../../components/navbar/Navbar";
import I1 from "./j1.jpeg";
import I2 from "./j2.jpeg";
import I3 from "./s1.jpeg";
import I4 from "./s2.jpeg";
import I5 from "./v1.jpeg";
import I6 from "./v2.jpeg";
import I7 from "./varun1.jpeg";
import I8 from "./varun2.jpeg";
const About = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="body">
        <h3>
          Everything <br /> <span>a team needs</span>
        </h3>
        <h1>
          Jay Bhuptani <div className="user">Front-End Developer, & UI</div>
        </h1>

        <h1>
          Vidhan Prajapti{" "}
          <div className="user">Back-End Developer and Testor</div>
        </h1>

      </div>
      <div className="new">
        <section>
          <div class="avatars">
            <img class="avatar" src={I1} alt="" />
            <img class="avatar" src={I3} alt="" />
            <img class="avatar" src={I5} alt="" />
            <img class="avatar" src={I7} alt="" />
            <img class="avatar" src={I2} alt="" />
            <img class="avatar" src={I4} alt="" />
            <img class="avatar" src={I6} alt="" />
            <img class="avatar" src={I8} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
