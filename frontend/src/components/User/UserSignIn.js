import  React, { useState } from "react";
import { Component } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Paper, TextField } from "@mui/material";
import { deepOrange ,deepPurple} from "@mui/material/colors";
import axios from "axios";

export default function UserSignIn() {


  const[password,setPassword]=useState('');
  const[email,setEmail]=useState('');

  return (
    <Box
    sx={{
      m:0,
      p:0,
 
    }}
  >
  
   <Box

   sx={{
    bgcolor: deepOrange[800],
    boxShadow: 1,
    p:1,
    borderRadius: 1, 
  }}>
<Paper   sx={{
    boxShadow: 1,
    p:1,m:0,marginBottom:2,
    borderRadius: 2, 
  }} elevation={3}> 
  Kullanıcı Girişi
  </Paper>

   <TextField size="small"  value={email} onChange={(e)=>setEmail(e.target.value)}
   sx={{
     bgcolor: (theme) =>
    (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    boxShadow: 1,
    color:'#101010',
    WebkitTextFillColor:'black',
    width:'15rem',
    p:1,
    borderRadius: 2, 
  }} label="@E-mail" />

   <TextField   size="small" value={password} onChange={(e)=>setPassword(e.target.value)}
   sx={{ 
    bgcolor: (theme) =>
    (theme.palette.mode === 'dark' ? '#101010' : '#fff'), 
    boxShadow: 1,
    WebkitTextFillColor:'black',
    p:0.8,m:2,
    borderRadius: 2, 
  }} label="Şifre"  />
    <Button size="medium"  onClick={login} variant="contained" sx={{bgcolor: deepPurple[600]}}>
      Giriş</Button> 
     
     </Box>
   
  </Box>
  );

  function login(){


    axios.post('users/login',{email:email,password:password})
    .then(correctEnter())
    .catch(error=>{alert("Bir Hata Meydana geldi"+ error)})
  }

}
