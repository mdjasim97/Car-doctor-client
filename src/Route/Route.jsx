import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"
import ErrorPage from "../Pages/NotFound/ErrorPage";
import HomePage from "../Pages/Home/HomePage";

const route = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,


        children : [
            {
                path : "/",
                element : <HomePage/>
            }
        ]
    }
])


export default route