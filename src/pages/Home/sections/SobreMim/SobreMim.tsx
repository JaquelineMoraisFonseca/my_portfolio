import { Box, Container, Grid, Typography, styled } from "@mui/material";

const SobreMim = () => {
    const StyledSobreMim = styled("div")(() => ({
        backgroundColor: "white",
        position: "relative",
        zIndex: 10, // Z-index alto para garantir que fique sobre o Hero
        height:"100vh",
        paddingTop:"50px",
    
    }));

    return (
        <StyledSobreMim>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Box>
                            <Typography variant="h2" textAlign="center">Sobre mim</Typography>
                            <Typography textAlign="center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et maxime quia blanditiis molestiae numquam nobis delectus iusto maiores quisquam ad, quibusdam, culpa cum. Ipsum aspernatur tenetur perferendis omnis.
                            </Typography>
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


