import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Elyas from '../Assets/Elyas.jpg'
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";

export default function MultiActionAreaCard() {
  const [texts, setTexts] = useState([]);
  const fetchData =() => {
      fetch('http://127.0.0.1:8000/api/about', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
      .then(response => response.json())
      .then(data =>{
          console.log(data)
          setTexts(data)
      } );
  }
  useEffect(() => {
      // GET request using fetch inside useEffect React hook
      fetchData()
  }, []);
  const getAboutText = () => {
    return(
        <div>
            {texts.map((data, index) => (
              <div>
                <Typography style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 1000, fontSize: '1.9em'}} gutterBottom variant="h5" component="div">
                {data.ceo}
                </Typography>
                <Typography style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 800, fontSize: '1.2em'}} variant="body2" color="text.secondary">
                {data.position}
                </Typography>
              </div>
            ))}
        </div>
    )
  }
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
            {getAboutText()}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
