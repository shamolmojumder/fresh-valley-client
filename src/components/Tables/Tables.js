import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';


const Tables = (props) => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      const [manageProductList,setManageProductList] =useState([])
      useEffect(()=>{
          fetch('http://localhost:5055/productList')
          .then(res=>res.json())
          .then(data=>{
              setManageProductList(data)
              console.log(manageProductList);
          })
      },[])
    console.log(props);
    // const {name}=props.mpl;
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Weight</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {manageProductList.map((mpl) => (
              <TableRow
                key={mpl.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {mpl.name}
                </TableCell>
              
                <TableCell align="right">{mpl.price}</TableCell>
                <TableCell align="right">{mpl.weight}</TableCell>
                <TableCell align="right">{mpl.price}</TableCell>
                <TableCell align="right">{mpl.name}</TableCell>
                <DeleteIcon />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default Tables;