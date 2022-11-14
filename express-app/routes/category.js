const express = require('express')
const db = require('../database')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
  const connection = db.openConnection()
  const statement = `select id, title from categories`
  connection.query(statement, (error, categories) => {
    connection.end()
    const result = utils.createResult(error, categories)
    response.send(result)
  })
})
router.post('/', (request, response) => {
  const { title } = request.body
  const connection = db.openConnection()
  const statement = `insert into categories ( title) values ('${title}')`
  connection.query(statement, (error, categories) => {
    connection.end()
    const result = utils.createResult(error, categories)
    response.send(result)
  })
})

router.put('/:id', (request, response) => {
  const { id } = request.params
  const { title } = request.body
  const connection = db.openConnection()
  const statement = `update categories set title ='${title}' where id = ${id}`
  connection.query(statement, (error, categories) => {
    connection.end()
    const result = utils.createResult(error, categories)
    response.send(result)
  })
})

router.delete('/', (request, response) => {
  const { id } = request.params
  const { title } = request.body
  const connection = db.openConnection()
  const statement = `delete from categories where id = ${id}`
  connection.query(statement, (error, categories) => {
    connection.end()
    const result = utils.createResult(error, categories)
    response.send(result)
  })
})

module.exports = router
