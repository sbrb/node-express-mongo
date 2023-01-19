const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res) => {
    const x = moment().format('YYYY-MM-DD hh-mm-ss');
    const y = req.ip
    const z = req.path
    console.log(x, y, z);
    res.send({ message: "This is Response of GLOBAL MW" })
});

app.use('/', route);

app.listen(process.env.PORT || 3000, () => {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
