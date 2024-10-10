import { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";

function GetById() {
    const [data, setData] = useState({});
    const { id } = useParams();  
    

    useEffect(() => {
        const apiUrl = `http://localhost:8000/Doctors/${id}`;
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [id]);


    return (
        <>
            <Link className="btn btn-info m-3" style={{ height: "40px", width: "100px"}} to="/Doctors">Back</Link>
            &nbsp;&nbsp;&nbsp;

          
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className="card" style={{ width: "400px", height: "530px" }}>
                    <img  src={data.Img}  className="card-img-top" alt="Doctor" style={{ height: "250px", objectFit: "cover" }} />
                    <div className="card-body ">
                        <h3 className="card-title text-center">{data.DoctorName}</h3>
                        <p className="card-text">
                            <strong>ID:</strong> {data.DoctorID} <br />
                            <strong>Name:</strong> {data.DoctorName} <br />
                            <strong>Degree:</strong> {data.Degree} <br />
                            <strong>Experience:</strong> {data.Experience} <br />
                            <strong>Specialist:</strong> {data.Specialist} <br />
                            <strong>Phone Number:</strong> {data.Phonenumber} <br />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetById;
