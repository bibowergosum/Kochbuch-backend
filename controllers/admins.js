/** @format */

import pool from '../db/pg.js';
export const getAdmin = (req, res) => {
	const username = req.params.username;
	pool
		.query("SELECT * FROM admins WHERE username =$1", [username])
		.then((data) => {
			if (data.rowCount === 0) {
				res.status(404).send('Admin mit diesem Usernamen existiert nicht');
			} else {
				res.status(200).json(data.rows[0]);
			}
		})
		.catch((err) => console.log(err));
};

export const getAllAdmins = (req, res) => {
 pool
    .query("SELECT * FROM admins")
   .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
}