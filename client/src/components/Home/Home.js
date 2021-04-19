import React from 'react';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { Grow, Container, Grid, AppBar, Typography, Button, CssBaseline, Paper } from '@material-ui/core';
import logo from '../../images/pet-house.svg';
import useStyles from './styles';
import SidePanel from './SidePanel/SidePanel';

const Home = () => {
  var theme = createMuiTheme({
    palette: {
      background: {
        default: 'rgba(255,217,173, 1)'
      }
    }
  });
  theme = responsiveFontSizes(theme);
  const classes = useStyles();
  return (

    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grow in>
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <img className={classes.image} src={logo} alt="pets" height="60" />
            <Typography className={classes.heading} variant="h2" align="center">Welcome to Pet Matchmaker!</Typography>
          </AppBar>

          
            <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={2}>
              <Grid item xs={12} sm={8} >
                <SidePanel />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={classes.summaryPaper}>
                  <Paper className={classes.summary} position="static" >
                    <Typography className={classes.summaryText} variant="h4" align="center">
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
                </Paper>
              </Grid>
            </Grid>
          </Container>
      </Grow>
    </MuiThemeProvider>

  );
}

export default Home;