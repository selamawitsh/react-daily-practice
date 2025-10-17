import React from "react";
import ConditionalRendering from "../components/ConditionalRendering.jsx"; // Day 1 project
import ProductGrid from "../components/ProductGrid.jsx"; // Day 2 project
import ControlledLogin from "../components/ControlledLogin.jsx";
import ShoppingCart from "./ShoppingCart.jsx"; // Day 4 project

function Week_two() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Week 2 Projects</h1>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Day 1 - Conditional Rendering
      </h2>
      <ConditionalRendering />

      <h2 className="text-xl font-semibold mt-6 mb-2">Day 2 - Product Grid</h2>
      <ProductGrid />

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Day 3 - Controlled Component
      </h2>
      <ControlledLogin />

      <h2 className="text-xl font-semibold mt-6 mb-2">Day 4 - Shopping Cart</h2>
      <ShoppingCart />
    </div>
  );
}

export default Week_two;
