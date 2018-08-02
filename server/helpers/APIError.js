const httpStatus = require('http-status');

/**
 * @extends Error
 */
class ExtendableError extends Error {
  constructor(message, status, isPublic) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
    Error.captureStackTrace(this, this.constructor.name);
  }

  cause() {
  }

  cert() {
  }

  cmd() {
  }

  code() {
  }

  context() {
  }

  count() {
  }

  domain() {
  }

  domainEmitter() {
  }

  domainThrown() {
  }

  emitter() {
  }

  errno() {
  }

  host() {
  }

  killed() {
  }

  originalStack() {
  }

  reason() {
  }

  signal() {
  }

  stack() {
  }

  statusCode() {
  }

  syscall() {
  }

  type() {
  }

  types() {
  }

  view() {
  }

  zoneAwareStack() {
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false) {
    super(message, status, isPublic);
  }
}

export default APIError;
