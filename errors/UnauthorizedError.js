const HTTPError = require('./HTTPError');

class Unauthorized extends HTTPError {
  constructor(message) {
    super(message, 401);
  }
}

module.exports = Unauthorized;
