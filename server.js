const express = require('express')
const chalk = require('chalk')
const path = require('path')
const api = require('./apiRoutes')

const app = express()
const buildPath = path.join(__dirname, 'client/build')
const port = process.env.PORT || 3001

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(buildPath))
}

app.use('/api', api)

app.listen(port, () => {
  console.log(`Listening at 'http://localhost:${chalk.bold.green(port)}/.`)
})
