import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../index.css";
import truncate from '../constants/truncate';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/actions';

export default function Cards(props) {
    // console.log({price})
    const {title,image,description,price,id} = props;
    const navigate = useNavigate();

    const dispatch = useDispatch()
  return (
    <Card sx={{ maxWidth: 345 ,height: 600 , margin:6}} className="hover:outline" >
             <CardMedia sx={{height :300,}}
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />  
   
      <CardContent sx={{height : 200}}>
        <Typography  gutterBottom variant="h5" component="div">
          {truncate(title,26)}
        </Typography>
        <subheader>
            {price + ' $'}
        </subheader>
        <Typography variant="body2" color="text.secondary">
       {truncate(description,100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' onClick={()=>{
navigate(`/products/${id}`)
        }}>view product</Button>
        <Button size="small" variant='contained' color='success' onClick={()=>{

dispatch(addToCart(props))

        }}>purchase</Button>
      </CardActions>
    </Card>
  );
}