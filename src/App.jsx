import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// Pages
import Landing from "./pages/landing";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import {ThemeProvider, createTheme } from '@mui/material'


const darkMode = JSON.parse(localStorage.getItem('dark-mode'))
console.log(darkMode);

const darkTheme = createTheme({
  palette:{
    mode: darkMode ? "dark" : "light"
  }
})


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
  return <>
    <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
    </ThemeProvider>
  </>
};

export default App;