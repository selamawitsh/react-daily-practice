import React, { useState, useEffect } from "react";
import PhotoCard from "../components/PhotoCard";
import SkeletonCard from "../components/SkeletonCard";
import Spinner from "../components/Spinner";

function FetchApi() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=9`
        );
        const data = await res.json();
        setPhotos((prev) => [...prev, ...data]);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Pixora Gallery</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Show photos */}
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}

        {/* Show skeletons ONLY if loading AND no photos yet */}
        {loading && photos.length === 0 &&
          Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>

      {/* Show spinner when loading more photos (after first page) */}
      {loading && photos.length > 0 && <Spinner />}

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        {!loading && (
          <button
            onClick={() => setPage((p) => p + 1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default FetchApi;
