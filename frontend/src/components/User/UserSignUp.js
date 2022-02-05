import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Paper, TextField } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { SettingsPhone } from "@material-ui/icons";
import axios from "axios";

export default function UserSignUp() {




  const [personname, setPersonname] = useState('');
  const [surname, setSurName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const newUserData = {
    name: personname,
    sname: surname,
    email: email,
    password: password,

  }


  return (

    <Grid container
      spacing={0}
      direction="left"
      alignItems="left"
      justifyContent="center"
      sx={{
        fontFamily: 'monospace',
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <Box
        sx={{
          display: 'block',
          width: '20rem',
          gridTemplateColumns: "repeat(1, 1fr)",
          m: 0,
          p: 1,
          borderRadius: 2,
        }}
      >


        <Box

          sx={{
            bgcolor: deepPurple[600],
            boxShadow: 1,
            p: 1,
            borderRadius: 1,
          }}>
          <Paper sx={{
            boxShadow: 1,
            p: 1, m: 0, marginBottom: 2,
            borderRadius: 2,
          }} elevation={3}>
            <h3>Yeni Üye</h3>
          </Paper>

          <TextField size="small" value={personname} onChange={(e) => setPersonname(e.target.value)}
            sx={{
              bgcolor: (theme) =>
                (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              boxShadow: 1,
              color: '#101010',
              WebkitTextFillColor: 'black',
              width: '15rem',
              p: 1,
              borderRadius: 2,
            }} label="Adınız" />

          <TextField size="small" value={surname} onChange={(e) => setSurName(e.target.value)}
            sx={{
              bgcolor: (theme) =>
                (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              boxShadow: 1,
              color: '#101010',
              WebkitTextFillColor: 'black',
              width: '15rem',
              p: 1, m: 1,
              borderRadius: 2,
            }} label="Soyadınız" />

          <TextField size="small" value={email} onChange={e => setEmail(e.target.value)}
            sx={{
              bgcolor: (theme) =>
                (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              boxShadow: 1, width: '15rem',
              WebkitTextFillColor: 'black',
              p: 0.8, m: 1,
              borderRadius: 2,
            }} label="E-mail" />

          <TextField size="small" value={password} onChange={e => setPassword(e.target.value)}
            sx={{
              bgcolor: (theme) =>
                (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              boxShadow: 1, width: '15rem',
              WebkitTextFillColor: 'black',
              p: 0.8, m: 1, marginBottom: 0,
              borderRadius: 2,
            }} label="Parola" />



          <Button size="medium" variant="contained" onClick={OnClickSave} sx={{ bgcolor: deepPurple[600] }}>
            Kaydet</Button>

        </Box>

      </Box>
    </Grid>
  );

  function OnClickSave() {
   
  
    axios.post('/users/add', newUserData)
      .then(correctSave())
      .catch((error) => { alert("Hata:" + error) })
    }


function correctSave(){
 alert("Kaydınız Yapılmıştır.")
  setPersonname('');
  setSurName('');
  setEmail('');
  setPassword('');
}
  }

