const express = require('express');
const router = express.Router();

// middleware sur la route /superMiddleware qui affiche hello middleware dans le terminal 
// (via un console.log()), à chaque appel de la page. Dans la fonction "suivante", 
// afficher hello world à l'utilisateur (via un res.send()).

router.use('/superMiddleware', function(req, res, next) {
  console.log('hello middleware');
  // console.log('Request URL coté router:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('hello world');
  res.send('hello world');
  // console.log('Request Type  coté router:', req.method);
  next();
});

// Code de la quête 1 - Récupération paramètre d'URL
router.get('/article-:numeroArticle(\\d+)', (req, res) => {
  console.log(req.params.numeroArticle); // retourne le 3
  res.json({ resultat: `Vous avez demandé l'article ${req.params.numeroArticle}` }); 
});

// Code de la quête 2 - Récupération du GET
// http://localhost:3000/mon-url?maVariableEnGet=maValeur
router.get('/mon-url', (req, res) => {
  console.log(req.query.maVariableEnGet); // retourne maValeur
  res.json({ resultat: `maVariableEnGet: ${req.query.maVariableEnGet}` });
});

// Code de la quête 3 - Récupération du POST
router.post('/mon-url', (req, res) => {
  console.log(req.body.username); // retourne Bob
  res.json(req.body);
});

// URL http://localhost:3000/forms-101?level=easy

// Le code affiche en console le contenu de la requête GET level (easy)
// router.get('/forms-101', (req, res) => {
//   console.log('level : ',req.query.level); // retourne le level (easy)
//   res.json({retour: `level : ${req.query.level}` });
// });


// Le code affiche en console le paramètre de l'URL (101)
// router.get('/forms-:param(\\d+)', (req, res) => {
//   console.log('URL (101)',req.params.param); // retourne le 101
//   res.json({retour: `code : ${req.params.param}` });
// });

// tu envoies en POST ton nom sur http://localhost:3000/forms-101?level=easy
router.post('/forms-:param', (req, res) => {

  console.log('URL (101)',req.params.param);
  console.log('level : ',req.query.level);
  console.log('name : ',req.body.name); // retourne Bob
  res.json({retour: `URL (101) : ${req.params.param}, level : ${req.query.level}, code : ${req.params.param}` });
});

// router.get('/article-:numeroArticle(\\d+)', (req, res) => {
//   console.log(req.params.numeroArticle); // retourne le 3
// });
// http://localhost:3000/article-3


module.exports = router;
