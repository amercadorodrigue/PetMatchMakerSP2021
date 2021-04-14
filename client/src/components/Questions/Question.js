import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Button, Paper } from '@material-ui/core';
import questionList from "../../data/questionsList";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getAnimals, getFish, getMammals, getReptiles } from '../../redux/actions/animals';

const Question = () => {
  const dispatch = useDispatch();
  const theme = createMuiTheme({
    palette: {
      background: {
        default: 'rgba(255,217,173, 1)'
      }
    }
  });
  const classes = useStyles();
  const [values, setValues] = useState({
    "values.space": '',
    "values.allergies": '',
    "values.energy": '',
    "values.size": '',
    "values.attention": '',
    "values.emotionalSupport": '',
    "values.budget": '',
    "values.smallChildren": ''
  }
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const handleAnswerOptionClick = (topic, value) => {
    console.log(values);
    const nextQuestion = currentQuestion + 1;
    if (topic === 'space'){
      setValues({ ...values, "values.space": value  });
    }
    else if (topic === 'allergies'){
      setValues({ ...values, "values.allergies": value  });
    }
    else if (topic === 'size'){
      setValues({ ...values, "values.size": value });
    }
    else if (topic === 'energy') {
      setValues({ ...values, "values.energy": value });
    }
    else if (topic === 'attention'){
      setValues({ ...values, "values.attention": value });
    }
    else if (topic === 'cuddle'){
      setValues({ ...values, "values.cuddle": value });
    }
    else if (topic === 'emotional support'){
      setValues({ ...values, "values.emotionalSupport": value });
    }
    else if (topic === 'budget') {
      setValues({ ...values, "values.budget": value });
    }
    else {
      setValues({ ...values, "values.smallChildren": value });
    }
    (nextQuestion < questionList.length) ? setCurrentQuestion(nextQuestion) : setQuizFinished(true);
    
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Container fixed maxWidth="sm" height="200">
        <Paper className={classes.paper} elevation={3} variant="outlined" position="static"  >
          {quizFinished ? (

            <Container className= {classes.resultContainer} width="sm" >
              <Typography className={classes.responseText} variant="h4" align="center">We got some results! </Typography>
              <img className={classes.image} src={'/images/snake-adopting.jpg'} alt="adopting" />
              <img className={classes.image} src={'/images/adopting.jpg'} alt="adopting" />
              <img className={classes.image} src={'/images/cat-adopting.jpg'} alt="adopting" />

              <Link to='/results' style={{ textDecoration: 'none' }}>
                <Button className={classes.buttons} variant="contained" color="primary" fullWidth onClick={() => dispatch(getAnimals(values))}>See Results</Button>
              </Link>
            </Container>) : (<>
              <Container maxWidth="sm">
                <Paper className={classes.question} position="static" color="inherit">
                  <Typography className={classes.questionText} variant="h4" align="center">Question {currentQuestion + 1}/{questionList.length}</Typography>
                </Paper>
              </Container>
              <Container maxWidth="sm">
                <Paper className={classes.question} position="static" color="inherit">
                  <Typography className={classes.questionText} variant="h4" align="center">{questionList[currentQuestion].question}</Typography>
                </Paper>
              </Container>
              <Container maxWidth="sm">
                {questionList[currentQuestion].answers.map((answer, index) => (
                  <Button key={index} className={classes.buttons} variant="contained" fullWidth onClick={() => handleAnswerOptionClick(
                    questionList[currentQuestion].topic,
                    answer.value
                  )}>{answer.label}</Button>
                ))}
              </Container>
            </>)}
        </Paper>
      </Container>
    </MuiThemeProvider>
  );
}


export default Question;