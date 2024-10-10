import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPatients() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    // Fetch patient data by ID
    useEffect(() => {
        const apiUrl = "http://localhost:5000/patients/" + id;
        fetch(apiUrl)
            .then(res => res.json())        
            .then(setData);
    }, [id]);

    return (
        <>
            <form className="row g-3 p-3 mt-3" style={{ maxWidth: "600px", margin: "auto", height: "600px", border: "1px solid #ccc", borderRadius: "8px", padding: "20px" }} >
                <div className="form-group row mt-1">
                    <div> <label htmlFor="patientID" className="col-4 col-form-label">Patient's ID</label> </div>
                    <div className="col-12">
                        <input value={data.PatientID || ''} onChange={(e) => setData({ ...data, PatientID: e.target.value })} type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group row">
                    <div><label htmlFor="patientName" className="col-4 col-form-label">Patient's Name</label> </div>
                    <div className="col-12">
                        <input value={data.PatientName || ''} onChange={(e) => setData({ ...data, PatientName: e.target.value })} type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phoneNumber" className="col-4 col-form-label">Phone Number</label>
                    <div className="col-12">
                        <input value={data.Phonenumber || ''} onChange={(e) => setData({ ...data, Phonenumber: e.target.value })} type="text" className="form-control" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div><label htmlFor="Age" className="col-form-label">Patient's Age</label></div>
                    <div>
                        <input value={data.Age || ''} onChange={(e) => setData({ ...data, Age: e.target.value })} type="text" className="form-control" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div><label htmlFor="Bloodgroup" className="col-form-label">Blood Group</label></div>
                    <div>
                        <select value={data.Bloodgroup || ''} onChange={(e) => setData({ ...data, Bloodgroup: e.target.value })} className="form-select">
                            <option value="">Choose</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <div><label className="col-4 col-form-label">Gender</label></div>
                    <div className="col-8">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Gender" value="Male" checked={data.Gender === "Male"} onChange={(e) => setData({ ...data, Gender: e.target.value })} />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Gender" value="Female" checked={data.Gender === "Female"} onChange={(e) => setData({ ...data, Gender: e.target.value })} />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div><label htmlFor="consultDoctor" className="col-form-label">Consulting Doctor</label></div>
                    <div className="col-12">
                        <input value={data.Consult || ''} onChange={(e) => setData({ ...data, Consult: e.target.value })} type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="text-center">
                        <button
                            onClick={(e)=>{
                                e.preventDefault();  

                                const apiUrl = "http://localhost:5000/patients/" + id;
                                fetch(apiUrl, {
                                    method: "PATCH",
                                    body: JSON.stringify(data),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                })  
                                    .then(() => navigate("/patients"));
                            }} className="btn btn-primary mt-3"style={{ width: "100px" }}>Edit</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default EditPatients;