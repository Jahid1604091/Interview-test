const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGO_URI');

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('Mongo db connected ...');
    } catch (error) {
        console.log(`error in connecting db : ${error}`);

        //exit process
        process.exit(1)
    }
}

module.exports = connectDB;