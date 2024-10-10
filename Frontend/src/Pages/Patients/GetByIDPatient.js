//GetByIDPatients
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeletePatient from "./DeletePatient";

function GetByIDPatient() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = `http://localhost:5000/patients/${id}`;
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [id]);

    return (
        <>
            <div>
                <Link className="btn btn-info ms-2 mt-3 " style={{ height: "40px", width: "100px" }} to="/Patients">Back</Link>


                <DeletePatient id={id} />

         
                <Link className="btn btn-warning ms-2 mt-3" style={{ height: "40px", width: "100px" }} to={`/Patients/update/${id}`}> Update </Link>

            </div>


            <div className="d-flex justify-content m-4 border border-secondary" style={{ height: "300px ", width: "310px" }}>
                <div className="m-3">
                    <p><strong>ID:</strong> {data.PatientID}</p>
                    <p><strong>Name:</strong> {data.PatientName}</p>
                    <p><strong>Phone Number:</strong> {data.Phonenumber}</p>
                    <p><strong>Age:</strong> {data.Age}</p>
                    <p><strong>Gender:</strong> {data.Gender}</p>
                    <p><strong>Blood Group:</strong> {data.Bloodgroup}</p>
                    <p><strong>Consult:</strong> {data.Consult}</p>

                </div>
            </div>
        </>
    );
}

export default GetByIDPatient;
