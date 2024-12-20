const ViewOne = ({ oneUser }) => {

    const { uniqueid, name, birthday, gender, martalstatus, nationality, PassportNumber, PassportIssueDate, PassportExpiaryDate, placeofbirth, countryofresidence, imageurl, process1, process2, process3, process4, process5, process6 } = oneUser;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-6">
            <figure>
                <img className="h-[300px]"
                    src={imageurl}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h1>Gender: {gender}, Birthday: {birthday}, Nationality: {nationality}</h1>
                <h1>Maritel Status: {martalstatus}, Passport no: {PassportNumber}</h1>
                <h1 className="mt-4 mb-2 text-center text-2xl">Process Tracker</h1>
                <ul className="steps">
                    <li className={`step ${process1 ? "step-primary" : ""}`}>Form Fillupped</li>
                    <li className={`step ${process2 ? "step-primary" : ""}`}>Delivered to foreign Country</li>
                    <li className={`step ${process3 ? "step-primary" : ""}`}>Approved by /foreign Minister</li>
                    <li className={`step ${process4 ? "step-primary" : ""}`}>Delivered to Country</li>
                    <li className={`step ${process5 ? "step-primary" : ""}`}>Recieved by us</li>
                    <li className={`step ${process6 ? "step-primary" : ""}`}>Delivered to customer</li>
                </ul>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Update</button>
                    <button className="btn btn-error text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ViewOne;