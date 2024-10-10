import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [formData, setFormData] = useState({
        patientID: '',
        patientName: '',
        phoneNumber: '',
        Age: '',
        Bloodgroup: '',
        Gender: '',
        consultDoctor: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch('http://localhost:5000/Patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    PatientID: formData.patientID,
                    PatientName: formData.patientName,
                    Phonenumber: formData.phoneNumber,
                    Age: formData.Age,
                    Gender: formData.Gender,
                    Bloodgroup: formData.Bloodgroup,
                    Consult: formData.consultDoctor,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Patient added successfully!');
                // Clear form fields
                setFormData({
                    patientID: '',
                    patientName: '',
                    phoneNumber: '',
                    Age: '',
                    Bloodgroup: '',
                    Gender: '',
                    consultDoctor: ''
                });
                // Navigate back to the patient list
                navigate('/Patients');
            } else {
                alert('Failed to add patient: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering the patient.');
        }
    };

    return (
        <form className="row g-3 p-3" style={{ maxWidth: "600px", margin: "auto", border: "1px solid #ccc", borderRadius: "8px", padding: "20px" }} onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Patient Registration Form</h3>
            <div className="col-md-12">
                <label htmlFor="patientID" className="form-label">Patient's ID</label>
                <input type="text" className="form-control" id="patientID" value={formData.patientID} onChange={handleChange} placeholder="Enter Patient's ID" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="patientName" className="form-label">Patient's Name</label>
                <input type="text" className="form-control" id="patientName" value={formData.patientName} onChange={handleChange} placeholder="Enter Patient's Name" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter Phone Number" required />
            </div>
            <div className="col-md-6">
                <label htmlFor="Age" className="form-label">Patient's Age</label>
                <input type="text" className="form-control" id="Age" value={formData.Age} onChange={handleChange} placeholder="Enter Patient's Age" required />
            </div>
            <div className="col-md-6">
                <label htmlFor="Bloodgroup" className="form-label">Blood Group</label>
                <select id="Bloodgroup" className="form-select" value={formData.Bloodgroup} onChange={handleChange} required>
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
            <div className="col-md-12">
                <label className="form-label">Gender</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="Gender" id="Gender " value="Male" onChange={handleChange} required />
                    <label className="form-check-label" htmlFor="Male">Male</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="Gender" id="Female" value="Female" onChange={handleChange} required />
                    <label className="form-check-label" htmlFor="Female">Female</label>
                </div>
            </div>
            <div className="col-md-12">
                <label htmlFor="consultDoctor" className="form-label">Consulting Doctor</label>
                <input type="text" className="form-control" id="consultDoctor" value={formData.consultDoctor} onChange={handleChange} placeholder="Enter Doctor's Name" required />
            </div>
            <div className="col text-center mt-4">
                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </div>
        </form>
    );
}

export default Form;
