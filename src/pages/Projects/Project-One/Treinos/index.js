import '../../../global.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
export default function Treino(props) {
    const [classButton1, setClassButton1] = useState('no-select')
    const [classButton2, setClassButton2] = useState('no-select')
    const [number, setNumber] = useState()
    const [result, setResult] = useState()
    const [err, setErr] = useState(0)
    return (
        <div>
            <h1>Treino 0{props.treino}</h1>
            <p>{props.description}</p>
            <div className='Código-Demo'>
                <button onClick={() => {
                    setClassButton1('select')
                    setClassButton2('no-select')
                }} className={classButton1}>Código</button>
                <button onClick={() => {
                    setClassButton2('select')
                    setClassButton1('no-select')
                }} className={classButton2}>Demo</button>

                {classButton1 == 'select' &&
                    <div className='image-code'>
                        <img src={props.image} />
                    </div>}
                {classButton2 == 'select' &&
                    <div className='Demo'>
                        <div className='Demo-Request'>
                            {err == 0 && <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={number}
                                variant="standard"
                                onChange={e => setNumber(e.target.value)}
                            />}
                            {err == 1 && <TextField
                                error
                                id="standard-error-helper-text"
                                label="Error"
                                defaultValue={number}
                                value={number}
                                helperText="Número inválido"
                                variant="standard"
                                onChange={e => setNumber(e.target.value)}
                            />}
                            <Button variant="contained" onClick={() => {
                                let a = props.function(number)
                                if (a <= 0) {
                                    setErr(1)
                                    setResult()
                                }
                                else {
                                    setErr(0)
                                    setResult(a)
                                }
                            }}>Calculate</Button>
                        </div>
                        <div className='Demo-Response'>
                            <h1>Response:</h1>
                            <p>{!result ? result : result.toFixed(2)}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}