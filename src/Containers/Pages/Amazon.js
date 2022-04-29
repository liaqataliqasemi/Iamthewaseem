import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Box} from '@material-ui/core';
import './Amazon.css';
import FlipImage from '../Component/FlipImage';
import Vol4 from '../Assets/Vol4.jpg';
import Buy from '../Component/BuyButton';



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
    fontFamily: 'nassim',
    lineHeight: '2.4em',
    textAlign: 'justify',
    fontSize: '1.5rem',
    fontWeight: 300
  },
  paratop: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 300,
    paddingBottom: '2rem'
  },
  image: {
    height: '25vh', 
    width: 'auto%', 
    flexGrow: 1,
    textAlign: 'center'
  },
  paper:{
      justifyContent: 'space-around'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div>
    {/* <div className='header'>
        
    </div> */}
        <div className='header2'>
            <div class="custom-shape-divider-top-1651238631">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
                </svg>
            </div>
            <p className={classes.h1}> خریداری کتاب از آمازون</p>
            <p className={classes.paratop}>مجلدات انسان‌شناختی بیدل بخش پنجم اخلاق (بینش-روش خودسازی) بیدل پارۀ یکم اینجا قابل دریافت است.</p>
        </div>
        <Grid className={classes.root} container spacing={1}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Box className={classes.paper}>
                    <p className={classes.para}>
                        این اثر یک اثر فلسفی در تحلیل و نقد مقایسه‌ای فلسفۀ اخلاق بیدل فیلسوف هندی
                        و دارای592 صفحه مشمول صفحات 1819 تا 2410 انسان‌شناختی بیدل و حاوی دو فصل
                        جداگانه است. در فصل اول پیشینه‌های یونانی و هندی بعضا اثرگذار بر فلسفۀ
                        اخلاق بیدل مورد پژوهش قرار گرفته اند و در فصل دوم شالوده‌معاییر روی‌کردهای
                        اخلاقی بیدل تحقیق و گزارش یافته‌اند.
                    </p>
                    <p className={classes.para}>
                        زبان: فارسی
                    </p>
                    <p className={classes.para}>
                        ناشر: نشرات انسان
                    </p>
                    <p className={classes.para}>
                        تاریخ نشر: 25 حمل 1401
                    </p>
                    <p className={classes.para}>
                        قیمت: 41.99 دالر
                    </p>
                    <p>
                    <Buy link="https://www.amazon.com/dp/0578357828?ref=myi_title_dp" text="خرید" type="contained"/>
                    </p>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box className={classes.paper}>
                    <FlipImage aks={Vol4} text="انسان‌شناختی بیدل بخش پنجم"/>
                </Box>
            </Grid>
        </Grid>
    </div>
   );    
}



