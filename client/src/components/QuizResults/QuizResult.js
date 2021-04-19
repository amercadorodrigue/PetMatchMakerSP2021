import React from 'react';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, Button, Grid, CircularProgress, Typography, Paper, Grow, responsiveFontSizes } from '@material-ui/core';
import QuizResultCard from './QuizResultCard/QuizResultCard';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import SMLinks from '../SMLinks/SMLinks';


const QuizResult = () => {
  const animals = useSelector((state) => state.animals);
  const classes = useStyles();
  var theme = createMuiTheme({
    palette: {
      background: {
        default: 'rgba(255,217,173, 1)'
      }
    }
  });
  theme = responsiveFontSizes(theme);
  var counter = 0;
  console.log(animals);
  animals.map((animal) => { if (!animal.length) counter++ });
  if (counter == 4) {
    return (
      <MuiThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Grid className={classes.container} container justify="center" alignItems="stretch" spacing={1}>
            {
              <Grid container className={classes.paper} item xs={10} md={6}>
                <Paper>
                  <img className={classes.image} src={'/images/sad-kitty.jpg'} alt="adopting" />
                  <Typography variant="h5" className={classes.noResults}>We don't have results for you, but we are working to add more animals to match. <br></br> <b>Thank you for your patience!</b></Typography>
                </Paper>
              </Grid>
            }
          </Grid>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth>Go Back Home</Button>
          </Link>
        </Container>

      </MuiThemeProvider>
    );
  } else {



    return (
      <MuiThemeProvider theme={theme}>
        <Grow in>
          <Container maxWidth="lg">
            <Grid className={classes.container} direction="row" container justify="center" alignItems="stretch" spacing={6}>

              {
                !animals.length ? <div><CircularProgress></CircularProgress><br></br></div> :
                  animals.map((animalType) =>
                    animalType.map((singleAnimal, index) => (
                      <Grid key={index} item lg={5} xs={12} sm={12}>
                        <QuizResultCard key={index + 1} animals={singleAnimal} />
                      </Grid>
                    )))
              }
              <Grid item lg={10} xs={11} sm={11}>
                <SMLinks></SMLinks>
              </Grid>
            </Grid>


            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button className={classes.buttonSubmit} variant="contained" fullWidth>Go Back Home</Button>
            </Link>
          </Container>
        </Grow>

      </MuiThemeProvider>



    );
  }
}

export default QuizResult;