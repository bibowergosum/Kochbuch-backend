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

export const createRecipe = (req, res) => {
  const { title, ingredients, instructions, home_picture, home_picture_alt, picture_one, picture_one_alt, picture_two, picture_two_alt } = req.body;
  pool
    .query(
      "INSERT INTO recipes (title, ingredients, instructions, home_picture, home_picture_alt, picture_one, picture_one_alt, picture_two, picture_two_alt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);",
      [
        title,
        ingredients,
        instructions,
        home_picture,
        home_picture_alt,
        picture_one,
        picture_one_alt,
        picture_two,
        picture_two_alt,
      ]
    )
    .then(data => res.json('hihihi'))
    .catch((err) => console.log(err));
    }
