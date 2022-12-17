import '../../global.scss';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';

export default function Project() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [cargo, setCargo] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [errName, setErrName] = useState(false)
    const [errEmail, setErrEmail] = useState(false)
    const [errNascimento, setErrNascimento] = useState(false)
    const [errCargo, setErrCargo] = useState(false)
    const [errAltura, setErrAltura] = useState(false)
    const [errPeso, setErrPeso] = useState(false)

    function SalvarClick() {
        setErrName(false)
        setErrEmail(false)
        setErrNascimento(false)
        setErrCargo(false)
        setErrAltura(false)
        setErrPeso(false)
        if (!name) {
            setErrName(true)
        }
        if (!email) {
            setErrEmail(true)
        }
        if (!nascimento) {
            setErrNascimento(true)
        }
        if (!cargo) {
            setErrCargo(true)
        }
        if (!altura) {
            setErrAltura(true)
        }
        if (!peso) {
            setErrPeso(true)
        }
        if (name, email, nascimento, cargo, altura, peso) {
            setName('')
            setEmail('')
            setNascimento('')
            setCargo('')
            setAltura('')
            setPeso('')
            return alert('Cadastrado com sucesso')
        }
    }
    return (
        <main className="center-main">
            <Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
                Back
            </Button>
            <h1 style={{ color: "#505050" }}>Validador de Formulário</h1>
            <section className='Form-Validator'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Nome</label>
                    <input className={errName == false ? "big-input" : "input-err"} placeholder='Bruno De Oliveira' value={name} onChange={e => setName(e.target.value)} />
                    <label>Email</label>
                    <input className={errEmail == false ? "big-input" : "input-err"} type="email" placeholder='Informe seu email' value={email} onChange={e => setEmail(e.target.value)} />
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
                            <label>Nascimento</label>
                            <input className={errNascimento == false ? "medium-input" : "medium-input-err"} type="date" value={nascimento} onChange={e => setNascimento(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                            <label>Cargo</label>
                            <select className={errCargo == false ? "medium-input" : "medium-input-err"} style={{ height: "100%" }} value={cargo} onChange={e => setCargo(e.target.value)}>
                                <option value="0" disable select hidden>Informe seu cargo</option>
                                <option value="1">Professor</option>
                                <option value="2">Aluno</option>
                            </select>
                        </div>

                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label>Altura</label>
                                <input className={errAltura == false ? "small-input" : "small-input-err"} type="number" placeholder='Ex: 1,74' value={altura} onChange={e => setAltura(e.target.value)} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label>Peso</label>
                                <input className={errPeso == false ? "small-input" : "small-input-err"} type="number" placeholder='Ex: 81,25' value={peso} onChange={e => setPeso(e.target.value)} />
                            </div>
                        </div>
                        <Button variant="contained" onClick={SalvarClick}>Salvar</Button>
                    </div>
                </div>
            </section>
        </main>
    )
}