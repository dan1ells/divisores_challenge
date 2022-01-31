'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AppException extends LogicalException {
  constructor (message, status) {
    super(message, status)
  }

  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.json({
      status: error.status,
      message: error.message,
      error: true
    })
  }
}

module.exports = AppException
