import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Box } from '@material-ui/core';
import GenreCard from "./GenreCard";
import ListOfMovies from './ListOfMovies';
import Typography from '@material-ui/core/Typography';
import "../index.css";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const Genres = (props) => {
    const [genres, setGenres] = useState([]);

    useEffect(() =>{
        getGenres();
    }, []);

    const sendData = () => {
        props.parentCallback(false);
    }

    const getGenres = () => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=21fcdb69beae2a4453d5afc194fb0c6f')
        .then(res => {
            setGenres(res.data.genres);
            sendData();
        })
    }

    return(
    <section>
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
                <div className={"row col-sm-12"}> 
                    <Box className="boxHome" display="flex" flexWrap="wrap" p={1} m={1}>
                        {genres && genres.map( (g, index) => (
                            <Link key={index} to={`/genres/${g.id}`}>
                                <GenreCard name={g.name} id={g.id}></GenreCard>
                            </Link>
                        ))}
                    </Box>
                </div>
            </article>
            </>
        }
    </section>
    );
}

const mapStateToProps = ({Settings}) => {
    return Settings;
};
  
export default connect(mapStateToProps)(Genres);
