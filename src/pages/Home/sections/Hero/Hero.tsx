import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackGround";

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
                                <StyledButton>
                                    <DownloadIcon />
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <StyledButton>
                                    <MailOutlineIcon />
                                    <Typography>
                                        Contato
                                    </Typography>
                                </StyledButton>
                            </Grid> 
                            <Grid item xs={12} md={6} display="flex" justifyContent="center" >
                                <StyledButton>
                                    <MailOutlineIcon />
                                    <Typography>
                                        Likedin
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center" >
                                <StyledButton>
                                    <MailOutlineIcon />
                                    <Typography>
                                        Git Hub
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
