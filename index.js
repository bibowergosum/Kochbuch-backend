/** @format */

import 'dotenv/config.js';
import express from 'express';
import authors from './routes/authors.js';
import recipes from './routes/recipes.js';
import admins from './routes/admins.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 4001;

const coreOptions = {
	origin: 'https://keen-turing-04ea0a.netlify.app',
	optionsSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());
app.use('/recipes', cors(coreOptions), recipes);
app.use('/authors', cors(coreOptions), authors);
app.use('/admins', cors(coreOptions), admins);
app.route('/').get((req, res) =>
	res.send(
		`<h2>Mögliche Endpunkte:</h2>
      <p><a href= https://${req.get('Host')}/recipes>/recipes</a> => detaillierte Übersicht aller Rezepte</p>
      <p><a href= https://${req.get('Host')}/authors>/authors</a> => Übersicht aller Autoren</>`
	)
);

// app.get('/recipes'), (req, res)  => console.log("SELECT * FROM recipes");
// app.get("/recipes/:id", (req, res) => console.log("SELECT * FROM recipes WHERE id=id"));

// app.get('/authors'), (req, res)  => console.log("SELECT * FROM authors");
// app.get("/authors/:id", (req, res) => console.log("SELECT * FROM authors WHERE id=id"));

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
