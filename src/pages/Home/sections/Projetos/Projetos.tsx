import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Lista from "../../../../assets/images/Listadetarefas.png"
import Previsao from "../../../../assets/images/previsao.png"

const StyledTypography = styled(Typography)(({theme}) => ({
    fontSize: '3em',
    color: "white",
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
}));

const StyledImgJs = styled("img")(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down('sm')]: {
        maxWidth: "50px",
    },
}));

const Projetos = () => {
    const StyledSobreMim = styled("div")(() => ({
        background: "linear-gradient(#1c1c1c,#4C4C4E)",
        position: "relative",
        zIndex: 10, // Z-index alto para garantir que fique sobre o Hero
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
                        <Box>
                        <StyledImgJs src={Lista} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box >
                        <StyledImgJs src={Previsao} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box >
                            projeto 3
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledSobreMim>
    );
};

export default Projetos;