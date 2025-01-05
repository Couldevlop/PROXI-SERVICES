import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Slides from "./Slides";
import Services from "./Services";
import Contact from "../Contact";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="reservation" element={<div>Réservations</div>} />
        <Route path="statistiques" element={<div>Statistiques</div>} />
        <Route path="administration">
          <Route path="slides" element={<Slides />} />
          <Route
            path="slides/consulter"
            element={<div>Consulter Slides</div>}
          />
          <Route path="slides/ajouter" element={<div>Ajouter Slide</div>} />
          <Route path="slides/modifier" element={<div>Modifier Slide</div>} />
          <Route path="slides/supprimer" element={<div>Supprimer Slide</div>} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
