import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";   // Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js
import authRoute from "./routes/auth.js";

// Initializing the Express application
const app = express();

// Loading environment variables using dotenv
dotenv.config();

const port = process.env.PORT || 8000;

// Function to connect to MongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('Connected to MongoDb');
    } catch (error) {
        throw error;
    }
}

// Event listener for MongoDB disconnection
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB Disconnected');
});

// Event listener for MongoDB connection
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

// Middleware for authentication routes
app.use('/auth', authRoute);

// Starting the server on the specified port
app.listen(port, () => {
    connect(); // Connect to MongoDB when the server starts
    console.log(`Connected to backend port ${port}`);
});
