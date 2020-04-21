const express = require("express");
const Event = require('../models/Event');
const router = express.Router();

router.get("/places",(req,res) =>{
   Event.find( (error,item) => {
       if(error){
           console.log(error);
           res.end();
       }
       else{
           res.send(item);
           res.end();
       }
   });

});

router.post("/create",(req,res)=>{
    if ((req.body !==null ) && (req.header!== null)){
        const newUser = new User({
            "name" : req.body.name,
            "nb_place" : req.body.nb_place,
           
        });

        newEvent.save()
        .then((item) =>{
            res.status(201).json(item).end()
        })
        .catch((error)=>{
            res.status(500).end()
        });
    }
})
module.exports = router;