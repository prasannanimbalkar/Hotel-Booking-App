import express from 'express';
import Hotel from '../models/Hotel.js';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';

const router = express.Router();

//CREATE
router.post('/', createHotel)

//Update
router.put('/:id', updateHotel)

//Delete
router.delete('/:id', deleteHotel)

//Get
router.get('/:id', getHotel)

//Get All
router.get('/', getAllHotels)

export default router