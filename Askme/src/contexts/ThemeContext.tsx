import { useState } from "react";
import { createContext, useContext } from "react";

interface ThemeContextProviderProps {
  children?: React.ReactNode
}

interface ThemeState {
  theme: "light" | "dark",
  changeTheme: () => void
}


export const ThemeContext = createContext<ThemeState | null>(null)

export function useThemeContext() {

  return useContext(ThemeContext)!
}

export function ThemeContextProvider(props: ThemeContextProviderProps){
  
  const [theme, setTheme] = useState<"light" | "dark">(() => {
     const savedTheme = localStorage.getItem('theme')

     if (savedTheme){
       return savedTheme as "light" | "dark";
     }

     return "light";
  })
  
  function  changeTheme(){
    const newTheme = theme === "light"  ? "dark" : "light"
    setTheme(newTheme) 
    localStorage.setItem('theme', newTheme)
  }

  return <ThemeContext.Provider  value={{theme, changeTheme}} {...props}/>
}