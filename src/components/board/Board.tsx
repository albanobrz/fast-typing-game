import './Board.css'
import InputGame from '../input/Input'
import Stack from '@mui/material/Stack';


const Board = () => {
    return (
        <div className='wrapper'>
            <Stack>
                <div className="textbox">
                    <div className="words">
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>teste</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                        <span>palavra</span>
                    </div>
                </div>
                <InputGame />
            </Stack>
        </div>
    );
}

export default Board;
