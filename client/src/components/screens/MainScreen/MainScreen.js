import React, { useEffect, useState } from 'react'
import { getTmdbApiConfiguration } from '../../../api/configuration.api'
import UpcomingMovies from '../UpcomingMovies'

const MainsScreen = ({ classes }) => {
  const [tmdbConfig, setTmdbConfig] = useState(null)

  useEffect(() => {
    const fetchTmdbConfiguration = async () => {
      const response = await getTmdbApiConfiguration()
      setTmdbConfig(response.data)
    }

    fetchTmdbConfiguration()
  }, [])

  return (
    <div className={classes.root}>
      {tmdbConfig && <UpcomingMovies baseUrl={tmdbConfig.images.base_url} />}
    </div>
  )
}

export default MainsScreen
