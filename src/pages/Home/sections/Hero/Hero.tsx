import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackGround";


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        background: "linear-gradient(#212736,#495880)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // mobile
            paddingTop: "150px",

        },
        [theme.breakpoints.up('sm')]: { // tablets
            paddingTop: "250px", 
        },
        [theme.breakpoints.up('md')]: { // desktop
            paddingTop: "0",
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.up('sm')]: { // tablets
            width: "50%", 
        },
        [theme.breakpoints.up('md')]: { // desktop
            width:"75%",
        }
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground/>
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>Olá, eu sou</Typography>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" >Jaqueline Morais</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3} padding="50px">
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contato
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero