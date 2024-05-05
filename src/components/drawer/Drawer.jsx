import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { FaSearch } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { RiNotificationLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { RiFileList2Line } from "react-icons/ri";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { TbPremiumRights } from "react-icons/tb";
import { Container, ListItemIcon, ListItemText } from '@mui/material';
import { BiFontSize } from 'react-icons/bi';


const drawerWidth = 40;

const sizeIcon = 25;

const menuItems = [
  

  
  { text: 'Home', icon: <MdHomeFilled  size={35} color='black'/> },
  { text: 'Explore', icon: <FaSearch  size={sizeIcon} color='black'/> },
  { text: 'Notifications', icon: <RiNotificationLine  size={sizeIcon} color='black'/> },
  { text: 'Messages', icon: <CiMail  size={sizeIcon} color='black'/> },
  { text: 'Lists', icon: <RiFileList2Line  size={sizeIcon} color='black'/> },
  { text: 'Bookmarks', icon: <PiBookmarkSimpleBold  size={sizeIcon} color='black'/> },
  { text: 'Premium', icon: <TbPremiumRights  size={sizeIcon} color='black'/> },
  { text: 'Profile', icon: <CgProfile  size={sizeIcon} color='black'/> },
  { text: 'More', icon: <CgMoreO  size={sizeIcon} color='black'/> }
];



export default function DrawerLeft() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

// Estilo de fuente deseado
const fontStyles = {
  fontFamily: 'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontSize: '30px'
};

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
      <Box sx={{ display: 'flex', gap:'10' }}>
        <Box
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
          display="flex"
        >
          
          <Toolbar />
          
          <List style={{ display: 'flex', flexDirection: 'column' }}>
            <img src="./X_logo_2023.svg" alt="" width="30px" style={{ marginBottom: '16px', marginLeft: '16px'  }} />
            {menuItems.map((item, index) => (
              <ListItem key={item.text} disablePadding style={{ marginBottom: '16px', fontSize: '20px' }} sx={fontStyles}>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          
        </Box>

        
        </Box>
      </Container>
    </React.Fragment>
  );
}
