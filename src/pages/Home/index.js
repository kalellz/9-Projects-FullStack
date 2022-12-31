import '../global.scss';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function Home() {
    const navigate = useNavigate()
    const ref = useRef(null)
    const [carregando, setCarregando] = useState(false);
    return (
        <main className="center-main">
            <LoadingBar color='#3f50b5' ref={ref} />
            <section>
                <h1>Projects:</h1>
                <div>
                    <ButtonGroup variant="outlined" aria-label="outlined button group" orientation="vertical">

                        <Button disabled={carregando} onClick={() => {
                            setCarregando(true);
                            ref.current.complete();
                            setTimeout(() => { navigate('/Projects/1') }, 1250)
                        }}
                        >One: Session Resolution</Button>

                        <Button disabled={carregando} onClick={() => {
                            setCarregando(true);
                            ref.current.complete();
                            setTimeout(() => { navigate('/Projects/2') }, 1250)
                        }}
                        >Two: Simple Counter</Button>

                        <Button disabled={carregando} onClick={() => {
                            setCarregando(true);
                            ref.current.complete();
                            setTimeout(() => { navigate('/Projects/3') }, 1250)
                        }}
                        >Three: Air Conditioning</Button>

                        <Button disabled={carregando} onClick={() => {
                            setCarregando(true);
                            ref.current.complete();
                            setTimeout(() => { navigate('/Projects/4') }, 1250)
                        }}
                        >Four: Form Validator</Button>

                        <Button disabled={carregando} onClick={() => {
                            setCarregando(true);
                            ref.current.complete();
                            setTimeout(() => { navigate('/Projects/5') }, 1250)
                        }}
                        >Five: Quizz App</Button>
                        <Button disabled={carregando}>Six</Button>
                        <Button disabled={carregando}>Seven</Button>
                        <Button disabled={carregando}>Eight</Button>
                        <Button disabled={carregando}>Nine</Button>
                    </ButtonGroup>
                </div>
            </section>
        </main>
    )
}