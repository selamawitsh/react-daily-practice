import React from "react";
import { useNews } from "../context/NewsContext";

export default function CategorySelector() {
  const { category, setCategory } = useNews();
  const categories = ["technology", "sports", "politics", "health", "business"];

  return (
    <div className="flex gap-3 justify-center mt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-full text-white ${
            category === cat ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}


