import { Box, Container, Grid, styled } from "@mui/material";



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
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box position="relative" textAlign="center">
                            
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledSobreMim>
    );
};

export default Projetos;