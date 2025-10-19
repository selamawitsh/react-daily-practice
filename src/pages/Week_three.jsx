import React from 'react'
import UseEffectt from './UseEffectt';
import FetchApi from './FetchApi';
import UseRefTutorial from './UseRefTutorial'
import UseContextTutorial from './UseContextTutorial';

function Week_three() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Week 2 Projects</h1>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Day 1 - Use Effect Hook
      </h2>
      <UseEffectt/>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Day 2 - Fetch API
      </h2>
      <FetchApi />

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Day 3 - UseRef Tutorial
      </h2>
      <UseRefTutorial />

      <h2 className="text-xl font-semibold mt-6 mb-2">Day 4 - Use Context Tutorial</h2>
      <UseContextTutorial />
    </div>
  );
}

export default Week_three