import pool from '../db/pg.js';
export const getAllAuthors = (req, res) => {
 pool
    .query("SELECT * FROM authors")
    .then((data) => res.json({ users: data.rows }))
    .catch((err) => console.log(err));
}

 export const getSingleAuthor = (req, res) => {
 const id = req.params.id;
  pool
    .query(`SELECT * FROM authors WHERE id=1$`, [id])
    .then((data) => res.json(data.rows[0]))
    .catch((err) => console.log(err));
}