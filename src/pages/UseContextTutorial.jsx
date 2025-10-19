import React from "react";
import { NewsProvider } from "../context/NewsContext";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

import CategorySelector from "../components/CategorySelector";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/NewsList";
import ThemeToggle from "../components/ThemeToggle";

export default function UseContextTutorial() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Content />
      </NewsProvider>
    </ThemeProvider>
  );
}

function Content() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-center text-3xl font-bold pt-6">📰 Live News Reader</h1>
      <ThemeToggle />
      <SearchBar />
      <CategorySelector />
      <NewsList />
    </div>
  );
}
