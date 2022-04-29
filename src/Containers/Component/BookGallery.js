import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Ayeen from '../Assets/BooksCover/AyeenZahidFront.jpeg';
import bidel1 from '../Assets/BooksCover/Bidel1.jpg'
import bidel2 from '../Assets/BooksCover/Bidel2.jpg'
import bidel3 from '../Assets/BooksCover/Bidel3.JPG'
import bidel4 from '../Assets/BooksCover/Bidel4.jpg'
import Daramadi from '../Assets/BooksCover/Daramadi.jpg'
import Didgah from '../Assets/BooksCover/Didgah.jpeg'
import Erfan from '../Assets/BooksCover/Erfan.jpeg'
import Majmo from '../Assets/BooksCover/Majmo.jpg'
import Manteq from '../Assets/BooksCover/Manteq.jpeg'
import Nazaria from '../Assets/BooksCover/Nazaria.jpg'
import Rohe from '../Assets/BooksCover/Rohe.jpeg';


const BooksPhotos = [ 
    {
        Title: "Ayeen",
        Picture: {Ayeen}
    },
    {
        Title: "bidel1",
        Picture: {bidel1}
    },
    {
        Title: "bidel2",
        Picture: {bidel2}
    },
    {
        Title: "bidel3",
        Picture: {bidel3}
    },
    {
        Title: "bidel4",
        Picture: {bidel4}
    },
    {
        Title: "Daramadi",
        Picture: {Daramadi}
    },
    {
        Title: "Didgah",
        Picture: {Didgah}
    },
    {
        Title: "Erfan",
        Picture: {Erfan}
    },
    {
        Title: "Majmo",
        Picture: {Majmo}
    },
    {
        Title: "Manteq",
        Picture: {Manteq}
    },
    {
        Title: "Nazaria",
        Picture: {Nazaria}
    },
    {
        Title: "Rohe",
        Picture: {Rohe}
    },
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1em 0em',
    backgroundColor: 'white'
  },
  resha: {
    maxWidth: 345,
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important'
  }
}));

export default function AutoGrid(props) {
  const classes = useStyles();
  const GetCovers = (props) => {
    return BooksPhotos.slice(props.a, props.b).map(({ Title, Picture }) => {
        return (
                <div style={{ padding: '1em', paddingBottom: '4em'}}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
                            <Grid item xs={12} sm={4} md={2}>
                                <Card className={classes.resha}>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height= "400vh"
                                        width= "auto"
                                        image={Picture}
                                        title={Title}
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
        )
    })
  };
  return(
    <div>
        <GetCovers a={0} b={2}/>
    </div>)
  
};