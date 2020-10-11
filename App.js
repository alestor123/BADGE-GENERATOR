require('dotenv').config()
var express = require('express'),
    app = express(),
    { validate, ValidationError: RequestValidationError, Joi } = require('express-validation'),
    { makeBadge } = require('badge-maker'),
    port = process.env.PORT || 3000;