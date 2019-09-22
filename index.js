const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

// enables cros-origin requests
app.use(cors())

const apiKey = '1f54bd990f1cdfb230adb312546d765d'

app.get('/movie/upcoming', async (req, res) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
  console.log(response)
  res.send(response.data.results)
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
