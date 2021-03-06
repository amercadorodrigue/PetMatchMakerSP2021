import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => (
    {
        gridContainer: {
            direction: 'row',
            flexWrap: 'nowrap',
            [theme.breakpoints.down('sm')]: {
                direction: 'column',
                flexWrap: 'wrap',
            },

        },
        containerPaper: {
            display: 'flex',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginBottom: '15px',
            borderRadius: 15,
        },
        image: {
            marginBottom: '10px',
            height: '75%',
            width: '100%',
            borderRadius: 5,
            [theme.breakpoints.down('sm')]: {
                marginBottom: '10px',
                height: '75%',
                width: '100%',
                borderRadius: 5,
            },
        },
        summary: {
            paddingTop: '15px',
            paddingBottom: '15px',
            borderRadius: 15,
            margin: '60px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 194, 102, 1)'
        },
        summaryText: {
            fontSize: 'largest',
            maxWidth: '90%',
            position: 'relative',
            margin: 'auto',
            textAlign: 'center',
            color: 'white',
        },
        surveyButton: {
            backgroundColor: 'rgba(255, 194, 102, 1)',
            color: 'white',
            '&:hover': {
                backgroundColor: 'rgba(230,138,0, 1)',
            }
        }
    }));