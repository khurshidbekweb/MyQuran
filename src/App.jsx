import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// Pages
import Landing from "./pages/landing";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import {ThemeProvider, createTheme } from '@mui/material'
import { ThemeContext } from "./helper/themeContex";
import { useState } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts/>}>
      <Route index element={<Landing/>}/>
      <Route path="home" element={<Home/>} />
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

const App = () => {
  const [themeChange, setThemeChange] = useState(JSON.parse(localStorage.getItem('dark-mode')))

  const toggleTheme = () => {
    setThemeChange(!themeChange)
  }
  const darkTheme = createTheme({
    palette:{
      mode: themeChange ? "dark" : "light"
    }
  })
  return <>
        <ThemeContext.Provider value={{themeChange, toggleTheme}}>
          <ThemeProvider theme={darkTheme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </ThemeContext.Provider>
  </>
};

export default App;