"use strict";

require("dotenv/config");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _process$env = process.env,
    PGUSER = _process$env.PGUSER,
    PGPASSWORD = _process$env.PGPASSWORD,
    PGHOST = _process$env.PGHOST,
    PGPORT = _process$env.PGPORT,
    PGDATABASE = _process$env.PGDATABASE,
    DATABASE_URL = _process$env.DATABASE_URL;
var databaseEnvDetails = {
  username: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  dialect: 'postgres',
  port: PGPORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
};

var config = _objectSpread({
  development: _objectSpread({}, databaseEnvDetails, {
    database: PGDATABASE
  }),
  test: _objectSpread({}, databaseEnvDetails, {
    database: PGDATABASE
  }),
  production: _objectSpread({}, databaseEnvDetails, {
    database: DATABASE_URL
  })
}, databaseEnvDetails);

module.exports = config;