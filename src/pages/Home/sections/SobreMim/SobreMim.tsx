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
    color: "#e0dede",
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
    paddingBottom: "50px",
    position: "relative", 
}));
const SkillImg = styled("img")(({theme}) => ({
    width: "40px",
    height: "40px",
    transition: "transform 0.3s ease",  
    '&:hover': {
        transform: "scale(1.1)",
    },
    [theme.breakpoints.down('xs')]: {
        width: "10px",
        height: "10px",
    },
}));
const SkillName = styled("div")(() => ({
    opacity: 0,
    visibility: "hidden",
    color: "white",
    fontSize: "0.8rem",
    position: "absolute",
    top: "55px",
    left: "50%",
    transform: "translateX(-50%)", 
    whiteSpace: "nowrap",  
    transition: "opacity 0.3s ease, visibility 0.3s ease", 
    paddingTop: "-4px",
    
}));

const SkillItemHover = styled(SkillItem)(() => ({
    '&:hover .skill-name': {
        opacity: 1,
        visibility: "visible",
    }
}));

const StyledTypograpy = styled(Typography)(({theme}) => ({
    textAlign: "center",
    paddingLeft:"50px",
    fontSize:"1.2rem",
    [theme.breakpoints.down('md')]: {
        paddingLeft:"20px",
        textAlign: "left",
    },
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
                                <StyledTypograpy>
                                    Meu nome é Jaqueline Morais e sou apaixonada por tecnologia. Meu primeiro contato com programação foi em 2019, quando ainda estava no ensino médio. Iniciei minha faculdade de Análise e Desenvolvimento de Sistemas em 2023.
                                </StyledTypograpy>
                                <StyledTypograpy marginTop={2}>
                                    Hoje já entendo tecnologias voltadas para o Front-end e me dedico cada dia para me tornar uma profissional de sucesso na área.
                                </StyledTypograpy>
                                
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
                                        <Grid item xs={3} sm={4} md={2}>
                                            <SkillItemHover>
                                                <SkillImg src={JavaScript} alt="JavaScript"/>
                                                <SkillName className="skill-name">JavaScript</SkillName>
                                            </SkillItemHover>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={2}>
                                            <SkillItemHover>
                                                <SkillImg src={CSS} alt="CSS" />
                                                <SkillName className="skill-name">CSS</SkillName>
                                            </SkillItemHover>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={2}>
                                            <SkillItemHover>
                                                <SkillImg src={HTML} alt="HTML" />
                                                <SkillName className="skill-name">HTML</SkillName>
                                            </SkillItemHover>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={2}>
                                            <SkillItemHover>
                                                <SkillImg src={ReactImg} alt="React" />
                                                <SkillName className="skill-name">React</SkillName>
                                            </SkillItemHover>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={2}>
                                            <SkillItemHover>
                                                <SkillImg src={Git} alt="Git" />
                                                <SkillName className="skill-name">Git</SkillName>
                                            </SkillItemHover>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={2}>
                                            <SkillItemHover>
                                                <SkillImg src={GitHub} alt="GitHub" />
                                                <SkillName className="skill-name">GitHub</SkillName>
                                            </SkillItemHover>
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





