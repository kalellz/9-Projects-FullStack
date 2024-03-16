import '../../global.scss';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function Home() {
    return (
        <main className="center-main">
            <section>
                <div>
                    <h1>
                        Busca em registros
                    </h1>
                    <input>Buscar Itens</input>
                </div>
                <div>
                    
                </div>
            </section>
        </main>
    )
}