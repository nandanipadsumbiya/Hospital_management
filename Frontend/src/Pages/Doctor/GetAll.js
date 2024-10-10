import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function GetAll() {
    const [data, setData] = useState([])

    useEffect(() => {
        const apiurl = "http://localhost:8000/Doctors";
        fetch(apiurl)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);


    const foramtedDoctor = data.map((doc) => {
        return (
            <>


                <div class="card float-start m-5" style={{ width: "400px", height: "430px" }}>
                    <img src={doc.Img} class="card-img-top" alt="..." />
                    <div className="text-center">
                       <div style={{fontSize:"20px"}}> {doc.DoctorID}</div>
                        <div style={{fontSize: "35px" ,}}>{doc.DoctorName}</div>
                        <Link className="btn btn-info" to={"/Doctors/"+doc.DoctorID}>Read More</Link>
                    </div>
                </div>

            </>
        )
    });


    return (
        <>
            <h1 className='text-center'>our Doctor's</h1>
           
            <table className="table">
                {foramtedDoctor}
            </table>
        </>
    )
}






export default GetAll;
