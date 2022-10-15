const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Employees', employeeSchema);