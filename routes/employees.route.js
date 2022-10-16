const express = require('express');
const req = require('express/lib/request');
const Employees = require('../models/employee.model');

const router = express.Router();

//To add a new record of Employee Details:
router.post('/employees', async (req, res) => {
    try{
         const payload = req.body;

         const employee = new Employees(payload);
         await employee.save((err, data) => {
             if(err){
                return res.status(400).send('Error while inserting Employee details')
             }
             res.status(201).send({employeeId: data._id, message: 'Employee has been added successfully.'})
         })
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
});

//To get all employees
router.get('/employees', (req, res) => {
    try{
        Employees.find((err, data) => {
            if(err){
               return res.status(400).send('Error while getting all employees')
            }
            res.send(data);
        })
   }catch(err){
       res.status(500).send('Internal Server Error');
   }
});

//To get an existing employee
// router.get('/employees/:email', (req, res) => {
//     try{
//         console.log(req.params)
//         Employees.find({email: req.params.email},(err, data) => {
//             if(err){
//                return res.status(400).send('Error while getting the employee details')
//             }
//             res.status(200).send(data);
//         })
//    }catch(err){
//        res.status(500).send('Internal Server Error');
//    }
// });

//To get an existing employee
router.get('/employees/:id', (req, res) => {
    try{
        Employees.find({_id: req.params.id},(err, data) => {
            if(err){
               return res.status(400).send('Error while getting the employee details')
            }
            res.status(200).send(data);
        })
   }catch(err){
       res.status(500).send('Internal Server Error');
   }
});

//To update an employee details
router.put('/employees/:empId', (req, res) => {
    try{
        Employees.findOneAndUpdate({_id: req.params.empId},{ $set: req.body}, (err, data) => {
            if(err){
               return res.status(400).send('Error while updating Employee details')
            }
            res.status(201).send(data)
        })
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
});


//To delete all employees
router.delete('/employees', (req, res) => {
    try{
        Employees.deleteMany((err, data) => {
            if(err){
               return res.status(400).send('Error while deleting Employee details')
            }
            res.status(200).send({message: 'Employees data has been deleted successfully'})
        })
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
});

//To delete an existing employee
router.delete('/employees/:empId', (req, res) => {
    try{
        Employees.deleteOne({_id: req.params.empId}, (err, data) => {
            if(err){
               return res.status(400).send('Error while deleting Employee details')
            }
            res.status(200).send({message: 'Employee data has been deleted successfully'})
        })
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;