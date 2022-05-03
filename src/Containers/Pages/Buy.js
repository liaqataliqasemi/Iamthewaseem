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
    backgroundColor: 'white!important',
    overflow: 'hidden'
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
  gridSpace:{
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div className='header'>
          
      </div> */}
      <div className='header2'>
        <div class="custom-shape-divider-top-1651208158">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
            </svg>
        </div>
        <p className={classes.h1}>خریداری کتاب</p>
        <p className={classes.para}>علاقه‌مندان به‌هدف دریافت هر یکی از مجلدات انسان‌شناختی بیدل به‌لینک های ذیل مراجعه بفرمایند.</p>
      </div>
      
      <div>
          <Grid style={{display: 'flex', justifyContent: 'center', }} container spacing={1}>
                <Grid style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={12} md={4} lg={4}>
                    <FlipImage aks={Logo} text="خریداری مستقیم از انتشارات انسان" link="/Buyhere" blank="__blank"/>
                </Grid>
                <Grid style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={12} md={4} lg={4}>
                  <FlipImage aks={Amazon} text="خریداری از آمازون/Amazon" link="/Amazon"/>
                </Grid>
                <Grid style={{display: 'flex', justifyContent: 'center', }}  item xs={12} sm={12} md={4} lg={4}>
                  <FlipImage aks={Paypal} text="خریداری از پی‌پال/PayPal" link="https://paypal.me/ensanpublishers"/>  
                </Grid>
          </Grid>
      </div>
    </div>
   );    
}




                        