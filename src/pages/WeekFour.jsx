import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Dashboard from "../pages/Dashboard.jsx";

function WeekFour() {
    return (
    <div className="layout">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default WeekFour