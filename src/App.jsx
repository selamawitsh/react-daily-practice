import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Week_one from "./pages/Week_one.jsx";
import Week_two from "./pages/Week_two.jsx";
import ConditionalRendering from "./components/ConditionalRendering.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import ControlledLogin from "./components/ControlledLogin.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Week_three from "./pages/Week_three.jsx";
import UseEffectt from "./pages/UseEffectt.jsx";

function App() {
  const [openWeek, setOpenWeek] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const weeksData = [
    {
      id: "week1",
      title: "Week One",
      page: <Week_one />,
      days: [
        { id: 1, title: "Day 1", element: <Week_one /> },
        { id: 2, title: "Day 2", element: <Week_one /> },
        { id: 3, title: "Day 3", element: <Week_one /> },
        { id: 4, title: "Day 4", element: <Week_one /> },
        { id: 5, title: "Day 5", element: <Week_one /> },
        { id: 6, title: "Day 6", element: <Week_one /> },
      ],
    },
    {
      id: "week2",
      title: "Week Two",
      page: <Week_two />,
      days: [
        {
          id: 1,
          title: "Day 1 - Conditional Rendering",
          element: <ConditionalRendering />,
        },
        { id: 2, title: "Day 2 - Product Grid", element: <ProductGrid /> },
        {
          id: 3,
          title: "Day 3 - Controlled Component",
          element: <ControlledLogin />,
        },
        { id: 4, title: "Day 4 - Shopping Cart", element: <ShoppingCart /> },
      ],
    },
    {
      id: "week3",
      title: "Week Three",
      page: <Week_three />,
      days: [
          {
          id: 1,
          title: "Day 1 - UseEffect Hook",
          element: <UseEffectt/>
        },
        // { id: 2, title: "Day 2", element: <Week_one /> },
        // { id: 3, title: "Day 3", element: <Week_one /> },
        // { id: 4, title: "Day 4", element: <Week_one /> },
        // { id: 5, title: "Day 5", element: <Week_one /> },
        // { id: 6, title: "Day 6", element: <Week_one /> },
      ],
    },
  ];

  const toggleWeek = (weekId) => {
    setOpenWeek(openWeek === weekId ? null : weekId);
  };

  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-whit"}`}>
      <Router>

      <nav className="p-4 bg-gray-100 shadow-md flex gap-6 relative">
        {weeksData.map((week) => (
          <div key={week.id} className="relative">
            <button
              onClick={() => toggleWeek(week.id)}
              className="font-semibold hover:text-blue-600 px-4 py-2 rounded-xl bg-gray-200"
            >
              {week.title}
            </button>

            {openWeek === week.id && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg rounded-xl border border-gray-200 z-50">
                <Link
                  to={`/${week.id}`}
                  className="block px-4 py-2 hover:bg-blue-100 font-semibold"
                  onClick={() => setOpenWeek(null)}
                >
                  All Days ({week.title})
                </Link>

                {week.days.map((day) => (
                  <Link
                    key={day.id}
                    to={`/${week.id}/day${day.id}`}
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={() => setOpenWeek(null)}
                  >
                    {day.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <button onClick={() => setDarkMode(!darkMode)} className="ml-auto px-1 py-2 bg-gray-200 rounded-xl hover:bg-gray-300">
          Dark Mode
        </button>
      </nav>

      {/* ===== PAGE CONTENT ===== */}
      <div className="p-6">
        <Routes>
          {weeksData.map((week) => (
            <React.Fragment key={week.id}>
              <Route path={`/${week.id}`} element={week.page} />
              {week.days.map((day) => (
                <Route
                  key={day.id}
                  path={`/${week.id}/day${day.id}`}
                  element={day.element}
                />
              ))}
            </React.Fragment>
          ))}
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
