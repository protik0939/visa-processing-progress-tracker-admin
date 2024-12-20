import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full  flex items-center justify-center flex-col space-y-3">
            <h3 className="text-3xl mb-20">Admin Panel</h3>
            <Link to='/createnew'><button className="btn btn-neutral">Create New</button></Link>
            <Link to='/viewall'><button className="btn btn-neutral">View All</button></Link>
        </div>
    );
};

export default Home;