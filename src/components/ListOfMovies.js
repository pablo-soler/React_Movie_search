import React, {forwardRef, useState} from 'react';
import MovieCard from "../components/MovieCard";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import SingleMovie from './SingleMovie';
import '../index.css'

const ListOfMovies = (props) => {

const classes = useStyles();
const [open, setOpen] = useState(false);
const [idmovie, setIdmovie] = useState(0);

  const handleOpen = e => {
    setIdmovie(e.target.getAttribute("name"));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Content = React.forwardRef((props, ref) => <SingleMovie open={open} onClose={handleClose} classes={classes} id={idmovie}/>);

    return(
    <Box  className="boxHome" display="flex" flexWrap="wrap" p={1} m={1} >
      {props.movies.map( m => (
        <Box name={m.id} key={m.id} onClick={handleOpen}>
          <MovieCard name={m.id} poster_path={m.poster_path} title={m.original_title} vote_average={m.vote_average} overview={m.overview}/>
        </Box> 
      ))}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        disableEnforceFocus
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Content />
      </Modal>
    </Box>
    
    );
}

export default ListOfMovies;

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 5),
    marginTop: "90px",
    marginBottom: "90px",
    
  },
}));