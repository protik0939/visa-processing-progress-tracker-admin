import { useLoaderData } from "react-router-dom";
import ViewOne from "./ViewOne";

const ViewAll = () => {

    const allUsers = useLoaderData();

    return (
        <div>
            <h2 className="text-center mb-10 text-3xl">Total Users Applied: {allUsers.length}</h2>
            {
                allUsers.map(oneUser => <ViewOne
                key={allUsers._id}
                oneUser={oneUser}
                ></ViewOne>)
            }
        </div>
    );
};

export default ViewAll;