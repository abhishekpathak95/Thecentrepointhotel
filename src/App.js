import React from "react";
import {Toaster} from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import Delux from "./components/Rooms/deluxe/Delux";
import Queen from "./components/Rooms/queen/Queen";
import Suite from "./components/Rooms/Suiterooms/Suite";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/delux" element={<Delux />} />
        <Route path="/queen" element={<Queen/>} />
        <Route path="/suite" element={<Suite/>} />
      </Routes>
      <Footer />
      <Toaster/>
    </Router>
  );
};

export default App;
