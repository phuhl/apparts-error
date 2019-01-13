"use strict";

const { HttpError } = require('./http.js');

/**
 * Returns what it was given in to, if the given exception is of the
 * given type. Otherwise rethrows the exception.
 * @param {Class} type
 * @param {Exception} exception
 * @param {any} to
 * @returns {any}
 * @throws {Exception} as given
 */
const exceptionTo = (type, exception, to) => {
  if(exception instanceof type){
    return to;
  } else {
    throw exception;
  }
};

/**
 * If exception is of the given type the optional callback will be
 * executed. Otherwise rethrows the exception.
 * @param {Class} type
 * @param {Exception} exception
 * @callback next
 * @throws {Exception} as given
 */
const catchException = (type, exception, next) => {
  if(exception instanceof type){
    next && next();
  } else {
    throw exception;
  }
};

module.exports = { exceptionTo, catchException, HttpError };
