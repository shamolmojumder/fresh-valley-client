import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import styles from './Admin.module.css'
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const Input = styled('input')({
    display: 'none',
  });
const Admin = () => {
    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Add Product
          </Typography>
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
        <Divider />
        <List>
          {['Manage', 'Add Product', 'Edit Product'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <ControlPointIcon /> : <EditIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
            <div className={styles.background}>
                <h5>Product Name</h5>
                <input className={styles.input} type="text" placeholder="Name" />

                <h5>Weight</h5>
                <input className={styles.input} type="text" placeholder="Name" />

                <h5>Add Price</h5>
                <input className={styles.input} type="text" placeholder="price" />

                <h5>Add Product</h5>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button className={styles.customButton} variant="contained" component="span">
                        Upload
                        </Button>
                    </label>
                </Stack>
            </div>

      </Box>
    </Box>
    );
};

export default Admin;