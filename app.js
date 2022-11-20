const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { celebrateBodyUser, celebrateBodyAuth } = require('./validators/users');
const { createUser, login } = require('./controllers/user');
const { auth } = require('./middlewares/auth');

const { PORT = 3000 } = process.env;

const app = express();

const INTERNAL_SERVER_ERROR = 500;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(bodyParser.json());
app.post('/signup', celebrateBodyUser, createUser);
app.post('/signin', celebrateBodyAuth, login);

app.use(auth);
app.use('/', require('./routes/user'));
app.use('/', require('./routes/card'));

app.all('/*', (req, res) => {
  res.status(404).send({ message: 'Страница не найдена' });
});

app.use(errors());
app.use((err, req, res, next) => {
  const status = err.statusCode || INTERNAL_SERVER_ERROR;
  const message = err.message || 'Неизвестная ошибка';
  res.status(status).send({ message });
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
