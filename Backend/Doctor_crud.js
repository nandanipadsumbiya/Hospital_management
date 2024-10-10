const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors = require("cors");

const Doc=require('./Doc');

const connectionString="mongodb+srv://nandanipadsumbiya:nandani@cluster0.xdkc1.mongodb.net/Hospital"

mongoose.connect(connectionString).then(()=>{
    console.log('connect');

    const app=express();


    app.use(bodyParser.urlencoded());
    app.use(cors()); //for cross origin request
    

    //get all
    app.get('/Doctors',async(req,res)=>{
        const ans=await Doc.find();
        
        res.send(ans);
    });


    //get by id
    app.get('/Doctors/:ID',async(req,res)=>{
        const ans=await Doc.findOne(
            {
                DoctorID:req.params.ID
                
            }
        )
        
        // console.log("uyitur",Doc.DoctorID);
        res.send(ans);
    });

    //insert
    app.post('/Doctors',async(req,res)=>{
        D=new Doc({
            ...req.body
        })
        const ans=await D.save();
        res.send(ans);
    })


    //delete
    app.delete('/Doctor/:DoctorID',async(req,res)=>{
        const ans =await Doc.deleteOne(
            {
                DoctorID:req.params.DoctorID
            }
        )
        res.send(ans);
    })

    //update
    app.patch('/Doctor/:DoctorID',async(req,res)=>{
        const D=await Doc.findOne(
            {
                DoctorID:req.params.DoctorID
            }
        )
        Doc.DoctorName=req.body.DoctorName;
        //Doc.TableNo=req.body.TableNo;

        const ans=await D.save();
        res.send(ans);
    })

    app.listen(8000,()=>{
        console.log(" server is started at 8000");
    });
});