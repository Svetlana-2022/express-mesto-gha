const HTTPError = require('./HTTPError');

class ServerError extends HTTPError {
  constructor(message) {
    super(message, 503);
  }
}

module.exports = ServerError;
