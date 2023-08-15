import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes({ addTocart }) {

    return (
        <Box sx={{ '& button': { m: 0 } }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined" sx={{ width: '170px', color: '#d61337', borderColor: '#d61337', borderRadius: '10px 0px 0px 10px' }}>
                    Interest
                </Button>
                <Button variant="outlined" sx={{ borderColor: '#333', color: '#333', borderRadius: '0' }}>
                    0
                </Button>
                <Button onClick={addTocart} variant="contained" sx={{ backgroundColor: '#d61337', borderRadius: '0px 10px 10px 0px' }}>
                    ADD
                </Button>
            </div>
        </Box>
    );
}