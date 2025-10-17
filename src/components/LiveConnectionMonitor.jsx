import React,{useState, useEffect} from 'react'

function LiveConnectionMonitor() {
    const [online, setOnline] = useState(navigator.onLine)
    useEffect(()=>{
        function handleOnline(){
            setOnline(true)
        }
        function handleOffline(){
            setOnline(false)
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline)

        return ()=>{
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [])
  return (
   
    <div className={`flex flex-col h-screen justify-center items-center ${online? 'bg-gradient-to-b from-green-300 to-indigo-300' : 'bg-gradient-to-b from-red-500 to-indigo-400'}`}>
        {online? (<p className='text-4xl font-semibold text-white'> 🟢 You're online</p>): (<p className='text-4xl font-semibold text-white'>🔴 You're offline</p>)}
    </div>
  )
}

export default LiveConnectionMonitor

