const express = require('express');
const app = express();
const knex = require('knex')(require('../knexfile.js').development)
const port = 3000


app.get('/', (request, response) => {
    response.send('your app is running!');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/pets', (request, response) => {
    knex('pet')
    .select('*')
    .then(pets => {
        var petNames = pets.map(pet => pet.name)
        response.json(petNames)
    })
})