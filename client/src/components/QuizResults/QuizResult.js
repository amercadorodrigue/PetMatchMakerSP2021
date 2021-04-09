import React from 'react';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, Button, Grid, CircularProgress, Typography, Paper } from '@material-ui/core';
import QuizResultCard from './QuizResultCard/QuizResultCard';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { sizing } from '@material-ui/system'

const QuizResult = () => {
  const animals = useSelector((state) => state.animals);
  const classes = useStyles();
   const theme = createMuiTheme({
    palette: {
      background: {
        default: 'rgba(255,217,173, 1)'
      }
    }
  });
  var counter = 0;  
  console.log(animals);
  animals.map((animal) => {if(!animal.length) counter++});
  if(counter == 4){
    return (
      <MuiThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Grid className={classes.container} container justify="center" alignItems="stretch" spacing={1}>
          {
                <Grid className={classes.paper} key="1" item xs={10} md={6}>
                  <Paper alignItems="center" >
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
  } else{
  
 
  
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Grid className={classes.container} container justify="center" alignItems="stretch" spacing={1}>
          {
            animals.map((animalType) => 
            animalType.map((singleAnimal)=>(
                <Grid key={singleAnimal._id+1} item xs={10} md={6}>
                  <QuizResultCard key={singleAnimal._id+2} animals={singleAnimal} />
                </Grid>
              )))
          }
        </Grid>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth>Go Back Home</Button>
        </Link>
      </Container>

    </MuiThemeProvider>



  );
}
}

export default QuizResult;