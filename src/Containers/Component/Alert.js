import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    para: {
        fontFamily: 'vazir',
        lineHeight: '2.4em',
        textAlign: 'justify',
        fontSize: '16px',
        fontWeight: 300,
        color: 'black'
      },
      cookieAlert: {
      "& .MuiAlert-icon": {
        fontSize: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black!important'
      }
    }
  });

export default function BasicAlerts() {
    const classes = useStyles();
  return (
    <Stack sx={{ width: '100%', "& .MuiAlert-filled":{
        backgroundColor: '#D3DEDC'
    } }} spacing={2}>
      <Alert className={classes.cookieAlert} variant="filled" severity="warning">
        <p className={classes.para}>
                مجلدات انسان‌شناختی بیدل تنها و تنها از طریق انتشارات انسان قابل دریافت
                است. حق چاپ، نشر یا توزیع انسان‌شناختی بیدل به‌ انتشارات انسان تعلق دارد.
                علاقه‌مندان به‌ هدف دریافت هریکی از مجلدات این‌ اثر به وب‌‌سایت انتشارات
                انسان مراجعه بفرمایند.
        </p>
      </Alert>
    </Stack>
  );
}