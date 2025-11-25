import express from 'express';

import { RegisterUser,LoginUser } from '../controllers/authController.js';

const router = express.Router();
// Route for user registration
router.post('/register', RegisterUser);
router.post('/login', LoginUser);


export default router;