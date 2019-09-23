import { withStyles } from '@material-ui/styles'
import Movie from './Movie'

const styles = theme => {
  return {
    root: {
    },
    title: {
      fontSize: '1.4rem',
      color: theme.colors.lightGray1
    },
    releaseDate: {
      fontSize: '1.2rem',
      color: theme.colors.lightGray1
    },
    poster: {
      maxWidth: '100%'
    }
  }
}

export default withStyles(styles)(Movie)
