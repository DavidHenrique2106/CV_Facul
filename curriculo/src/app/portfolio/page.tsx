'use client'

import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Header from "../header/page"
import Projetos from "../projetos/page";
import Sobre from "../sobre/page"


interface Github {
    id: number;
    name: string;
    bio: string;
    avatar_url: string;
    created_at: string | null;
    location: string | null;
    public_repos: number;
    followers: number;
}


const EuGithub = () => {
    const [eu, setEu] = useState<Github | null>(null);
    const [carregar, setCarregar] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/davidhenrique2106');
                setEu(response.data);
            } catch (error) {
                console.log("Erro ao pegar meus dados", error);
            } finally {
                setCarregar(false);
            }
        };
        fetchData();
    }, []);

    if (carregar) {
        return <p>Buscando dados de David Henrique...</p>;
    }

    return (
        <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5 }}>
            {eu && (
                <>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={eu.avatar_url}
                        title="Foto do perfil"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Nome: {eu.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Seguidores:  {eu.followers}
                        </Typography>  
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Bio:  {eu.bio}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                            Data de criação: {eu.created_at}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                            Localidade: {eu.location}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                            Repos públicos: {eu.public_repos}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={`https://github.com/davidhenrique2106`} target="_blank">
                            Ver Perfil
                        </Button>
                    </CardActions>
                </>
            )}
        </Card>
    );
};

export default function Portfolio() {
    return (
        <div>
            <Header/>
            <div className="sobre">
                <Sobre/>
            </div>
            <hr />
            <div className="meusprojetos">
                <h1 style={{textAlign: 'center'}} ><b><i>Meus projetos importantes</i></b></h1>
                <Projetos/>
            </div>
            <hr />
            <div className="github">
            <h1 style={{textAlign: 'center'}} ><b><i>Integração Api do Github   </i></b></h1>
            <EuGithub />
            </div>
        
        </div>
    );
}
