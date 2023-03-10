import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/Home";
import ServicePage from "../pages/Service/Service";
import ContactPage from "../pages/Contact/Contact";
import AgendarPage from "../pages/Crud/Agendar"
import ConsultarPage from "../pages/Crud/Consultar"
import AtualizarPage from "../pages/Crud/Atualizacao"

export default props => (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="Servicos" element={<ServicePage />} />
      <Route path="Contatos" element={<ContactPage />} />
      <Route path="Agenda" element={ <AgendarPage/>} />
      <Route path="Consulta" element={ <ConsultarPage/>} />
      <Route path="Atualizar" element={ <AtualizarPage/>} />
    </Routes>
)