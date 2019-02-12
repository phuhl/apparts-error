"use strict";

class HttpError {
  constructor(code, message) {
    this.code = code;
    this.type = 'HttpError';
    if(message){
      this.message = message;
    } else {
      this.message = this.getDefaultMessage(code);
    }
  }

  getDefaultMessage(code){
    switch (code) {
    case 400: return "Bad Request";
    case 401: return "Unauthorized";
    default: return "Unexpected Error";
    }
  }

  static notFound(element) {
    throw new HttpError(404, `${element} not found`);
  };
}

module.exports = { HttpError };
