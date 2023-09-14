import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

//CREATE
router.post('/', async (req, res) => {

    // new hotel from Hotel model - takes hotel info from user
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(201).json({message: "hotel created", data :savedHotel})
    } catch (err) {
        res.status(500).json(err)
    }
})

//Update
router.put('/:id', async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
        res.status(201).json({message: "hotel updated", data :updatedHotel})
    } catch (err) {
        res.status(500).json(err)
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "hotel deleted"})
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get
router.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json({message: "hotel data retrived", data :hotel})
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get All
router.get('/', async (req, res) => {
    try {
        const hotel = await Hotel.find()
        res.status(200).json({message: "all hotels data retrived", data :hotel})
    } catch (err) {
        res.status(500).json(err)
    }
})
export default router