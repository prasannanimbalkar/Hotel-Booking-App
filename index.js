import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";   // Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

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

app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/users', usersRoute);
app.use('/api/rooms', roomsRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 500
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

// Starting the server on the specified port
app.listen(port, () => {
    connect(); // Connect to MongoDB when the server starts
    console.log(`Connected to backend port ${port}`);
});
