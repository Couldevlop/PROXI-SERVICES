// AdminLayout.jsx
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function AdminLayout() {
  const location = useLocation();
  const [showSubMenus, setShowSubMenus] = useState(false);

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

  // Déterminer le menu actif et ses sous-menus
  const currentPath = location.pathname;
  /*const isAdminPath = currentPath.includes("/admin/administration");
 const currentSubMenu = isAdminPath
    ? menus[2].subMenus.find((sub) => currentPath.includes(sub.path))
    : null;*/

  const isMenuActive = (path) => {
    if (path === "/admin/administration") {
      return currentPath === path;
    }
    return currentPath.startsWith(path) && path !== "/admin/administration";
  };

  const handleAdminClick = (e) => {
    e.preventDefault();
    setShowSubMenus(!showSubMenus);
  };

  /* const actions = ["Consulter", "Ajouter", "Modifier", "Supprimer"];

  const isActionActive = (action) => {
    return currentPath.endsWith(action.toLowerCase());
  };*/

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white py-4 text-center w-full mt-16">
        <h1 className="text-2xl font-bold">Espace Administration</h1>
      </header>
      <div className="flex flex-1">
        <nav className="w-64 bg-gray-100 border-r p-4 min-h-screen">
          {menus.map((menu) => (
            <div key={menu.title} className="mb-4">
              {menu.title === "Administration" ? (
                <>
                  <Link
                    to={menu.path}
                    onClick={handleAdminClick}
                    className={`block px-4 py-2 rounded-md ${
                      isMenuActive(menu.path)
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-blue-500 hover:text-white"
                    }`}
                  >
                    {menu.title}
                  </Link>
                  {/* Sous-menus pour Administration */}
                  {showSubMenus && (
                    <div className="ml-4 mt-2">
                      {menu.subMenus.map((subMenu) => (
                        <Link
                          key={subMenu.title}
                          to={subMenu.path}
                          className={`block px-4 py-2 rounded-md ${
                            currentPath.includes(subMenu.path)
                              ? "bg-blue-600 text-white"
                              : "text-gray-600 hover:bg-blue-500 hover:text-white"
                          }`}
                        >
                          {subMenu.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={menu.path}
                  className={`block px-4 py-2 rounded-md ${
                    isMenuActive(menu.path)
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {menu.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex-1 flex flex-col">
          <div className="p-6 bg-gray-50 flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 text-center py-2">
        <p>&copy; 2024 ProxiServices</p>
      </footer>
    </div>
  );
}

export default AdminLayout;
