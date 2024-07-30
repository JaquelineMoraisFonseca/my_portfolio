import { Box, Container, Grid, Typography, styled } from "@mui/material";

const StyledTypography = styled(Typography)(({theme}) => ({
    fontSize: '1.2rem', // Aumente este valor conforme necessário
    [theme.breakpoints.up('sm')]: {
        fontSize:"0.8rem",
    },
}));

const SobreMim = () => {
    const StyledSobreMim = styled("div")(() => ({
        backgroundColor: "white",
        position: "relative",
        zIndex: 10, // Z-index alto para garantir que fique sobre o Hero
        height: "100vh",
        paddingTop: "100px",
        textAlign:"center"
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
                        Aqui vai ter um avatar
                    </Grid>
                </Grid>
            </Container>
        </StyledSobreMim>
    );
}

export default SobreMim;


