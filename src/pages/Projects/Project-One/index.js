import '../../global.scss';
import { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Treinos from './Treinos'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DobroFunction from '../../../Assets/Prints/DobroFunction.png'
import RaizFunction from '../../../Assets/Prints/RaizFunction.png'

export default function Project() {
    const [page, setPage] = useState(0)
    const navigate = useNavigate()
    return (
        <main className="center-main">
            <section>
                {page == 0 &&
                    <div>
                        <Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
                            Back
                        </Button>
                        <h1>Select a training:</h1>
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button onClick={() => setPage(1)}>First</Button>
                            <Button onClick={() => setPage(2)}>Second</Button>
                        </ButtonGroup>
                    </div>}
                {page == 1 && <div>
                    <Button onClick={() => setPage(0)} startIcon={<ArrowBackIcon />}>
                        Back
                    </Button>
                    <Treinos
                        treino={page}
                        description="Função que retorna o dobro do número escolhido."
                        image={DobroFunction}
                        function={
                            (number) => {
                                return number * 2
                            }}
                    />
                </div>}
                {page == 2 && <div>
                    <Button onClick={() => setPage(0)} startIcon={<ArrowBackIcon />}>
                        Back
                    </Button>
                    <Treinos
                        treino={page}
                        description="Função que retorna a raiz do número escolhido."
                        image={RaizFunction}
                        function={
                            (number) => {
                                return Math.sqrt(number)
                            }}
                    />
                </div>}
            </section>
        </main>
    )
}