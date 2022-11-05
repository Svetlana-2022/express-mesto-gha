const router = require('express').Router();

const { getUser, getUserId, createUser } = require('../controllers/user');
const { updateUserMe, updateUserMeAvatar } = require('../controllers/user');

router.get('/users', getUser);

router.get('/users/:userId', getUserId);

router.post('/users', createUser);

router.patch('/users/me', updateUserMe);

router.patch('/users/me/avatar', updateUserMeAvatar);

module.exports = router;
