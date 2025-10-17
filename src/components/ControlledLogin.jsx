import React, { useState } from "react";

export default function ControlledLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [darkMode, setDarkMode] = useState(true);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome, ${formData.username}!`);
    setFormData({ username: "", password: "" });
  }

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-yellow-200 text-gray-900"} min-h-screen flex flex-col items-center justify-center transition-colors duration-500`}>
      <button
        onClick={handleThemeChange}
        className={`mb-6 px-4 py-2 rounded-md ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"}`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <form
        onSubmit={handleSubmit}
        className={`p-8 rounded-2xl shadow-md w-80 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={`w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
        />

        <button
          type="submit"
          disabled={formData.username === "" || formData.password === ""}

          className={`w-full py-2 rounded-md transition ${darkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50"}`}
        >
          Login
        </button>
      </form>
    </div>
  );
}


