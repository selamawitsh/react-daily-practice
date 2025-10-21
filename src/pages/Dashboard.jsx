import React from "react";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Project Management" description="Track your projects efficiently." />
      <Card title="Analytics" description="View and analyze performance." />
      <Card title="Team" description="Collaborate with your team members." />
      <Card title="Project Management" description="Track your projects efficiently." />
      <Card title="Analytics" description="View and analyze performance." />
      <Card title="Team" description="Collaborate with your team members." />
    </div>
  );
}
