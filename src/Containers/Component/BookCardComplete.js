import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BedilVol2 from '../Assets/BedilVol2.jpg';
import BedilVol3 from '../Assets/BedilVol3.jpg';
import BedilVol1 from '../Assets/BedilVol1.jpg';
import BedilVol4 from '../Assets/BedilVol4.jpg';
import BedilVol22 from '../Assets/BedilVol22.jpg';
import BedilVol32 from '../Assets/BedilVol32.jpg';
import BedilVol12 from '../Assets/BedilVol12.jpg';
import BedilVol41 from '../Assets/BedilVol41.jpg';
import Button from '@mui/material/Button';

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
    maxWidth: 345,
    marginBottom: '5vh',
    backgroundColor: '#445e79',
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important',
      fontSize: '1vw'
  },
  button: {
    fontFamily: 'titr',
    textAlign: 'center!important',
    color: '#005691!important',
    fontSize: '1em'
  },
  buttonenglish: {
    fontFamily: 'vazir',
    textAlign: 'center!important',
    color: '#005691!important',
    fontSize: '1em',
    fontWeight: 1000
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
              <Card elevation={5} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol1}
                      title="BedilVol1"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                      <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href="/Ensan_shinakhti_vol_one">
                          <Typography  className={classes.button}>
                          مجلد اول
                          </Typography> 
                      </Button>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={5} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol12}
                      title="BedilVol12"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                        <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href="/Ensan_shinakhti_vol_one">
                            <Typography  className={classes.buttonenglish}  variant="h5" component="h5">
                           Volume 1
                            </Typography> 
                        </Button>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={5} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol2}
                      title="BedilVol2"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                        <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href="/Ensan_shinakhti_vol_two">
                            <Typography  className={classes.button}  variant="h5" component="h5">
                            مجلد دوم
                            </Typography> 
                        </Button>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={5} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol22}
                      title="BedilVol22"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                        <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href="/Ensan_shinakhti_vol_two">
                            <Typography  className={classes.buttonenglish}  variant="h5" component="h5">
                            Volume 2
                            </Typography> 
                        </Button>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
        </Grid>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={5} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol3}
                      title="BedilVol3"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                        <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href="/Ensan_shinakhti_vol_three">
                            <Typography  className={classes.button}  variant="h5" component="h5">
                            مجلد سوم
                            </Typography> 
                        </Button>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={5} className={classes.resha}>
                  <CardActionArea>  
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol32}
                      title="BedilVol2"
                      />
                        <CardContent style={{display:'flex', justifyContent: 'center'}}>
                        <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href="/Ensan_shinakhti_vol_three">
                            <Typography  className={classes.buttonenglish}  variant="h5" component="h5">
                            Volume 3
                            </Typography> 
                        </Button>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={5} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol4}
                      title="BedilVol4"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                        <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href="/Ensan_shinakhti_vol_four">
                            <Typography  className={classes.button}  variant="h5" component="h5">
                            مجلد چهارم
                            </Typography> 
                        </Button>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={2}>
              <Card elevation={5} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {BedilVol41}
                      title="BedilVol41"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                        <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href="/Ensan_shinakhti_vol_four">
                            <Typography  className={classes.buttonenglish}  variant="h5" component="h5">
                            Volume 4
                            </Typography> 
                        </Button>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}