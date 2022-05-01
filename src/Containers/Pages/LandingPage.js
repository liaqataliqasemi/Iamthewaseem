import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import './Landing.css';
import FlipImage from '../Component/FlipImage';
import Vol4 from '../Assets/Vol4.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Buy from '../Component/BuyButton';
import BookCard from '../Component/BookCard';
import kawish from '../Assets/ostad1.jpg';
import kawish1 from '../Assets/Elyas1.jpg';
import BookGallery3 from '../Component/BookCardGallery3';
import BookGallery2 from '../Component/BookCardGallery2';
import BookGallery1 from '../Component/BookCardComplete';

// import Ayeen from '../Assets/AyeenZahidFront.jpeg';
// import bidel1 from '../Assets/Bidel1.jpg'
// import bidel2 from '../Assets/Bidel2.jpg'
// import bidel3 from '../Assets/Bidel3.JPG'
// import bidel4 from '../Assets/Bidel4.jpg'
// import Daramadi from '../Assets/Daramadi.jpg'
// import Didgah from '../Assets/Didgah.jpeg'
// import Erfan from '../Assets/Erfan.jpeg'
// import Majmo from '../Assets/Majmo.jpg'
// import Manteq from '../Assets/Manteq.jpeg'
// import Nazaria from '../Assets/Nazaria.jpg'
// import Rohe from '../Assets/Rohe.jpeg';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';


// const BooksPhotos = [ 
//     {
//         Title: "Ayeen",
//         Picture: {Ayeen}
//     },
//     {
//         Title: "bidel1",
//         Picture: {bidel1}
//     },
//     {
//         Title: "bidel2",
//         Picture: {bidel2}
//     },
//     {
//         Title: "bidel3",
//         Picture: {bidel3}
//     },
//     {
//         Title: "bidel4",
//         Picture: {bidel4}
//     },
//     {
//         Title: "Daramadi",
//         Picture: {Daramadi}
//     },
//     {
//         Title: "Didgah",
//         Picture: {Didgah}
//     },
//     {
//         Title: "Erfan",
//         Picture: {Erfan}
//     },
//     {
//         Title: "Majmo",
//         Picture: {Majmo}
//     },
//     {
//         Title: "Manteq",
//         Picture: {Manteq}
//     },
//     {
//         Title: "Nazaria",
//         Picture: {Nazaria}
//     },
//     {
//         title: "Rohe",
//         picture: {Rohe}
//     },
// ]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden'
    }
  }));

