import React from 'react'
import { useState,useEffect,useRef } from 'react'

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  //When u stop it u need to stop there only U should be resetting to 0 
  //Need to maintain that state 
  //Start
  
const start = () =>{
    if(intervalRef.current!==null)return;

    intervalRef.current = setInterval(()=>{
        setTime((time)=>time+1);
    },1000);
}

  //Stop //When I say stop it should stop there only 
  const stop = () =>{
    if(intervalRef.current===null)return;
    clearInterval(intervalRef.current);
  }
  const reset = () =>{
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }



  return (
    <div>

        <h2 className="text-2xl font-bold mb-4">Stopwatch: {time}s</h2>
        <button onClick={start} className="mr-2 px-4 py-2 bg-green-500 text-white rounded">Start</button>
        <button onClick={stop} className="mr-2 px-4 py-2 bg-red-500 text-white rounded">Stop</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
    </div>
  )
}
