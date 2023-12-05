const pets = require(`./data.js`)
const express = require(`express`);
const app = express();

const PORT = 3000;

app.get('/api/v1/pets',(req,res) => {
    res.send(pets)
})

app.get('/api/v1/pets/owner',(req,res) => {
    pets.forEach((pet) =>{if(req.query.name === pet.owner){
        res.send(pet)
    }})
})

app.get('/api/v1/pets/:name',(req,res) => {
    pets.forEach((pet) =>{if(req.params.name === pet.name){
        res.send(pet)
    }})
})

app.listen(PORT,() => {
    console.log(`Server is listening on port ` + PORT)
})