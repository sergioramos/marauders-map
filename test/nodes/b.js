if(process.env['MP_COV']) var reveal = require('../../src-cov/reveal')
else var reveal = require('../..').reveal

var nodes = require('../config/nodes.json')
reveal(nodes.b)

setInterval(function () {}, 100000000)

require('fs').writeFile(__dirname + '/b.pid', process.pid)