import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    headingBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontFamily: [
            '"Segoe UI"',
            'Tahoma',
            'Geneva',
            'Verdana',
            'sans-serif'
        ],
        color: 'rgba(205,133,63, 1)',
        textAlign: 'center'
    },
    question: {
        paddingTop: '10px',
        paddingBottom: '10px',
        borderRadius: 15,
        margin: '15px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(230,138,0, 1)'
    },
    
    questionText: {
        fontSize: 'larger',
        maxWidth: '70%',
        position: 'relative',
        margin: 'auto',
        textAlign: 'center',
        color: 'white',
    },
    buttons: {
        margin: '1px',
        backgroundColor: 'rgba(230,138,0, 1)',
    },
    resultContainer: {
        paddingLeft: '15px',
        fontFamily: [
            '"Segoe UI"',
            'Tahoma',
            'Geneva',
            'Verdana',
            'sans-serif'
        ],
        color: 'rgba(205,133,63, 1)',
        textAlign: 'center'
    },    
    responseText: {
        fontSize: 'largest',
        maxWidth: '100%',
        position: 'relative',
        margin: 'auto',
        textAlign: 'center',
    },
    image: {
        margin: '2px',
        height: '212px',
        borderRadius: 5
    },
    paper: {
        width: '100%',
        height: '100%',
        padding: theme.spacing(),
        paddingTop: '15px',
        paddingBottom: '15px',
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
  }));