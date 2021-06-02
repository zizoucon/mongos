const mongoose= require('mongoose');

const {Schema}=mongoose;
const PersonSchema=new Schema({
    name:String ,
    age:Number,
})

const Person = mongoose.model('Person', PersonSchema)
module.exports=Person