import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Box} from '@material-ui/core';
import Room from '../Assets/bedil.png';
import Books from '../Component/BookCard';
import './Landing.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: '0 4em',
    textAlign: 'justify',
  },
  paper1: {
    textAlign: 'justify',
  },
  image: {
    height: 'auto', 
    width: '100%', 
    flexGrow: 1,
  },
  gridSpace: {
    padding: '0.2em 0em'
  },
  divPad: {
    padding: 0
  },
  centerGrid:{
    display: 'flex', 
    justifyContent: 'space-between'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div>
        <div className='background'>
            <div className={classes.divPad}>
                <Grid className={classes.centerGrid} container>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Box className={classes.paper}>
                            <p align="center" dir="RTL">
                                <strong className='title'>مژده</strong>
                            </p>
                            <p className='para'>
                                به‌مشتاقان پژوهش رشته‌های علوم ادبی و انسانی به‌ویژه
                                
                                انسان‌شناختی و فلسفۀ اخلاقِ توأم با نقدِ انگاره‌های تقلیدی
                                <br/>
                                <strong style={{lineHeight: '0.5em'}}>و</strong>
                                <br/>
                                دوست‌داران دانش، بینش و روش بیدل فیلسوف‌شاعر انسان‌گرا و روشن‌اندیش
                                دری‌زبان هندی
                                
                                و علاقه‌مندان بیدل‌شناختی آکادمیک
                            </p>
                        </Box>
                        <div className='para2'>
                            <p className='para'>
                                با چاپ و نشر  
                                <a href="/Ensan_shinakhti_part_four"><b> مجلد چهارم انسان‌شناختی بیدل (بخش پنجم پارۀ یکم) </b></a>ازجمله
                                حاوی معاییر روی‌کردهای اخلاقی بیدل یا اصول فلسفۀ اخلاق او، از سوی ”انتشارات
                                انسان“، انتظار طولانی شما به‌پایان آمد.
                            </p>
                            <p className='para'>
                                اگر می‌خواهید شالوده‌معاییر فلسفۀ اخلاق بیدل بربنیاد هستی‎شناختی،
                                جهان‌شناختی، انسان‌شناختی، شناخت‌شناختی و روش‌شناختی-اش را با خود داشته
                                باشید، با واردشدن به‌سایت‌های
                            <p>
                            <p className='para'><a href="/Buy"><b>آمازون، شاپی‌فای و یا پی‌پال</b></a>
                            </p></p>
                            <p className='para'>
                                این اثر از پژوهش‌های خامۀ<a href="/Author"><b> استاد دکتر سید نورالحق کاوش</b></a>
                            </p>
                            </p>
                            <div className='para'>
                                <p align="center" className='para' dir="RTL">
                                    را که به‌گونۀ جزوه‌بندی‌شده و با پُشتی سخت و کیفیت بس‌عالی و زیبا تازه
                                    از چاپ برآمده است، فراچنگ آورید.
                                </p>
                            </div>
                        </div>
                    </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Box className={classes.paper1}>
                        <img src={Room} alt="background" className={classes.image}/>
                    </Box>
                </Grid>
            </Grid>
        </div>
        </div>
        <div className='filler'>
        <div class="custom-shape-divider-top-1650649686">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box className='idama'>
                <Books />
            </Box>
        </Grid>
        </div>
    </div>
   );    
}





