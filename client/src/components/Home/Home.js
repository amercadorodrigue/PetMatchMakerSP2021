import React from 'react';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Button, CssBaseline, Paper} from '@material-ui/core';
import logo from '../../images/pet-house.svg';
//import './App.css';
import useStyles from './styles';

const Home = () => {
    const theme = createMuiTheme({
      palette: {
        background: {
          default: 'rgba(255,217,173, 1)'
        }
      }
    });
    const classes = useStyles();
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
            <Container maxWidth="lg">
              <AppBar className={classes.appBar} position="static" color="inherit">
              <img className = { classes.image } src={logo} alt="pets" height="60"/>
                <Typography className={classes.heading} variant="h2" align="center">Welcome to Pet Matchmaker!</Typography>
              </AppBar>
            </Container>
            <Container maxWidth="sm">
              <Paper className={classes.summary} position="static" color="inherit">
                <Typography className={classes.summaryText} variant="h4" align="center">
                  Summary:<br/>
                  Inspired by early 2010s personality quizzes,
                  Pet Matchmaker is a web app that matches you to the best
                  possible pet. The quiz is simple and takes many factors into account such as:
                  home environment, attentional availability, emotional needs, budget, allergies, and more!
                  Click the start button below to find <b><i>your</i></b> perfect pet!
                </Typography>
              </Paper>
              <Link to='/quiz' style={{ textDecoration: 'none' }}>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth>Start</Button>
              </Link>
            </Container>
        </MuiThemeProvider>
        );
  }
  
  export default Home;