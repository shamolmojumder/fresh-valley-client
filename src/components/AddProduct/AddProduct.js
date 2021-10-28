import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import styles from './AddProduct.module.css';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Input = styled('input')({
    display: 'none',
  });
const AddProduct = () => {
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
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
             <div className={styles.background}>
                <h5>Product Name</h5>
                <input className={styles.input} name="name"  defaultValue="" placeholder="product name" {...register("name")}  />

                <h5>Weight</h5>
                <input className={styles.input} defaultValue="" placeholder="weight" {...register("weight")}/>

                <h5>Add Price</h5>
                <input className={styles.input} type="text" placeholder="price" {...register("price")} />

                <h5>Add Product</h5>
                <input type="file" name="" id="" onChange={handleImageUpload} />
                <input type="submit" value="Upload Product" />
            </div>
    
            </form>
   
        </div>
    );
};

export default AddProduct;