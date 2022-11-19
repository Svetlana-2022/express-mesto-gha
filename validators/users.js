const { Joi, Segments, celebrate } = require('celebrate');

module.exports.celebrateBodyUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri({ scheme: ['http', 'https'] }),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});
module.exports.celebrateParamsUserMe = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.alternatives().try(
      Joi.string().equal('me'),
      Joi.string().hex().length(24),
    ).required(),
  }).required(),
});
module.exports.celebrateBodyAuth = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});
module.exports.celebrateUserMe = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri({ scheme: ['http', 'https'] }),
  }),
});
