import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { FaSearch } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { RiNotificationLine } from "react-icons/ri";
import { RiNotificationFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { RiFileList2Line } from "react-icons/ri";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { TbPremiumRights } from "react-icons/tb";
import { Container, ListItemIcon, ListItemText } from '@mui/material';

const drawerWidth = 240;

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
PiBookmarkSimpleBold


export default function DrawerLeft() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Container>
      <CssBaseline />
      <Box sx={{ display: 'flex', gap:'40' }}>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Toolbar>
        </AppBar>

        <Drawer
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
        >
          <Toolbar />
          
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Typography paragraph>
            Primero
          </Typography>
          <Typography paragraph>
            Segundo
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
