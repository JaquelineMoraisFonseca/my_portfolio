import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#212736',
      },
      secondary: {
        main: '#3d4863',
      },
    },
    typography:{
      fontFamily:"Helvetica Neue",
      
    }
  });
  
  theme = responsiveFontSizes(theme);


  export default theme