import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Box} from '@material-ui/core';
import './Buy.css';
import FlipImage from '../Component/FlipImage';
import Amazon from '../Assets/Amazon.svg';
import Paypal from '../Assets/PayPal.svg';
import Logo from '../Assets/buylogo.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 2vw',
    backgroundColor: 'white!important'
  },
  h1:{
    fontFamily: 'titr',
    margin: '0 0 0.8vh 0',
    textAlign: 'center',
    fontSize: '3em',
    color: '#005691'
  },
  para: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 300
  },
  image: {
    height: '25vh', 
    width: 'auto%', 
    flexGrow: 1,
    textAlign: 'center'
  },
  paper:{
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'row'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div>
      {/* <div className='header'>
          
      </div> */}
      <div className='header2'>
        <div class="custom-shape-divider-top-1651208158">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
            </svg>
        </div>
        <p className={classes.h1}>خریداری کتاب</p>
        <p className={classes.para}>علاقه‌مندان به‌ هدف دریافت هریکی از مجلدات انسان‌شناختی بیدل به لینک های ذیل مراجعه بفرمایند.</p>
      </div>
      
      <div className={classes.root}>
          <Grid className={classes.gridSpace} container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box className={classes.paper}>
                        <FlipImage aks={Logo} text="خریداری مستقیم از انتشرات انسان" />
                        <FlipImage aks={Amazon} text="خریداری از طریق آمازون/Amazon" link="/Amazon"/>
                        <FlipImage aks={Paypal} text="خریداری از طریق پی‌پال/PayPal" link="https://paypal.me/ensanpublishers"/>
                    </Box>
                </Grid>
          </Grid>
      </div>
    </div>
   );    
}



