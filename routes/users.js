import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// read the api documention in postman user auth request
router.get("/checkAuthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in");
})

router.get("/checkUser/:id", verifyUser , (req, res, next) => {
    res.send("Hello user, you are logged in and you can delete your account");
})

router.get("/checkAdmin/:id", verifyAdmin , (req, res, next) => {
    res.send("Hello Admin, you are logged in and you can delete all account");
})

//Update
router.put('/:id', updateUser)

//Delete
router.delete('/:id', deleteUser)

//Get
router.get('/:id', getUser)

//Get All
router.get('/', getAllUsers)

export default router