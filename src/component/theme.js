import { createTheme } from '@material-ui/core';
// Create a theme instance.
export const theme = createTheme({
    typography:{
        h3:{
            
            fontWeight: '700',
        },
        h4:{
            fontWeight: '700',
            color:'white'
        },
        h5:{
            fontWeight: '700',
            fontSize: '1.1rem',
        },
        h6:{
            fontWeight: '700',
            fontSize: '1rem',
        },
        body1:{
            fontWeight: '500',
            fontSize:'1rem',
        },
        button:{
            fontWeight: '700',
        }
    },
});    