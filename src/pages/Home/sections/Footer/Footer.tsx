import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";

const Footer = () => {
    const StyledFooter = styled("div")(() => ({
        height: "400px",
        paddingTop: "80px",
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
        </StyledFooter>
    );
};

export default Footer;

