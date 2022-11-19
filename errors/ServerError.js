const HTTPError = require('./HTTPError');

class ServerError extends HTTPError {
  constructor(message) {
    super(message, 503);
    console.log(message, '---503');
  }
}

module.exports = ServerError;
