import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ButtonSizes from './button';
import { productList } from '../products';

export default function ActionAreaCard({ item, addTocart }) {
    console.log(productList);

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="sicula"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', justifyContent: 'space-between' }}>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                    </Typography>
                    <ButtonSizes addTocart={addTocart} />
                </CardContent>
            </CardActionArea>

        </Card>
    );
}
