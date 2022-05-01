import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import image1 from '../Assets/1.jpg';
import image2 from '../Assets/2.jpg';
import image3 from '../Assets/3.jpg';
import image4 from '../Assets/4.jpg';

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
    maxWidth: '45vw',
    height: '45vh'
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important',
      fontSize: '1.2em'
  }
}));
//
export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div style={{ padding: '1em', paddingBottom: '4em'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
        <Grid item xs={12} sm={6} md={5} lg={5}>
            <Card>
              <CardMedia
              component="img"
              height= "400vh"
              image= {image1}
              />
              <CardContent>
              <Typography  className={classes.cityname} gutterBottom variant="h5" component="h5">
              استاد کاوش، پوهنتون کابل، افغانستان، 1363/1984
              </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={5}>
            <Card>
              <CardMedia
              component="img"
              height= "400vh"
              image= {image2}
              />
              <CardContent>
              <Typography  className={classes.cityname} gutterBottom variant="h5" component="h5">
              استاد کاوش، کتاب‌خانۀ کانون فرهنگی حکیم ناصرخسرو بلخی، پلخمری، افغانستان، 1372/1993
              </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={5}>
            <Card>
              <CardMedia
              component="img"
              height= "400vh"
              image= {image3}
              />
              <CardContent>
              <Typography  className={classes.cityname} gutterBottom variant="h5" component="h2">
              استاد کاوش، ریاست کانون فرهنگی حکیم ناصرخسرو بلخی، پلخمری، افغانستان، 1372/1993
              </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={5}>
            <Card>
              <CardMedia
              component="img"
              height= "400vh"
              image= {image4}
              />
              <CardContent>
              <Typography  className={classes.cityname} gutterBottom variant="h5" component="h2">
              استاد کاوش، محفل دفاع دکترا، آکادمی علوم تاجیکستان، دوشنبه، تاجیکستان، 1377/1998
              </Typography>
              </CardContent>
            </Card>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}