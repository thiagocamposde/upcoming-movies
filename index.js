const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

// enables cros-origin requests
app.use(cors())

const apiKey = '1f54bd990f1cdfb230adb312546d765d'

app.get('/tmbd/movie/upcoming', async (req, res) => {
  const genres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
  const upcomingMovies = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)

  const response = upcomingMovies.data.results.map((movie) => {
    movie.genres = genres.data.genres.filter((item) => {
      return movie.genre_ids.includes(item.id)
    })
    return movie
  })

  res.send(response)
})

app.get('/tmbd/configuration', async (req, res) => {
  const response = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
  res.send(response.data)
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
