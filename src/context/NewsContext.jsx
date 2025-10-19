import React, { createContext, useState, useEffect, useContext } from "react";

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [category, setCategory] = useState("technology");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const API_KEY = "1ff4abf89b81475bbc4ae07dd67257f2"; 

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        if (search) {
          url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, search]);

  return (
    <NewsContext.Provider
      value={{ category, setCategory, articles, loading, search, setSearch }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export const useNews = () => useContext(NewsContext);

