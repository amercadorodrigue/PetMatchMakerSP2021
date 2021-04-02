import React from 'react';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, Button,  Grid} from '@material-ui/core';
import QuizResultCard from './QuizResultCard/QuizResultCard';
import useStyles from './styles';
import { useDispatch, useSelector  } from 'react-redux';

const QuizResult = () => {
    const animals = useSelector((state) => state.animals);
    console.log(animals);
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
              <Container maxWidth="md">
                <Grid className= {classes.container} container justify="center" alignItems="stretch" spacing ={1}>
                {
                  animals.map((animal) => (
                     <Grid key={animal._id} item xs={10} md={4}>
                    <QuizResultCard animals={animal} />                            
                  </Grid>
                  ))
                }
              
              
              </Grid>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Button className={classes.buttonSubmit} variant="contained" color="primary"  fullWidth>Go Back Home</Button>
                </Link>
              </Container>
              
          </MuiThemeProvider>
        
            

          );
    }

export default QuizResult;