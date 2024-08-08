import { Box, Button, Container, Grid} from "@mui/material";

import Todo from "../../../../assets/images/todo.png";
import Tempo from "../../../../assets/images/tempo.png";
import JavaScript from "../../../../assets/images/javalogo.png";
import CSS from "../../../../assets/images/csslogo.png";
import ReactImg from "../../../../assets/images/reactlogo.png";
import HTML from "../../../../assets/images/htmllogo.png";
import Git from "../../../../assets/images/gitlogo .png";
import GitHub from "../../../../assets/images/github.png";
import {StyledBoxbolo, StyledTypography, StyledBox, StyledImg, Overlay, SkillsContainer,SkillItem, SkillImg, SkillName, StyledProjetos, StyledTypographyTitulo, StyledTypographyTexto } from '../../../../components/StyledProjetos';

const Projetos = () => {
    
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
                    <Grid container spacing={2} paddingTop="100px" justifyContent="center">
                        <Grid item xs={12} md={7}>
                            <StyledTypographyTitulo>Projeto Casa dos Bolos</StyledTypographyTitulo>
                            <StyledTypographyTexto>
                                Este projeto é uma aplicação web para uma confeitaria chamada "Casa dos Bolos", desenvolvida usando Material-UI (MUI) e Redux para o Gerenciamento de estado para adicionar itens ao carrinho de compras
                            </StyledTypographyTexto>
                            <Box paddingTop="20px" display="flex" justifyContent="center">
                                <Button variant="contained" color="primary" onClick={() => window.open('https://github.com/JaquelineMoraisFonseca/casa_dos_bolos', '_blank')}>
                                    &lt;&gt; Code
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleBoloClick} style={{ marginLeft: '10px' }}>
                                    Projeto
                                </Button>
                            </Box>
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
                    <Grid container spacing={2} paddingTop="100px" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={7}>
                            <StyledTypographyTitulo>Projeto To do List</StyledTypographyTitulo>
                            <StyledTypographyTexto>
                                Este projeto é uma aplicação de lista de tarefas (to-do list) construída com React. A aplicação permite aos usuários gerenciar suas tarefas, oferecendo funcionalidades para adicionar, remover, completar e filtrar itens da lista. A interface é projetada para ser intuitiva e interativa, facilitando a gestão das atividades diárias.
                            </StyledTypographyTexto>
                            <Box paddingTop="20px" display="flex" justifyContent="center">
                                <Button variant="contained" color="primary" onClick={() => window.open('https://github.com/JaquelineMoraisFonseca/todo_list_react', '_blank')}>
                                    &lt;&gt; Code
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleTodoClick} style={{ marginLeft: '10px' }}>
                                    Projeto
                                </Button>
                            </Box>
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
                    <Grid container spacing={2} paddingTop="100px" justifyContent="center">
                        <Grid item xs={12} md={7}>
                            <StyledTypographyTitulo>Projeto Previsão do tempo</StyledTypographyTitulo>
                            <StyledTypographyTexto>
                                Este projeto exibe informações meteorológicas de uma cidade específica, utiliza a biblioteca axios para fazer uma requisição HTTP à API do OpenWeatherMap, buscando dados meteorológicos para uma cidade especificada. A cidade inicial é "São Paulo", mas o usuário pode alterar isso digitando o nome de outra cidade. São exibidos os dados: temperatura °C e descrição da condição climática.
                            </StyledTypographyTexto>
                            <Box paddingTop="20px" display="flex" justifyContent="center">
                                <Button variant="contained" color="primary" onClick={() => window.open('https://github.com/JaquelineMoraisFonseca/previsao_tempo/', '_blank')}>
                                    &lt;&gt; Code
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleTempoClick} style={{ marginLeft: '10px' }}>
                                    Projeto
                                </Button>
                            </Box>
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
