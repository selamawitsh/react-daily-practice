
import React, {useState, useEffect} from 'react'

function DailyMotivationBoard() {
const [quote, setQuote] = useState(null);
const [timer, setTimer] = useState(0);
const [error, setError] = useState(null)

const fetchQuote = ()=>{
  fetch("https://dummyjson.com/quotes")
  .then((res)=>{
    if (!res.ok) {
          throw new Error("Failed to fetch quotes");
        }
     return res.json()
  })
 

  .then((data)=>{
    const arr = data.quotes
    if (arr.length > 0){
      const random_quote = arr[Math.floor(Math.random() * arr.length)]
      setQuote(random_quote)
    }
    
  })
  .catch((err)=>{
    console.error("quote fetch error:", err)
    setError("couldn't load the quote")
  })
}

  useEffect(()=>{
    fetchQuote();
    
    const timer =setInterval(()=>{
      setTimer((s)=>s+1)
    },1000 );

    const quoteTimer = setInterval(() => {
      fetchQuote();
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };

  },[])

 


  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-red-100 to-indigo-200 text-center p-4'>
      <h1 className="text-4xl font-bold mb-6 animate-fadeIn">🌱 Daily Motivation</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {!quote && !error && <p className="text-gray-700">Loading quote...</p>}
      {quote && (
        <>
          <p className="text-xl italic text-gray-800 max-w-lg mb-4 animate-fadeIn">"{quote.quote}"</p>
          <p className="text-md text-gray-600 mb-2">-{quote.author || "Unknown"}</p>
          <p className='text-gray-500'>You’ve been here for {timer}s ⏱️</p>
        </>)}
    </div>
  )
}


export default DailyMotivationBoard



// “When the component loads, I fetch quotes.
// If the fetch works, I pick a random quote and display it.
// Meanwhile, I start a timer that counts seconds,
// and I stop the timer when the component unmounts.”