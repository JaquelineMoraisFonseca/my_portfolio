import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#1c1c1c',
      },
      secondary: {
        main: '#3d4863',
      },
    },
    typography:{
      fontFamily:"BlinkMacSystemFont",
      
    }
  });
  
  theme = responsiveFontSizes(theme);


  export default theme