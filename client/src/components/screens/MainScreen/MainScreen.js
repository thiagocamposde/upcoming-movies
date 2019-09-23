import React, { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../../../api/movie.api'
import { getTmdbApiConfiguration } from '../../../api/configuration.api'
import UpcomingMovies from '../UpcomingMovies'

const MainsScreen = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [tmdbConfig, setTmdbConfig] = useState(null)

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const response = await getUpcomingMovies()
      setUpcomingMovies(response.data)
    }

    const fetchTmdbConfiguration = async () => {
      const response = await getTmdbApiConfiguration()
      setTmdbConfig(response.data)
    }

    fetchTmdbConfiguration()
    fetchUpcomingMovies()
  }, [])

  return (
    <div>
      {tmdbConfig ? <UpcomingMovies movies={upcomingMovies} baseUrl={tmdbConfig.images.base_url} /> : null}
    </div>
  )
}

export default MainsScreen
