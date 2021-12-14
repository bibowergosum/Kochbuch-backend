import pool from '../db/pg.js';
export const getAllRecipes = (req, res) => {
 pool
    .query("SELECT * FROM recipes ORDER BY id")
   .then((data) => res.json({ recipes: data.rows }))
    .catch((err) => console.log(err));
}

 export const getSingleRecipe = (req, res) => {
 const id = req.params.id;
  pool
    .query(`SELECT * FROM recipes WHERE id=$1`, [id])
    .then((data) => res.json(data.rows[0]))
    .catch((err) => console.log(err));
}