const express = require('express');
const db = require('./config/db');

db.authenticate()
    .then(() => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(err);
    })

const app = express();

app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on: ${PORT}`));