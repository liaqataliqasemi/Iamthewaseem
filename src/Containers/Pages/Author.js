import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Author.css';
import Kawish from '../Component/KawishCard';
import BookCard from '../Component/Books';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '0.2em 20vw'
    },
    header1:{
      fontFamily: 'vazir',
      textAlign: 'center',
      fontSize: '2rem'
    },
    paragraph: {
      fontFamily: 'vazir',
      lineHeight: '2.4em',
      textAlign: 'justify',
      fontSize: '16px',
      fontWeight: 300,
      padding: '0 5vw',
      direction: 'ltr',
      marginBottom: '1.5em'
    },
    para: {
        fontFamily: 'vazir',
        lineHeight: '2.4em',
        textAlign: 'justify',
        fontSize: '16px',
        fontWeight: 300,
        padding: '0 5vw',
        direction: 'ltr',
      },
  }));

const LandingPage = () => {
    const classes = useStyles();
    return(
        <div> 
            <div style={{background: '#fafafa'}}>
                <div class="custom-shape-divider-top-1651047448">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className='header2' style={{background: '#fafafa'}}>
                <h1 style={{background: '#fafafa'}} className={classes.header1}>زندگی و آثار محترم استاد دکتر سید نورالحق کاوش</h1>  
            </div>
            <Box display="flex" container flexWrap="wrap" justifyContent="center" spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        paddingBottom="2vh"
                    >
                        <Kawish/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div>
                        <p className={classes.para}>
                            <strong>زندگی</strong>
                        </p>
                        <p className={classes.paragraph}>
                            سید نورالحق کاوش در چهارم جدی 1330 خورشیدی در قریۀ تلابۀ سفلی ولسوالی انجیل
                            هرات در خانوادۀ فرهنگی دانش‌ورزیده‌ای دیده به‌جهان گشود. مادر-اش حلیمه
                            فرزند سید یعقوب بانوی فرهنگ‌پرور و مشتاق تربیت سالم فرزندان میهن و پدر-اش
                            مولوی میرعبدالحق مدرس، استاد مدرسۀ جامع هرات و یکی از برازنده‌ترین کوشندگان
                            به‌رسمیت دولتی‌درآوردن مدرسه جامع هرات در چهارچوب مؤسسات رسمی آموزش‌های
                            عالی وزارت معارف وقت افغانستان و فرزانۀ بی‌نظیر متبحّر در رشته‌های فلسفه،
                            حکمت، کلام اسلامی (عقاید اسلامی)، منطق و علوم بلاغت ادب (معانی، بیان و
                            بدیع) بود که حدود سی‌سال از عمر گران‌بهای خود را وقف تدریس فرزندان وطن در
                            مدرسۀ یادشده کرد.
                        </p>
                        <p className={classes.paragraph}>
                            سید نورالحق کاوش به‌عنوان فرزند ارشد این فامیل دانشی-فرهنگی هم‌زمان با
                            پیش‌برد دروس رسمی مکتب ابتدائیه‌ی ابوالولید (رح) در سال‌های 1338 – 1343،
                            مقدمات علوم عقلی (منطق، حکمت و فلسفه) و نقلی (قرآن، احادیث، فقه، تفسیر،
                            تاریخ اسلام، اصول فقه و اصول حدیث) و ادبی (صرف، نحو، معانی، بیان و بدیع) را
                            در منزل نزد پدر-اش فراگرفت. و با فراغت از مکتب ابتدائیه‌ی ابوالولید (رح) پس
                            از سپری‌کردن امتحان اختصاصی شمولیت در دورۀ ثانوی مدرسۀ جامع هرات، در سال
                            1344 شامل دورۀ ثانوی این مدرسه گردید و در سال 1349 به‌درجۀ اعلا از این
                            مدرسه فارغ و پس از موفقیت در کانکور اختصاصی فاکولتۀ شرعیات پوهنتون کابل
                            شامل این فاکولته شد و در سال 1354 به‌حیث اول‌نمرۀ عمومی از فاکولتۀ شرعیات
                            پوهنتون کابل فارغ‌التحصیل گردید.
                        </p>
                        <p className={classes.paragraph}>
                            با آن‌که سید نورالحق کاوش حایز همۀ شرایط شمولیت در کادر علمی فاکولتۀ شرعیات
                            بود، ظاهراً به‌دلیل نبودن کرسی خالی در دیپارتمنت فلسفه و عقیدۀ این فاکولته،
                            پذیرش درخواست شمولیت-اش در کادر علمی این دیپارتمنت به‌تعویق افتاد. و از
                            این‌رو سید نورالحق کاوش از سر ناگزیری در سال 1355 به‌حیث عضو دادستانی
                            ابتدائیه‌ی ولایت هرات مشغول کار و حدود یک‌سال بعد به‌حیث معاون مسلکی
                            دادستانی ولایت هرات مقرر گردید و تا اوایل سال 1358 در این سمت خدمت کرد، تا
                            این‌که بالاخره درخواست شمولیت وی در کادر علمی دیپارتمنت فلسفه و عقیدۀ
                            فاکولتۀ شرعیات پذیرفته آمد و از همین تاریخ رسماً به‌حیث عضو کادر علمی
                            دیپارتمنت یادشده مشغول کار دل‌خواه-اش گردید.
                        </p>
                        <p className={classes.paragraph}>
                            سید نورالحق کاوش به‌دلیل استعداد و کفایت بالفعل علمی-اش از همان آغاز شمولیت
                            در کادر علمی دیپارتمنت فلسفه و عقیدۀ فاکولتۀ شرعیات به‌گونۀ کاملاً مستقل
                            به‌تدریس فلسفه، منطق، متدولوژی و کلام اسلامی (عقاید اسلامی) پرداخت و تا سال
                            1367 افزون بر تدریس و پژوهش علمی، پیش‌برد امور معاونیت این دیپارتمنت را نیز
                            برعهده داشت.
                        </p>
                        <p className={classes.paragraph}>
                            با ارتقای فاکولتۀ شرعیات پوهنتون کابل به‌نام پوهنتون تحصیلات و تحقیقات علوم
                            اسلامی افغانستان، استاد کاوش از سال 1367 تا آغاز سال 1371 به‌حیث عضو و
                            معاون دیپارتمنت فلسفه و عقیدۀ فاکولتۀ تعلیمات اسلامی پوهنتون تحصیلات و
                            تحقیقات علوم اسلامی افغانستان ایفای خدمت کرد؛ چنان‌که افزون بر انجام خدمت
                            در سمت‌های یادشده از سال 1368 تا سال 1370 به‌حیث رئیس فاکولتۀ اکمال تخصص
                            این پوهنتون نیز مشغول کار بود.
                        </p>
                        <p className={classes.paragraph}>
                            پس از پیروزی ”به‌اصطلاح مجاهدین“ و سقوط حکومت دکتر نجیب اللّه و آغاز
                            جنگ‌های میان‌گروهی این ”مجاهدین“ که در نتیجۀ آن امنیت کابل شدیداً برهم‌خورد
                            و استادان پوهنتون کابل و پوهنتون تحصیلات و تحقیقات علوم اسلامی افغانستان
                            به‌جای تدریس و پژوهش علمی آزاد و آرام، صرفاً در غم امضای حاضری دولت و سالم
                            به‌خانه بازگشتن و پیداکردن راه فرار از مصایب روزافزون جنگ روزگار بودند،
                            امکان تدریس و پژوهش آزاد علمی در کابل برای استاد کاوش نیز عملاً ناممکن شد.
                            استاد کاوش که در پهلوی کارهای رسمی دانشگاهی-اش از سال 1367 به‌حیث معاون
                            کانون فرهنگی حکیم ناصرخسرو بلخی نیز خدمات فرهنگی برعهده داشت، مصادف با
                            ناآرامی‌های شهر کابل به‌دعوت الحاج سید منصور نادری رهبر اسماعیلیان
                            افغانستان و رئیس کانون فرهنگی حکیم ناصرخسرو بلخی، به‌شهر پلخمری مرکز ولایت
                            بغلان نقل مکان کرد و فعالیت‌های مرکزی این کانون را در صفحات شمال کشور
                            پی‌گرفت.
                        </p>
                        <p className={classes.paragraph}>
                            باتوجه به‌سیل مهاجرت استادان و فرهنگیان مؤسسات گوناگون دانشی-پژوهشی کابل
                            به‌بغلان، مهم‌ترین مشغلۀ محور فکری استاد کاوش بنیادگذاری دانش‌گاه بغلان
                            بود. بنابراین استاد کاوش به‌این مقصد پی‌هم جلساتی با الحاج سید منصور نادری
                            رئیس کانون فرهنگی حکیم ناصرخسرو بلخی برگزار و پس از رأی‌زنی‌های ممتد و
                            اصرار و ترغیب، بالاخره این پیشنهاد استاد کاوش مورد پذیرش قرارگرفت و در
                            نتیجۀ آن، ضرورت تأسیس دانش‌گاه بغلان نزد رهبری سیاسی-اداری ولایت بغلان
                            مُسلّم و به‌تأسی از آن تحقق این هدف به‌مقامات رهبری شمال مستقل موقتی کشور
                            پیشنهاد و منظور گردید. و بلافاصله استاد کاوش به‌حیث نخستین رئیس دانش‌گاه
                            (پوهنتون) بغلان مقرر و رهبری علمی و اداری این دانش‌گاه نوبنیاد را
                            به‌هم‌کاری استادان و دانش‌مندان مهاجرشده از کابل به‌بغلان بر دوش گرفت.
                        </p>
                        <p className={classes.paragraph}>
                            حدود چهارسال پس از تأسیس و فعالیت دانش‌گاه بغلان به‌ریاست استاد کاوش بود که
                            اوضاع سیاسی افغانستان به‌دلیل گسترش حاکمیت طالبان رفته‌رفته ناآرام گردید
                            به‌گونه‌ای‌که امکان زیست‌ اهل دانش و پژوهش و فعالیت‌ دانش‌گاه بغلان
                            به‌موانع جدّی مواجه و عملا ناممکن گردید. از این ‌رو استاد کاوش که خود تابع
                            امرونهی هیچ‌یکی از احزاب به‌اصطلاح اسلامی و غیراسلامی وقت افغانستان نبود،
                            ناگزیر گردید به‌هدف استدام خدمات دانشی-فرهنگی-اش به‌هم‌زبانان‌ برون‌مرزی
                            کشور، بغلان را به‌قصد تاجیکستان ترک گوید.
                        </p>
                        <p className={classes.paragraph}>
                            استاد کاوش که پیش از ورود این باره‌اش به‌تاجیکستان، در محیط‌های آکادمیک این
                            کشور، شخصیت دانشی-پژوهشی و آزاداندیش شناخته شده بود و دکتری (Ph.D.) در رشتۀ
                            تاریخ فلسفه را به‌هم‌یاری آکادمی علوم تاجیکستان از آکادمی علوم مسکو
                            فدراسیون روسیه حاصل داشته بود، از سوی آکادمی علوم تاجیکستان دعوت گردید
                            به‌حیث عضو ارشد علمی در انستیتوت فلسفه و حقوق این آکادمی به‌کار رسمی پردازد
                            و افزون بر آن به‌دعوت‌های دانش‌گاه دولتی تاجیکستان و دانش‌گاه آموزگاری
                            دوشنبه، استاد کاوش فعالیت‌های آکادمیک-اش را در سه مرکز اساسی دانشی-پژوهشی
                            مهم تاجیکستان ادامه داد.
                        </p>
                        <p className={classes.paragraph}>
                            استاد کاوش که با همۀ انتظارات در تغییر و تحول اوضاع افغانستان به‌سوی
                            بهبودی، بالاخره دریافت که حداقل در حال حاضر روزنه‌ای از تحقق چنین امیدی
                            به‌نظر نمی‌رسد، پس از بازگشت موقتی به‌شمال کشور (افغانستان) و مطالعۀ اوضاع،
                            ناگزیر شد در اواخر سال 2000 میلادی/میزان 1379، از بد حادثه به‌اروپا پناه
                            برد و با رسیدن به‌آلمان درخواست پناهندگی عرضه دارد. پناهندگی سیاسی استاد
                            کاوش مطابق قانون اساسی آلمان پذیرفته شد و از آن تاریخ تا کنون با همه
                            ناراحتی‌های ناشی از به‌خون‌غرقه‌شدن میهن-اش افغانستان، رنج روزگار تحمل
                            می‌کند و با این همۀ آلام، هم‌چنان مشغول آفرینش‌های علمی-فرهنگی است.
                        </p>
                    </div>
                    <div>
                                <BookCard/>
                            <p className={classes.para}>
                                {/* <strong>2- </strong> */}
                                <strong>آثار</strong>
                            </p>
                            <p className={classes.para}>
                                <h3> الف) کتب و رسالات پژوهشی:</h3>
                            </p>
                             <p className={classes.para}>
                                1- کیفیت انتشار اسلام در شرق و غرب، 1973/1352 (چاپ‌ناشده)
                            </p>
                             <p className={classes.para}>
                                2- ارزیابی منطقی دیالکتیک (رسالۀ مونوگراف دورۀ لیسانس از فاکولتۀ شرعیات
                                پوهنتون کابل، 1975/1354) (چاپ‌ناشده)
                            </p>
                             <p className={classes.para}>
                                3- احوال، آثار و افکار ابوعلی سینا، 1979/1358 (چاپ‌ناشده)
                            </p>
                             <p className={classes.para}>
                                4- نظریۀ شناخت فلسفۀ علمی، 1980/1359 (ضمیمۀ ترجمۀ ”نظریة المعرفة“ دکتر زکی
                                نجیب محمود) به‌حیث اثر اصلی شرط ترفیع علمی به‌رتبۀ پوهنیار (چاپ‌ناشده)
                            </p>
                             <p className={classes.para}>
                                5- ”بررسی نصاب تعلیمی علوم دینی در برنامه‌های آموزشی افغانستان“ که فشرده-ای
                                از آن در سمینار علمی برگزارشده از سوی آکادمی علوم افغانستان زیر نام 5-”نقش
                                علوم پداگوژیکی در انکشاف تعلیم و تربیۀ افغانستان“ در سال 1988/1367 ارایه
                                گردید.
                            </p>
                             <p className={classes.para}>
                                6- منطق ارسطو، نشر مرکز تحقیقات علوم اسلامی افغانستان، وزارت تحصیلات عالی و
                                مسلکی افغانستان، 1990/1369؛ و چاپ دوم با ویرایش مجدد زیر نام ”منطق
                                ارستویی“، بنگاه ”کتاب آیدا“ بوخوم (آلمان) 2004/1383
                            </p>
                             <p className={classes.para}>
                                7- کتلاک دانش‌گاه علوم اسلامی، نشر مرکز تحقیقات علوم اسلامی افغانستان،
                                وزارت تحصیلات عالی و مسلکی افغانستان، 1990/1369
                            </p>
                             <p className={classes.para}>
                                8- عرفان ابن سینا (در یک مجلد)، نشر مرکز تحقیقات علوم اسلامی افغانستان،
                                وزارت تحصیلات عالی و مسلکی افغانستان، 1991/1371، و در دو مجلد، نشر کانون
                                فرهنگی حکیم ناصرخسرو بلخی، پلخمری، 1992/1371
                            </p>
                             <p className={classes.para}>
                                9- روح علمی و روش‌های تحقیق ابوریحان بیرونی، نشر دانش‌گاه کابل، 1991/1371
                            </p>
                             <p className={classes.para}>
                                10- دیدگاه‌های ناصرخسرو در مسألۀ جبر و اختیار، نشر کانون فرهنگی حکیم ناصر
                                خسرو بلخی، پلخمری، 1992/1371
                            </p>
                             <p className={classes.para}>
                                11- انسان کامل از دیدگاه عرفا، 1995/1374، (چاپ‌ناشده)
                            </p>
                             <p className={classes.para}>
                                12- تحقیق پیرامون تعلیمات اساسی ولایت بغلان (به‌خواهش مؤسسه بین‌المللی
                                آکسفام) 1995/1374، (چاپ‌ناشده)
                            </p>
                             <p className={classes.para}>
                                13- از 7 ثور تا 8 ثور/بررسی مشخصات سیاسی-فرهنگی روی‌داد‌های 1978-1998 مطابق
                                1357-1377، افغانستان (چاپ‌ناشده)
                            </p>
                             <p className={classes.para}>
                                14- درآمدی بر فلسفه انسان‌گرایی علی شریعتی، 1999/1378، چاپ اول، انستیتوت
                                فلسفه و حقوق آکادمی علوم تاجیکستان، 2000/1379، و چاپ دوم، ”نشر نیما“
                                (ایسن/آلمان) 2002/1381
                            </p>
                             <p className={classes.para}>
                                15- آیین زاهد در آیینۀ دیوان بیدل، ”نشر نیما“ (ایسن/آلمان) 2002/1381
                            </p>
                             <p className={classes.para}>
                                16- انسان‌شناختی بیدل، مجلد اول (بخش یکم: آشنایی با بیدل و بخش دوم:
                                مهم‌ترین پیشینه‌های دور و نزدیک اثرگذار بر هستی-جهان-انسان‌شناختی بیدل)،
                                ”نشر آیدا“ (بوخوم/آلمان) 2010/1389
                            </p>
                             <p className={classes.para}>
                                17- انسان‌شناختی بیدل، مجلد دوم (بخش سوم: هستی-جهان-انسان‌شناختی بیدل)،
                                ”نشر آیدا“ (بوخوم/آلمان) 2013/1391
                            </p>
                             <p className={classes.para}>
                                18- انسان‌شناختی بیدل، مجلد سوم (بخش چهارم: شناخت‌شناختی و روش‌شناختی
                                بیدل)، ”نشر آیدا“ (بوخوم/آلمان) 2017/1395
                            </p>
                             <p className={classes.para}>
                                19- انسان‌شناختی بیدل، مجلد چهارم/ بخش پنجم، پارۀ یکم: اخلاق (بینش-روش
                                خودسازی) بیدل، ”انتشارات انسان“ (ماساچوستس/آمریکا) 2022/1400
                            </p>
                            </div>
                        <div>
                            <p className={classes.para}>
                                <h3>ب) کتب درسی:</h3>
                            </p>
                             <p className={classes.para}>
                                1- عقاید اسلامی (الاهیات)، کتاب درسی سمستر اول سال اول فاکولتۀ شرعیات
                                پوهنتون کابل، 1979/1358
                            </p>
                             <p className={classes.para}>
                                2- عقاید اسلامی (نبوّات)، کتاب درسی سمستر دوم سال اول فاکولتۀ شرعیات
                                پوهنتون کابل، 1980/1359
                            </p>
                             <p className={classes.para}>
                                3- علم الاجتماع، کتاب درسی سمستر دوم سال دوم فاکولتۀ شرعیات پوهنتون کابل،
                                1980/1359
                            </p>
                             <p className={classes.para}>
                                4- منطق قدیم، کتاب درسی سمستر اول سال اول فاکولتۀ شرعیات پوهنتون کابل،
                                1980/1359
                            </p>
                             <p className={classes.para}>
                                5- عقاید اسلامی (معادشناختی)، کتاب درسی سمستر اول سال دوم فاکولتۀ شرعیات
                                پوهنتون کابل، 1981/1360
                            </p>
                             <p className={classes.para}>
                                6- منطق جدید، کتاب درسی سمستر دوم سال اول فاکولتۀ شرعیات پوهنتون کابل،
                                1983/1362
                            </p>
                             <p className={classes.para}>
                                7- تاریخ فلسفۀ اروپایی (دورۀ قدیم)، کتاب درسی سمستر اول سال اول فاکولتۀ
                                شرعیات پوهنتون کابل، 1984/1363
                            </p>
                             <p className={classes.para}>
                                8- تاریخ فلسفۀ اروپایی (دورۀ قرون میانه)، کتاب درسی سمستر دوم سال اول
                                فاکولتۀ شرعیات پوهنتون کابل، 1984/1363
                            </p>
                             <p className={classes.para}>
                                9- تاریخ فلسفۀ اروپایی (دورۀ جدید)، کتاب درسی سمستر اول سال دوم فاکولتۀ
                                شرعیات پوهنتون کابل، 1985/1364
                            </p>
                             <p className={classes.para}>
                                10- تاریخ فلسفۀ اسلامی، کتاب درسی سمستر اول سال سوم فاکولتۀ شرعیات پوهنتون
                                کابل، 1985/1364
                            </p>
                             <p className={classes.para}>
                                11- تاریخ فلسفۀ معاصر اروپایی-آمریکایی، کتاب درسی سمستر دوم سال چهارم
                                فاکولتۀ شرعیات پوهنتون کابل، 1986/1365
                            </p>
                             <p className={classes.para}>
                                در همین جا ناگفته نماند که مواد درسی یادشده اغلباً به‌گونۀ گستتنر چاپ و
                                افزون بر سمسترهای درسی فاکولتۀ شرعیات، در فاکولتۀ تعلیمات اسلامی پوهنتون
                                علوم اسلامی نیز مورد استفادۀ محصلان (دانش‌جویان) دیپارتمنت فلسفه و عقیده
                                قرار گرفتند.
                            </p>
                             <p className={classes.para}>
                                12- منطق، کتاب درسی مضمون منطق برای انستیتوت‌ها و فاکولته‌های مختلف
                                دانش‌گاه‌های تاجیکستان، 1999-1998 مطابق 1379-1378
                            </p>
                            <p className={classes.para}>
                                <h3>ج) مقالات تحقیقی:</h3>
                            </p>
                             <p className={classes.para}>
                                1- پژوهشی پیرامون قیاس و استقرأ؛ شمارۀ سوم، سال هفتم، 1987/1366، مجلۀ
                                ”اجتماعی علوم“ (نشریۀ علمی پوهنتون کابل)
                            </p>
                             <p className={classes.para}>
                                2- نظریۀ حرکت جوهری ملا صدرا؛ شمارۀ دوم، سال دوم، 1988/1367، مجلۀ ”دانش“
                                (نشریۀ علمی پوهنتون کابل)
                            </p>
                             <p className={classes.para}>
                                3- پژوهشی در اختلاف نظر شیخ اشراق با ارستو پیرامون تیوری تعریف؛ شمارۀ
                                چهارم، سال دوم، 1988/1367، مجلۀ ”دانش“ (نشریۀ علمی پوهنتون کابل)
                            </p>
                             <p className={classes.para}>
                                4- پژوهشی پیرامون شک متدیک غزالی اندیش‌مند بزرگ اسلامی، شمارۀ اول، سال اول،
                                دورۀ دوم، مجلۀ ”اجتماعی علوم“، 1989/1368 (نشریۀ علمی پوهنتون کابل)
                            </p>
                             <p className={classes.para}>
                                5- پژوهش و مقایسۀ اصل عدم تناقض ارستو و اصل تناقض هگل؛ شماره‌های 3-4، دورۀ
                                دوم، سال دوم، مجلۀ ”اجتماعی علوم“، 1990/1369 (نشریۀ علمی پوهنتون کابل)
                            </p>
                             <p className={classes.para}>
                                6- گذری بر پیشینۀ علم‌پروری مسلمانان و نظری بر متدولوژی جابر بن حَیّان، جزو
                                مجموعۀ مقالات پژوهشی دومین کنفرانس علمی-متدیکی سال 1989/1368، مرکز تحقیقات
                                علوم اسلامی، مطبعۀ آریانا، کابل، 1991/1370
                            </p>
                             <p className={classes.para}>
                                7- مسأله‌ی جبر و اختیار و بازتاب‌های آن در شاه‌نامه فردوسی، جزو مقالات
                                سمپوزیم بین‌المللی ”فردوسی و شاه‌نامه“، شماره‌های دوم و سوم سال دهم مجلۀ
                                خراسان، 1991/1370 (مجلۀ مطالعات زبان و ادبیات آکادمی علوم افغانستان)
                            </p>
                             <p className={classes.para}>
                                8- موقف بیرونی در فلسفه، جزو مقالات سمپوزیم بین‌المللی هزار و پنجاهمین
                                سال‌زاد ابوریحان بیرونی که از سوی دانش‌گاه کابل از 18 تا 20 دسامبر 1991
                                دایر گردید. مجلۀ حجت (نشریۀ کانون فرهنگی حکیم ناصرخسرو بلخی، شمارۀ 12، سال
                                1994/1373)
                            </p>
                             <p className={classes.para}>
                                9- تحقیقی پیرامون آرأ سیدجمال الدین افغانی در تعلیم و تربیت، مجلۀ ”اجتماعی
                                علوم“، شمارۀ چهارم، سال سوم، دورۀ دوم، 1991/1370 (نشریۀ علمی پوهنتون کابل)
                            </p>
                             <p className={classes.para}>
                                10- زندگی‌نامۀ علی شریعتی، شمارۀ 11، مجله حجت، (فصل‌نامۀ فرهنگی-ادبی و
                                پژوهشی کانون فرهنگی حکیم ناصرخسرو بلخی) پلخمری، 1994/1373
                            </p>
                             <p className={classes.para}>
                                11- ارزش‌های فرهنگی راه ابریشم (به‌مناسبت سمپوزیم بین‌المللی روابط آسیای
                                میانه با هسپانیا) شمارۀ 14، مجلۀ حجت، 1995/1374 (فصل‌نامۀ فرهنگی-ادبی و
                                پژوهشی کانون فرهنگی حکیم ناصرخسرو بلخی)، پلخمری 1374
                            </p>
                             <p className={classes.para}>
                                12- سماع از دیدگاه شیخ نجم الدین کبرا (به‌مناسبت سمپوزیم بین‌المللی هشتصد و
                                پنجاهمین سال‌زاد شیخ نجم الدین کبرا در تاشکند)، شمارۀ 15، مجلۀ حجت
                                (فصل‌نامۀ فرهنگی-ادبی و پژوهشی کانون فرهنگی حکیم ناصرخسرو بلخی)، پلخمری
                                1995/1374
                            </p>
                             <p className={classes.para}>
                                13- مشخصات زاهد از دیدگاه کمال خجندی، شماره‌های اول، دوم و سوم مجلۀ فرهنگ
                                آریانا (نشریۀ انجمن پاسداران فرهنگ آریانا) دوشنبه/تاجیکستان 1998/1377
                            </p>
                             <p className={classes.para}>
                                14- پژوهشی در شناخت عرفان ابن سینا (به‌مناسبت سمینار علمی انستیتوت فلسفه و
                                حقوق آکادمی علوم تاجیکستان در یادبود هزار و صد سالگی دولت سامانیان)،
                                1999/1378، مجموعۀ مقالات دکتر سید نورالحق کاوش، جلد یکم، نشر انستیتوت فلسفه
                                و حقوق آکادمی علوم تاجیکستان، 2000/1379
                            </p>
                             <p className={classes.para}>
                                15- نقش تعلیم و تربیه و زمینه‌های کاری و تولیدی در حل دشواری‌های مناطق کوهی
                                افغانستان آسیای میانه (به‌مناسبت کنفرانس بین‌المللی ”مناطق کوهی آسیای
                                میانه، پرابلم‌ها و رشد استوار“)، دوشنبه‌شهر، تاجیکستان 29 سپتامبر 1999
                            </p>
                             <p className={classes.para}>
                                16- جلوه‌های جبر و اختیار در مثنوی مولوی؛ شمارۀ اول، سال اول، مجلۀ آمو،
                                2000/1379 (نشریۀ پژوهش‌گاه خاورشناسی آکادمی علوم تاجیکستان)
                            </p>
                             <p className={classes.para}>
                                17- پژوهشی پیرامون روش‌های تحقیق ابوریحان بیرونی (ارایه شده در سمینار تاریخ
                                علوم در ماورأالنهر که از سوی آکادمی علوم تاجیکستان به‌تاریخ 9 فوریه
                                2000/1379 برگزار گردید)، مجموعۀ مقالات دکتر سید نورالحق کاوش، جلد یکم، نشر
                                انستیتوت فلسفه و حقوق آکادمی علوم تاجیکستان 2000/1379
                            </p>

                            <p className={classes.para}>
                                <h3>د) ترجمه از عربی به فارسی:</h3>
                            </p>
                             <p className={classes.para}>
                                1- نظریۀ شناخت، نگارش دکتر زکی نجیب محمود، مرکز تحقیقات علوم اسلامی وزارت
                                تحصیلات عالی و مسلکی افغانستان، 1989/1368
                            </p>
                             <p className={classes.para}>
                                2- تحلیل و ترکیب، نوشتۀ دکتر قاسم محمود؛ قسمتی از این اثر به‌حیث نمونۀ
                                ترجمه از عربی به‌فارسی در دومین کنفرانس متدیکی مرکز تحقیقات علوم اسلامی
                                وزارت تحصیلات عالی و مسلکی افغانستان در سال 1989/1368 ارایه گردیده و از سوی
                                همان نهاد در مجموعۀ جداگانه در سال 1991/1370 چاپ شده است
                            </p>
                             <p className={classes.para}>
                                3- مشخصات فلسفۀ جدید اروپایی، نوشتۀ دکتر محمد علی ابوریان، سال 1992/1371
                                (چاپ‌ناشده)
                            </p>
                            </div>
                            <div>
                            <p className={classes.para}>
                                <strong style={{fontSize: '1.2em'}}>هـ) از دیگر فعالیت‌های علمی-فرهنگی:</strong>
                            </p>
                             <p className={classes.para}>
                                استاد کاوش افزون بر تدریس و تحقیق علمی دانشگاهی-اش، در سایر پهنه‌های علوم
                                انسانی در راستای روشن‌گری و گسترش دانش و فرهنگ انسان‌گرایی و سامان‌دهی آن
                                از طریق نشر اندیشۀ انسان‌گرا در تحقق خدمات دانشی و فرهنگی دیگری نیز سهمی
                                به‌سزا داشته است که از آن جمله اند:
                            </p><br/>
                             <p className={classes.para}>
                                1- در طول دوران خدمت در دانش‌گاه کابل و دانش‌گاه‌های علوم اسلامی افغانستان
                                به‌حیث استاد رهنمای صدها مونوگراف فارغ التحصیلان
                            </p>
                             <p className={classes.para}>
                                2- نگارش مقدمه، تحشیه و ویرایش جدید ”یمگان“ اثر خلیل اللّه خلیلی، نشر سال
                                1991/1370، از سوی کانون فرهنگی حکیم ناصرخسرو بلخی، کابل 1370
                            </p>
                             <p className={classes.para}>
                                3- عضویت در هیأت تحریر مجلۀ اجتماعی علوم (نشریۀ علمی پوهنتون کابل)
                            </p>
                             <p className={classes.para}>
                                4- عضویت در هیأت تحریر مجلۀ دانش (نشریۀ علمی پوهنتون کابل)
                            </p>
                             <p className={classes.para}>
                                5- عضویت در هیأت تحریر مجلۀ حجت (نشریۀ ادبی-پژوهشی کانون فرهنگی حکیم
                                ناصرخسرو بلخی)
                            </p>
                             <p className={classes.para}>
                                6- عضویت در هیأت تحریر مجلۀ فرهنگ آریانا (نشریۀ انجمن پاسداران فرهنگ
                                آریانا) دوشنبه/تاجیکستان
                            </p>
                             <p className={classes.para}>
                                7- عضویت در هیأت تحریر مجلۀ آمو (نشریۀ پژوهش‌گاه خاورشناسی آکادمی علوم
                                تاجیکستان)
                            </p>
                             <p className={classes.para}>
                                8- عضویت در شورای مؤسس و مرکزی کانون فرهنگی حکیم ناصرخسرو بلخی و انجام خدمت
                                به‌حیث معاون آن کانون
                            </p>
                             <p className={classes.para}>
                                9- عضویت در شورای عالی پوهنتون علوم اسلامی افغانستان و نیز انجام خدمت
                                به‌حیث منشی آن شورا
                            </p>
                             <p className={classes.para}>
                                10- عضویت در کمیسیون‌های ترفیعات علمی، امتحانات و نشرات فاکولتۀ شرعیات
                                پوهنتون کابل و پوهنتون علوم اسلامی افغانستان
                            </p>
                             <p className={classes.para}>
                                11- اشتراک در کنفرانس‌ها، سمینار‌ها، و سمپوزیم‌های علمی پوهنتون کابل،
                                پوهنتون علوم اسلامی افغانستان و آکادمی علوم تاجیکستان و دیگر فعالیت‌های
                                فراوان مشابه ‌و به‌ویژه آموزه‌های آکادمیک استاد کاوش در جهت تاکید بر ”اصالت
                                انسان“ و ”انسان‌گرایی“ آزاد از سلطۀ زور و زر و تزویرهای سنتی و مدرن، از
                                امتیازات غیرقابل‌انکار اوست که به‌ویژه از برگ‌برگ اثر بس مهم وی به‌نام
                                ”انسان‌شناختی بیدل“- که تا کنون چهار مجلد آن در ظرف 2410 صفحه به‌چاپ رسیده
                                است- قابل درک است.
                            </p>
                            <br/>
                             <p className={classes.para}>
                                در فرجام سخن از یادآوری بازنماند که استاد کاوش در حال حاضر مشغول پژوهش و
                                فراهم‌آوری پارۀ دوم بخش پنجم اثر فناناپذیر-اش یعنی ”انسان‌شناختی بیدل“ است.
                            </p>

                            <br/>
                            <p className={classes.para}>
                                18 اپریل 2022 مطابق 29 حمل 1401
                            </p>
                    </div>
                </Grid>
            </Box>
        </div>      
    )
};

export default LandingPage;
