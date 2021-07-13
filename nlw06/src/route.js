const express = require('express');

const route = express.Route();

route.get('/', (req, res) => res.render("index"))

module.exports = route