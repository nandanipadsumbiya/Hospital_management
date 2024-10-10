import React from "react";
import { useNavigate } from "react-router-dom";

function DeletePatient({ id }) {
    const navigate = useNavigate();

    const handleDelete = () => {
        const apiUrl = `http://localhost:5000/patients/${id}`;
        fetch(apiUrl, { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    navigate("/Patients");
                } 
            })
            .catch(err => {
              
                alert("Error deleting patient. Please try again.");
            });
    };

    return (
        <button className="btn btn-danger ms-2 mt-3" onClick={handleDelete}>
            Delete
        </button>
    );
}

export default DeletePatient;
