import React from "react";

export default function PhotoCard({ photo }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden container-type:inline-size">
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold line-clamp-2">{photo.title}</h2>
      </div>
    </div>
  );
}
