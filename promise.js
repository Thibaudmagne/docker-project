function save(){
    return new Promise((resolve, reject) => {
        //Fonction d'écriture de la db
        //si ça marche
        if (ok){
            const item = //un truc dans la db
            resolve(item);
        }else{
            //une erreur
            //je fais un message d'erreur
            const error = "ça plante"
            reject(error);
        }
    })
}
async function save(){
    await db.write()
}
save().then((item)=>{

}).catch((error) => {
    console.log(error);
});