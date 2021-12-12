import pool from '../db/pg.js';
export const getAllRecipes = (req, res) => {
 pool
    .query("SELECT * from recipes")
    .then((data) => res.json({ users: data.rows }))
    .catch((err) => console.log(err));
}

 export const getSingleRecipe = (req, res) => {
 const id = req.params.id;
  pool
    .query(`SELECT * from recipes WHERE id=${id}`)
    .then((data) => res.json(data.rows[0]))
    .catch((err) => console.log(err));
}