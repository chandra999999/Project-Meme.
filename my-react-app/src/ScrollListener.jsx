import React, { useEffect } from 'react'
import { useState } from 'react'
export const ScrollListener = () => {
    const [ScrollY,setScrollY] = useState(0);
    useEffect(
      ()=>{
        const handleScroll = () =>{
            setScrollY(window.scrollY);
            console.log("Scroll Y Position:",window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
      }
    ,[]);
  return (
    <div style={{ padding: 20 }}>
      <h2>Scroll Position: {scrollY}px</h2>

      {/* filler content so the page can scroll */}
      <div style={{ height: "200vh", background: "#0e0a0aff", marginTop: 16 }}>
        <p style={{ padding: 16 }}>Scroll down to change the number.</p>
      </div>
    </div>
  );
}
