import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const ServiceCard = ({data}) => {
    const {picture,title,subtitle}= data;
   
    return (
        <section>
          
             <Card sx={{ maxHeight: 645 }}>
      <CardActionArea>
        <CardMedia
        sx={{ maxHeight: 200 }}
          component="img"
          
          image={picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </section>
    );
};

export default ServiceCard;