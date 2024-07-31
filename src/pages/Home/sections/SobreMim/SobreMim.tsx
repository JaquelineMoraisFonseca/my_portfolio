import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Jornada from "../../../../assets/images/jornada.png";

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '1.2rem', // Tamanho padrão

    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem', // Tamanho para telas xs
    },
}));

const SobreMim = () => {
    const StyledSobreMim = styled("div")(() => ({
        backgroundColor: "#a8aaad",
        position: "relative",
        zIndex: 10, // Z-index alto para garantir que fique sobre o Hero
        height: "100vh",
        paddingTop: "100px",
        textAlign: "center",
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
        },
    }));

    return (
        <StyledSobreMim>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Box>
                            <Typography variant="h2" textAlign="center">Sobre mim</Typography>
                            <StyledTypography textAlign="left">
                                <p>
                                    Meu nome é Jaqueline Morais e sou apaixonada por tecnologia. Meu primeiro contato com programação foi em 2019, quando ainda estava no ensino médio. Iniciei minha faculdade de Análise e Desenvolvimento de Sistemas em 2023.
                                </p>
                                <p>
                                    Hoje já entendo tecnologias voltadas para o Front-end e me dedico cada dia para me tornar uma profissional de sucesso na área.
                                </p>
                            </StyledTypography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box position="relative" textAlign="center">
                            <StyledImg src={Jornada} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledSobreMim>
    );
};

export default SobreMim;




