const router = require('express').Router();

const { getUser, getUserId, getUserMe } = require('../controllers/user');
const { updateUserMe, updateUserMeAvatar } = require('../controllers/user');
const { celebrateParamsUserMe, celebrateUserMe } = require('../validators/users');

router.get('/users', getUser);

router.get('/users/me', getUserMe);

router.patch('/users/me', celebrateUserMe, updateUserMe);

router.patch('/users/me/avatar', celebrateUserMe, updateUserMeAvatar);

router.get('/users/:id', celebrateParamsUserMe, getUserId);

module.exports = router;
