import React from 'react';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Button, CssBaseline} from '@material-ui/core';
import logo from '../../images/pet-house.svg';
import useStyles from './styles';

const QuizResult = () => {
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
                <AppBar className={classes.headingBar} position="static" color="inherit">
                    <img className = { classes.image } src={logo} alt="memories" height="60"/>
                    <Typography className={classes.heading} variant="h2" align="center">Pet Matchmaker</Typography>
                </AppBar>
              </Container>
              <Container maxWidth="sm">
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth>Go Back Home</Button>
                </Link>
              </Container>
          </MuiThemeProvider>
        
          );
    }

export default QuizResult;