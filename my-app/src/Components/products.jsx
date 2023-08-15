import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ActionAreaCard from './cardproduct';
import { productList } from '../products';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ColumnsGrid({ addTocart }) {
    return (
        <Box sx={{ flexGrow: 1, margin: '50px auto', width: ' 90%' }}>
            <Grid container spacing={2} columns={16}>
                {productList.map((item, index) => (
                    <Grid xs={4} key={index}>
                        <Item>
                            <ActionAreaCard addTocart={()=>addTocart(item)} item={item} />
                        </Item>
                    </Grid>
                ))}


            </Grid>
        </Box>
    );
}
