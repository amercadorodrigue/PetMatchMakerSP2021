import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        padding: '15px',
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
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
    summary: {
        paddingTop: '15px',
        paddingBottom: '15px',
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(230,138,0, 1)'
    },
    summaryText: {
        fontSize: 'larger',
        maxWidth: '80%',
        position: 'relative',
        margin: 'auto',
        textAlign: 'center',
        color: 'white',
    },
    buttonSubmit: {
        backgroundColor: 'rgba(230,138,0, 1)',
    }
  }));