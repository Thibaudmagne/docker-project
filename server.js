const express = require('express');
const moongose = require("mongoose");
const app = express();

const mongo_url = 'mongodb+srv://thibaud_ma:root@cluster0-owzy8.mongodb.net/test?retryWrites=true&w=majority';

moongose.connect(mongo_url,{
    dbName: "bdd_node",
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("MongoDB connecte")
}).catch((error) =>{
console.error(error);
});

app.use(express.json());


app.use('/api/user', require('./routes/users'));
//app.use('/api/event', require('./routes/event'));
app.use('/api/event', require('./routes/event'));
const port = 666;

app.listen(port,() => {
    console.log(`server listening on port ${port}`);
    console.log(`Le serveur du démon !`);
});



