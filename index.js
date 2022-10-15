require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db/connect');

db(); //Connecting our database;

//Importing all routes
const employeeRoutes = require('./routes/employees.route');


//Adding Middleware
app.use(express.json());
app.use(cors()); //Cross Origin Resource Sharing

//Custom Middleware
app.use('/api',employeeRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
});