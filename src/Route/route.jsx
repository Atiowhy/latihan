import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/landing page/landingPage";
import About from "../Pages/about/about";
import Gallery from "../Pages/gallery/gallery";

const router = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/gallery',
        element:<Gallery/>
    }
])

export default router

