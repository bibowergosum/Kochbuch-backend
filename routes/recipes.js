import express from 'express';
import { getAllRecipes, getSingleRecipe } from '../controllers/recipes.js';
const recipes = express.Router();

recipes.route("/").get(getAllRecipes);
recipes.route("/:id").get(getSingleRecipe);


export default recipes;