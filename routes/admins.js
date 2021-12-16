/** @format */

import express from 'express';
import { getAdmin, getAllAdmins } from '../controllers/admins.js';
const admins = express.Router();
admins.route('/').get(getAllAdmins);
admins.route('/:username').get(getAdmin);

export default admins;
