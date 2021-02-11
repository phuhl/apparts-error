"use strict";

class HttpError {
  constructor(code, message, description) {
    this.code = code;
    this.type = "HttpError";
    if (message) {
      this.message = message;
      if (description) {
        this.description = description;
      }
    } else {
      this.message = this.getDefaultMessage(code);
    }
  }

  getDefaultMessage(code) {
    switch (code) {
      case 400:
        return "Bad Request";
      case 401:
        return "Unauthorized";
      case 403:
        return "Forbidden";
      default:
        return "Unexpected Error";
    }
  }

  static notFound(element) {
    throw new HttpError(404, `${element} not found`);
  }
}

module.exports = { HttpError };
