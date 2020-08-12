import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, InputBase} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import "../index.css";
import {getSearch} from '../actions/Settings';
import { connect } from 'react-redux';
import LoadBar from './LoadBar.js';

const Header = (props) => {   
  
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <div  className={classes.root}>
      <AppBar  className="header" className={classes.root} position="fixed">
     
        <Toolbar >
            <Typography className={classes.title} variant="h5" noWrap>
                REACT TV
            </Typography>
            <div style={{width:"50%"}} >
            <Tabs  variant="fullWidth" value={value} onChange={handleChange}  indicatorColor="primary"
    textColor="primary" >
                <Tab  label="HOME" className="tapHeader" component={Link} to="/"/>
                <Tab label="GENRES" className="tapHeader" component={Link} to="/genres"/>
            </Tabs>
            </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onKeyUp={event => {
                props.getSearch(event.target.value)
              }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
        {props.parentCallback?<LoadBar/> : ""}
      </AppBar>
    </div>
    );
};

const mapStateToProps = ({Settings}) => {
  return Settings;
};

export default connect(mapStateToProps, {getSearch})(Header);

const useStyles = makeStyles(theme => 
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      padding: "0",
      fontFamily: 'Montserrat, sans-serif',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      fontFamily: 'Montserrat, sans-serif',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }),
);