const mongoose=require('mongoose');

const schema=new mongoose.Schema(
    {
        DoctorID:Number,
        DoctorImg:String,
        DoctorName:String,
        Degree:String,
        Experience:Number,
        Specialist:String,
        Phonenumber:Number

}
)
module.exports=mongoose.model('Doc',schema,'Doctors');