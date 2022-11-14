const express = require('express')
const db = require('../database')
const utils = require('../utils')
const cryptoJs = require('crypto-js')

const router = express.Router()

router.post('/signup', (request, response) => {
  const { firstName, lastName, email, password } = request.body

  const connection = db.openConnection()
  const encryptedPassword = cryptoJs.SHA256(password)
  const statement = `insert into user (firstName, lastName, email, password) values ('${firstName}', '${lastName}', '${email}', '${encryptedPassword}')`
  connection.query(statement, (error, signupResult) => {
    connection.end()
    const result = utils.createResult(error, signupResult)
    response.send(result)
  })
})

router.post('/signin', (request, response) => {
  const { email, password } = request.body

  const connection = db.openConnection()
  const encryptedPassword = cryptoJs.SHA256(password)
  const statement = `select id, firstName, lastName, email from user where email = '${email}' and password = '${encryptedPassword}'`
  connection.query(statement, (error, signinResult) => {
    connection.end()
    const result = utils.createResult(error, signinResult)
    response.send(result)
  })
})

module.exports = router
