import express from 'express';
import Hotel from '../models/Hotel.js';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/',verifyAdmin, createHotel)

//Update
router.put('/:id',verifyAdmin, updateHotel)

//Delete
router.delete('/:id',verifyAdmin, deleteHotel)

//Get
router.get('/:id', getHotel)

//Get All
router.get('/', getAllHotels)

export default router