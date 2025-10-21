import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li className="hover:text-blue-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-300 cursor-pointer">Projects</li>
        <li className="hover:text-blue-300 cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
}
