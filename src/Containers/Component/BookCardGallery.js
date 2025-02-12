import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import BedilVol2 from '../Assets/BedilVol2.jpg';
import BedilVol3 from '../Assets/BedilVol3.jpg';
import BedilVol1 from '../Assets/BedilVol1.jpg';
import BedilVol4 from '../Assets/BedilVol4.jpg';

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
    marginBottom: '5vh'
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important',
      fontSize: '1.4vw'
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
                    <a href="/Ensan_shinakhti_part_one" className={classes.cityname}>
                        <CardMedia
                        component="img"
                        alt="BedilVol1"
                        image= {BedilVol1}
                        title="BedilVol1"
                        />
                        </a>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Card className={classes.resha}>
                        <a href="/Ensan_shinakhti_part_two" className={classes.cityname}>
                        <CardMedia
                        component="img"
                        alt="BedilVol2"
                        image= {BedilVol2}
                        title="BedilVol2"
                        />
                        </a>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Card className={classes.resha}>
                        <a href="/Ensan_shinakhti_part_three" className={classes.cityname}>
                        <CardMedia
                        component="img"
                        alt="BedilVol3"
                        image= {BedilVol3}
                        title="BedilVol3"
                        />
                        </a> 
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Card className={classes.resha}>
                        <a href="/Ensan_shinakhti_part_four" className={classes.cityname}>
                        <CardMedia
                        component="img"
                        alt="BedilVol4"
                        image= {BedilVol4}
                        title="BedilVol4"
                        />
                        </a> 
                </Card>
            </Grid>
        </Grid>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
          <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
            <Grid item xs={12} sm={4} md={2}>
                <Card className={classes.resha}>
                    <a href="/Ensan_shinakhti_part_one" className={classes.cityname}>
                        <CardMedia
                        component="img"
                        alt="BedilVol1"
                        image= {BedilVol1}
                        title="BedilVol1"
                        />
                        </a>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Card className={classes.resha}>
                        <a href="/Ensan_shinakhti_part_two" className={classes.cityname}>
                        <CardMedia
                        component="img"
                        alt="BedilVol2"
                        image= {BedilVol2}
                        title="BedilVol2"
                        />
                        </a>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Card className={classes.resha}>
                        <a href="/Ensan_shinakhti_part_three" className={classes.cityname}>
                        <CardMedia
                        component="img"
                        alt="BedilVol3"
                        image= {BedilVol3}
                        title="BedilVol3"
                        />
                        </a> 
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Card className={classes.resha}>
                        <a href="/Ensan_shinakhti_part_four" className={classes.cityname}>
                        <CardMedia
                        component="img"
                        alt="BedilVol4"
                        image= {BedilVol4}
                        title="BedilVol4"
                        />
                        </a> 
                </Card>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}