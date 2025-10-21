import React from "react";
export default function Card({ title, description }) {
  return (
    <div className="card">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="btn-primary mt-3">View</button>
    </div>
  );
}
