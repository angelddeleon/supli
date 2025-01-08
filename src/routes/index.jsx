import { RouterProvider } from "react-router"
import { router } from "./PublicRoutes"

const AppRouter = () => {
    return(
        <RouterProvider router={router} fallback/>
    )
}

export default AppRouter