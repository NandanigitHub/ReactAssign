const express = require('express')

const app = express()
app.use(express.json())

// add the routes
const routerTask = require('./routes/task')
const routerAuth = require('./routes/auth')
const routerCategories = require('./routes/category')

// add the routes to the application
app.use('/task', routerTask)
app.use('/auth', routerAuth)
app.use('/category', routerCategories)

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
