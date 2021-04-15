import React from 'react';
import { Link } from 'react-router-dom';
import AppBarComponent from '../AppBar/AppBar';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { Grow, Container, Grid, Typography, CssBaseline, Paper } from '@material-ui/core';
import useStyles from './styles';
import ReactImageAppear from 'react-image-appear';


const NotFound = () => {
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
                <Link to='/' style={{ textDecoration: 'none' }}>
                <Container maxWidth="lg">
                    <AppBarComponent />
                    
                        <Grid container className={classes.mainContainer} spacing={0} direction="row" justify="center" style={{ minHeight: '100vh' }}>
                        <Grid item xs={6} sm={4}>
                            <Paper className={classes.summaryPaper}>
                                <img className={classes.image} alt="Lost-pet" src={`/images/unicorn-cat.jpg`} />
                                
                                    <Paper className={classes.summary} position="static" >
                                        <Typography className={classes.summaryText} variant="h5" align="center">
                                            Oops, This page doesn't exist.<br />Click here to <br /> Go Home!
                                         </Typography>
                                    </Paper>
                                

                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                </Link>
            </Grow>
        </MuiThemeProvider>




    );

}

export default NotFound;