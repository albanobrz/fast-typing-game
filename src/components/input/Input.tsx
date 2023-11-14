import { Box, Button, Checkbox, Grid, Typography } from '@mui/material';
import './Input.css'
import { CheckBox } from '@mui/icons-material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import React, { useState } from 'react';
import Input from '@mui/material/Input';
import TextField from './textfield/TextField'
import ReplayIcon from '@mui/icons-material/Replay';

const textValue = "salve"



const InputGame = () => {
    const squareButtonStyle = {
        borderRadius: 0,
        padding: '8px 16px'
    };

    const boxStyle = {
        background: '#f0f0f0', 
        padding: '16px', 
        borderRadius: '8px', 
        width: '50%', // Largura total do pai
    };

    return (
        <Box className='customBox'>
            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" style={squareButtonStyle}>
                        <ReplayIcon />
                    </Button>
                </Grid>
                <Grid item xs>
                <Box style={boxStyle}>
                    <Typography variant="h4">Tempo: 10 segundos</Typography>
                </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InputGame;