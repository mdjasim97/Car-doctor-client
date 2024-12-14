import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"
import ErrorPage from "../Pages/NotFound/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Team from "../Pages/Home/Team/Team";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute"

const route = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,


        children : [
            {
                path : "/",
                element : <HomePage/>,
            },

            {
                path : "/login",
                element : <Login/>
            },

            {
                path : "/signup",
                element : <SignUp/>
            },

            {
                path : "/blog",
                element : <Team/>
            },

            {
                path : "/book/:id",
                element : <PrivateRoute><BookService/></PrivateRoute>,
                loader : ({params})=> fetch(`http://localhost:4000/services/${params.id}`)
            },

            {
                path : "/bookings",
                element : <Bookings/>
            }
        ]
    }
])


export default route