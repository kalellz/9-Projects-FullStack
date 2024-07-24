import '../../global.scss';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
export default function Project() {
    const navigate = useNavigate()
    const [counter, setCounter] = useState(24)
    return (
        <main className="center-main">
            <section className='simple-counter'>
                <Button variant="contained" onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
                    Back
                </Button>
                <div className='conditioning-content'>
                    <h1>Ar-condicionado ({counter}º)</h1>
                    <div className='conditioning'>
                        <div className="conditioning-icons">
                            <AddCircleRoundedIcon color='primary' sx={{ fontSize: 60 }} onClick={() => setCounter(counter + 1)} />
                            <DoNotDisturbOnRoundedIcon color='primary' sx={{ fontSize: 60 }} onClick={() => setCounter(counter - 1)} />
                        </div>
                        {counter >= -20 && counter <= 20 && <h1>Temperatura Fria</h1>}
                        {counter > 20 && counter <= 26 && <h1>Temperatura Ambiente</h1>}
                        {counter > 26 && counter <= 40 && <h1>Temperatura Quente</h1>}
                        {counter <= -21 && <h1><span>Temperatura Inválida</span></h1>}
                        {counter >= 41 && <h1><span>Temperatura Inválida</span></h1>}
                    </div>
                </div>
            </section>
        </main>
    )
}