import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    headingBar: {
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
  }));