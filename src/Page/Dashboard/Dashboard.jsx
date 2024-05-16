import React, { useEffect } from "react";
import "./dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import Leftnav from "./Leftnav";
import Hero from "./Hero";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [touch, setTouch] = useState(0);
  const [data, setData] = useState(false);
  const [main, setMain] = useState([]);
  const [foodwaste, setFoodwaste] = useState([]);
  const [ewaste, setEwaste] = useState([]);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://eco-eats-backend.vercel.app/api/donor/dashboard",
          { withCredentials: true } // Include credentials in the request
        );
        if (response.status === 200) {
          const {
            TotalDonations,
            EWasteDonations,
            FoodDonations,
            ClothsDonations,
            AcceptedDonations,
          } = response.data;
          setCount(AcceptedDonations);
          console.log(AcceptedDonations);

          setMain([
            { count: TotalDonations, name: "Total Donations", img: IMG },
            { count: EWasteDonations, name: "E-waste Donations", img: IMG2 },
            { count: FoodDonations, name: "Food Donations", img: IMG3 },
            { count: ClothsDonations, name: "Cloths Donations", img: IMG4 },
          ]);
        }
      } catch (err) {
        console.log(err);
        if (err.response && err.response.status === 401) {
          console.log(
            "User is not authenticated. Redirecting to login page..."
          );
          navigate("/login");
        } else {
          console.error("Error in fetching data:", err.message);
        }
      }
    };
    fetchData();
  }, []);

  try {
    useEffect(() => {
      const fetchDonations = async () => {
        try {
          const response = await axios.get(
            "https://eco-eats-backend.vercel.app/api/donor/donations/foodwaste",
            {
              withCredentials: true,
            }
          );
          setFoodwaste(response.data.foodDonations);
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
            "https://eco-eats-backend.vercel.app/api/donor/donations/ewaste",
            {
              withCredentials: true,
            }
          );
          setEwaste(response.data.ewasteDonations);
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
            "https://eco-eats-backend.vercel.app/api/donor/donations/clothwaste",
            {
              withCredentials: true,
            }
          );
          setClothes(response.data.clothDonations);
        } catch (err) {
          console.error(err);
        }
      };

      fetchDonations();
    }, []);
  } catch (error) {
    console.error(error);
  }
  const Food = [
    {
      Type: "Food Donation",
      "Pickup Time": "28 January 2023",
      address: "Delhi",
      phone: "1264567890",
    },
  ];
  const Clothes = [
    {
      Type: "Clothes Donation",
      "Pickup Time": "20 January 2023",
      address: "Ahmeabad",
      phone: "1264567890",
    },
  ];

  const [tabDashboard, setTabDashboard] = useState(true);
  const [tabEwaste, setTabEwaste] = useState(false);
  const [tabFood, setTabFood] = useState(false);
  const [tabClothes, setTabClothes] = useState(false);
  const [tabProfile, setTabProfile] = useState(false);

  const onTabSelected = (e) => {
    const tabName = e.target.innerText;
    setTabDashboard(tabName === "Dashboard");
    setTabEwaste(tabName === "E-Waste");
    setTabFood(tabName === "Food Donation");
    setTabClothes(tabName === "Clothes Donation");
    setTabProfile(tabName === "Profile");
    setTouch(
      tabName === "Dashboard"
        ? 0
        : tabName === "E-Waste"
        ? 1
        : tabName === "Food Donation"
        ? 2
        : tabName === "Clothes Donation"
        ? 3
        : 0
    );
  };

  return (
    <div className="profile">
      <Navbar />

      <div className="Dashboard">
        <div className="left-navi">
          <div
            onClick={onTabSelected}
            className={`Dashboardd-item ${
              tabDashboard && "Dashboardd-item-selected"
            }`}
          >
            <h1>Dashboard</h1>
          </div>
          <div
            onClick={onTabSelected}
            className={`Dashboardd-item ${
              tabEwaste && "Dashboardd-item-selected"
            }`}
          >
            <h1>E-Waste</h1>
          </div>
          <div
            onClick={onTabSelected}
            className={`Dashboardd-item ${
              tabFood && "Dashboardd-item-selected"
            }`}
          >
            <h1>Food Donation</h1>
          </div>
          <div
            onClick={onTabSelected}
            className={`Dashboardd-item ${
              tabClothes && "Dashboardd-item-selected"
            }`}
          >
            <h1>Clothes Donation</h1>
          </div>
          <div
            onClick={onTabSelected}
            className={`Dashboardd-item ${
              tabProfile && "Dashboardd-item-selected"
            }`}
          >
            <h1>Profile</h1>
          </div>
        </div>
        <div className="right-dashboardd">
          <div className="counts">
            <h1>Total Points: {count * 10}</h1>
          </div>
          {tabDashboard && touch === 1 ? (
            <Hero data={ewaste} />
          ) : tabDashboard && touch === 2 ? (
            <Hero data={foodwaste} />
          ) : tabDashboard && touch === 3 ? (
            <Hero data={clothes} />
          ) : (
            tabDashboard && (
              <Main data={main} setData={setData} setTouch={setTouch} />
            )
          )}

          {tabEwaste && <Contribute />}
          {tabFood && <ContributeFood />}
          {tabClothes && <ContributeClothes />}

          {tabProfile && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
