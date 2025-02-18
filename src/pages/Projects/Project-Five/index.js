import '../../global.scss';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import Questions from './questions';

export default function Project() {
    const navigate = useNavigate()
    return (
        <main className="center-main">
            <Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
                Back
            </Button>
           <Questions/>
        </main>
    )
}