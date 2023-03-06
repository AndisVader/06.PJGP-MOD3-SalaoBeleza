import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/Home";
import AboutUsPage from "../pages/AboutUs/AboutUs";
import ServicePage from "../pages/Service/Service";
import ContactPage from "../pages/Contact/Contact";

export default props => (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="SobreNos" element={<AboutUsPage />} />
      <Route path="Servicos" element={<ServicePage />} />
      <Route path="Contatos" element={<ContactPage />} />
    </Routes>
)