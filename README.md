# Assignment

Assignments(Structure of the routes file would look like what is given at the bottom of the document):
You have to write a POST apis:
Write the api in first project directory (Routes/index.js or routes/route.js)
Problem Statement 1 :
NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits )
Your player collection should be an ARRAY of player objects. Each player object should have the following attributes:


{
"name": "manish",
"dob": "1/1/1995",
"gender": "male",
"city": "jalandhar",
"sports": [
"swimming"
]
}


e.g. the players array would look like this:

let players =
   [
   
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       
       
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       }, 
   ]

Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)
NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits)
—----------------
The file inside routes would look like this:


const express = require('express');
const router = express.Router();

let players =
   [
   
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },  
   ]
   
   router.post('/players', (req, res) => {
   
       //LOGIC WILL COME HERE
       res.send(  { data: players , status: true }  )
       
   })
   
module.exports = router;

