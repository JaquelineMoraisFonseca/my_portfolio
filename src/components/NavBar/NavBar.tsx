// src/components/NavBar.tsx
import React from 'react';
import { AppBar, MenuItem, Toolbar, styled, useMediaQuery, useTheme, Box } from '@mui/material';
import { slide as Menu } from 'react-burger-menu';
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
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          {!isMobile && (
            <>
              <MenuItem>About</MenuItem>
              <MenuItem>Skills</MenuItem>
              <MenuItem>Projects</MenuItem>
            </>
          )}
          {isMobile && (
            <Box sx={{ marginLeft: 'auto' }}>
              <Menu right>
                <a className="menu-item" href="#about">
                  About
                </a>
                <a className="menu-item" href="#skills">
                  Skills
                </a>
                <a className="menu-item" href="#projects">
                  Projects
                </a>
              </Menu>
            </Box>
          )}
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

