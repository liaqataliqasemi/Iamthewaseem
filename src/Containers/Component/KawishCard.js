import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ostad from '../Assets/ostad.jpg'

export default function MultiActionAreaCard() {
  return (
    <Card elevation={6} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="400vh"
          image={ostad}
          alt="Noorul Haq Kawish"
        />
        <CardContent>
           <Typography style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 1000, fontSize: '1.9em'}} gutterBottom variant="h5" component="div">
           استاد دکتر سید نورالحق کاوش  
          </Typography>
        </CardContent>
    </Card>
  );
}
