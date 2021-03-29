import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core';
import useStyles from './styles';
import lizard from '../../../images/cards/lizard.jpg';


const ResultCard = ({ animal }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={lizard}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { animal.breed }
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h5">
                        Breed: { animal.breed } <br/>
                        Description: {animal.description} <br/>
                        Typical Conditions: {animal.condition} <br/>
                        Diet: { animal.diet } <br/>
                        Special Needs: { animal.specialNeeds } <br/>
                        Tank Size: { animal.tankSize } <br/>
                        Water Type: { animal.waterType } <br/>
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>


    );
}

export default ResultCard;