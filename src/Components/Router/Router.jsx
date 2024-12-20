
import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import CreateNew from "../Options/CreateNew";
import ViewAll from "../ViewAll/ViewAll";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/createnew',
                element: <CreateNew></CreateNew>
            },
            {
                path: '/viewall',
                element: <ViewAll></ViewAll>,
                loader: () => fetch('http://localhost:5000/userdetails')
            }
        ]
    },
]);

export default router;