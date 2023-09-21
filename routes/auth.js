import express from 'express';
import { login, register } from '../controllers/auth.js';

const router = express.Router();

//register user
router.post('/register', register)
router.get('/login', login)

export default router