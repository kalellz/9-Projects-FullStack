import '../../global.scss';
import { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Project() {
    const navigate = useNavigate()
    const [counter, setCounter] = useState(0)
    return (
        <main className="center-main">
            <section className='simple-counter'>
                <Button variant="contained" onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
                    Back
                </Button>
                <div className='simple-counter-content'>
                    <h1>Contador Simples</h1>
                    <div className='counter'>
                        <ExpandLessIcon color="primary" className='arrow' onClick={() => setCounter(counter+1)}/>
                        <h1>{counter}</h1>
                        <ExpandMoreIcon color="primary" className='arrow' onClick={() => setCounter(counter-1)}/>
                    </div>
                </div>
            </section>
        </main>
    )
}