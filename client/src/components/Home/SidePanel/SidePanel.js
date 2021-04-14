import React from 'react';
import SMLinks from '../../SMLinks/SMLinks';
import { AppBar, Paper, Typography, Grid, Container, Button} from '@material-ui/core';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';
import useStyles from './styles';


const SidePanel = () => {

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Paper display="flex" className={classes.containerPaper}>
        <Grid className={classes.gridContainer} item container wrap='nowrap' justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={10}>
            <img className={classes.image} src={`/images/dog-yoga.jpg`} alt="pets" />
            <SMLinks></SMLinks>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Paper className={classes.summary}>
              <Typography className={classes.summaryText} variant="h4" align="center">
                Let us help you find a <i>your</i> life friend!
              </Typography>
            </Paper>
            <Button color="primary" fullWidth className={classes.surveyButton} endIcon={<FeedbackRoundedIcon style={{ fill: "white" }}/>} target="_blank" href="http://www.google.com">
              Leave Feedback
            </Button>
          </Grid>
          <Paper>

          </Paper>
        </Grid>
      </Paper>
    </Container>
  )
}

export default SidePanel;
