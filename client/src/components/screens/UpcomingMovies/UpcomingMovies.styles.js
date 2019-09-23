import { withStyles } from '@material-ui/styles'
import UpcomingMovies from './UpcomingMovies'

const styles = theme => {
  return {
    root: {

    },
    movieListContainer: {
      padding: '1rem'
    }
  }
}

export default withStyles(styles)(UpcomingMovies)
