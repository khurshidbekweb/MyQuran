import { createContext } from "react";




export const ThemeContext = createContext({
    themeChange: JSON.parse(localStorage.getItem('dark-mode')),
    toggleTheme: ()=>{}
})