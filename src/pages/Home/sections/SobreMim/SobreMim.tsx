import { Box, Container, Grid, Typography, useMediaQuery, useTheme, styled } from "@mui/material";
import Jornada from "../../../../assets/images/jornada.png";
import JavaScript from "../../../../assets/images/javalogo.png";
import CSS from "../../../../assets/images/csslogo.png";
import ReactImg from "../../../../assets/images/reactlogo.png";
import HTML from "../../../../assets/images/htmllogo.png";
import Git from "../../../../assets/images/gitlogo .png";
import GitHub from "../../../../assets/images/github.png";



const StyledSobreMim = styled("div")(() => ({
    position: "relative",
    zIndex: 10,
    padding: "80px 0",
    textAlign: "center",
    height: "auto",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "100px",
    color: "white",
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

const StyledHabilidades = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    marginTop: '20px',
    paddingBottom: "50px",
    [theme.breakpoints.down('sm')]: {
        display:"flex",
        justifyContent:"center",
    },
}));

const SkillItem = styled("div")(() => ({
    textAlign: "center",
    paddingBottom:"50px",
    '&:hover .skill-name': {
        display: "block",
    }
}));

const SkillImg = styled("img")(() => ({
    width: "40px",
    height: "40px",
    '&:hover': {
        transform: "scale(1.1)",
    },
}));

const SkillName = styled("div")(() => ({
    display: "none",
    color: "white",
    marginTop: "5px",
    fontSize: "0.8rem", 
}));

const SobreMim = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <StyledSobreMim>
            <Container maxWidth="lg">
                <Box paddingTop={isMobile ? "50px" : "0px"} paddingBottom="50px" style={{ borderRadius: "8px", backgroundColor: "#1c1c1c" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <Box>
                                <Typography variant="h2" textAlign="center" paddingBottom="50px">Sobre mim</Typography>
                                <Typography textAlign="left" paddingLeft="50px">
                                    Meu nome é Jaqueline Morais e sou apaixonada por tecnologia. Meu primeiro contato com programação foi em 2019, quando ainda estava no ensino médio. Iniciei minha faculdade de Análise e Desenvolvimento de Sistemas em 2023.
                                </Typography>
                                <Typography textAlign="left" marginTop={2} paddingLeft="50px">
                                    Hoje já entendo tecnologias voltadas para o Front-end e me dedico cada dia para me tornar uma profissional de sucesso na área.
                                </Typography>
                                <Box 
                                    position="relative" 
                                    textAlign="center" 
                                    mb={4}
                                    paddingTop={isMobile ? "50px" : "0px"}
                                >
                                    {isMobile && <StyledImg src={Jornada} />}
                                </Box>
                                <Box paddingTop="45px" fontSize="2.0rem">
                                    <StyledHabilidades>Habilidades</StyledHabilidades>
                                        <Grid container spacing={2} justifyContent="center" >
                                        <Grid item xs={4} sm={4} md={2}>
                                            <SkillItem>
                                                <SkillImg src={JavaScript} alt="JavaScript"/>
                                                <SkillName className="skill-name">JavaScript</SkillName>
                                            </SkillItem>
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={2}>
                                            <SkillItem>
                                                <SkillImg src={CSS} alt="CSS" />
                                                <SkillName className="skill-name">CSS</SkillName>
                                            </SkillItem>
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={2}>
                                            <SkillItem>
                                                <SkillImg src={HTML} alt="HTML" />
                                                <SkillName className="skill-name">HTML</SkillName>
                                            </SkillItem>
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={2}>
                                            <SkillItem>
                                                <SkillImg src={ReactImg} alt="React" />
                                                <SkillName className="skill-name">React</SkillName>
                                            </SkillItem>
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={2}>
                                            <SkillItem>
                                                <SkillImg src={Git} alt="Git" />
                                                <SkillName className="skill-name">Git</SkillName>
                                            </SkillItem>
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={2}>
                                            <SkillItem>
                                                <SkillImg src={GitHub} alt="GitHub" />
                                                <SkillName className="skill-name">GitHub</SkillName>
                                            </SkillItem>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        {!isMobile && (
                            <Grid item xs={12} md={5}>
                                <Box position="relative" textAlign="center" paddingTop="50px">
                                    <StyledImg src={Jornada} />
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>
        </StyledSobreMim>
    );
};

export default SobreMim;





