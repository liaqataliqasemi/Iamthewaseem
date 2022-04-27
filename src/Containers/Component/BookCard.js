import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SantaClara from '../Assets/SantaClara.jpg';
import SanJose from '../Assets/SanJose.jpg';
import Sacramento from '../Assets/Sacramento.jpg';
import Fresno from '../Assets/Fresno.jpg';

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
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important'
  }
}));
//
export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div style={{ padding: '1em', paddingBottom: '4em'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
        <Grid item xs={12} sm={4} md={2}>
            <Card className={classes.resha}>
            
                <CardActionArea>
                <a href="/Ensan_shinakhti_part_one" className={classes.cityname}>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height= "Auto"
                    image= {Sacramento}
                    title="Sacramento"
                    />
                    <CardContent>
                    <Typography  className={classes.cityname} gutterBottom variant="h5" component="h2">
                    جلد اول
                    </Typography>
                    </CardContent>
                    </a>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
            <Card className={classes.resha}>
                <CardActionArea>
                    <a href="/Ensan_shinakhti_part_two" className={classes.cityname}>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height= "Auto"
                    image= {SantaClara}
                    title="Santa Clara"
                    />
                    <CardContent>
                    <Typography  className={classes.cityname} gutterBottom variant="h5" component="h2">
                    جلد دوم
                    </Typography>
                    </CardContent>
                    </a>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
            <Card className={classes.resha}>
                <CardActionArea>
                    <a href="/Ensan_shinakhti_part_three" className={classes.cityname}>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height= "Auto"
                    image= {SanJose}
                    title="San Jose"
                    />
                    <CardContent>
                    <Typography  className={classes.cityname} gutterBottom variant="h5" component="h2">
                    جلد سوم
                    </Typography>
                    </CardContent>
                    </a> 
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
            <Card className={classes.resha}>
                <CardActionArea>
                    <a href="/Ensan_shinakhti_part_four" className={classes.cityname}>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height= "Auto"
                    image= {Fresno}
                    title="Roseville"
                    />
                    <CardContent>
                    <Typography  className={classes.cityname} gutterBottom variant="h5" component="h2">
                    جلد چهارم
                    </Typography>
                    </CardContent>
                    </a> 
                </CardActionArea>
            </Card>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}