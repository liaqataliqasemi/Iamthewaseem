import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// eslint-disable-next-line
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './Footer.css';

const str = new Date().toLocaleDateString('fa-IR');
function Copyright() {
    return (
      <Typography variant="inherit" style={{color: '#023b59', fontFamily: 'nassim', fontSize: '18px'}}>
         کلیه حقوق این وب‌سایت متعلق به انتشارات انسان می باشد.
        {' ©  '}
        {' '}
        {str} {' '}  
      </Typography>
    );
};
const Footer = () => {
  return (
    <section>
      <div className="wave">
        <div class="custom-shape-divider-bottom-1650522109">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
      </div>
      <div className="main-footer">
        <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12}>

              <div style={{textAlign: 'center'}}>
                <Typography style={{color: '#112D4E', fontFamily: 'titr', fontSize: '2em' }}>انتشــــارات انسان </Typography> &nbsp;
              </div>
              <div className="footercontainer">
                <div><a href="/">خانه</a></div>
                <div><a href="/Books">کتاب ها</a></div>
                <div><a href="/Author">نویسنده</a></div>
                <div><a href="/Buy">خرید کتاب</a></div>
                <div><a href="/AboutUs">دربارۀ ما</a></div>
                <div> <a href="/ContactUs">تماس با ما</a></div>
              </div>
            </Grid> 
          <Grid item xs={12} sm={12}>
            <div style={{textAlign: 'center'}}>
              <Typography  style={{color: '#023b59', fontFamily: 'nassim', fontSize: '1.2em' , lineHeight: '2em', marginBottom: '1.5rem'}}>ما را در صفحات اجتماعی دنبال کنید!</Typography>
                <div className="footercontainer2">
                  <a href="https://www.facebook.com/Ensan-Publishers-%D8%A7%D9%86%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%86%D8%B3%D8%A7%D9%86-106264118730722" target="_blank"><FacebookRoundedIcon style={{color: '#4267B2', margin: '0 0.2em', fontSize: '2.5em'}} /></a>&nbsp;
                  {/* <a href="https://www.Instgram.com"><InstagramIcon style={{color: 'crimson ', margin: '0 0.2em', fontSize: '2.5em'}}/></a>&nbsp; */}
                  <a href="https://twitter.com/EnsanPublishers" target="_blank"> <TwitterIcon style={{color: '#00acee ', margin: '0 0.2em', fontSize: '2.5em'}}/></a>&nbsp;
                  <a href="https://www.linkedin.com/company/ensan-publishers/" target="_blank"><LinkedInIcon style={{color: '#0e76a8 ', margin: ' 0 0.2em', fontSize: '2.5em'}}/></a>&nbsp;
                </div>     
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="sub-footer" style={{paddingBottom: '10px!important'}}>{Copyright()}</div>   
    </section>
  );
}
export default Footer;
    

