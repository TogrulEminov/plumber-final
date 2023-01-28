import Add from "../Pages/Add/Add";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import MainRoot from "../Pages/MainRoot";
import Services from "../Pages/Services/Services";
import Testimonials from "../Pages/Testimonials/Testimonials";
import Features from './../Pages/Features/Features';
import Page from './../Pages/Page/Page';


export  const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"services",
                element:<Services/>
            },
            {
                path:"features",
                element:<Features/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"page",
                element:<Page/>
            },
            {
                path:"testimonials",
                element:<Testimonials/>
            }
        ]
    }
]