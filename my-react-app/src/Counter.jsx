import React from 'react'
import { useState,useEffect } from 'react'
export const Counter = () => {
    useEffect(() => {
  console.log("Runs only once");
}, []);
   const [count,setCount] = useState(0);
   const Increment = () =>{
    if(count>=10){
        alert("Count cannot be more than 10");
    }
    else{
        setCount(count+1);
    }
   }
   const Decrement = () =>{
    if(count<=0){
        alert("Count cannot be less than 0");
    }
    else{
        setCount(count-1);
    }
   }
  return (
    <div className="w-48 h-24 bg-blue-300 rounded-lg p-4 border">
          <button className="bg-white px-2 py-1 rounded mr-2" 
          onClick={Decrement}>Reduce</button>
            <span className="font-bold">{count}</span>
            <button className="bg-white px-2 py-1 rounded ml-2" onClick={Increment}>Add</button>
</div>
  );
}
