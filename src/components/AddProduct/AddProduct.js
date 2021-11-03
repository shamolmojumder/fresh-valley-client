import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import styles from './AddProduct.module.css';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Input = styled('input')({
    display: 'none',
  });
const AddProduct = () => {
  function refreshPage() {
    window.location.reload(false);
  }
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
      .then(res=>{
        console.log("server side response")
        refreshPage()
      })
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
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
             <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={2}>
              <Grid item xs={6}>
              <h5>Product Name</h5>
                <input type="text" name="name"  defaultValue="" placeholder="product name" {...register("name")}  required/>
              </Grid>
              <Grid item xs={6}>
              <h5>Weight</h5>
                <input type="text" defaultValue="" placeholder="weight" {...register("weight")} required/>
              </Grid>
              <Grid item xs={6}>
              <h5>Add Price</h5>
                <input type="text" placeholder="price" {...register("price")} required/>
              </Grid>
              <Grid item xs={6}>
              <h5>Add Product</h5>
                <input type="file" name="" id="" className={styles.submitbtn} onChange={handleImageUpload} required/>
              </Grid>
              <Grid item xs={12}>
           
              <input type="submit" id="" value="Upload Product" />
              </Grid>
             </Grid>

             </Box>
             </form>
      
        </div>
    );
};

export default AddProduct;