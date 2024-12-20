import Swal from "sweetalert2";

const CreateNew = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const uniqueid = form.uniqueid.value;
        const name = form.name.value;
        const birthday = form.birthday.value;
        const gender = form.gender.value;
        const martalstatus = form.martalstatus.value;
        const nationality = form.nationality.value;
        const PassportNumber = form.PassportNumber.value;
        const PassportIssueDate = form.PassportIssueDate.value;
        const PassportExpiaryDate = form.PassportExpiaryDate.value;
        const placeofbirth = form.placeofbirth.value;
        const countryofresidence = form.countryofresidence.value;
        const imageurl = form.imageurl.value;
        const process1 = form.process1.checked;
        const process2 = form.process2.checked;
        const process3 = form.process3.checked;
        const process4 = form.process4.checked;
        const process5 = form.process5.checked;
        const process6 = form.process6.checked;
        const userDetails = { uniqueid, name, birthday, gender, martalstatus, nationality, PassportNumber, PassportIssueDate, PassportExpiaryDate, placeofbirth, countryofresidence, imageurl, process1, process2, process3, process4, process5, process6 }
        console.log(userDetails);

        // sending data to the server
        fetch('http://localhost:5000/userdetails', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    {
                        title: 'Success!',
                        text: 'User Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }
                )
            }
        })


    }

    return (
        <div className="w-full text-center">
            <form onSubmit={handleSubmit}>
                <div>

                    <h1 className="text-3xl">Enter UID for tracking</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="uniqueid" id="uniqueid" placeholder="Unique ID" />
                    </div>

                    <h1 className="text-3xl mt-10">Personal Info</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <h4>Name</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="name" id="name" placeholder="Name" />

                        <h4>Date of birth</h4>
                        <input type="date" className="input input-bordered input-md w-full max-w-xs" name="birthday" id="birthday" />

                        <h4>Gender</h4>
                        <select className="select select-bordered" name="gender" id="gender">
                            <option disabled selected>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>

                        <h4>Marital Status</h4>
                        <select className="select select-bordered" name="martalstatus" id="martalstatus">
                            <option disabled selected>Marital Status</option>
                            <option>Married</option>
                            <option>Unmarried</option>
                            <option>Widowed</option>
                            <option>Divorced</option>
                        </select>

                        <h4>Nationality</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="Nationality" id="nationality" placeholder="Bangladeshi" />

                        <h4>Passport Number</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="Passport Number" id="PassportNumber" placeholder="76392514203947653" />

                        <h4>Passport Issue Date</h4>
                        <input type="date" className="input input-bordered input-md w-full max-w-xs" name="Passport Issue Date" id="PassportIssueDate" />

                        <h4>Passport Expiary Date</h4>
                        <input type="date" className="input input-bordered input-md w-full max-w-xs" name="PassportExpiaryDate" id="PassportExpiaryDate" />

                        <h4>Place of birth</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="placeofbirth" id="placeofbirth" placeholder="Dhaka, Bangladesh" />

                        <h4>Country of Residence</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="countryofresidence" id="countryofresidence" placeholder="Dhaka, Bangladesh" />

                        <h4>Image URL</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="imageurl" id="imageurl" placeholder="www.image.com" />
                    </div>
                    <div className="mt-10">
                        <h1 className="text-3xl">Current Progress</h1>
                        <ul className="mt-6">
                            <li className="flex justify-center items-center mt-3"><input id="process1" value="process1" type="checkbox" className="checkbox" /> <span className="ml-3">Form Fillupped</span></li>
                            <li className="flex justify-center items-center mt-3"><input id="process2" value="process2" type="checkbox" className="checkbox" /> <span className="ml-3">Delivered to foreign Country</span></li>
                            <li className="flex justify-center items-center mt-3"><input id="process3" value="process3" type="checkbox" className="checkbox" /> <span className="ml-3">Approved by /foreign Minister</span></li>
                            <li className="flex justify-center items-center mt-3"><input id="process4" value="process4" type="checkbox" className="checkbox" /> <span className="ml-3">Delivered to Country</span></li>
                            <li className="flex justify-center items-center mt-3"><input id="process5" value="process5" type="checkbox" className="checkbox" /> <span className="ml-3">Recieved by us</span></li>
                            <li className="flex justify-center items-center mt-3"><input id="process6" value="process6" type="checkbox" className="checkbox" /> <span className="ml-3">Delivered to customer</span></li>

                        </ul>

                    </div>


                </div>
                {/* 
                <div className="mt-10">
                    <h1 className="text-3xl">Contact Information</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <h4>Home address</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="homeaddress" id="homeaddress"></textarea>
                        <h4>Email Address</h4>
                        <input className="input input-bordered input-md w-full max-w-xs" type="email" name="email" id="email" />
                        <h4>Phone no</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="phoneno" id="phoneno" />
                    </div>
                </div>


                <div className="mt-10">
                    <h1 className="text-3xl">Travel Information</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <h4>Puspose of visit</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="purposeofvisit" id="purposeofvisit" />

                        <h4>Intended date of arrival</h4>
                        <input type="date" className="input input-bordered input-md w-full max-w-xs" name="Intendeddateofarrival" id="Intendeddateofarrival" />

                        <h4>Intended date of departure</h4>
                        <input type="date" className="input input-bordered input-md w-full max-w-xs" name="Intendeddateofdeparture" id="Intendeddateofdeparture" />

                        <h4>Address of accommodation in the destination country</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="addressofaccomodation" id="addressofaccomodation"></textarea>

                        <h4>Details of previous visits to the destination country</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="detailsofprevvisitedtothedestcountry" id="detailsofprevvisitedtothedestcountry"></textarea>

                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-3xl">Employment Information</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <h4>Current occupation</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="currentoccupation" id="currentoccupation" />

                        <h4>Employers name and address</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="employersnameaddress" id="employersnameaddress"></textarea>

                        <h4>Duration of employment</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="durationofemployement" id="durationofemployement" />

                        <h4>Monthly Income</h4>
                        <input className="input input-bordered input-md w-full max-w-xs" type="number" name="monthlyincome" id="monthlyincome" />

                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-3xl">Family Information</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <h4>Details of immediate family members (spouse, children)</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="immediatefamilymembersdetails" id="immediatefamilymembersdetails"></textarea>

                        <h4>Information about family members in the destination country, if any</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="infoaboutdestcountrymember" id="infoaboutdestcountrymember"></textarea>

                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-3xl">Educational Background</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <h4>Highest level of education completed</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="highesteducationcompleted" id="highesteducationcompleted"></textarea>

                        <h4>Name and address of educational institutions attended</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="nameaddressofinstitution" id="nameaddressofinstitution"></textarea>

                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-3xl">Financial Information</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <h4>Proof of funds (bank statements, salary slips)</h4>
                        <input className="file-input file-input-bordered w-full max-w-xs" type="file" name="bankstatementsalaryslip" id="bankstatementsalaryslip" />

                        <h4>Details of sponsorship, if applicable</h4>
                        <input type="text" className="input input-bordered input-md w-full max-w-xs" name="detailsofsponsorship" id="detailsofsponsorship" />
                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-3xl">Health Information</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <h4>Medical history (if required by the destination country)</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="medicalhistory" id="medicalhistory"></textarea>

                        <h4>Health insurance details</h4>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="healthinsurance" id="healthinsurance"></textarea>

                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-3xl">Supporting Documents</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">

                        <h4>Passport-size photographs</h4>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="passportsizephoto" id="passportsizephoto"></input>

                        <h4>Passport copies</h4>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="passportcopies" id="passportcopies"></input>

                        <h4>Invitation letter (if applicable)</h4>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="invitationletter" id="invitationletter"></input>

                        <h4>Travel itinerary</h4>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="travelitinerary" id="travelitinerary"></input>

                        <h4>Proof of accommodation</h4>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="proofofaccommodation" id="proofofaccommodation"></input>

                        <h4>Visa fee payment receipt</h4>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="visafeepaymentreciept" id="visafeepaymentreciept"></input>

                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-3xl">Declaration and Signature</h1>
                    <div className="flex flex-col justify-center items-center space-y-3 mt-5">
                        <h4>A statement affirming the truthfulness of the information provided</h4>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="truthfullnessofinfoprovided" id="truthfullnessofinfoprovided"></input>

                        <h4>Signature and date</h4>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="signatureanddate" id="signatureanddate"></input>

                    </div>
                </div> */}

                <div className="flex flex-col justify-center items-center space-y-3 mt-20">
                    <input className="btn btn-active" type="submit" value="submit" />
                </div>

            </form>
        </div>
    );
};

export default CreateNew;