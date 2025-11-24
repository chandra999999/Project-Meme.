import React from 'react'
import { useState,useEffect } from 'react'
export const ThemeToggle = () => {
   const [theme, setTheme] = useState("light");

    useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(()=>{
      //Load the Theme which is set in local Storage 
      //So when ever The state of Theme changes we need to first toggle 
      //and then save it to localstorage. 
        if(theme==="dark"){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

  },[theme])

  const ToggleTheme = () =>{
    setTheme(theme==="light"?"dark":"light");
  }

  return (
    <div>
        <div className="p-6">
      <button
        onClick={ToggleTheme}
        className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white">
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div className="mt-4 p-6 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded">
        This box changes with theme
      </div>
    </div>
    </div>
  )
}
