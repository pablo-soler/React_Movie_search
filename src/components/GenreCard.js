import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import "../index.css";
import Button from '@material-ui/core/Button';

export default function GenreCard(props) {  
  return (
    <Box className={"genero"}>
        <Button size="large" color="secondary" >
          <img src={"./img/" + props.name +".png"}/>
          <Typography style={{margin:20}} gutterBottom variant="h4" component="h3">
              {props.name}
            </Typography>
        </Button>
    </Box>
  );
};