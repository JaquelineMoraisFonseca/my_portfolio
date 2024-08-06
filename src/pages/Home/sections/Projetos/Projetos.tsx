import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Bolo from "../../../../assets/images/projetobolo.png";
import Todo from "../../../../assets/images/todo.png";
import Tempo from "../../../../assets/images/tempo.png"

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
    transition: "background-position 5s ease",
    '&:hover': {
        backgroundPosition: "0% 100%",
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

const StyledBox = styled("div")(() => ({
    boxShadow: "0 0 40px 10px #ffffff3e",
    width: "360px",
    height: "400px",
    overflow: "hidden",
    position: "relative",
    '&:hover': {
        '& .overlay': {
            opacity: 1,
        },
    }
}));

const Projetos = () => {
    const StyledSobreMim = styled("div")(() => ({
        background: "linear-gradient(#1c1c1c, #4C4C4E)",
        position: "relative",
        zIndex: 10,
        height: "100vh",
        paddingTop: "100px",
        textAlign: "center",
    }));

    return (
        <StyledSobreMim>
            <Container maxWidth="lg">
                <Box>
                    <StyledTypography>Projetos</StyledTypography>
                </Box>
                <Grid container spacing={1} paddingTop="100px">
                    <Grid item xs={12} md={4}>
                        <StyledBoxbolo>
                            <Overlay className="overlay">
                                Projeto Casa dos Bolos
                                
                            </Overlay>
                        </StyledBoxbolo>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledBox>
                            <StyledImg src={Todo} />
                            <Overlay className="overlay">
                                Projeto To-Do List
                                
                            </Overlay>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledBox>
                            <StyledImg src={Tempo} />
                            <Overlay className="overlay">
                                Projeto Previsão do Tempo
                            </Overlay>
                        </StyledBox>
                        <Typography  color="white" marginTop="10px"></Typography>
                    </Grid>
                </Grid>
            </Container>
        </StyledSobreMim>
    );
};

export default Projetos;
