import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Alert from '../Component/Alert';
import FlipImage from '../Component/FlipImage'; 
import { Box } from '@material-ui/core';
import oneside from '../Assets/BedilVol2.jpg';
import twoside from '../Assets/BedilVol22.jpg';
import purchase from '../Assets/ecomm2.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 1em',
    background: '#F9F7F7'
  },
  paper: {
    padding: theme.spacing(12),
    textAlign: 'justify',
  },
  h1:{
    fontFamily: 'titr',
    padding: '0.2em 2em',
    textAlign: 'center',
    fontSize: '2.6em',
    color: '#112D4E'
  },
  para: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: 8500,
    marginTop: '1em'
  },
  gridSpace:{
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.h1}>انسان‌شناختی بیدل مجلد دوم (بخش سوم)</h1>
      <div className={classes.root}>
      <Alert/>
      <div>
        <p  className={classes.para}>
            مجلد دوم این اثر کلا حاوی پژوهش در هستی‌شناختی، جهان‌شناختی و انسان‌شناختی
            بیدل است که در 582 صفحه در سال 1391/2013 به‌چاپ رسیده است.
        </p>
        <p className={classes.para} style={{marginBottom: '0!important', color: '#3F72AF'}}>
              برای خرید مجلد دوم ”انسان‌شناختی بیدل“ به‌‌آدرس ایمیل و یا شماره تلفن
              انتشارات انسان در تماس شوید. 
          </p>
      </div>
          <Grid className={classes.gridSpace} container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
              >
                <FlipImage aks={oneside} text={"انسان شناختی بیدل مجلد دوم"}/>                
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
              >
              <img alt="purchase" src={purchase} height="500vh" width="100%"/>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
              >
                <FlipImage aks={twoside} text={"Bidel's Anthropologie Vol. 2"}/>              
              </Box>
            </Grid>
          </Grid>
      </div>
    </div>
   );    
}