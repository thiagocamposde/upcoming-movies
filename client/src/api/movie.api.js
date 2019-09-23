import request from '../util/request'

export const getUpcomingMovies = async (page) => {
  try {
    return await request.get(`/tmbd/movie/upcoming?page=${page}`)
  } catch (err) {
    console.log(err.message)
  }
}
