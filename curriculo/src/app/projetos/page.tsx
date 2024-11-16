import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Projetos() {
    return (
        <div>
            <h1 style={{
                textAlign: 'center'
            }}>My Projects</h1>
        <Grid container spacing={2} justifyContent="center" sx={{ padding: 2 }}>
            
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="PsCep.png"
                        title="Imagem do código"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Buscador de CEP
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Projeto feito com ReactJS + JS para buscar CEP's com a API do OpenWeather
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            href='https://github.com/DavidHenrique2106/Buscador_De_Cep'
                        >
                            Ver repositório
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="SpCharts.png"
                        title="Imagem do código"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dashboard com React
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Projeto feito com ReactJS + JS + ApexCharts + Back4app
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            href='https://github.com/DavidHenrique2106/Dashboard_Js'
                        >
                            Ver repositório
                        </Button>
                        <Button
                            href='https://dashboard-js-orcin.vercel.app/'
                            size="small"
                        >
                            Em produção
                        </Button>
                    </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="PsTDS.png"
                        title="Imagem do código"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Desafio tecnico FrontEnd (TDS Company)
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Consumir Api, tratamento de dados e Styles.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            href='https://github.com/DavidHenrique2106/TDS_Desafio'
                        >
                            Ver repositório
                        </Button>
                        <Button
                            href='https://tdsclimate.netlify.app/'
                            size="small"
                        >
                            Em produção
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        </div>
    );
}
