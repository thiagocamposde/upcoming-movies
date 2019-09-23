import request from '../util/request'

export const getUpcomingMovies = async () => {
  try {
    return await request.get('/tmbd/movie/upcoming')
  } catch (err) {
    console.log(err.message)
  }
}
