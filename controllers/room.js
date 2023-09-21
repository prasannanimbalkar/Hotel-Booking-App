import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: { rooms: savedRoom._id }})
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }

}

export const updateRoom = async (req, res, next) => {
   try {
       const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
       res.status(201).json({message: "Room updated", data :updatedRoom})
   } catch (err) {
       next(err)
   }
}

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
}

export const getRoom = async (req, res, next) => {
   try {
       const room = await Room.findById(req.params.id)
       res.status(200).json({message: "Room data retrived", data :room})
   } catch (err) {
       next(err); // Pass the error to the error handling middleware
   }
}

export const getRooms = async (req, res, next) => {
   try {
       const room = await Room.find()
       res.status(200).json({message: "all Rooms data retrived", data :room})
   } catch (err) {
       next(err); // Pass the error to the error handling middleware
   }
}