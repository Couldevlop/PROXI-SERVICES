import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function GerantLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen w-full mt-16">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 text-center  ">
        <h1 className="text-2xl font-bold">Bienvenue Gérant</h1>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-100 border-r p-4">
          <Link
            to="/gerant/operations"
            className={`block px-4 py-2 rounded-md ${
              location.pathname === "/gerant/operations"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Opérations
          </Link>
        </nav>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-2">
        <p>&copy; 2024 ProxiServices</p>
      </footer>
    </div>
  );
}

export default GerantLayout;
