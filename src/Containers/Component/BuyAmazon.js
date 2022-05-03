import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BedilVol2 from '../Assets/BedilVol2.jpg';
import BedilVol3 from '../Assets/BedilVol3.jpg';
import BedilVol1 from '../Assets/BedilVol1.jpg';
import BedilVol4 from '../Assets/BedilVol4.jpg';
import BuyButton from './BuyButtonNewTab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1em 0em',
    backgroundColor: 'white'
  },
  root2: {
    flexGrow: 1,
    padding: '0 8em',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary, 
  },
  title:{
    color: 'black', 
    fontFamily: 'Ubuntu', 
    fontWeight: 400, 
    textAlign: 'center', 
    paddingBottom: '1em',
    paddingTop: '1em'
  },
  cardImg:{
    height: '50px', 
    width: 'auto', 
    flexGrow: 1, 
    borderRadius: '50%',
  },
  cardNumber:{
    color: 'grey', 
    fontFamily: 'Ubuntu', 
    fontWeight: 300, 
    textAlign: 'center', 
    fontSize: '12px',
  },
  cardTime:{
    color: 'grey', 
    fontFamily: 'Ubuntu', 
    fontWeight: 300, 
    textAlign: 'center', 
    fontSize: '15px',
  },
  cardTitle:{
    color: 'black', 
    fontFamily: 'Ubuntu', 
    fontWeight: 500, 
    textAlign: 'center', 
    fontSize: '15px',
  },
  cardText:{
    color: 'black', 
    fontFamily: 'Ubuntu', 
    fontWeight: 300, 
    textAlign: 'center', 
    fontSize: '15px',
  },
  resha: {
    maxWidth: 450,
    marginBottom: '5vh',
    backgroundColor: '#445e79'
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important',
      fontSize: '1.4vw'
  },
  button: {
    fontFamily: 'titr',
    textAlign: 'center!important',
    color: '#445e79!important',
    fontSize: '1em'
}
}));
//
export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div style={{ padding: '1em', paddingBottom: '4em'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={15} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol1}
                      title="BedilVol1"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                      <BuyButton text="خرید مجلد اول" link="https://www.amazon.com/gp/offer-listing/B09ZD3C8SW"/>
                      </CardContent>
                  </CardActionArea>
              </Card>

          </Grid>

          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={15} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol2}
                      title="BedilVol2"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                      <BuyButton text="خرید مجلد دوم" link="https://www.amazon.com/gp/offer-listing/B09ZDDC293"/>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>


          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={15} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol3}
                      title="BedilVol3"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                      <BuyButton text="خرید مجلد سوم" link="https://www.amazon.com/gp/offer-listing/B09ZDFS4PF"/>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>

          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={15} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol4}
                      title="BedilVol4"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                      <BuyButton text="خرید مجلد چهارم" link="https://www.amazon.com/dp/0578357828?ref=myi_title_dp"/>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}