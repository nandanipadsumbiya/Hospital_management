const mongoose=require('mongoose');

const schema=new mongoose.Schema(
    {
        PatientID:Number,
        PatientName:String,
        Phonenumber:Number,
        Age:Number,
        Gender:String,
        Bloodgroup:String,
        Consult:String

}
)
module.exports=mongoose.model('patients',schema,'Patients');