const express = require('express');;
const lodash = require('lodash');

const router = express.Router();

router.get('/test-me', (req, res)=> {
  // lodash
  // Month division
  let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let result = lodash.chunk(month,3)
  console.log(result);
  //Finding 9th no element
  let hi = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  let result2 = lodash.tail(hi,9);
  console.log(result2);
  // Merging 5 to 1 array which are duplicate
  let arr1 =  [ 1, 3, 5]
  let arr2 =  [ 1, 3, 7]
  let arr3 = [ 1, 3, 9]
  let arr4 = [ 1, 3, 11]
  let arr5 = [ 1, 3, 13]
  let result3 = lodash.union(arr1,arr2,arr3,arr4,arr5); 
  console.log(result3);
  // array to object 
  let obj = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
  let result4 = lodash.fromPairs(obj);
  console.log(result4);

  // API Response
  res.send(riju.first);
});

module.exports = router;


