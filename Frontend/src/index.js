import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Img from './Img';
import GetAll from './Pages/Doctor/GetAll';
import GetAllPatient from './Pages/Patients/GetAllPatient';
import Form from './Pages/Patients/Form';
import ContactUs from './Pages/ContactUs';
import Imgs from './Pages/Imgs';
import PatientReview from './Pages/PatientReview';
import GetByIDPatient from './Pages/Patients/GetByIDPatient';
import DeletePatient from './Pages/Patients/DeletePatient';
import GetById from './Pages/Doctor/GetById';
import AddPatient from './Pages/Patients/AddPatient';
import EditPatients from './Pages/Patients/EditPatients';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Img />} />
            <Route path="/Doctors" element={<GetAll />}/> 
            <Route path="/Home" element={<Img/>}/>
            <Route path="/Patients" element={<GetAllPatient/>}/>
            <Route path="/Doctors/:id" element={<GetById/>}/>  
           <Route path="/Contact Us" element={<ContactUs/>}/>
           <Route path="/Imgs" element={<Imgs/>}/>
            <Route path="/Form" element={<Form />}/>
            <Route path="/Patients/:id" element={<GetByIDPatient/>}/>
           <Route path="/Patient Review's" element={<PatientReview/>}/>
           <Route path="/DeletePatient" element={<DeletePatient/>}/>
           <Route path="/Patients/:patientID" element={<AddPatient />} />
           <Route path="/Patients/update/:id" element={<EditPatients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>

);

