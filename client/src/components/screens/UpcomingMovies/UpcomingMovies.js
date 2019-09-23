import React from 'react'
import Movie from '../../base/Movie'
import { Grid } from '@material-ui/core'

const UpcomingMovies = ({ movies, baseUrl, classes }) => {
  return (
    <Grid
      className={classes.movieListContainer}
      container
      spacing={2}
    >
      {movies.map((movie) =>
        <Grid
          item
          container
          justify='center'
          xs={12}
          sm={2}
          key={movie.id}
        >
          <Movie movie={movie} baseUrl={baseUrl} />
        </Grid>
      )}
    </Grid>
  )
}

export default UpcomingMovies