const LandingPage = () => {
    const classes = useStyles();
    // const GetCovers = (props) => {
    //     return BooksPhotos.map(({ title, picture }) => {
    //         return (
    //                 <div style={{ padding: '1em', paddingBottom: '4em'}}>
    //                     <div style={{display: 'flex', justifyContent: 'center'}}>
    //                         <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
    //                             <Grid item xs={12} sm={4} md={2}>
    //                                 <Card className={classes.resha}>
    //                                     <CardMedia
    //                                         component="img"
    //                                         alt="Contemplative Reptile"
    //                                         height= "400vh"
    //                                         width= "auto"
    //                                         image={picture}
    //                                         title={title}
    //                                     />
    //                                 </Card>
    //                             </Grid>
    //                         </Grid>
    //                     </div>
    //                 </div>
    //         )
    //     })
    //   };
    return(
            <div className={classes.root}>
                <div container className='backgroundaks'>
                    <div className='backgroundnawishta'>
                        <p  className='title'>
                           مژده
                        </p>
                        <p className='para'>
                            به‌مشتاقان پژوهش رشته‌های علوم ادبی و انسانی به‌ویژه
                            <br/>
                            انسان‌شناختی و فلسفۀ اخلاقِ توأم با نقدِ انگاره‌های تقلیدی
                            <br/>
                            و
                            <br/>
                            دوست‌داران دانش، بینش و روش بیدل فیلسوف‌شاعر انسان‌گرا و روشن‌اندیش
                            دری‌زبان هندی
                            <br/>
                            و علاقه‌مندان بیدل‌شناختی آکادمیک
                        </p>
                    </div>
                </div>
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <Box className='center'>
                                <p className='para2'> 
                                    با چاپ و نشر مجلد چهارم انسان‌شناختی بیدل (بخش پنجم پارۀ یکم) ازجمله حاوی
                                    معاییر روی‌کردهای اخلاقی بیدل یا اصول فلسفۀ اخلاق او، از سوی ”انتشارات
                                    انسان“، انتظار طولانی شما به‌پایان آمد.
                                    اگر می‌خواهید شالوده‌معاییر فلسفۀ اخلاق بیدل بربنیاد هستی‌شناختی،
                                    جهان‌شناختی، انسان‌شناختی، شناخت‌شناختی و روش‌شناختی-اش را با خود داشته
                                    باشید، از طریق انتشارات انسان، این اثر از پژوهش‌های خامۀ استاد دکتر سید
                                    نورالحق کاوش را که به‌گونۀ جزوه‌بندی‌شده و با پُشتی سخت و کیفیت بس‌عالی و
                                    زیبا تازه از چاپ برآمده است، فراچنگ آورید.
                                <br/>
                                <br/>
                                <Buy link="https://www.amazon.com/dp/0578357828?ref=myi_title_dp" text="خرید از آمازون" type="contained"/>
                                <br/>
                                <Buy link="/paypal" text="خرید از پی‌پال" type="contained"/>
                                </p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box className='ketab'>
                                <FlipImage aks={Vol4} text="انسان‌شناختی بیدل بخش پنجم"/>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div className='filler'>
                    <p  className='title2'>
                     مجلد‌های موجود انسان‌شناختی
                    </p>
                    {/* <BookGallery1/> */}
                    <BookCard/>
                </div>
                <div>
                    <div class="custom-shape-divider-top-1651252755">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <Box className='center'>
                                <p  className='title4'>
                                زندگی و آثار محترم استاد دکتر سید نورالحق کاوش  
                                </p>
                                <p className='para3'>
                                    سید نورالحق کاوش در چهارم جدی 1330 خورشیدی در قریۀ تلابۀ سفلی ولسوالی انجیل
                                    هرات در خانوادۀ فرهنگی دانش‌ورزیده-ای دیده به‌جهان گشود. مادر-اش حلیمه
                                    فرزند سید یعقوب بانوی فرهنگ‌پرور و مشتاق تربیت سالم فرزندان میهن و پدر-اش
                                    مولوی میرعبدالحق مدرس، استاد مدرسۀ جامع هرات و یکی از برازنده‌ترین کوشندگان
                                    به‌رسمیت دولتی‌درآوردن مدرسه جامع هرات در چهارچوب مؤسسات رسمی آموزش‌های
                                    عالی وزارت معارف وقت افغانستان و فرزانۀ بی‌نظیر متبحّر در رشته‌های فلسفه،
                                    حکمت، کلام اسلامی (عقاید اسلامی)، منطق و علوم بلاغت ادب (معانی، بیان و
                                    بدیع) بود که حدود سی‌سال از عمر گران‌بهای خود را وقف تدریس فرزندان وطن در
                                    مدرسۀ یادشده کرد.
                                </p>
                                <p className='para3'>
                                    سید نورالحق کاوش به عنوان فرزند ارشد این فامیل دانشی-فرهنگی...<a style={{textDecoration: 'underline'}} href="/author">ادامه</a>
                                </p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                paddingBottom="2vh"
                            >
                                <img className="image1" src={kawish} alt="ostad kawish" height="250px" width="auto" />
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                paddingBottom="2vh"
                            >
                                <img className="image" src={kawish1} alt="ostad kawish" height="250px" width="auto" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <Box className='center'>
                                <p  className='title4'>
                                انتشارات انسان
                                </p>
                                <p className='para3'>
                                    انتشارات انسان یک نهاد خصوصی چاپ، نشر و توزیع آثار بس ارزنده در پاره‌ای از
                                    رشته‌های علوم انسانی است که در حال حاضر متعهد چاپ، نشر و توزیع آثار پدر و
                                    استاد گرامی-ام استاد دکتر سید نورالحق کاوش است و با فراهم‌آمدن آینده‌های
                                    مساعد، به‌چاپ، نشر و توزیع آثار بزرگ‌اندیش‌مند‌ان مستقل دیگر رشته‌های علوم
                                    انسانی نیز مبادرت خواهد ورزید.
                                </p>
                                <p className='para3'>
                                    باتوجه به‌این حقیقت تلخ تاریخی در گذشته‌های دور که معمولا متولیان چاپ و نشر
                                    آثار متفکران علوم انسانی را مؤسسات رسمی-دولتی پرغرض‌و‌مرض سیاسی-اقتصادی...
                                    <a style={{textDecoration: 'underline'}} href="/Aboutus">ادامه</a>
                                </p>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div className='filler2'>
                <div class="custom-shape-divider-top-1651260360">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
                </div>
                <div className='filler3'>
                    <p  className='title5'>
                            گالری کتاب‌ها
                    </p>
                    {/* <GetCovers/> */}
                    <BookGallery3/>
                    <BookGallery2/>
                    {/* <BookGallery1/> */}
                </div>
            </div>                 
    )
};

export default LandingPage;