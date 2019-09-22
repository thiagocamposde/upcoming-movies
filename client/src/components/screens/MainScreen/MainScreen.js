import React, { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../../../api/movie.api'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'

const MainsScreen = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const response = await getUpcomingMovies()
      console.log(response)
      setUpcomingMovies(response.data)
    }

    fetchUpcomingMovies()
  }, [])

  return (
    <div>
      <UpcomingMovies movies={upcomingMovies} />
    </div>
  )
}

export default MainsScreen
