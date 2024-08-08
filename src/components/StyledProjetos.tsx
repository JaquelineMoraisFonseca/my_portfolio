import { styled, Typography } from "@mui/material";
import Bolo from "../assets/images/projetobolo.png";


export const StyledProjetos = styled("div")(({theme}) => ({
    color: "#e0dede",
    position: "relative",
    zIndex: 10,
    minHeight: "100vh",
    paddingTop: "100px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "auto",
    [theme.breakpoints.down('md')]: {
       display:"flex",
       textAligth:"center",
       paddingLeft: "0px"
    },
}));


export const StyledBoxbolo = styled("div")(() => ({
    boxShadow: "0 0 40px 10px #ffffff3e",
    width: "360px",
    height: "400px",
    overflow: "hidden",
    position: "relative",
    backgroundImage: `url(${Bolo})`,
    backgroundPosition: "100% 0%",
    backgroundSize: "cover",
    borderRadius: "8px",
    transition: "background-position 5s ease",
    cursor: "pointer",
    '&:hover': {
        backgroundPosition: "0% 100%",
        '& .overlay': {
            opacity: 1,
        },
    }
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '3em',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
}));

export const StyledBox = styled("div")(({ theme }) => ({
    boxShadow: "0 0 40px 10px #121212",
    width: "100%", 
    maxWidth: "360px", 
    height: "auto", 
    maxHeight: "400px", 
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    cursor: "pointer",
    paddingBottom: "16px",
   
    '&:hover': {
        '& .overlay': {
            opacity: 1,
        },
    },
    [theme.breakpoints.down('md')]: {
        margin: 'auto',
        paddingBottom: '40px', 
    },
    [theme.breakpoints.down('sm')]: {
        width: "100%", 
        maxWidth: "300px",
        maxHeight: "300px",
        paddingBottom: '32px', 
    },
}));

export const StyledImg = styled("img")(() => ({
    width: "100%",
    height: "100%",
}));

export const Overlay = styled("div")(() => ({
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

export const SkillsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    paddingTop: "80px",
    gap: "50px",
    flexWrap: "wrap", 
    [theme.breakpoints.down('md')]: {
        gap: "20px",
        paddingTop: "40px",
    
    },
}));

export const SkillItem = styled("div")(() => ({
    textAlign: "center",
    '&:hover .skill-name': {
        display: "block",
    }
}));

export const SkillImg = styled("img")(() => ({
    width: "40px",
    height: "40px",
    '&:hover': {
        transform: "scale(1.1)",
    },
}));

export const SkillName = styled("div")(() => ({
    display: "none",
    color: "white",
    marginTop: "5px",
}));

export const StyledTypographyTitulo = styled("div")(() => ({
    fontSize: "1.8rem",
}));

export const StyledTypographyTexto = styled("div")(() => ({
    fontSize: "1.2rem",
    paddingTop: "30px",
    textAlign: "left",
    paddingLeft: "30px"
}));
