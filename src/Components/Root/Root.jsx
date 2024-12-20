import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footed from "../Footed/Footed";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footed></Footed>
        </div>
    );
};

export default Root;