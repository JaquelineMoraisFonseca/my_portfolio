import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Bolo from "../../../../assets/images/projetobolo.png";
import Todo from "../../../../assets/images/todo.png";
import Tempo from "../../../../assets/images/tempo.png";
import JavaScript from "../../../../assets/images/javalogo.png";
import CSS from "../../../../assets/images/csslogo.png";
import ReactImg from "../../../../assets/images/reactlogo.png";
import HTML from "../../../../assets/images/htmllogo.png";
import Git from "../../../../assets/images/gitlogo.png";
import GitHub from "../../../../assets/images/github (1).png";

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '3em',
    color: "white",
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
}));

const StyledBoxbolo = styled("div")(() => ({
    boxShadow: "0 0 40px 10px #ffffff3e",
    width: "360px",
    height: "400px",
    overflow: "hidden",
    position: "relative",
    backgroundImage: `url(${Bolo})`,
    backgroundPosition: "100% 0%",
    backgroundSize: "cover",
    borderRadius: "8px",
    transition: "background-position 5s ease",
    cursor: "pointer",
    '&:hover': {
        backgroundPosition: "0% 100%",
        '& .overlay': {
            opacity: 1,
        },
    }
}));

const StyledBox = styled("div")(() => ({
    boxShadow: "0 0 40px 10px #121212",
    width: "360px",
    height: "400px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    cursor: "pointer",
    '&:hover': {
        '& .overlay': {
            opacity: 1,
        },
    }
}));

const StyledImg = styled("img")(() => ({
    width: "100%",
    height: "100%",
}));

const Overlay = styled("div")(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    opacity: 0,
    transition: "opacity 0.5s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
}));

const SkillsContainer = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    paddingTop: "80px",
    gap: "50px", 
}));

const SkillItem = styled("div")(() => ({
    textAlign: "center",
    '&:hover .skill-name': {
        display: "block",
    }
}));

const SkillImg = styled("img")(() => ({
    width: "40px",
    height: "40px",
    '&:hover': {
        transform: "scale(1.1)",
    },
}));

const SkillName = styled("div")(() => ({
    display: "none",
    color: "white",
    marginTop: "5px",
}));

