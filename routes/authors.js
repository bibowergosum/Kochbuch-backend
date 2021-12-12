import express from 'express';
import { getAllAuthors, getSingleAuthor } from '../controllers/authors.js';
const authors = express.Router();

authors.route("/").get(getAllAuthors);
authors.route("/:id").get(getSingleAuthor);


export default authors;