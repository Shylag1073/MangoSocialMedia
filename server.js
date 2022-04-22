const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.set('debug', true);







app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  