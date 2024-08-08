import { Box, Container, Grid, MenuItem, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackGround";
import { Link } from 'react-scroll';

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        color:"#e0dede",
        height: "auto",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "150px",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "150px",
        },
        [theme.breakpoints.up('sm')]: {
             paddingTop: "250px",
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0",
        }
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.up('sm')]: {
            width: "50%",
        },
        [theme.breakpoints.up('md')]: {
            width: "75%",
        }
    }));

    return (
        <StyledHero>
            <Container maxWidth="lg">
            <Box paddingTop="90px" paddingBottom="90px" style={{ borderRadius: "8px", backgroundColor:"#1c1c1c"  }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} >
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0} >
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center"  fontSize="20px"  pb={2}>Olá, eu sou</Typography>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center">Jaqueline Morais</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3} padding="50px">
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <StyledButton onClick={() => window.open("/my_portfolio/curriculo.pdf", "_blank")}>
                                    <DownloadIcon />
                                    <Typography padding="7px">
                                        Currículo
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <StyledButton>
                                    <MailOutlineIcon />
                                    <Typography >
                                        <MenuItem>
                                        <Link to="Footer" smooth={true} duration={500}>
                                            Contato
                                        </Link>
                                        </MenuItem>
                                
                                    </Typography>
                                </StyledButton>
                            </Grid> 
                            <Grid item xs={12} md={6} display="flex" justifyContent="center" >
                                <StyledButton onClick={() => window.open("https://www.linkedin.com/in/jaqueline-morais-da-fonseca-a8639a307", "_blank")}>
                                    <LinkedInIcon/>
                                    <Typography padding="7px">
                                        LinkedIn
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center" >
                                <StyledButton onClick={() => window.open("https://github.com/JaquelineMoraisFonseca", "_blank")}>
                                    <GitHubIcon/>
                                    <Typography padding="7px">
                                        GitHub
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
                </Box>
            </Container>
        </StyledHero>
    );
}

export default Hero;
