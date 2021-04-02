import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@material-ui/core';
import useStyles from './styles';


const ResultCard = ({ animals }) => {
    const classes = useStyles();
    const headers = Object.keys(animals).filter(key => key.toString() !== "_id" && key.toString() !== "values" && key.toString() !== "image");
    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    src={`/images/cards/${ animals.image }`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h4" fontWeight="fontWeightBold">
                        { animals.breed } 
                    </Typography>
          
                        { headers.map(header => 
                        <div> 
                            <Typography gutterBottom variant="subtitle1" component="h5"> <Box  fontWeight="fontWeightBold" display='inline'> 
                                { header.charAt(0).toLocaleUpperCase() + header.slice(1).replace(/([a-z0-9])([A-Z])/g, '$1 $2')}: </Box>  { animals[header] }
                             
                            </Typography> 
                            
                        </div>
                        )} 
          
                </CardContent>
            </CardActionArea>
        </Card>


    );
}

export default ResultCard;