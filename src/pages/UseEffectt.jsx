import React from 'react'
import DailyMotivationBoard from '../components/DailyMotivationBoard'
import LiveConnectionMonitor from '../components/LiveConnectionMonitor'
import MoodWeatherApp from '../components/MoodWeatherApp'

function UseEffectt() {
  return (
    <div>
      <h3 className='font-semibold text-pink-400'>Practice One</h3>
       <DailyMotivationBoard/>

       <h3 className='font-semibold text-blue-500 mt-2'>Practice Two</h3>
       <LiveConnectionMonitor/>

        <h3 className='font-semibold text-green-400 mt-2'>Practice Three</h3>
       <MoodWeatherApp/>
    </div>
   
  )
}

export default UseEffectt