const express = require('express');
const router = express.Router();

let players = [
  {
    name: 'manish',
    dob: '1/1/1995',
    gender: 'male',
    city: 'jalandhar',
    sports: ['swimming'],
  },
  {
    name: 'gopal',
    dob: '1/09/1995',
    gender: 'male',
    city: 'delhi',
    sports: ['soccer'],
  },
  {
    name: 'lokesh',
    dob: '1/1/1990',
    gender: 'male',
    city: 'mumbai',
    sports: ['soccer'],
  },
];

router.post('/players', (req, res) =>{
  const playerName = req.body.name;
  const newPlayer = req.body;
  let isNameRepeated = false;
  for (let i = 0; i < players.length; i++) {
    if (players[i].name === playerName) {
      isNameRepeated = true;
      break;
    }
  }
  if (isNameRepeated) {
    res.send('This player was already added!');
  } else {
    players.push(newPlayer);
    res.send(players);
  }
});

module.exports = router;
