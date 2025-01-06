// AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import ServiceTable from "./ServiceTable";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="reservation" element={<div>Réservations</div>} />
        <Route path="statistiques" element={<div>Statistiques</div>} />
        <Route path="administration">
          <Route path="slides" element={<ServiceTable tableName="Slides" />} />
          <Route path="services" element={<ServiceTable />} />
          <Route
            path="contact"
            element={<ServiceTable tableName="Contact" />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
