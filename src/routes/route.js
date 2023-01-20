const express = require('express');
const router = express.Router();

let persons = [
  { name: 'PK', age: 10, votingStatus: false },
  { name: 'SK', age: 20, votingStatus: false },
  { name: 'AA', age: 70, votingStatus: false },
  { name: 'SC', age: 5, votingStatus: false },
  { name: 'HO', age: 40, votingStatus: false },
];

router.post('/votingAge', (req, res) =>{
  let age = req.query.age;
  let voteablePerson = [];

  for (let i = 0; i < persons.length; i++) {
    if (age <= persons[i].age) {
      persons[i].votingStatus = true;
      voteablePerson.push(persons[i]);
    }
  }
  if (age >= 18) {
    res.send(voteablePerson);
  } else {
    res.send('Not eligible for voting');
  }
});

module.exports = router;
