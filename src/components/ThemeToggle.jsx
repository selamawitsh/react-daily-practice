import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}
