import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function CardCategory({animal}) {
  let [name, url, desc] = [animal.name, animal.url, animal.desc]
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card sx={{ width: '100%', height: '100%' }}>
        <CardMedia
          sx={{ height: '25vh' }}
          image={url}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}