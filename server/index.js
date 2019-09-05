const express = require('express');
const massive = require('massive');
//method for dotenv
require('dotenv').config();
const {addMovie, getMovie} = require('./controllers/movieController')

const app = express();

//massive setup
// added ?ssl=true to end of URI to require ssl
massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected');
})

app.use(express.json());

//endpoints
app.post('/api/movies', addMovie);
app.get('/api/movies', getMovie);

app.listen(5050, () => console.log('listening on port 5050'));