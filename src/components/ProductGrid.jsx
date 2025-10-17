import React from "react";

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$49.99",
      category: "Electronics",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Coffee Mug",
      price: "$9.99",
      category: "Kitchen",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sneakers",
      price: "$79.99",
      category: "Fashion",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Notebook",
      price: "$4.99",
      category: "Stationery",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-green-600 font-bold mt-2">{product.price}</p>
        </div>
      ))}
    </div>
  </div>
);

}
