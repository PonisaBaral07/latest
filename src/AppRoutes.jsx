import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

import About from "./pages/About";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import AllergyAdvice from "./pages/AllergyAdvice";
import NotFound from "./pages/NotFound";
import MenuDetails from "./pages/MenuDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment"
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Protected><Menu /></Protected>} />
         <Route 
         path="/cart"
          element={
          <Protected><Cart /></Protected>
        } 
         />
         <Route path="/login" element={<Login />} />
         <Route path="/home" element={<Home />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/payment" element={<Payment />} />
         <Route path="/success" element={<Failure />} />
         <Route path="/failure" element={<Payment />} />
        <Route path="/menu/:id" element={<MenuDetails/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/allergy-advice" element={<AllergyAdvice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
