import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ListOfMovies from './ListOfMovies';

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
  },
}));

const SingleGenre = (props) => {
   
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const classes = useStyles();

  useEffect(() =>{
    getGenres();
    getMovies();
  }, [props]);

  const getGenres = () => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=21fcdb69beae2a4453d5afc194fb0c6f')
    .then(res => {
      setGenres(res.data.genres);
    })
  }

  const getMovies = (movieId) => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=21fcdb69beae2a4453d5afc194fb0c6f&with_genres=' + props.match.params.id)
    .then(res => {
      setMovies(res.data.results);
    })
  }

  return( movies && genres &&
    <div>  
    <section className={classes.root}>
        {props.query && props.query.length > 1 ?
            <article className={"row grupoHome"}>
                    <div className={"col-sm-12 mb-3 tituloHome"}>
                        <Typography color="primary" component="h6" variant="h6">You're searching for "{props.query}"</Typography>
                    </div>
                    <div className={"row col-sm-12"}>
                        <ListOfMovies movies={props.search.results}/>
                    </div>
            </article>
            :
            <>
            <article className={"row grupoHome"}>
                    <div className={"col-sm-12 mb-3 tituloHome"}>
                    <Typography color="primary" component="h2" variant="h2">
                      {genres.find( g => g.id == props.match.params.id) && genres.find( g => g.id == props.match.params.id).name}
                    </Typography></div>
                    <div className={"row col-sm-12"}>
                      <ListOfMovies movies={movies}/>
                    </div>
            </article>
            </>
        }
    </section>
    </div> 
    );
}

const mapStateToProps = ({Settings}) => {
  return Settings;
};

export default connect(mapStateToProps)(SingleGenre);