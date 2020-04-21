const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    "name": {
        type : String,
        required: true
    },
    "nb_place" :{
        type: String,
        required:true
    }
});