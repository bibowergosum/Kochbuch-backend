import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getSingleRecipe,
  deleteSingleRecipe
} from "../controllers/recipes.js";
const recipes = express.Router();

recipes.route("/").get(getAllRecipes).post(createRecipe);
recipes.route("/:id").get(getSingleRecipe).delete(deleteSingleRecipe);

export default recipes;
