import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Box} from '@material-ui/core';
import './About.css';
import ElyasCard from '../Component/ElyasCard';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 2vw',
    backgroundColor: 'white!important'
  },
  h1:{
    fontFamily: 'titr',
    padding: '0.5em 0 1em 0',
    textAlign: 'center',
    fontSize: '3em',
    color: '#fff'
  },
  para: {
    fontFamily: 'vazir',
    lineHeight: '4em',
    textAlign: 'justify',
    fontSize: '16px',
    fontWeight: 300
  },
  image: {
    height: '25vh', 
    width: 'auto%', 
    flexGrow: 1,
    textAlign: 'center'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div>
      <div className='header'>
          <p className={classes.h1}>درباره‌ی ما</p>
      </div>
      <div className='header2'>
        <div class="custom-shape-divider-top-1651038926">
          
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
          </svg>

        </div>

      </div>
      <div className={classes.root}>
          <Grid className={classes.gridSpace} container spacing={1}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box className={classes.paper}>
              <p className={classes.para}>
                    ”انتشارات انسان“ یک نهاد خصوصی چاپ، نشر و توزیع آثار بس ارزنده در پاره‌ای
                    از رشته‌های علوم انسانی است که در حال حاضر متعهد چاپ، نشر و توزیع آثار پدر
                    و استاد گرامی-ام استاد دکتر سید نورالحق کاوش است و با فراهم‌آمدن آینده‌های
                    مساعد، به‌چاپ، نشر و توزیع آثار بزرگ‌اندیش‌مند‌ان مستقل دیگر رشته‌های علوم
                    انسانی نیز مبادرت خواهد ورزید.
                </p>
                <p className={classes.para}>
                    باتوجه به‌این حقیقت تلخ تاریخی در گذشته‌های دور که معمولا متولیان چاپ و نشر
                    آثار متفکران علوم انسانی را مؤسسات رسمی-دولتی پرغرض‌و‌مرض سیاسی-اقتصادی و
                    آیینی-فرهنگی تاریک‌اندیش اغلب مأمور و مزدور حاکمیت‌های تبعیض‌طلب، خودکامه و
                    یا اولیگارشی‌ غارت‌گر ثروت‌های دیگران برعهده داشته و زمینه‌سازی تفتیش عقاید
                    و جلوگیری از چاپ آثار و حتی حذف فیزیکی متفکران آزاداندیش مستقل را نیز همین
                    قُماش از لکه‌های ننگ تاریخ بشر فتنه‌سازی کرده اند و در نتیجۀ آن بسی از آثار
                    بی‌مانند روشن‌اندیشان مستقل از چاپ باز نگه‌ داشته شده یا از زیر چرخ ماشین
                    چاپ اجازۀ برآمدن نیافته و یا در پی چاپ با حذف فیزیکی نویسنده‌-اش یک‌جا از
                    صفحۀ روزگار محو گردیده اند، به‌حیث کارگزار ”انتشارات انسان“ و شاهد برخی از
                    چنان تجارب دردناک و ضد انسانی، وجیبۀ فرمان وجدان انسانی خود می‌دانم، تا
                    زمانی‌که فرزندم سید انسان کاوش به‌برمی‌رسد و اداره و ره‌بری انتشارات-اش را
                    خود برعهده می‌گیرد، نه‌تنها امور فنی-فرهنگی چاپ، چون حروف‌نگاری الکترونیکی
                    و صفحه-کتاب‌آرایی آثار پدر و استادم را به‌دوش گیرم، بل هزینۀ چاپ آن‌ها را
                    از حساب عواید کار شخصی-ام در رشتۀ ”مهندسی و مدیریت ساختمان“ نیز فراهم کنم و
                    در تحقق یک‌چنین آرزویی افتخار بدارم.
                </p>
                <p className={classes.para}>
                    دپلم انجینیر سید الیاس کاوش
                    <br/>
                    رئیس انتشارات انسان
                </p>
                <p className={classes.para}>
    17
    اپریل 2022 مطابق  28 حمل
    1401</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className={classes.paper}>
                <ElyasCard/>
              </Box>
            </Grid>
          </Grid>
      </div>
    </div>
   );    
}



