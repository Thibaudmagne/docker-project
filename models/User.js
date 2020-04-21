const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const userSchema = new Schema({
     "name": {
         type : String,
         required: true
     },
     "lastname" :{
         type: String,
         required:true
     },
     "birth":{
        type: String,
        required:true
     },
     "passion":{
         type:String,
     }
 });

 module.exports = user = mongoose.model('User',userSchema);