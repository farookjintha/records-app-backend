const mongoose = require('mongoose');

db = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connection is established...')
    }catch(err){
        console.log('DB Error:', err);
    }
}

module.exports = db;