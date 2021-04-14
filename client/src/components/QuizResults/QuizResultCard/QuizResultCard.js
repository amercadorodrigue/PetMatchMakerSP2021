import React, { useState } from 'react';
import { ExpandMoreIcon, ExpandLessIcon }  from '@material-ui/icons/ExpandMore';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box, Collapse, IconButton, CardActions, Grow } from '@material-ui/core';
import useStyles from './styles';
import SMLinks from '../../SMLinks/SMLinks';


const ResultCard = ({ animals }) => {
    const classes = useStyles();
    const [expand, setExpand] = useState(false);

    const handleExpandClick = () => {
        setExpand(!expand);
    };

    const headers = Object.keys(animals).filter(key => key.toString() !== "_id" && key.toString() !== "values" && key.toString() !== "image");
    return (
        <Grow in>
            <Card key={animals._id + 3} className={classes.root} variant="outlined">
                <CardMedia className={classes.media}
                    component="img"
                    alt={`${animals.image}`}
                    src={`/images/cards/${animals.image}`}
                    title={`${animals.image}`}
                />

                <Typography gutterBottom variant="h4" component="h4" fontWeight="fontWeightBold">
                    {animals.breed}
                </Typography>
                <CardActionArea>
                <CardActions disableSpacing>
                    <IconButton onClick={handleExpandClick}>
                    </IconButton>
                </CardActions>
                </CardActionArea>
                <Collapse in={expand} timeout="auto" unmountOnExit>
                    <CardContent>
                        {headers.map(header =>
                            <div key={header}>
                                <Typography gutterBottom variant="subtitle1" component="h5"> <Box fontWeight="fontWeightBold" display='inline'>
                                    {header.charAt(0).toLocaleUpperCase() + header.slice(1).replace(/([a-z0-9])([A-Z])/g, '$1 $2')}: </Box>  {animals[header]}
                                </Typography>
                            </div>
                        )}
                    </CardContent>
                </Collapse>

            </Card>

        </Grow>
    );
}

export default ResultCard;