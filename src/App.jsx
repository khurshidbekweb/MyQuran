import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// Pages
import Landing from "./pages/landing";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/home";
import NotFound from "./pages/notFound";



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
  return <RouterProvider router={router} />
};

export default App;