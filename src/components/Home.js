import React, {useState, useEffect} from 'react';
import localStorage from 'local-storage';
import ListOfMovies from './ListOfMovies';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import "../index.css";
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Home = (props) => {
    const [recommended, setRecommended] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const classes = useStyles();

    useEffect(() =>{
        let movieId = localStorage.get('lastMovie');
        movieId && getRecommended(movieId);
        getPopular();
        getUpcoming();

    }, []);

    var cont = 0;
    const sendData = () => {
        cont++;
         if(cont>1){
            props.parentCallback(false);
            cont = 0;
        }
    }

    const getRecommended = (movieId) => {
        axios.get('https://api.themoviedb.org/3/movie/'+ movieId +'/recommendations?api_key=21fcdb69beae2a4453d5afc194fb0c6f')
        .then(res => {
            setRecommended(res.data.results);
            sendData();
        })
    }

    const getPopular = () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=21fcdb69beae2a4453d5afc194fb0c6f')
        .then(res => {
            setPopular(res.data.results);
            sendData();
        })
    }

    const getUpcoming = () => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=21fcdb69beae2a4453d5afc194fb0c6f')
        .then(res => {
            setUpcoming(res.data.results);
            sendData();
        })
    }

    return(
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
            {recommended.length !== 0 &&
                <article className={"row grupoHome"}>
                        <div className={"col-sm-12 mb-3 tituloHome"}>
                            <Typography  color="primary" component="h2" variant="h2">
                            RECOMENDED
                            </Typography></div>
                        <div className={"row col-sm-12"}>
                            <ListOfMovies movies={recommended}/>
                        </div>
                </article>
            }
            <article className={"row grupoHome"}>
                    <div className={"col-sm-12 mb-3 tituloHome"}>
                    <Typography color="primary" component="h2" variant="h2">
                            POPULAR
                            </Typography></div>
                    <div className={"row col-sm-12"}>
                        <ListOfMovies movies={popular}/>
                    </div>
            </article>
            <article className={"row grupoHome"}>
            <div className={"col-sm-12 mb-3 tituloHome"}>
                    <Typography  color="primary" component="h2" variant="h2">
                            UPCOMING
                            </Typography></div>
                    <div className={"row col-sm-12"}>
                        <ListOfMovies movies={upcoming}/>
                    </div>
            </article>
            </>
        }
    </section>
    </div> 
    );
};

const mapStateToProps = ({Settings}) => {
    return Settings;
};
  
export default connect(mapStateToProps)(Home);