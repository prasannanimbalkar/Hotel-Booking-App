import User from "../models/User.js"

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
        res.status(201).json({message: "User updated", data :updatedUser})
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "User deleted"})
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({message: "User data retrived", data :user})
    } catch (err) {
        next(err); // Pass the error to the error handling middleware
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const user = await User.find()
        res.status(200).json({message: "all Users data retrived", data :user})
    } catch (err) {
        next(err); // Pass the error to the error handling middleware
    }
}