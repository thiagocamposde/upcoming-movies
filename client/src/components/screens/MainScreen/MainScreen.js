import React, { useEffect, useState } from 'react'
import { getTmdbApiConfiguration } from '../../../api/configuration.api'
import UpcomingMovies from '../UpcomingMovies'
import MovieDetails from '../MovieDetails'
import { Switch, Route } from 'react-router-dom'

const MainsScreen = ({ classes }) => {
  const [tmdbConfig, setTmdbConfig] = useState(null)
  const [tmdbConfigIsloading, setTmdbConfigIsLoading] = useState(true)

  useEffect(() => {
    const fetchTmdbConfiguration = async () => {
      const response = await getTmdbApiConfiguration()
      setTmdbConfig(response.data)
      setTmdbConfigIsLoading(false)
    }

    fetchTmdbConfiguration()
  }, [])

  if (tmdbConfigIsloading) return null

  return (
    <div className={classes.root}>
      <Switch>
        <Route
          exact path='/' render={props => (
            <UpcomingMovies {...props} baseUrl={tmdbConfig.images.base_url} />
          )}
        />
        <Route
          exact path='/movie/details' render={props => (
            <MovieDetails {...props} baseUrl={tmdbConfig.images.base_url} />
          )}
        />
        )}
      />
      </Switch>
    </div>
  )
}

export default MainsScreen
