import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#0a0a0a',
      },
      secondary: {
        main: '#6b6a6a',
      },
    },
    typography:{
      fontFamily:"Times New Roman"
      
    }
  });
  
  theme = responsiveFontSizes(theme);


  export default theme