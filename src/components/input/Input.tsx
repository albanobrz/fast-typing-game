import { Box, Button, Grid } from '@mui/material';
import './Input.css'
import { CheckBox } from '@mui/icons-material';

const Input = () => {
    return (
        <Box className='customBox'>
            <Grid container spacing={3}>
            <Grid item xs>
                <Button>xs</Button>
            </Grid>
            <Grid item xs={6}>
                <CheckBox>xs=6</CheckBox>
            </Grid>
            <Grid item xs>
                <Button>xs</Button>
            </Grid>
            </Grid>
        </Box>
    );
}

export default Input;
