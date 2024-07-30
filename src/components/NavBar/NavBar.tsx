import { AppBar, MenuItem, Toolbar, styled, useMediaQuery, useTheme, Box } from '@mui/material';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import { useState } from 'react';
import './HamburguerMenu.css';


type MenuState = {
  isOpen: boolean;
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  }));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuStateChange = (state: MenuState) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        {!isMobile && (
          <>
            <MenuItem>
              <Link to="home" smooth={true} duration={500}>
                Início
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="sobre-mim" smooth={true} duration={500}>
                Sobre Mim
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="skills" smooth={true} duration={500}>
                Habilidades
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="projects" smooth={true} duration={500}>
                Projetos
              </Link>
            </MenuItem>
          </>
        )}
        {isMobile && (
          <Box sx={{ marginLeft: 'auto' }}>
            <Menu right isOpen={isMenuOpen} onStateChange={handleMenuStateChange}>
              <Link className="menu-item" to="home" smooth={true} duration={500} onClick={closeMenu}>
                Início
              </Link>
              <Link className="menu-item" to="sobre-mim" smooth={true} duration={500} onClick={closeMenu}>
                Sobre Mim
              </Link>
              <Link className="menu-item" to="skills" smooth={true} duration={500} onClick={closeMenu}>
                Habilidades
              </Link>
              <Link className="menu-item" to="projects" smooth={true} duration={500} onClick={closeMenu}>
                Projetos
              </Link>
            </Menu>
          </Box>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;



