import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Elyas from '../Assets/Elyas.jpg'

export default function MultiActionAreaCard() {
  return (
    <Card elevation={6} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={Elyas}
          alt="Elyas Kawish"
        />
        <CardContent>
          <Typography style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 1000, fontSize: '1.9em'}} gutterBottom variant="h5" component="div">
            سید الیاس کاوش
          </Typography>
          <Typography style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 800, fontSize: '1.2em'}} variant="body2" color="text.secondary">
          رئیس انتشارات انسان
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
