import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <a href={props.link} >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={props.aks}
            alt="aks asta dga che muni?"
          />
          <CardContent>
            <Typography style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 1000, fontSize: '1.9em'}} gutterBottom variant="h5" component="div" >
            {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}
