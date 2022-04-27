import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Alert from '../Component/Alert';
import BookCard from '../Component/BookCard'

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
  header:{
    fontFamily: 'nassim',
    fontSize: '2em',
    fontWeight: 1000,
    lineHeight: '2em'
},
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.h1}>گالری کتاب ها</h1>
      <div className={classes.root}>
      <Alert/>
        <Grid className={classes.gridSpace} container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <p className={classes.header}>
                علاقه‌مندان به‌هدف دریافت هریکی از مجلدات اثر  انسان شناختی بیدل به صفحه‌ی خرید کتاب مراجعه بفرمایند.
                </p>
                <BookCard/>
            </Grid>
        </Grid>
      </div>
    </div>
   );    
}