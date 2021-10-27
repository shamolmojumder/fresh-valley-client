import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './MediaCard.module.css';
import {
    NavBtn,
    NavBtnLink
  } from './Buynow.js';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions className={styles.flex}>
      <Typography gutterBottom variant="h5" component="div">
          $295
        </Typography>
        <NavBtn>
          <NavBtnLink to='/buynow'>Buy Now</NavBtnLink>
        </NavBtn>
      </CardActions>
    </Card>
  );
}
