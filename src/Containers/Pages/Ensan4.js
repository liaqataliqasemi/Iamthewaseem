import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import oneside from '../Assets/BedilVol4.jpg';
import Kawishwriting from '../Assets/Kawishwriting.jpg';
import purchase from '../Assets/ebook.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 1em',
    backgroundColor: 'white!important',
    overflow: 'hidden'
  },
  paper: {
    padding: theme.spacing(12),
    textAlign: 'justify',
    backgroundColor: 'white!important'
  },
  h1:{
    fontFamily: 'titr',
    padding: '0.2em 2em',
    textAlign: 'center',
    fontSize: '2.6em',
    color: '#112D4E',
  },
  para: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'justify',
    fontSize: '1.5em',
    fontWeight: 8500,
    marginTop: '1em',
    direction: 'ltr',
  },
  para2: {
    fontFamily: 'titr',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: 8500,
    marginTop: '1em',
    direction: 'ltr',
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
      <h1 className={classes.h1}>انسان‌شناختی بیدل بخش پنجم اخلاق (بینش-روش خودسازی) بیدل پارۀ یکم</h1>
      <div >
      {/* <Alert/> */}
      <div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={oneside} alt="kawish" height="auto" width="390vw" style={{borderRadius: '25px'}} />
          </div>
          <p className={classes.para}>
            <b>
            سخن ناشر
            </b>
          </p>
          <p className={classes.para}>
            ”
            انتشارات انسان“ بر خود می‌بالد نخستین نشریه‌-اش
            را به‌اثری اختصاص داده است که اساسا در راستای ”اصالت انسان“ و اصول اخلاقی
            اصالت انسان نگارش یافته است. در توضیح محتوای فلسفۀ اخلاق (بینش-روش خودسازی)
            بیدل به‌عنوان مجلد چهارم انسان‌شناختی بیدل، باتکیه برآن‌چه پژوهندۀ اثر
            توضیح داشته است، اجمالا این‌که بیدل براساس نتایج تاریخی و منطقی پهنه‌های
            هستی‌شناختی (Ontology)، جهان‌شناختی (Cosmology)، شناخت‌شناختی
            (Epistemology) روش‌شناختی (Methodology) و خدا-انسان‌شناختیِ
            (Theo-anthropology) وحدت‌الوجودی (Pantheism)، باتکیه بر اصالت انسان
            (Humanism)، انسان را میوۀ درخت خدا-طبیعت هستی می‌شناسد. و در تقابُل با
            انگاره‌های متولیان ایزدستان‌های (Pantheons) قربانی‌طلب- که با انتحال
            امتیازاتِ دانش، زبان و اخلاقِ ساخت انسان به‌نام خدایان تبعیض‌طلب قومی-محلی
            خود، توأم خالی‌بندی‌های مضاعف، مدعیِ آفرینش نیک و بد اندیشه، گفتار و کردار
            انسان از سوی چنان خدایانی نیز شده اند- نه‌تنها امتیازات دانش و زبان انسان،
            بل همۀ مؤلفه‌های اخلاق او را نیز آفریدۀ خود انسان به‌هدف رفع نیاز‌های زندگی
            او می‌داند. و به‌جای نقش چنان خدایانی در تعیین سرشت و سرنوشت نیک و بد
            انسان، نظیر هراکلیتوس 544-483 پ.م. ابرمغز یونانیِ بنیادگذار فلسفه و منطق
            دیالکتیک، ”خوی“ خود انسان را تقدیرنگار سرشت و سرنوشت نیک و بد او می‌داند.
          </p>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={Kawishwriting} alt="kawish" height="auto" width="500vw" style={{borderRadius: '25px'}} />
          </div>
          <p className={classes.para}>
            این اثر یک اثر فلسفی در تحلیل و نقد مقایسه‌ای فلسفۀ اخلاق بیدل فیلسوف هندی
            و دارای592 صفحه مشمول صفحات 1819 تا 2410 انسان‌شناختی بیدل و حاوی دو فصل
            جداگانه است. در فصل اول پیشینه‌های یونانی و هندی بعضا اثرگذار بر فلسفۀ
            اخلاق بیدل مورد پژوهش قرار گرفته اند و در فصل دوم شالوده‌معاییر روی‌کردهای
            اخلاقی بیدل تحقیق و گزارش یافته‌اند.
          </p>
          <p className={classes.para}>
            شاهد ارزش کم‌نظیر امتیازات فلسفۀ اخلاق بیدل در این اثر همان مندرجات فصل دوم
            دربردارندۀ توضیح و توجیه شالوده‌معاییر روی‌کردهای اخلاقی بیدل و شامل سه اصل
            زیرین به‌مثابۀ اصول اساسی فلسفۀ اخلاق بیدل است:
          </p>
          <p className={classes.para}>
            1- اصالت انسان
          </p>
          <p className={classes.para}>
            2- وارستگی از وابستگی به‌عوامل ازخودبیگانه‌کنندۀ انسان
          </p>
          <p className={classes.para}>
            3- فراسوی نیک‌و‌بد سنتی
          </p>
          <p className={classes.para}>
            مطابق گزارش پژوهشی جامع، ژرف و دقیق پژوهندۀ این اثر استاد دکتر سید نورالحق
            کاوش در واکاوی پُروسواس و دریافت امتیازات شگرف، متعالی و بس کم‌نظیر علمی
            بیدل به‌مثابۀ اصول فلسفۀ اخلاق او، به‌گونۀ مستند-اش می‌توانیم شاهد پیش‌گامی
            بیدل فیلسوف هندی بر نقّادفیلسوفان روشن‌اندیش قرن هجدهم و نزدهم فرانسه و
            آلمان در تأکید بر ”اصالت انسان“ و بی‌نیازی او از وابستگی به‌عوامل
            ازخودبیگانه‌کنندۀ انسان و ضرورت بی‌اعتنایی‌-اش بر نیک‌و‌بد سنتی یا همان
            تکلّفات خرافی دست‌و‌پاگیر و وجدان‌آزار کلیشه‌های دُگماتیک حاکی از نیک‌و‌بد
            تغییرناپذیر و غرض‌ورانۀ ایزدستان‌های آیین‌های تبعیض‌طلب قومی و محلی باشیم؛
            زیرا چنان‌که شالوده‌معاییر فلسفۀ اخلاق بیدل در این اثر به‌اثبات می‌رسانند،
            بیدل زیاده از یک قرن‌و‌نیم پیش و بیش از فویرباخ Ludwig, Feuerbach
            (1804-1872) مهم‌ترین فیلسوف انسان‌شناس آلمانی درتکیه بر اصالت انسان
            ”(Humanism)“ و تأکید بر ”مرکزیت جهانی انسان“ (Anthropocentrism) تلاش کرده و
            در همین‌زمینه مدارک موجّه علمی و تردیدناپذیری از خود-اش به‌یادگار گذارده
            است. چنان‌که در تأکید بیدل بر لزوم بی‌اعتنایی به‌تکلّفات خط‌کشی‌های
            دُگماتیک اخلاق کلیشه‌ای بازمانده از مأثورات اساطیری آیین‌های تبعیض‌طلب
            قومی-محلی سنتی، در مضمون توصیه به‌فراسوی نیک‌و‌بد سنتی، حدود دو قرن پیش‌از
            نیچه<span dir="ltr"> (1844-1900 Nietzsche, Friedrich) </span>
            انسان‌شناس و نظریه‌پرداز اخلاق نوین جهانی و نویسندۀ اثری زیرعنوان ”فراسوی نیک‌و‌بد“<span dir="ltr"> (1886, Jenseits von Gut und Böse) </span>  نیز پیش‌گام است.</p>
           
            <p className={classes.para}>
    17
    اپریل 2022 مطابق  28 حمل
    1401</p>

      </div>
        <a href='https://www.amazon.com/dp/0578357828?ref=myi_title_dp'>
          <Grid className={classes.gridSpace} container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
                <p className={classes.para2}>
                خریداری کتاب از آمازون
                </p>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
              >
                <img alt="purchase" src={purchase} height="500vh" width="100%"/>
              </Box>
            </Grid>       
          </Grid>
        </a>
      </div>
    </div>
   );    
}