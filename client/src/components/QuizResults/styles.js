import { makeStyles } from '@material-ui/core/styles';
import { matchPath } from 'react-router';

export default makeStyles(() => ({
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
    summaryBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(230,138,0, 1)'
    },
    summary: {
        fontSize: 'larger',
        maxWidth: '70%',
        position: 'relative',
        margin: 'auto',
        textAlign: 'center',
        color: 'white',
    },
    buttonSubmit: {
        backgroundColor: 'rgba(230,138,0, 1)',
        marginBlock: '15px'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
    },
    noResults: {
        padding: '15px',
        fontFamily: [
            '"Segoe UI"',
            'Tahoma',
            'Geneva',
            'Verdana',
            'sans-serif'
        ],
        textAlign: 'center'
    },
    paper: {
        display: "flex",
        margin: 'auto',
    },
    image: {
        margin: '2px',
        maxWidth: '500px',
        maxHeight: '500px',
        borderRadius: 5
    }

}));