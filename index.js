import "dotenv/config.js";
import express from 'express';
import authors from "./routes/authors.js";
import recipes from './routes/recipes.js';
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use("/recipes", recipes);
app.use("/authors", authors);
app.route("/").get((req, res) =>
  res.send(
    `<h2>Mögliche Endpunkte:</h2>
      <p><a href= https://${req.get("Host")}/recipes>/recipes</a> => detaillierte Übersicht aller Rezepte</p>
      <p><a href= https://${req.get("Host")}/authors>/authors</a> => Übersicht aller Autoren</>`
  )
);

// app.get('/recipes'), (req, res)  => console.log("SELECT * FROM recipes");
// app.get("/recipes/:id", (req, res) => console.log("SELECT * FROM recipes WHERE id=id"));

// app.get('/authors'), (req, res)  => console.log("SELECT * FROM authors");
// app.get("/authors/:id", (req, res) => console.log("SELECT * FROM authors WHERE id=id"));



app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));