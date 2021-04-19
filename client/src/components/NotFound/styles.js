import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => (
    {

    summaryPaper: {
        paddingTop: '1px',
        paddingBottom: '1px',
        paddingRight: '35px',
        paddingLeft: '35px',
        marginBottom: '15px',
        borderRadius: 15,
        alignItems: 'center'
    },
    summary: {
        paddingTop: '15px',
        paddingBottom: '15px',
        borderRadius: 15,
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(230,138,0, 1)'
    },
    image: {
        marginTop: '15px',
        marginBottom: '5px',
        height: '75%',
        width: '100%',
        borderRadius: 5
    },
    summaryText: {
        maxWidth: '100%',
        position: 'relative',
        margin: 'auto',
        textAlign: 'center',
        color: 'white',
    }
    
    
  }));