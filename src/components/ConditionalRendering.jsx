import React, {useState} from 'react'

function ConditionalRendering() {
    const [isHappy, setIsHappy] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode(){
        setDarkMode(!darkMode)
    }
    function handleModeChange(){
        setIsHappy(!isHappy)
    }
  return (
     <div className ={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} flex flex-col items-center justify-center min-h-screen transition-colors duration-500`} >
      <button 
      className='bg-gray-200 hover:bg-gray-400 text-black px-6 py-3 font-semibold transition duration-300 rounded-4xl mb-4 cursor-pointer'
      onClick={toggleDarkMode}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <button
        onClick={handleModeChange}
        className ={`px-24 py-8 rounded-4xl transition duration-300 white-text font-bold font-serif text-2xl cursor-pointer ${
          darkMode? 
          "bg-gray-700 hover:bg-gray-500 text-white" 
          : isHappy 
          ? "bg-green-600 hover:bg-green-800 text-white"
          : "bg-red-600 hover:bg-red-800 text-white"
        }`}
        >
        
        {isHappy ? "i am happy 😊" : "i am sad 😢"}
      </button>
    </div>
  )
}

export default ConditionalRendering
