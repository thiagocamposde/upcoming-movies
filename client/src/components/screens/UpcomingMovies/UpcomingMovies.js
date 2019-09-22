import React from 'react'

const UpcomingMovies = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>
        })}
      </ul>
    </div>
  )
}

export default UpcomingMovies
