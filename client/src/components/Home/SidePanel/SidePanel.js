import React from 'react';
import SMLinks from '../../SMLinks/SMLinks';
import { AppBar, Paper, Typography, Grid, Container, Button} from '@material-ui/core';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';
import useStyles from './styles';
import ReactImageAppear from 'react-image-appear'


const SidePanel = () => {

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Paper display="flex" className={classes.containerPaper}>
        <Grid className={classes.gridContainer} item container  justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={12}>
            <ReactImageAppear className={classes.image} src={`/images/dog-yoga.jpg`} alt="pets"/>
            <SMLinks></SMLinks>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.summary}>
              <Typography className={classes.summaryText} variant="h4" align="center">
                Let us help you find a <i>your</i> life friend!
              </Typography>
            </Paper>
            <Button color="primary" fullWidth className={classes.surveyButton} variant="contained" endIcon={<FeedbackRoundedIcon style={{ fill: "white" }}/>} target="_blank" href="https://forms.gle/PiAXeGBuWK2HJMLCA">
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
