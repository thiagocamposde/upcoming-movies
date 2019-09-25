const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

// enables cros-origin requests
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

const movieRoutes = require('./routes/movie')
const configurationRoutes = require('./routes/configuration')

app.use(movieRoutes)
app.use(configurationRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT)
