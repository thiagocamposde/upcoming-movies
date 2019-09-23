import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import styles from './UpcomingMovies.styles'

const UpcomingMovies = ({ movies, baseUrl, classes }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <Paper className={classes.root} key={movie.id}>
              <img src={`${baseUrl}w154${movie.poster_path}`} />
              {movie.title}
              {movie.release_date}
            </Paper>
          )
        })}
      </ul>
    </div>
  )
}

export default withStyles(styles)(UpcomingMovies)
