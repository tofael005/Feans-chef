import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../log-res-pages/Login";
import Register from "../log-res-pages/Register";
import ViewDetails from "../component/ViewDetails";
import PrivateRoutes from "../private/PrivateRouter";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/viewdetails/:id",
                element: <PrivateRoutes><ViewDetails/></PrivateRoutes>,
                loader:({params}) => fetch(`https://feans-chefs-api.vercel.app/${params.id}`)
            }
            
        ]
    }
]);

export default Router;


