import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
const Addproduct = ({person}) => {
    const [counter,setCounter]=useState(0);
    const [form,setForm]=useState({
      'title':'',
      'product' : '',
      'category' : '',
      'image':''
    })
   function valueCap(e){
      setForm({...form,[e.target.name]:e.target.value})
  
    }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
      <TextField
        required
        id="outlined-required"
        label="Title"
        defaultValue="title"
        name='title'
        value={form.title}
        onChange={valueCap}
      />
        <TextField
        required
        id="outlined-required"
        label="Product"
        defaultValue="title"
        name='product'
        value={form.product}
        onChange={valueCap}
      />
        <TextField
        required
        id="outlined-required"
        label="Category"
        defaultValue="title"
        name='category'
        value={form.category}
        onChange={valueCap}
      />
        <TextField
        required
        id="outlined-required"
        label="image"
        defaultValue="Image"
        name='image'
        value={form.image}
        onChange={valueCap}
      />
      <br />
      <Button variant="contained">Submit</Button>
    </Box>
  );
  
}

export default Addproduct