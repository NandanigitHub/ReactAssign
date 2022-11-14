const express = require('express')
const db = require('../database')
const utils = require('../utils')

// get the router from express
// router is used to add the routes in the application
const router = express.Router()

router.get('/', (request, response) => {
  const connection = db.openConnection()
  const statement = `select id, title, description, status, categoryId from tasks`
  connection.query(statement, (error, tasks) => {
    connection.end()
    const result = utils.createResult(error, tasks)
    response.send(result)
  })
})

router.get('/:id', (request, response) => {
  const { id } = request.params
  const connection = db.openConnection()
  const statement = `select id, title, description, status from tasks where id = ${id}`
  connection.query(statement, (error, tasks) => {
    connection.end()
    const result = utils.createResult(error, tasks)
    response.send(result)
  })
})

router.post('/', (request, response) => {
  const { title, description, categoryId } = request.body
  const connection = db.openConnection()
  const statement = `insert into tasks (title, description, categoryId) values ('${title}', '${description}', ${categoryId})`
  connection.query(statement, (error, tasks) => {
    connection.end()
    const result = utils.createResult(error, tasks)
    response.send(result)
  })
})

router.delete('/:id', (request, response) => {
  const { id } = request.params
  const connection = db.openConnection()
  const statement = `delete from tasks where id = ${id}`
  connection.query(statement, (error, tasks) => {
    connection.end()
    const result = utils.createResult(error, tasks)
    response.send(result)
  })
})

router.patch('/:id/:status', (request, response) => {
  const { id, status } = request.params
  const connection = db.openConnection()
  const statement = `update tasks set status = ${status} where id = ${id}`
  connection.query(statement, (error, tasks) => {
    connection.end()
    const result = utils.createResult(error, tasks)
    response.send(result)
  })
})

module.exports = router
