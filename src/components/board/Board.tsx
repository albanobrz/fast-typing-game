import './Board.css'
import InputGame from '../input/Input'
import Stack from '@mui/material/Stack';
import { useState } from 'react';


const Board = () => {
    // const ListOfWords = ['teste', 'apartamento', 'computador', 'digitar', 'fakenatty', 'chatgpt', 'Nerdola', 'experimento', 'não', 'vovó', 'teclado', 'justiça', 'cotonete', 'jogo', 'dado', 'rodar', 'Fábio', 'mês', 'dia']

    const [typedWord, setTypedWord] = useState('')

    const listOfWords = ['teste', 'apartamento', 'computador', 'digitar', 'fakenatty', 'chatgpt', 'Nerdola', 'experimento', 'não', 'vovó', 'teclado', 'justiça', 'cotonete']

    const generateListOfWords = () => {
        return listOfWords
    }

    const handleInputChange = (value: string) => {
        setTypedWord(value);
    };

    console.log(typedWord)

    return (
        <div className='wrapper'>
            <Stack>
                <div className="textbox">
                    <div className="words">
                        <span>{listOfWords.join(' ')}</span>
                    </div>
                </div>
                <InputGame listOfWords={generateListOfWords()} onInputChange={handleInputChange} />
            </Stack>
        </div>
    );
}

export default Board;
