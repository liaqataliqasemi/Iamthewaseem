import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Alert from '../Component/Alert';
import FlipImage from '../Component/FlipImage'; 
import { Box } from '@material-ui/core';
import oneside from '../Assets/BedilVol3.jpg';
import twoside from '../Assets/BedilVol32.jpg';
import purchase from '../Assets/ecomm3.svg';
import BuyOptionMenu from '../Component/BuyOptionMenu3';

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
  para1: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: 8500,
    marginTop: '1em',
    color: '#3F72AF'
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
      <h1 className={classes.h1}>انسان‌شناختی بیدل مجلد سوم (بخش چهارم)</h1>
      <div className={classes.root}>
      <Alert/>
      <div>
        <p className={classes.para}>
            مجلد سوم انسان‌شناختی بیدل، شناخت‌شناختی و روش‌شناختی او در 674 صفحه در سال
            1395 / 2017 به‌چاپ رسیده است.
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
                <FlipImage aks={oneside} text={"انسان شناختی بیدل مجلد سوم"}/>                
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <p className={classes.para1}>
              علاقه‌مندان به‌ هدف دریافت مجلد سوم انسان‌شناختی بیدل به گزینه های ذیل مراجعه بفرمایند.
              </p>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="0"
              >
                <BuyOptionMenu/>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
              >
                <FlipImage aks={twoside} text={"Bidel's Anthropologie Vol. 3"}/>              
              </Box>
            </Grid>
          </Grid>
      </div>
    </div>
   );    
}