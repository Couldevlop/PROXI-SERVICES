import React from "react";
import { Routes, Route } from "react-router-dom";
import GerantLayout from "./GerantLayout";
import Login from "./Login";
import OperationsTable from "./OperationsTable";
import ProtectedRoute from "../../components/ProtectedRoute";

function GerantRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/gerant"
        element={
          <ProtectedRoute>
            <GerantLayout />
          </ProtectedRoute>
        }
      >
        <Route path="operations" element={<OperationsTable />} />
      </Route>
    </Routes>
  );
}

export default GerantRoutes;
