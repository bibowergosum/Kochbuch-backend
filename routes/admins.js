/** @format */

import express from 'express';
import { getAdmin } from '../controllers/admins.js';
const admins = express.Router();

admins.route('/:email').get(getAdmin);

export default admins;
