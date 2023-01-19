const express = require('express');
const router = express.Router();

//allMovies
router.get('/movies', (req, res) =>{
  const movies = [
    'Rang de basanti',
    'The shining',
    'Lord of the rings',
    'Batman begins',
  ];
  res.send(movies);
});

//moviesByIdWithErrorHandselling
router.get('/movies/:indexNumber', (req, res)=> {
  let id = req.params.indexNumber;
  const movies = [
    'Rang de basanti',
    'The shining',
    'Lord of the rings',
    'Batman begins',
  ];
  (--id <= movies.length && id > 0) ? res.send(movies[id]) : res.send('No movie exists with this id');
});

//allFilms
router.get('/films', (req, res) =>{
  const films = [
    {id: 1,name: 'The Shining'},
    {id: 2,name: 'Incendies'},
    {id: 3, name: 'Rang de Basanti'},
    {id: 4,name: 'Finding Nemo'}
  ];
  res.send(films);
});
//filmsById
router.get('/films/:filmId', (req, res) =>{
  const films = [
    {id: 1,name: 'The Shining'},
    {id: 2,name: 'Incendies'},
    {id: 3, name: 'Rang de Basanti'},
    {id: 4,name: 'Finding Nemo'}
  ];

  let id = req.params.filmId;

  for (let i = 0; i < films.length; i++) {
    if (films[i].id == id) return res.send(films[i]);
  }
  res.send('The film id does not match any movie');
  //Another way
  //(--id <= films.length && id > 0) ? res.send(films[id]) : res.send('No movie exists with this id');
});

module.exports = router;
