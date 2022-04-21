import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Drawer, MenuItem, Link} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';
import Divider from '@material-ui/core/Divider';
import MenuIcon from "@material-ui/icons/MenuOpenRounded";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './Header.css';
import logos from './logos.jpg';

function Copyright() {
  return (
    <Typography variant="inherit">
      {'©  '}
      {' '}
      {new Date().toLocaleDateString('fa-IR')} {' '} Ensan Publishers 
    </Typography>
  );
};

//Styles for components
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontFamily: 'titr',
      textTransform: 'unset!important',
    },
  },
  header: {
    backgroundColor: "#fff",
    "@media (max-width: 900px)": {
    paddingLeft: 0,
    },
  },
  drawerContainer: {
    paddingLeft: "15px",
  },
  paper: {
    width: '100vw'
  },
  menuItem: {
    marginRight: 'auto',
    padding: 0,
    textTransform: 'unset!important',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: "vazir",
    fontWeight: 400,
    fontSize: 13,
    paddingBottom: '14px'
  },
  menuItem1: {
    marginRight: 'auto',
    padding: 0,
    textTransform: 'unset!important',
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: "titr",
    fontWeight: 400,
    fontSize: 16,
    paddingBottom: '14px'
  },
  subtitles: {
    fontFamily: "titr",
    fontWeight: 300,
    fontSize: '12px'
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function ElevateAppBar(props) {
  
  const { header,  drawerContainer, paper, root, menuItem, menuItem1} = useStyles();
  
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })

const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

 //Desktop display
  const displayDesktop = () => {
    return (
    <Toolbar>
    <div>
      <a href="/"><img src={logos} alt="logo" height='50vh' width = 'auto' style={{flex: 1}}/>&nbsp;</a>     
    </div>
{/* menu tabs */}
    <div className='titr' style={{paddingRight: '3vw'}}>
        <div className="dropdown">
            <button className="dropbtn">کتاب ها</button>
                <div className="dropdown-content">
                        <a className='vazir' href="/Ensan_shinakhti_part_one">انسان‌شناختی بیدل مجلد اول</a>   
                        <a className='vazir' href="/Ensan_shinakhti_part_two">انسان‌شناختی بیدل مجلد دوم</a>
                        <a className='vazir' href="/Ensan_shinakhti_part_three">انسان‌شناختی بیدل مجلد سوم</a>
                        <a className='vazir' href="/Ensan_shinakhti_part_four">انسان‌شناختی بیدل مجلد چهارم</a> 
                </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">نویسنده</button>
                <div className="dropdown-content">
                        <a className='vazir' href="/Author">دکتر سید نورالحق کاوش</a>                           
                </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">خرید کتاب</button>
            <div className="dropdown-content">
                        <a className='vazir' href="/Amazon">خرید کتاب از آمازون</a>
                        <a className='vazir' href="/PayPal">خرید کتاب با پی‌پال</a>
                </div>
        </div>
        <div className="dropdown">
            <a  href="/AboutUs" className="dropbtn">درباره‌ی ما</a>
        </div>
        <div className="dropdown">
            <a href="/ContactUs" className="dropbtn">تماس با ما</a>
        </div>
    </div>
    </Toolbar>
    );
    };
  //Mobile display 
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    
    
      return (
        <div>
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "default",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon style={{color: '#023B59'}}/>
          </IconButton>
        {/* Drawer Design */}
          <Drawer 
                {...{
                  anchor: "left",
                  open: drawerOpen,
                  onClose: handleDrawerClose,
                  classes: {paper},
                }} 
              >
              <div style={{display: 'flex'}}>
              <div>
                     
              </div>
              <div className='center'>
                <a href="/"><img src={logos} alt="logo" height='40' width = 'auto' marginLeft= 'auto' marginRight= 'auto'/>&nbsp;</a>
              </div>
              <IconButton style={{marginRight: 'auto'}}
                    {...{
                      edge: "start",
                      color: "default",
                      "aria-label": "close",
                      "aria-haspopup": "true",
                      onClick: handleDrawerClose,
                    }}>
                  <CloseIcon style={{color: '#023B59'}}/>
              </IconButton>
              </div>
              <Divider variant="middle" />
              <Typography style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto'}}>کتاب ها</Typography>
                <div className={drawerContainer}>
                  <a className={menuItem} href="/Ensan_shinakhti_part_one">انسان‌شناختی بیدل مجلد اول<ChevronLeftIcon style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                  <a className={menuItem} href="/Ensan_shinakhti_part_two">انسان‌شناختی بیدل مجلد دوم<ChevronLeftIcon style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                  <a className={menuItem} href="/Ensan_shinakhti_part_three">انسان‌شناختی بیدل مجلد سوم<ChevronLeftIcon  style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                  <a className={menuItem} href="/Ensan_shinakhti_part_four">	انسان‌شناختی بیدل مجلد چهارم<ChevronLeftIcon style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                </div> 
              <Divider variant="middle" />  
              <Typography style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto'}}>نویسنده</Typography>
                <div className={drawerContainer}>
                  <a className={menuItem} href="/Author">دکتر سید نورالحق کاوش<ChevronLeftIcon  style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                </div>
              <Divider variant="middle" />  
              <Typography style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto'}}>خرید کتاب</Typography>
                <div className={drawerContainer}>
                  <a className={menuItem} href="/Amazon">خرید کتاب از آمازون<ChevronLeftIcon  style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                  <a className={menuItem} href="/PayPal">	خرید کتاب با پی‌پال<ChevronLeftIcon  style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                </div>
              <Divider variant="middle" /> 
                <a style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto'}} href="/AboutUs">
                  <Typography style={{fontFamily: 'titr', color: '#023B59', marginLeft: 'auto'}}>درباره‌ی ما</Typography>
                </a>
                <Divider variant="middle" /> 
                <a style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto'}} href="/ContactUs">
                  <Typography style={{fontFamily: 'titr', color: '#023B59', marginLeft: 'auto'}}>تماس با ما</Typography>
                </a>
                <Divider variant="middle" /> 
                <Typography style={{fontFamily: 'nassim', color: '#023B59', padding: '5px 15px', marginLeft: 'auto'}}>کلیه حقوق این ویب سایت متعلق به انتشارات انسان می‌باشد.</Typography>
          </Drawer>
              <a href="/"><img src={logos} alt="logo" height='50vh' width = 'auto' /></a> &nbsp;
        </Toolbar>
        </div>
      );
    };
    return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
