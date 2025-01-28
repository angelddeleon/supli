import { createBrowserRouter } from "react-router";
import ClientView from "../pages/ClientView";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";



export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <ClientView />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/signin',
            element: <SignIn />
        }


    ]
)