import React, { useState } from "react";
import { useNews } from "../context/NewsContext";

export default function SearchBar() {
  const { setSearch } = useNews();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mt-4">
      <input
        type="text"
        placeholder="Search news..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 rounded-l border focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-r"
      >
        Search
      </button>
    </form>
  );
}
