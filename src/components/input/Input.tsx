import { Box, Button, Checkbox, Grid, TextField, Typography } from '@mui/material';
import './Input.css'
import React, { ChangeEvent, useEffect, useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';

interface InputProps {
    onInputChange: (value: string) => void;
    listOfWords: any;
  }

const InputGame: React.FC<InputProps> = ({listOfWords, onInputChange}) => {
    const squareButtonStyle = {
        borderRadius: 0,
        padding: '8px 16px'
    };

    const boxStyle = {
        background: '#f0f0f0',
        padding: '8px',
        borderRadius: '8px',
        width: '100px',
        height: '30px',
        fontSize: '8px',
        margin: 0
    };

    const [inputValue, setInputValue] = useState('');
    const [timePassed, setTimePassed] = useState(60);
    const [activeTime, setActiveTime] = useState(false);
    const [words, setWords] = useState(listOfWords);
    const [typedWord, setTypedWord] = useState('');

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;

        if (activeTime) {
            interval = setInterval(() => {
                setTimePassed((tempoAtual) => {
                    if (tempoAtual > 0) {
                        return tempoAtual - 1;
                    } else {
                        setActiveTime(false);
                        return 0;
                    }
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [activeTime]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const textoDigitado = e.target.value;
        handleChange(e)

        setInputValue(textoDigitado);

        if (!activeTime && textoDigitado.trim() !== '') {
            setActiveTime(true);
        }
    };

    const handleInputReset = () => {
        setActiveTime(false)
        setTimePassed(60)
        setInputValue('')
    }

    const formatTime = (time: number) => {
        const min = Math.floor(time / 60)
        const sec = time % 60
        return `${min}:${sec < 10 ? '0' : ''}${sec}`
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const typedValue = event.target.value;
        onInputChange(typedValue);
    };

    return (
        <Box className='customBox'>
            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField
                        label="type"
                        value={inputValue}
                        onChange={handleInputChange}
                        style={{ background: "white", borderRadius: 4 }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" style={squareButtonStyle} onClick={handleInputReset}>
                        <ReplayIcon />
                    </Button>
                </Grid>
                <Grid item xs>
                    <Box style={boxStyle}>
                        <Typography variant="h4">{formatTime(timePassed)}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InputGame;