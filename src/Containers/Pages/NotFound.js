import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Box} from '@material-ui/core';
import notfound from '../Assets/404.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 1em'
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'justify',
  },
  h1:{
    fontFamily: 'nassim',
    textAlign: 'center',
    fontSize: '30px',
    color: '#023b59'
  },
  bodyText:{
    fontFamily: 'vazir', 
    textAlign: 'center', 
    fontSize: '20px', 
    color: '#4cbfa6'
  },
  bodyText1:{
    fontFamily: 'vazir', 
    textAlign: 'center', 
    fontSize: '16px', 
    color: '#4cbfa6'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Box elevation={12} container>
        
          <Grid className={classes.gridSpace} container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
              <h1 className={classes.h1}>با عرض معذرت</h1>
              <p className={classes.bodyText}>صفحه‌ای مورد نظر موجود نیست!</p>
              <p className={classes.bodyText1}><a href="/">مرا به صفحه‌ی اصلی راهنمایی کنید!</a></p>     
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box className={classes.paper}>
                <img alt="404" src={notfound} height="500vh" width="100%"/>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
   );    
}
