import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MdStar} from "react-icons/md";
import { Box } from '@material-ui/core';
import "../index.css";

export default function MovieCard(props) {

  const classes = useStyles();
  function truncate(str) {
    return str.length > 150 ? str.substring(0, 170) + "..." : str;
  };

  return (
    <Box name={props.name} >
    <Card  name={props.name} className={classes.card} className="card"> 
    <img name={props.name} className="CardMedia" src={"https://image.tmdb.org/t/p/w200" + props.poster_path}/>
      <CardActionArea name={props.name} className={classes.media}>
        <CardContent name={props.name} className="content"> 
          <Typography name={props.name}  component="p" variant="subtitle1" >
          {truncate(props.overview)}
          </Typography>
        <Typography name={props.name} variant="h6" color="primary">
          MORE INFO
        </Typography> 
        </CardContent>
        <div name={props.name} className="tituloBox">
          <div name={props.name} className="tituloCard">
            <div >
            <Typography name={props.name} gutterBottom variant="h6" color="primary" component="h3" >
              {props.vote_average} <MdStar />
            </Typography>
            </div>
            <Typography name={props.name} gutterBottom variant="h6" component="h3">
              {props.title}
            </Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
    </Box>
  );
}

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    borderRadius: 0,
  },
  media: {
    height: 230,
  },
});
