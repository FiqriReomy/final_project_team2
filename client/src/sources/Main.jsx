import React, { useState, useEffect } from "react";
import NavbarClient from "./components/NavbarClient";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Main = ({ children }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Login, setLogin] = useState(false);
  const [Expired, setExpired] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.username);
      setEmail(decoded.email);
      setExpired(decoded.exp);
      setLogin(true);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date().getTime();
      const ExpTime = Expired * 1000;
      if (ExpTime < currentTime) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.username);
        setExpired(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return (
    <React.Fragment>
      {Login ? <NavbarClient name={Name} email={Email} /> : <Navbar />}
      <section className="main">
        <main>{children}</main>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
