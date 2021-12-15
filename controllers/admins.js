/** @format */

import pool from '../db/pg.js';
export const getAdmin = (req, res) => {
	const email = req.params.email;
	pool
		.query("SELECT * FROM admins WHERE email ='$1'", [email])
		.then((data) => {
			if (data.rowCount === 0) {
				res.status(404).send('Admin mit dieser email exestiert nicht');
			} else {
				res.status(200).json(data.rows[0]);
			}
		})
		.catch((err) => console.log(err));
};
