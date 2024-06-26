export const modalStyles ={
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate (-50%, -50%)',
        width: 300, 
        bgcolor: 'background.paper',
        boxShadow: 24,
        p:4,
    },
    inputFields: {
        dipslay: 'flex',
        flexDirection: 'column',
        marginTop:'20px',
        marginBotton: '15px',
        'MuiInput-root':{
            marginBottom:'20px',
        },
    },
    buttons:{
        display:'flex',
        justifyContent:'end',
    }
}