import React, { useState, useEffect } from "react";

export default function MoodWeatherApp() {
  const [mood, setMood] = useState("Happy");
  const [bgColor, setBgColor] = useState("bg-yellow-200");
  const [err, setErr] = useState(null);
  const [quote, setQuote] = useState("Loading your vibe...");
  const [emoji, setEmoji] = useState("😃");

  const moodAudio = {
    Happy: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    calm: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    focused: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  };

  // 🎨 Change background & emoji
  useEffect(() => {
    if (mood === "Happy") {
      setBgColor("bg-yellow-200");
      setEmoji("😄");
    } else if (mood === "calm") {
      setBgColor("bg-green-200");
      setEmoji("🧘‍♀️");
    } else if (mood === "focused") {
      setBgColor("bg-indigo-200");
      setEmoji("🎯");
    }
  }, [mood]);

  // 💬 Fetch quote
  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("https://dummyjson.com/quotes");
        if (!res.ok) throw new Error("couldn't load quote");
        const data = await res.json();
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        setQuote(data.quotes[randomIndex].quote);
      } catch (error) {
        setErr(error.message);
      }
    }
    fetchQuote();
  }, [mood]);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center text-center transition-all duration-700 ${bgColor}`}
    >
      <h1 className="text-4xl font-bold mb-4">
        {emoji} Mood: {mood}
      </h1>
      <p className="italic text-gray-700 mb-6 max-w-md px-6">
        {err ? err : quote}
      </p>

      <div className="flex gap-4">
        {["Happy", "calm", "focused"].map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            className={`px-5 py-2 rounded-full shadow-md transition-all duration-300 ${
              mood === m
                ? "bg-white ring-4 ring-indigo-400"
                : "bg-gray-100 hover:bg-white"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="mt-6 text-gray-600">
        🎶 Your mood, your music 🎶
        <audio key={mood} src={moodAudio[mood]} controls autoPlay />
      </div>
    </div>
  );
}
