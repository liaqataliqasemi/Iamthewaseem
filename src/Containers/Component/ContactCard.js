import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import LocationCityTwoToneIcon from '@mui/icons-material/LocationCityTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import { Box } from '@material-ui/core';
import ContactForm from './ContactForm';

const useStyles = makeStyles((theme) => ({
    divider: {
        fontFamily: 'titr',
        fontSize: '2.2em',
        color: '#112D4E',
    },
    header1:{
        fontFamily: 'nassim',
        fontSize: '2em',
        fontWeight: 1000,
        padding: '2.5em 0'
    },
    paragraph: {
        fontFamily: 'vazir',
        fontSize: '1.6em',
        fontWeight: 500,
        lineHeight: '4em',
        color: '#3F72AF'
    },
    paragraph1: {
        fontFamily: 'vazir',
        fontSize: '1.6em',
        fontWeight: 500,
        lineHeight: '4em',
        color: '#3F72AF',
        direction: 'ltr!important',
        textAlign: 'left',
    },
    paragraph2: {
        fontFamily: 'vazir',
        fontSize: '1.2em',
        fontWeight: 500,
        lineHeight: '4em',
        textAlign: 'center'
    },
    footercontainer2:{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontfamily: 'Vazir',
        fontSize: '1.2em',
    },
    wrapIcon: {
      alignItems: "center",
      display: "flex",
      fontFamily: 'nassim',
      fontSize: '2.5em',
      fontWeight: 1000,
      lineHeight: '2em',
      color: '#112D4E',
    },
  }));

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },

}));

export default function VerticalDividerText() {
  const classes = useStyles(); 
  return (
    <div>
      <Grid container>
        <Grid item xs>
          <Box sx={{ textOverflow: 'ellipsis' }}>
              <p className={classes.wrapIcon} >
                <LocationCityTwoToneIcon style={{ fontSize: '1.4em'}}/> - 
                  آدرس
              </p>
              <p className={classes.paragraph}>
              .Waltham, Massachusetts 02451 U.S
              </p>
              <p className={classes.wrapIcon}>
              <CallTwoToneIcon style={{ fontSize: '1.4em'}}/> -
              شماره تماس      
              </p>
              <a href="tel:781-209-2676">
                  <p className={classes.paragraph1}>
                  +1 (781) 209-2676 
                  </p> 
              </a>
              <p className={classes.wrapIcon}>
                <EmailTwoToneIcon style={{ fontSize: '1.4em'}}/> -
              پست الکترونیک      
              </p>
              <a href="mailto: info@ensanpublishers.com">
                  <p className={classes.paragraph}>
                  info@ensanpublishers.com
                  </p> 
              </a>
          </Box>
        </Grid>
        <Divider className={classes.divider} orientation="vertical" flexItem>
          انتشارات انسان
        </Divider>
        <Grid item xs >
          {/* <div style={{justifyContent: 'center'}}>
              <a href="/"><img src={logos} alt="logo" height='80vh' width = 'auto' style={{flex: 1}}/>&nbsp;</a>     
          </div> */}
          <ContactForm/>
        </Grid>
      </Grid>
    </div>
  );
}


