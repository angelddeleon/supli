import { createBrowserRouter } from "react-router";
import ClientView from "../pages/ClientView";
import SignUp from "../pages/SignUp";



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


    ]
)