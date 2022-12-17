import notFound from '../Assets/notfound.svg'
import { Grid } from '@mui/material';
export default function NotFound() {
    return (
        <main className='center-main'>
            <Grid container width='25%' style={{display: 'flex', justifyContent: "space-around", alignItems: "center", textAlign: "center" }}>
                <img src={notFound} />
                <div>
                    <h1>404</h1>
                    <p>Está pagina não existe</p>
                </div>
            </Grid>
        </main>
    )
}