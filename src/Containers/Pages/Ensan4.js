
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    background: {
        margin: 0,
        width:'100%', 
        padding: '5em 0.5em 0 0.5em',
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    return(
        <div>
            <div spacing={5} className={classes.background}> 
                <Box display="flex" container flexWrap="wrap" justifyContent="center" spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingBottom: '1em'}}>
                        Ensan4
                    </Grid>
                </Box>
            </div>        
        </div>
    )
};

export default LandingPage;
