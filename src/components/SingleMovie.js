import React, {useState, useEffect} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import localStorage from 'local-storage';
import moment from 'moment';
import "../singleMovie.css";
import Button from '@material-ui/core/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const SingleMovie = (props) => {

  const {open, classes, id, onClose}= props;
  
  const [movie, setMovie] = useState({});
  const [images, setImages] = useState({});
   
  useEffect(() =>{
    localStorage.set('lastMovie', id);
    getMovie();
    getImages();
  }, [props]);

  const getMovie = () => {
    axios.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=21fcdb69beae2a4453d5afc194fb0c6f')
    .then(res => {
      setMovie(res.data);
    })
  };

  const getImages = () => {
    axios.get('https://api.themoviedb.org/3/movie/' + id + '/images?api_key=21fcdb69beae2a4453d5afc194fb0c6f')
    .then(res => {
      setImages(res.data);
    })
  };

  const CloseButton =(props => {
    return(
      <Button aria-label="close" className="closeButton" onClick={onClose}>
      <CloseIcon />
    </Button>
    )
  });

  const getCarouselImages = () => {
    let imgs = [];
    for (const [index, image] of images.backdrops.entries()) {
      if(index > 3) break;
      imgs.push(<div key={index}><img src={"https://image.tmdb.org/t/p/w200" + image.file_path} /></div>)
    }

    return imgs;
  }

  return ( movie && images &&
    <Zoom in={open}> 
      <div className={classes.paper}>
      <CloseButton/>
        <Typography  color="primary" component="h4" variant="h4">{movie.title}</Typography> 
        <Typography style={{color: 'rgba(255, 255, 255, 0.5)'}} component="h3" variant="h3">{movie.tagline}</Typography>
        <div className="modalInfo"  style={{color: 'white'}}>
          <div className="carouselContainer">
            {images.backdrops && images.backdrops.length > 0 ? 
              <Carousel className="carousele" >{getCarouselImages().map( i => i)}</Carousel>
              : "" }</div>
          <p style={{maxWidth: '800px'}}>{movie.overview}</p>
          <p>Genres: {movie.genres && movie.genres.map( (g, index) => {
            if(movie.genres.length !== index+1) return(<span key={index}>{g.name}, </span>)
            else return(<span key={index}>{g.name}</span>)
          })}</p>
          <p>{moment(movie.release_date).format('DD-MM-YYYY')}</p>
          <Button className="movieHomepage" href={movie.homepage} variant="contained" color="primary" href="#contained-buttons">
          MOVIE HOMEPAGE
          </Button>
        </div>
      </div>
    </Zoom>
  );
}

export default SingleMovie;