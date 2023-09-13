import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
const app = express();

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('Connected to MongoDb')
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB Disconnected')
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected')
});

app.listen(8080, () => {
    connect()
    console.log('Connected to backend port 8080');
})