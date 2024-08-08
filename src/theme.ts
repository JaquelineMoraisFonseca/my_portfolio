import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#1c1c1c',
      },
      secondary: {
        main: '#6b6a6a',
      },
    },
    typography:{
      fontFamily:"Times New Roman"
      
    },
  });
  
  theme = responsiveFontSizes(theme);


  export default theme