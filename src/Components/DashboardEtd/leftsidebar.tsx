import { useState } from 'react';
import { Sidebar, Menu } from 'react-pro-sidebar';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function LeftSideBar() {
  const [deposerMenuOpen, setDeposerMenuOpen] = useState(false);
  const [examenTraiteMenuOpen, setExamenTraiteMenuOpen] = useState(false);

  const menuItemStyle = {
    backgroundColor: '#F2F3F4',
    //color: '#b6c8d9',
  };

  const menuTabStyle = {
    backgroundColor: '#A4DDED',
  };

  const handleDeposerMenuOpen = () => {
    setDeposerMenuOpen(true);
  };

  const handleDeposerMenuClose = () => {
    setDeposerMenuOpen(false);
  };

  const handleExamenTraiteMenuOpen = () => {
    setExamenTraiteMenuOpen(true);
  };

  const handleExamenTraiteMenuClose = () => {
    setExamenTraiteMenuOpen(false);
  };

  return (
    <Sidebar>
      <Menu>
        <MenuItem style={menuItemStyle}>
          <Button
            variant="contained"
            startIcon={<AssignmentIcon />}
            onMouseEnter={handleDeposerMenuOpen}
            onMouseLeave={handleDeposerMenuClose}
          >
            DEPOSER UN EXAMEN
          </Button>
          {deposerMenuOpen && (
            <MenuList
              onMouseEnter={handleDeposerMenuOpen}
              onMouseLeave={handleDeposerMenuClose}
              style={menuTabStyle}
            >
              <MenuItem onClick={handleDeposerMenuClose}>Choice 1</MenuItem>
              <MenuItem onClick={handleDeposerMenuClose}>Choice 2</MenuItem>
              <MenuItem onClick={handleDeposerMenuClose}>Choice 3</MenuItem>
            </MenuList>
          )}
        </MenuItem>
        <MenuItem style={menuItemStyle}>
          <Button
            variant="contained"
            startIcon={<CheckCircleIcon />}
            onMouseEnter={handleExamenTraiteMenuOpen}
            onMouseLeave={handleExamenTraiteMenuClose}
          >
            EXAMEN TRAITÉ
          </Button>
          {examenTraiteMenuOpen && (
            <MenuList
              onMouseEnter={handleExamenTraiteMenuOpen}
              onMouseLeave={handleExamenTraiteMenuClose}
              style={menuTabStyle}
            >
              <MenuItem onClick={handleExamenTraiteMenuClose}>Choice A</MenuItem>
              <MenuItem onClick={handleExamenTraiteMenuClose}>Choice B</MenuItem>
              <MenuItem onClick={handleExamenTraiteMenuClose}>Choice C</MenuItem>
            </MenuList>
          )}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default LeftSideBar;
