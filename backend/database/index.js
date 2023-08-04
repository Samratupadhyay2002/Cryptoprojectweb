const mongoose = require('mongoose');
const {MONGODB_CONNECTION_STRING} = require('../config/index');

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect("mongodb+srv://samratupadhyay:samrat@cluster0.kj299rq.mongodb.net/coin-bounce?retryWrites=true&w=majority");
        console.log(`Database connected to host: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = dbConnect;