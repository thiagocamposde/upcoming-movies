import { withStyles } from '@material-ui/styles'
import Movie from './Movie'

const styles = theme => {
  return {
    root: {
    },
    title: {
      fontSize: '1.4rem'
    },
    releaseDate: {
      fontSize: '1.2rem'
    },
    poster: {
      maxWidth: '100%'
    }
  }
}

export default withStyles(styles)(Movie)
