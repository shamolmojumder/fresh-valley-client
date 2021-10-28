import React, { useEffect, useState } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import styles from './Home.module.css'
const Home = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5055/allProducts')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
    return (
        <div className={styles.flex}>
          {
            products.map(pd=><MediaCard pd={pd} key={pd._id}></MediaCard>)
          }
        </div>
    );
};

export default Home;