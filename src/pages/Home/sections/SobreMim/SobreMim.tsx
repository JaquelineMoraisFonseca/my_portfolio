import { Box, Container, Grid, Typography, useMediaQuery, useTheme, styled } from "@mui/material";
import Jornada from "../../../../assets/images/jornada.png";
import JavaScript from "../../../../assets/images/Js.png";
import CSS from "../../../../assets/images/Css (1).png";
import ReactImg from "../../../../assets/images/react.png";
import HTML from "../../../../assets/images/Html.png";
import Git from "../../../../assets/images/Git.png";
import GitHub from "../../../../assets/images/github (1).png";

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
    },
}));

const StyledSobreMim = styled("div")(() => ({
    backgroundColor: "#a8aaad",
    position: "relative",
    zIndex: 10,
    padding: "100px 0",
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

const StyledImgJs = styled("img")(({ theme }) => ({
    width: "100%",
    maxWidth: "75px",
    [theme.breakpoints.down('sm')]: {
        maxWidth: "50px",
    },
}));

const StyledHabilidades = styled('p')(({ theme }) => ({
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
}));


const SobreMim = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                                {isMobile && (
                                    <Box position="relative" textAlign="center" mb={4}>
                                        <StyledImg src={Jornada} />
                                    </Box>
                                )}
                                <Box paddingTop="45px" fontSize="2.0rem">
                                    <StyledHabilidades>Habilidades</StyledHabilidades>
                                    <Grid container spacing={2} justifyContent="center">
                                        <Grid item xs={6} sm={4} md={2}>
                                            <Box textAlign="center">
                                                <StyledImgJs src={JavaScript} />
                                                <StyledTypography>JavaScript</StyledTypography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={4} md={2}>
                                            <Box textAlign="center">
                                                <StyledImgJs src={CSS} />
                                                <StyledTypography>CSS</StyledTypography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={4} md={2}>
                                            <Box textAlign="center">
                                                <StyledImgJs src={HTML} />
                                                <StyledTypography>HTML</StyledTypography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={4} md={2}>
                                            <Box textAlign="center">
                                                <StyledImgJs src={ReactImg} />
                                                <StyledTypography>React</StyledTypography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={4} md={2}>
                                            <Box textAlign="center">
                                                <StyledImgJs src={Git} />
                                                <StyledTypography>Git</StyledTypography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={4} md={2}>
                                            <Box textAlign="center">
                                                <StyledImgJs src={GitHub} />
                                                <StyledTypography>GitHub</StyledTypography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </StyledTypography>
                        </Box>
                    </Grid>
                    {!isMobile && (
                        <Grid item xs={12} md={5}>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Jornada} />
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </StyledSobreMim>
    );
};

export default SobreMim;




