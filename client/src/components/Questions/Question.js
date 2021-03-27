import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Button, CssBaseline, Grid } from '@material-ui/core';
import questionList from "../../data/questionsList";
import logo from '../../images/pet-house.svg';
import useStyles from './styles';

const Question = () =>{
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
      const [smallDog, setSmallDog] = useState(0);
      const [mediumDog, setMediumDog] = useState(0);
      const [largeDog, setLargeDog] = useState(0);
      const [cat, setCat] = useState(0);
      const [fish, setFish] = useState(0);
      const [reptile, setReptile] = useState(0);
      const [bird, setBird] = useState(0);
      const handleAnswerOptionClick = (smallDogPoints, mediumDogPoints, largeDogPoints, catPoints, fishPoints, reptilePoints, birdPoints) => {
        const nextQuestion = currentQuestion + 1;
        setSmallDog(smallDog + smallDogPoints);
        setMediumDog(mediumDog + mediumDogPoints);
        setLargeDog(largeDog + largeDogPoints);
        setCat(cat + catPoints);
        setFish(fish + fishPoints);
        setReptile(reptile + reptilePoints);
        setBird(bird + birdPoints);
        (nextQuestion < questionList.length) ? setCurrentQuestion(nextQuestion) : setQuizFinished(true);
      };
        return (
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
              <Container maxWidth="lg">
                <AppBar className={classes.headingBar} position="static" color="inherit">
                    <img className = { classes.image } src={logo} alt="memories" height="60"/>
                    <Typography className={classes.heading} variant="h2" align="center">Pet Matchmaker</Typography>
                </AppBar>
              </Container>
              {quizFinished ? (
              <Container maxWidth="sm">
                <Link to='/results' style={{ textDecoration: 'none' }}>
                  {"SD: "+smallDog}<br/>
                  {"MD: "+mediumDog}<br/>
                  {"LD: "+largeDog}<br/>
                  {"C: "+cat}<br/>
                  {"F: "+fish}<br/>
                  {"R: "+reptile}<br/>
                  {"B: "+bird}<br/>
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth>See Results</Button>
                </Link>
              </Container> ) : (<>
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
                  answer.smallDogPoints, 
                  answer.mediumDogPoints, 
                  answer.largeDogPoints, 
                  answer.catPoints, 
                  answer.fishPoints, 
                  answer.reptilePoints, 
                  answer.birdPoints
                )}>{answer.label}</Button>
						))}
              </Container> 
              </>)}
          </MuiThemeProvider>
          );
    }
    

export default Question;