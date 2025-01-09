import { RouterProvider} from "react-router"
import { router } from "./Routes"


const AppRouter = () => {
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default AppRouter