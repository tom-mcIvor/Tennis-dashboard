const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTest,
}

function getTest(db = connection) {
  return db('test').select()
}
