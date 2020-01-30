"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _userRoute = _interopRequireDefault(require("./routes/api/userRoute"));

var _orderRoute = _interopRequireDefault(require("./routes/api/orderRoute"));

var _menuRoute = _interopRequireDefault(require("./routes/api/menuRoute"));

var _db = _interopRequireDefault(require("./db"));

require("regenerator-runtime/runtime");

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // middlewares

app.use((0, _morgan["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // routes

app.use('/api/v1', _userRoute["default"]);
app.use('/api/v1', _menuRoute["default"]);
app.use('/api/v1', _orderRoute["default"]); // Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(_express["default"]["static"]('client/build'));
  app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

var PORT = process.env.PORT || 5000; // listen to server
// app.listen(PORT, console.log(`Server running on ${PORT}`));
// // test database
// try {
//     db.sequelize.authenticate()
//     console.log('Connection has been established successfully.');
// } catch (err) {
//     console.error('Unable to connect to the database:', err);
// }
// sync database

_db["default"].sequelize.sync().then(function () {
  console.log('Connection has been established successfully.');
}).then(function () {
  // listen to server
  app.listen(PORT, '0.0.0.0', console.log("Server running on ".concat(PORT)));
});