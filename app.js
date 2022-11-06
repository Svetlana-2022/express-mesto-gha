const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '63629c1b6cc026d4a919946d',
  };
  // псевдоавторизация
  if (req.headers.Authorization || req.headers.authorization) {
    req.user._id = req.headers.Authorization || req.headers.authorization;
  }

  next();
});

app.use(require('./routes/user'));
app.use(require('./routes/card'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
