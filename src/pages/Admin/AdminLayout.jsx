import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function AdminLayout() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  const menus = [
    { title: "Réservation", path: "/admin/reservation" },
    { title: "Statistiques", path: "/admin/statistiques" },
    {
      title: "Administration",
      path: "/admin/administration",
      subMenus: [
        { title: "Slides", path: "/admin/administration/slides" },
        { title: "Services", path: "/admin/administration/services" },
        { title: "Contact", path: "/admin/administration/contact" },
      ],
    },
  ];

  // Actions à afficher dans la barre horizontale pour chaque sous-menu
  const actions = ["Consulter", "Ajouter", "Modifier", "Supprimer"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Full-width Header */}
      <header className="bg-blue-600 text-white py-4 text-center w-full mt-16">
        <h1 className="text-2xl font-bold">Espace Administration</h1>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-100 border-r p-4 min-h-screen">
          {menus.map((menu) => (
            <div key={menu.title} className="mb-4">
              <Link
                to={menu.path}
                onClick={() => setActiveMenu(menu.title)}
                className={`block px-4 py-2 rounded-md ${
                  location.pathname.startsWith(menu.path)
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {menu.title}
              </Link>

              {/* Sous-menus dynamiques */}
              {menu.subMenus &&
                activeMenu === menu.title &&
                location.pathname.startsWith(menu.path) && (
                  <div className="ml-4 mt-2">
                    {menu.subMenus.map((subMenu) => (
                      <Link
                        key={subMenu.title}
                        to={subMenu.path}
                        className={`block px-4 py-2 rounded-md ${
                          location.pathname === subMenu.path
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-blue-50"
                        }`}
                      >
                        {subMenu.title}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Actions bar for sub-menus */}
          {location.pathname.startsWith("/admin/administration") && (
            <div className="bg-gray-200 py-2 px-4 border-b">
              {actions.map((action) => (
                <Link
                  key={action}
                  to={`${location.pathname}/${action.toLowerCase()}`}
                  className="inline-block px-4 py-2 mr-2 bg-gray-100 rounded-md text-gray-700 hover:bg-blue-50"
                >
                  {action}
                </Link>
              ))}
            </div>
          )}

          {/* Outlet for displaying routed content */}
          <div className="p-6 bg-gray-50 flex-1">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-2">
        <p>&copy; 2024 ProxiServices</p>
      </footer>
    </div>
  );
}

export default AdminLayout;
