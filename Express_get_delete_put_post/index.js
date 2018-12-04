const connection = require('./conf');
const express = require('express');

const bodyParser = require('body-parser');


const app = express();
const port = 3000;

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));


////////////// Méthode DELETE sur MOVIES
app.delete('/api/movies/:id', (req, res) => {
  const idMovie = req.params.id;
  // TODO supprimer les données (étape 2)
  connection.query('DELETE FROM movie WHERE id = ?', [idMovie], err => {
    // TODO envoyer une réponse au client (étape 3)
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un employé");
    } else {
      res.sendStatus(200);
    }
  });
});

////////////// Méthode DELETE sur EMPLOYE
app.delete('/api/employee/:id', (req, res) => {
  const idEmployee = req.params.id;
  // TODO supprimer les données (étape 2)
  connection.query('DELETE FROM employee WHERE id = ?', [idEmployee], err => {
    // TODO envoyer une réponse au client (étape 3)
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un employé");
    } else {
      res.sendStatus(200);
    }
  });
});

////////////// Méthode PUT

// Si l'ID est passé en tant que paramètre QUETE Modif d'un film
app.put('/api/movie/:id', (req, res) => {

  // récupération des données envoyées
  const idFilm = req.params.id;
  const formData = req.body;

  // connection à la base de données, et insertion du film
  connection.query('UPDATE movie SET ? WHERE id = ?', [formData, idFilm], err => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un employé");
    } else {

      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

// Si l'ID est passé en tant que paramètre
app.put('/api/employee/:id', (req, res) => {

  // récupération des données envoyées
  const idEmployee = req.params.id;
  const formData = req.body;

  // connection à la base de données, et insertion de l'employé
  connection.query('UPDATE employee SET ? WHERE id = ?', [formData, idEmployee], err => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un employé");
    } else {

      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

// Si l'ID est passé en tant que donnée
app.put('/api/employee', (req, res) => {
  const idEmployee = req.body.id;
  // TODO récupérer les données (étape 2)
  const formData = req.body;

  // connection à la base de données,e et insertion de l'employé
  connection.query('UPDATE employee S,ET ? WHERE id = ?', [formData, idEmployee], err => {
e
    if (err) { 
      // Si une erreur est survenue, oalors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un employé");
    } else {

      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });  
});

////////////// Méthode POST
// écoute de l'url "/api/employees" avec le verbe POST
app.post('/api/movie', (req, res) => {

  // récupération des données envoyées
  const formData = req.body;

  // connection à la base de données, et insertion de l'employé
  connection.query('INSERT INTO movie SET ?', formData, (err, results) => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un movie");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

// écoute de l'url "/api/employees" avec le verbe POST
app.post('/api/employees', (req, res) => {

  // récupération des données envoyées
  const formData = req.body;

  // connection à la base de données, et insertion de l'employé
  connection.query('INSERT INTO employee SET ?', formData, (err, results) => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un employé");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

////////////// Méthode GET
app.get('/api/employees', (req, res) => {

  // connection à la base de données, et sélection des employés
  connection.query('SELECT * from employee', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des employés');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

app.get('/api/movies', (req, res) => {

  // connection à la base de données, et sélection des employés
  connection.query('SELECT * from movie', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des employés');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

app.get('/api/movies/names', (req, res) => {

  // connection à la base de données, et sélection des employés
  connection.query('SELECT name from movie', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des employés');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});