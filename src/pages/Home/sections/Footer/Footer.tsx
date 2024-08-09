import { Box, Container, Grid, styled, Typography, Button, MenuItem } from "@mui/material";
import Avatar from "../../../../assets/images/avatarum.png";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; 
import { Link } from 'react-scroll';

const Footer = () => {
    const StyledFooter = styled("div")(() => ({
        height: "400px",
        paddingTop: "80px",
        position: "relative", 
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "50px",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,

        [theme.breakpoints.down('sm')]: {
            width: "36%",
        },
        [theme.breakpoints.up('sm')]: {
            width: "20%",
        },
    }));

    const StyledBox = styled("div")(() => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", 
        textAlign: "center",
    }));

    const StyledButton = styled(Button)(({ theme }) => ({
        position: "absolute",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#1c1c1c54",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        color: theme.palette.primary.contrastText,
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        minWidth: "unset",
        '&:hover': {
            backgroundColor: "#494949",
            color: theme.palette.primary.contrastText,
        },
    }));

    return (
        <StyledFooter>
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <StyledBox>
                            <Box position="relative">
                                <StyledImg src={Avatar} />
                            </Box>
                            <Box paddingTop="50px" color="white">
                                <Typography>
                                    jaquelinemoraisprofissional@gmail.com
                                </Typography>
                                <Typography paddingTop="30px">
                                    (31)998854859
                                </Typography>
                            </Box>
                        </StyledBox>
                    </Grid>
                </Grid>
            </Container>
            <StyledButton>
                <MenuItem>
                 <Link to="home" smooth={true} duration={800}>
                    <ArrowUpwardIcon />
                </Link>
                </MenuItem>
            </StyledButton>
        </StyledFooter>
    );
};

export default Footer;


