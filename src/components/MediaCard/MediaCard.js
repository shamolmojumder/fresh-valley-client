import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './MediaCard.module.css';
import {
    NavBtn,
    NavBtnLink
  } from './Buynow.js';

  

export default function MediaCard(props) {
  
  const {name,price,imageUrl}=props.pd;
  return (
    <Card className={styles.display} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions className={styles.flex}>
      <Typography gutterBottom variant="h5" component="div">
          ${price}
        </Typography>
        <NavBtn>
          <NavBtnLink to='/buynow'>Buy Now</NavBtnLink>
        </NavBtn>
      </CardActions>
    </Card>
  );
}
