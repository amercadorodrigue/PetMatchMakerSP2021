import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Button, CssBaseline, Grid, Paper, Box } from '@material-ui/core';
import questionList from "../../data/questionsList";
import logo from '../../images/pet-house.svg';
import useStyles from './styles';

const Question = () => {
  const theme = createMuiTheme({
    palette: {
      background: {
        default: 'rgba(255,217,173, 1)'
      }
    }
  });
  const classes = useStyles();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [space, setSpace] = useState(0);
  const [allergies, setAllergies] = useState(false);
  const [energy, setEnergy] = useState(0);
  const [travel, setTravel] = useState(0);
  const [cuddle, setCuddle] = useState(false);
  const [emotionalSupport, setEmotionalSupport] = useState(false);
  const [budget, setBudget] = useState(0);
  const [smallChildren, setSmallChildren] = useState(false);
  const handleAnswerOptionClick = (topic, value) => {
    const nextQuestion = currentQuestion + 1;
    if (topic === 'space')
    {
      setSpace(value);
    }
    else if (topic === 'allergies')
    {
      setAllergies(value);
    }
    else if (topic === 'energy')
    {
      setEnergy(value);
    }
    else if (topic === 'travel')
    {
      setTravel(value);
    }
    else if (topic === 'cuddle')
    {
      setCuddle(value);
    }
    else if (topic === 'emotional support')
    {
      setEmotionalSupport(value);
    }
    else if (topic === 'budget')
    {
      setBudget(value);
    }
    else
    {
      setSmallChildren(value);
    }
    (nextQuestion < questionList.length) ? setCurrentQuestion(nextQuestion) : setQuizFinished(true);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar className={classes.headingBar} position="static" color="inherit">
          <img className={classes.image} src={logo} alt="memories" height="60" />
          <Typography className={classes.heading} variant="h2" align="center">Pet Matchmaker</Typography>
        </AppBar>
      </Container>
      
      <Paper className={classes.paper} elevation={3} variant="outlined" >
        {quizFinished ? (
          <Container maxWidth="sm">
            <Link to='/results' style={{ textDecoration: 'none' }}>
              {"Space: " + space}<br />
              {"Allergies: " + allergies}<br />
              {"Energy: " + energy}<br />
              {"Travel: " + travel}<br />
              {"Cuddle: " + cuddle}<br />
              {"Emotional Support: " + emotionalSupport}<br />
              {"Budget: " + budget}<br />
              {"Small Children: " + smallChildren}<br />
              <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth>See Results</Button>
            </Link>
          </Container>) : (<>
            <Container maxWidth="sm">
              <AppBar className={classes.summaryBar} position="static" color="inherit">
                <Typography className={classes.summary} variant="h4" align="center">Question {currentQuestion + 1}/{questionList.length}</Typography>
              </AppBar>
            </Container>
            <Container maxWidth="sm">
              <AppBar className={classes.summaryBar} position="static" color="inherit">
                <Typography className={classes.summary} variant="h4" align="center">{questionList[currentQuestion].question}</Typography>
              </AppBar>
            </Container>
            <Container maxWidth="sm">
              {questionList[currentQuestion].answers.map((answer, index) => (
                <Button key={index} className={classes.buttonSubmit} variant="contained" color="primary" fullWidth onClick={() => handleAnswerOptionClick(
                  questionList[currentQuestion].topic,
                  answer.value
                )}>{answer.label}</Button>
              ))}
            </Container>
          </>)}
      </Paper>
    </MuiThemeProvider>
  );
}


export default Question;