const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//consecutiveSum-1
app.get('/sol1', (req, res) => {
  const arr = [1, 2, 3, 5, 6, 7];
  let total = 0;
  for (const i in arr) {
    total += arr[i]
  }
  const lastNumber = arr.pop();
  const consecutiveSum = lastNumber * (lastNumber + 1) / 2;
  const missingNumber = consecutiveSum - total;
  res.send({ data: missingNumber });
});

//consecutiveSum-2
app.get('/sol2', (req, res) => {
  const arr = [33, 34, 35, 37, 38];
  let total = 0;//177
  const len = arr.length
  for (const i in arr) {
    total += arr[i]
  };
  const firstNumber = arr[0];
  const lastNumber = arr.pop();
  const consecutiveSum = (len + 1) * (firstNumber + lastNumber) / 2;
  const missingNumber = consecutiveSum - total;
  res.send({ data: missingNumber });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Express app running on port ' + (process.env.PORT || 3000));
});