const Projetos = () => {
    const StyledProjetos = styled("div")(() => ({
        color: "#e0dede",
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
        paddingTop: "100px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "auto",
    }));

    const StyledTypographyTitulo = styled("div")(() => ({
        fontSize: "1.8rem",
    }));

    const StyledTypographyTexto = styled("div")(() => ({
        fontSize: "1.2rem",
        paddingTop: "30px",
        textAlign: "left",
        paddingLeft: "50px"
    }));

    const handleBoloClick = () => {
        window.open('https://jaquelinemoraisfonseca.github.io/casa_dos_bolos/', '_blank');
    };

    const handleTodoClick = () => {
        window.open('https://jaquelinemoraisfonseca.github.io/todo_list_react/', '_blank');
    };

    const handleTempoClick = () => {
        window.open('https://jaquelinemoraisfonseca.github.io/previsao_tempo/', '_blank');
    };

    return (
        <StyledProjetos>
            <Container maxWidth="lg">
                <Box paddingTop="50px" paddingBottom="50px" style={{ borderRadius: "8px", backgroundColor: "#1c1c1c" }}>
                    <Box><StyledTypography>Meus projetos</StyledTypography></Box>
                    <Grid container spacing={2} paddingTop="100px">
                        <Grid item xs={12} md={7}>
                            <StyledTypographyTitulo>Projeto Casa dos Bolos</StyledTypographyTitulo>
                            <StyledTypographyTexto>
                                Este projeto é uma aplicação web para uma confeitaria chamada "Casa dos Bolos", desenvolvida usando Material-UI (MUI) e Redux para o Gerenciamento de estado para adicionar itens ao carrinho de compras
                            </StyledTypographyTexto>
                            <SkillsContainer>
                                <SkillItem>
                                    <SkillImg src={JavaScript} alt="JavaScript" />
                                    <SkillName className="skill-name">JavaScript</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={CSS} alt="CSS" />
                                    <SkillName className="skill-name">CSS</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={ReactImg} alt="React" />
                                    <SkillName className="skill-name">React</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={HTML} alt="HTML" />
                                    <SkillName className="skill-name">HTML</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={Git} alt="Git" />
                                    <SkillName className="skill-name">Git</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={GitHub} alt="GitHub" />
                                    <SkillName className="skill-name">GitHub</SkillName>
                                </SkillItem>
                            </SkillsContainer>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box paddingBottom="30px">
                                <StyledBox>
                                    <StyledBoxbolo onClick={handleBoloClick}>
                                        <Overlay className="overlay">
                                            Projeto Casa dos Bolos
                                        </Overlay>
                                    </StyledBoxbolo>
                                </StyledBox>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} paddingTop="100px">
                        <Grid item xs={12} md={7}>
                            <StyledTypographyTitulo>Projeto To do List</StyledTypographyTitulo>
                            <StyledTypographyTexto>
                                Este projeto é uma aplicação de lista de tarefas (to-do list) construída com React. A aplicação permite aos usuários gerenciar suas tarefas, oferecendo funcionalidades para adicionar, remover, completar e filtrar itens da lista. A interface é projetada para ser intuitiva e interativa, facilitando a gestão das atividades diárias.
                            </StyledTypographyTexto>
                            <SkillsContainer>
                                <SkillItem>
                                    <SkillImg src={JavaScript} alt="JavaScript" />
                                    <SkillName className="skill-name">JavaScript</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={CSS} alt="CSS" />
                                    <SkillName className="skill-name">CSS</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={ReactImg} alt="React" />
                                    <SkillName className="skill-name">React</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={HTML} alt="HTML" />
                                    <SkillName className="skill-name">HTML</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={Git} alt="Git" />
                                    <SkillName className="skill-name">Git</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={GitHub} alt="GitHub" />
                                    <SkillName className="skill-name">GitHub</SkillName>
                                </SkillItem>
                            </SkillsContainer>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box paddingBottom="30px">
                                <StyledBox onClick={handleTodoClick}>
                                    <StyledImg src={Todo} />
                                    <Overlay className="overlay">
                                        Projeto To-Do List
                                    </Overlay>
                                </StyledBox>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} paddingTop="100px">
                        <Grid item xs={12} md={7}>
                            <StyledTypographyTitulo>Projeto Previsão do tempo</StyledTypographyTitulo>
                            <StyledTypographyTexto>
                                Este projeto exibe informações meteorológicas de uma cidade específica, utiliza a biblioteca axios para fazer uma requisição HTTP à API do OpenWeatherMap, buscando dados meteorológicos para uma cidade especificada. A cidade inicial é "São Paulo", mas o usuário pode alterar isso digitando o nome de outra cidade. São exibidos os dados: temperatura °C e descrição da condição climática.
                            </StyledTypographyTexto>
                            <SkillsContainer>
                                <SkillItem>
                                    <SkillImg src={JavaScript} alt="JavaScript" />
                                    <SkillName className="skill-name">JavaScript</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={CSS} alt="CSS" />
                                    <SkillName className="skill-name">CSS</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={ReactImg} alt="React" />
                                    <SkillName className="skill-name">React</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={HTML} alt="HTML" />
                                    <SkillName className="skill-name">HTML</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={Git} alt="Git" />
                                    <SkillName className="skill-name">Git</SkillName>
                                </SkillItem>
                                <SkillItem>
                                    <SkillImg src={GitHub} alt="GitHub" />
                                    <SkillName className="skill-name">GitHub</SkillName>
                                </SkillItem>
                            </SkillsContainer>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box paddingBottom="30px">
                                <StyledBox onClick={handleTempoClick}>
                                    <StyledImg src={Tempo} />
                                    <Overlay className="overlay">
                                        Projeto Previsão do Tempo
                                    </Overlay>
                                </StyledBox>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </StyledProjetos>
    );
};

export default Projetos;

