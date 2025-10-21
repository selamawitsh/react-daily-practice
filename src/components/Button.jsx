import React from "react";

export default function Button({ label, type = "primary" }) {
  const className = type === "primary" ? "btn-primary" : "btn";
  return <button className={className}>{label}</button>;
}
