import Hotel from "../models/Hotel.js"

export const createHotel = async (req, res, next) => {
     // new hotel from Hotel model - takes hotel info from user
     const newHotel = new Hotel(req.body)

     try {
         const savedHotel = await newHotel.save()
         res.status(201).json({message: "hotel created", data :savedHotel})
     } catch (err) {
         next(err)
     }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
        res.status(201).json({message: "hotel updated", data :updatedHotel})
    } catch (err) {
        next(err)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "hotel deleted"})
    } catch (err) {
        next(err)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json({message: "hotel data retrived", data :hotel})
    } catch (err) {
        next(err); // Pass the error to the error handling middleware
    }
}

export const getAllHotels = async (req, res, next) => {
    try {
        const hotel = await Hotel.find()
        res.status(200).json({message: "all hotels data retrived", data :hotel})
    } catch (err) {
        next(err); // Pass the error to the error handling middleware
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(citi => {
            return Hotel.countDocuments({city: citi})
        }))
        res.status(200).json({message: "all hotels data retrived", data: list})
    } catch (err) {
        next(err); // Pass the error to the error handling middleware
    }
}

export const countByType = async (req, res, next) => {
    try {
        const hotel = await Hotel.find()
        res.status(200).json({message: "all hotels count by cities retrived", data :hotel})
    } catch (err) {
        next(err); // Pass the error to the error handling middleware
    }
}