import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPatient() {
    const [data, setData] = useState({
        PatientID: "",
        PatientName: "",
        Phonenumber: "",
        Age: "",
        Bloodgroup: "",
        Gender: "",
        Consult: ""
    });

    const navigate = useNavigate();

    return (
        <>
            <div className="form-group row">
                <label htmlFor="PatientID" className="col-4 col-form-label">Enter Patient ID</label> 
                <div className="col-8">
                    <input 
                        onChange={(e) => setData({ ...data, PatientID: e.target.value })} 
                        type="number" 
                        className="form-control" 
                        value={data.PatientID} 
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="PatientName" className="col-4 col-form-label">Enter Patient Name</label> 
                <div className="col-8">
                    <input 
                        onChange={(e) => setData({ ...data, PatientName: e.target.value })} 
                        type="text" 
                        className="form-control" 
                        value={data.PatientName} 
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Phonenumber" className="col-4 col-form-label">Enter Phone Number</label> 
                <div className="col-8">
                    <input 
                        onChange={(e) => setData({ ...data, Phonenumber: e.target.value })} 
                        type="number" 
                        className="form-control" 
                        value={data.Phonenumber}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Age" className="col-4 col-form-label">Enter Patient Age</label> 
                <div className="col-8">
                    <input 
                        onChange={(e) => setData({ ...data, Age: e.target.value })} 
                        type="number" 
                        className="form-control" 
                        value={data.Age} 
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Bloodgroup" className="col-4 col-form-label">Enter Blood Group</label> 
                <div className="col-8">
                    <select 
                        onChange={(e) => setData({ ...data, Bloodgroup: e.target.value })} 
                        className="form-control" 
                        value={data.Bloodgroup} 
                    >
                        <option value="">Choose</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-4 col-form-label">Enter Gender</label> 
                <div className="col-8">
                    <div className="form-check">
                        <input 
                            onChange={(e) => setData({ ...data, Gender: e.target.value })} 
                            className="form-check-input" 
                            type="radio" 
                            name="Gender" 
                            value="Male" 
                            id="Male" 
                            checked={data.Gender === "Male"} 
                        />
                        <label htmlFor="Male" className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                        <input 
                            onChange={(e) => setData({ ...data, Gender: e.target.value })} 
                            className="form-check-input" 
                            type="radio" 
                            name="Gender" 
                            value="Female" 
                            id="Female" 
                            checked={data.Gender === "Female"} 
                        />
                        <label htmlFor="Female" className="form-check-label">Female</label>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Consult" className="col-4 col-form-label">Enter Consulting Doctor</label> 
                <div className="col-8">
                    <input 
                        onChange={(e) => setData({ ...data, Consult: e.target.value })} 
                        type="text" 
                        className="form-control" 
                        value={data.Consult}
                    />
                </div>
            </div> 
            <div className="form-group row">
                <div className="offset-4 col-8">
                    <button 
                        onClick={() => {
                            const apiUrl = "http://localhost:5000/patients";
                            fetch(apiUrl, {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            })
                            .then(res => res.json())
                            .then(() => {
                                navigate("/patients");
                            });
                        }} className="btn btn-primary">Add Patient</button>
                </div>
            </div>
        </>
    );
}

export default AddPatient;
