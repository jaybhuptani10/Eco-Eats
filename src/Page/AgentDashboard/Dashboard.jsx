import React, { useEffect } from "react";
import "./dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import Leftnav from "./Leftnav";
import Hero from "./Hero";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import IMG from "./donation.png";
import IMG2 from "./electro.png";
import IMG3 from "./Food.png";
import IMG4 from "./clothes.png";
import Contribute from "./Contribute";
import Profile from "./Profile";
import ContributeFood from "./ContributeFood";
import ContributeClothes from "./ContributeClothes";
import Main from "./Main";
import axios from "axios";
import { IoClose } from "react-icons/io5";
const Dashboard = () => {
  const navigate = useNavigate();

  const [main, setMain] = useState([]);
  const [New, setNew] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [rejected, setRejected] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://eco-eats-backend.vercel.app/api/agent/dashboard",
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          const {
            TotalDonations,
            EWasteDonations,
            FoodDonations,
            ClothsDonations,
            numDonors,
          } = response.data;
          setMain([
            { count: numDonors, name: "Number of Donors", img: IMG },
            { count: TotalDonations, name: "Total Donations", img: IMG },
            { count: EWasteDonations, name: "E-waste Donations", img: IMG2 },
            { count: FoodDonations, name: "Food Donations", img: IMG3 },
            { count: ClothsDonations, name: "Cloths Donations", img: IMG4 },
          ]);
        }
        {
          console.error("Error in fetching data", response.data.message);
        }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          // User is not authenticated, redirect to login page
          console.log(
            "User is not authenticated. Redirecting to login page..."
          );
          navigate("/login"); // Adjust the URL as needed
        }
        console.error(err);
      }
    };
    fetchData();
  }, []);
  try {
    useEffect(() => {
      const fetchDonations = async () => {
        try {
          const response = await axios.get(
            "https://eco-eats-backend.vercel.app/api/agent/donations/pending",
            {
              withCredentials: true,
            }
          );
          setNew(response.data.pendingCollections);
        } catch (err) {
          console.error(err);
        }
      };

      fetchDonations();
    }, []);
  } catch (error) {
    console.error(error);
  }
  try {
    useEffect(() => {
      const fetchDonations = async () => {
        try {
          const response = await axios.get(
            "https://eco-eats-backend.vercel.app/api/agent/donations/accepted",
            {
              withCredentials: true,
            }
          );
          setAccepted(response.data.acceptedCollections);
        } catch (err) {
          console.error(err);
        }
      };

      fetchDonations();
    }, []);
  } catch (error) {
    console.error(error);
  }
  try {
    useEffect(() => {
      const fetchDonations = async () => {
        try {
          const response = await axios.get(
            "https://eco-eats-backend.vercel.app/api/agent/donations/rejected",
            {
              withCredentials: true,
            }
          );
          setRejected(response.data.rejectedCollections);
        } catch (err) {
          console.error(err);
        }
      };

      fetchDonations();
    }, []);
  } catch (error) {
    console.error(error);
  }

  const [tabDashboard, setTabDashboard] = useState(true);
  const [tabNew, setTabENew] = useState(false);
  const [tabAccepted, setTabAccepted] = useState(false);
  const [tabRejected, setTabRejected] = useState(false);
  const [tabProfile, setTabProfile] = useState(false);

  const onTabSelected = (e) => {
    if (e.target.innerText === "Dashboard") {
      setTabDashboard(true);
      setTabENew(false);
      setTabAccepted(false);
      setTabRejected(false);
      setTabProfile(false);
      setTouch(0); // Reset touch to 0 when clicking on "Dashboard"
    } else if (e.target.innerText === "New Requests") {
      setTabDashboard(false);
      setTabENew(true);
      setTabAccepted(false);
      setTabRejected(false);
      setTabProfile(false);
      setTouch(1); // Set touch to 1 when clicking on "E-Waste"
    } else if (e.target.innerText === "Accepted") {
      setTabDashboard(false);
      setTabENew(false);
      setTabAccepted(true);
      setTabRejected(false);
      setTabProfile(false);
      setTouch(2); // Set touch to 2 when clicking on "Food Donation"
    } else if (e.target.innerText === "Rejected") {
      setTabDashboard(false);
      setTabENew(false);
      setTabAccepted(false);
      setTabRejected(true);
      setTabProfile(false);
      setTouch(3); // Set touch to 3 when clicking on "Clothes Donation"
    } else if (e.target.innerText === "Profile") {
      setTabDashboard(false);
      setTabENew(false);
      setTabAccepted(false);
      setTabRejected(false);
      setTabProfile(true);
      setTouch(0); // Reset touch to 0 when clicking on "Profile"
    }
  };

  return (
    <div className="profile">
      <Navbar />
      <div className="Dashboard">
        <div className="left-navi">
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabDashboard === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>Dashboard</h1>
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabNew === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>New Requests</h1>
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabAccepted === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>Accepted</h1>
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabRejected === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>Rejected</h1>
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabProfile === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>Profile</h1>
          </div>
        </div>
        <div className="right-dashboardd">
          {tabDashboard && <Main data={main} />}

          {tabNew && <Hero data={main} ok={New} />}
          {tabAccepted && <Hero data={main} ok={accepted} />}
          {tabRejected && <Hero data={main} ok={rejected} />}

          {tabProfile && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
