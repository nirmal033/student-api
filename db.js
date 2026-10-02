const mongoose = require("mongoose");

async function connectDB() {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Database is connected");
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = connectDB;