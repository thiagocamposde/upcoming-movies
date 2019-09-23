import React from 'react'
import Grid from '@material-ui/core/Grid'

const Movie = ({ movie, baseUrl, classes }) => {
  return (
    <Grid container justify='center' className={classes.root} key={movie.id}>
      <Grid item xs={12}>
        <img className={classes.poster} src={`${baseUrl}w500${movie.poster_path}`} alt={movie.title} />
      </Grid>
      <Grid item xs={12} className={classes.title}> {movie.title} </Grid>
      <Grid item xs={12} className={classes.releaseDate}> {movie.release_date} </Grid>
    </Grid>
  )
}

export default Movie
