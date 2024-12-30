// context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Définition des thèmes
const themes = {
  light: {
    primary: "#1a56db", // bleu principal
    secondary: "#4f46e5",
    background: "#ffffff",
    text: "#1f2937",
    textLight: "#6b7280",
    border: "#e5e7eb",
    error: "#ef4444",
    success: "#10b981",
    warning: "#f59e0b",
  },
  dark: {
    primary: "#3b82f6",
    secondary: "#6366f1",
    background: "#111827",
    text: "#f3f4f6",
    textLight: "#9ca3af",
    border: "#374151",
    error: "#f87171",
    success: "#34d399",
    warning: "#fbbf24",
  },
};

// Création du contexte
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // État pour stocker le thème actuel
  const [currentTheme, setCurrentTheme] = useState("light");

  // État pour les préférences de couleur du système
  const [systemPreference, setSystemPreference] = useState(null);

  // Récupérer le thème sauvegardé au chargement
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else {
      // Vérifier les préférences système
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setCurrentTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Écouter les changements de préférence système
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setSystemPreference(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Fonction pour changer de thème
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Mettre à jour la classe sur le document pour les styles CSS
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
  };

  // Fonction pour définir un thème spécifique
  const setTheme = (theme) => {
    if (themes[theme]) {
      setCurrentTheme(theme);
      localStorage.setItem("theme", theme);

      document.documentElement.classList.remove(...Object.keys(themes));
      document.documentElement.classList.add(theme);
    }
  };

  // Appliquer les variables CSS du thème
  useEffect(() => {
    const root = document.documentElement;
    const themeColors = themes[currentTheme];

    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [currentTheme]);

  // Valeur du contexte
  const value = {
    theme: currentTheme,
    themes,
    colors: themes[currentTheme],
    toggleTheme,
    setTheme,
    systemPreference,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le thème
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
