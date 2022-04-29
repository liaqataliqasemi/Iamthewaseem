import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContactCard from '../Component/ContactCard';
// eslint-disable-next-line
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 1em',
    background: '#F9F7F7'
  },
  paper: {
    padding: theme.spacing(12),
    textAlign: 'justify',
  },
  h1:{
    fontFamily: 'titr',
    padding: '0.2em 2em',
    textAlign: 'center',
    fontSize: '2.6em',
    color: '#112D4E'
  },
  para: {
    fontFamily: 'ubuntu',
    lineHeight: '2.4em',
    textAlign: 'justify',
    fontSize: '16px',
    fontWeight: 300
  },
  header1:{
    fontFamily: 'nassim',
    fontSize: '2em',
    fontWeight: 1000,
    padding: '2.5em 0'
},
paragraph2: {
  fontFamily: 'vazir',
  fontSize: '0.8em',
  fontWeight: 500,
  lineHeight: '2em',
  textAlign: 'center'
},
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.h1}>تماس با انتشارات انسان</h1>
      <div className={classes.root}>
        <Paper style={{backgroundColor: '#F9F7F7', margin: '0 2vw', padding: '2em'}} elevation={12} container>
          <Grid className={classes.gridSpace} container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <ContactCard/>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
   );    
}