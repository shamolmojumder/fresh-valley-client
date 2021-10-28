import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button } from "@mui/material";
import AddProduct from '../AddProduct/AddProduct'


const drawerWidth = 240;


const Admin = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const eventData={
      name:data.name,
      price:data.price,
      imageUrl:imageUrl
    }
    const url=`http://localhost:5055/addProduct`
    console.log(eventData)
    fetch(url,{
      method:"POST",
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify(eventData)
    })
    .then(res=>console.log("server side response"))
  }
  
  // console.log(watch("example")); // watch input value by passing the name of it
  const handleImageUpload=event=>{
    console.log(event.target.files[0]);
    const imageData=new FormData();
    imageData.set('key','62aa36c1f5b1eab377e390270ea79bdc');
    imageData.append('image',event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setImageUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const [imageUrl,setImageUrl]=useState(null)
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
                <AddProduct/>
              {/* <div className="form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name"  defaultValue="" placeholder="product name" {...register("name")} />
                <br />
                <input name="price" defaultValue="" placeholder="price" {...register("price")}/>
                <br />
                <input type="file" name="" id="" onChange={handleImageUpload} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
              </form>
              </div> */}

            {/* <Button className={styles.customButton}>Save</Button> */}
      </Box>
    </Box>
    );
};

export default Admin;