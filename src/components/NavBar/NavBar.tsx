import { AppBar, MenuItem, Toolbar, styled, useMediaQuery, useTheme, Box } from '@mui/material';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import './HamburguerMenu.css';

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  }));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        {!isMobile && (
          <>
            <MenuItem>
              <Link to="sobre-mim" smooth={true} duration={500}>
                About
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </MenuItem>
          </>
        )}
        {isMobile && (
          <Box sx={{ marginLeft: 'auto' }}>
            <Menu right>
              <Link className="menu-item" to="sobre-mim" smooth={true} duration={500}>
                About
              </Link>
              <Link className="menu-item" to="skills" smooth={true} duration={500}>
                Skills
              </Link>
              <Link className="menu-item" to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </Menu>
          </Box>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;


