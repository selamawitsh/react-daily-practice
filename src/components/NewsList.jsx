import React from "react";
import { useNews } from "../context/NewsContext";
import { useTheme } from "../context/ThemeContext"; 

export default function NewsList() {
  const { articles, loading } = useNews();
  const { darkMode } = useTheme(); 

  if (loading) {
    return <p className="text-center mt-10 text-lg">📰 Loading news...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((news, index) => (
        <div
          key={index}
          className={`rounded-xl shadow-md overflow-hidden hover:scale-105 transition transform
            ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}
        >
          {news.urlToImage && (
            <img
              src={news.urlToImage}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="font-bold text-lg">{news.title}</h2>
            <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              {news.description || "No description available."}
            </p>
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-3 inline-block ${darkMode ? "text-blue-400" : "text-blue-500"}`}
            >
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}


