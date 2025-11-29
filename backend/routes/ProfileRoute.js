import express from 'express';

import { getProfile,updateProfile } from '../controllers/authController.js';

import { ProfileauthMiddleware } from '../middlewares/authmiddlewares.js';
const Profilerouter = express.Router();
console.log("Setting up profile routes.");
Profilerouter.get('/me',ProfileauthMiddleware,getProfile);
Profilerouter.put('/update',ProfileauthMiddleware,updateProfile);
export default Profilerouter;