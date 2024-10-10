const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const Pat = require('./patients');

const connectionString = "mongodb+srv://nandanipadsumbiya:nandani@cluster0.xdkc1.mongodb.net/Hospital";

mongoose.connect(connectionString).then(() => {
    console.log('connected to MongoDB');

    const app = express();
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());



    // Get all patients 
    app.get('/patients', async (req, res) => {
        const ans = await Pat.find();
        res.send(ans);
    });



    // Get by ID patient 
    app.get('/patients/:ID', async (req, res) => {
        const ans = await Pat.findOne(
            {
                PatientID: req.params.ID
            }
        );
        res.send(ans);
    });

    // Insert new patient
    // app.post('/Patients', async (req, res) => {
    //     const P = new Pat({
    //         ...req.body
    //     });
    //     const ans = await P.save();
    //     res.send(ans);
    // });



    // Insert new patient
    app.post('/patients', async (req, res) => {
        try {
            const P = new Pat({ ...req.body });  
            const savedPatient = await P.save(); 

           
            res.status(201).send({ message: 'Patient added successfully!', data: savedPatient });
        } catch (error) {
           
            console.error('Error adding patient:', error);
            res.status(500).send({ message: 'Failed to add patient', error });
        }
    });



    // Delete a patient
    app.delete('/patients/:ID', async (req, res) => {
        const ans = await Pat.deleteOne({ PatientID: req.params.ID });
        res.send(ans);
    });




    // Update a patient
    app.patch('/patients/:ID', async (req, res) => {
        const patients = await Pat.findOne({ PatientID: req.params.ID });
        patients.PatientName = req.body.PatientName,
            patients.Phonenumber = req.body.Phonenumber,
            patients.Age = req.body.Age,
            patients.Gender = req.body.Gender,
            patients.Bloodgroup = req.body.Bloodgroup,
            patients.Consult = req.body.Consult

        const ans = await patients.save();
        res.send(ans);

    });

    app.listen(5000, () => {
        console.log("Server is started on port 5000");
    });
});



