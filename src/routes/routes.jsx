import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Main from "../main/Main"
import PricingPlan from "../Pages/PricingPlan/PricingPlan"
import OurTeam from "../Pages/OurTeam/OurTeam"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
import BlogsItem from "../Pages/Blogs/BlogsItem"
import Faqs from "../Pages/Faqs/Faqs"
import Footer from "../Components/Footer/Footer"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/pricingplan",
                element: <PricingPlan />
            },
            {
                path: "/ourteam",
                element: <OurTeam />
            },
            {
                path: "/blogitem",
                element: <BlogsItem />
            },
            {
                path: "/faqs",
                element: <Faqs />
            },
            {
                path: "/footer",
                element: <Footer />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }


        ]

    }
])


export default routes