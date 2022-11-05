const router = require('express').Router();

const { getCard, createCard, deleteCard } = require('../controllers/card');
const { dislikeCard, likeCard } = require('../controllers/card');

router.get('/cards', getCard);

router.post('/cards', createCard);

router.delete('/cards/:cardId', deleteCard);

router.delete('/cards/:cardId/likes', dislikeCard);

router.put('/cards/:cardId/likes', likeCard);

module.exports = router;
