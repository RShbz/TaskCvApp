import  React ,{useState}from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, TextField ,Paper} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Typography } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import axios from "axios";

export default function CvCreate    () {
    const [phoneNumber, setPhoneNumber] = useState('')
  const [educationName, setEducationName] = useState('')
  const [educationYear, setEducationYear] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [businessYear, setBusinessYear] = useState('')
  const [aboutBusiness, setAboutBusiness] = useState('')
const [talents, setTalents] = useState('')

  const cvData = {
    phoneNumber:phoneNumber,
    educationName: educationName,
    educationYear: educationYear,
    businessName: businessName,
    businessYear: businessYear,
    aboutBusiness: aboutBusiness,
    talents:talents,
    userid:8,
  }
  return (
     
    <Grid container
    spacing={0}
    direction="left"
    alignItems="left"
    justifyContent="left"
    sx={{
       fontFamily:'monospace',
      textAlign: 'center',
      fontSize: '0.575rem',
      fontWeight: '700', 
  }}
>
<Box
        sx={{display: 'block',
          width: '32rem',
          gridTemplateColumns: "repeat(1, 1fr)",
          m:0,
          p:1,
          borderRadius: 2, 
        }}
      >
  

   <Box

   sx={{
   bgcolor: deepPurple[600],
    p:1,
    borderRadius: 1, 
  }}>
<Paper   sx={{
    boxShadow: 1,
    p:1,m:0,marginBottom:2,
    borderRadius: 2, 
  }} elevation={3}> 
  <h2>Cv </h2>
  </Paper>

<Box  sx={{ display:'box',border:1, gridTemplateColumns: "repeat(2, 1fr)",m:1,}}>
<h3 color="#fff">Eğitim</h3>
   <TextField id="intlined-basic"  variant="outlined" size="small" value={educationName} onChange={e => setEducationName(e.target.value)} 
   sx={{
     bgcolor: (theme) =>
    (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    boxShadow: 1,
    color:'#101010',
    WebkitTextFillColor:'black',
    width:'8rem',m:1,
    borderRadius: 2, 
  }} label="Okul Adı" />

<TextField id="intlined-basic"  variant="outlined" size="small" value={educationYear} onChange={e => setEducationYear(e.target.value)}
   sx={{
     bgcolor: (theme) =>
    (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    boxShadow: 1,
    color:'#101010',
    WebkitTextFillColor:'black',
    width:'8rem',
    margin:1,
    borderRadius: 2, 
  }} label="Dönem(Yıl)" />

</Box>

<Box  sx={{ display:'box',border:1, gridTemplateColumns: "repeat(2, 1fr)",m:1,}}>
<h3 color="#fff">İletişim</h3>
   <TextField id="intlined-basic"  variant="outlined" size="small" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} 
   sx={{
     bgcolor: (theme) =>
    (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    boxShadow: 1,
    color:'#101010',
    WebkitTextFillColor:'black',
    width:'8rem',m:1,
    borderRadius: 2, 
  }} label="GSM No" />
</Box>

<Box sx={{ display:'box', border:1, gridTemplateColumns: "repeat(3, 1fr)",m:1,}}>
<h3>Tecrübe</h3>
   <TextField id="intlined-basic" label="İş Yeri Adı" variant="outlined" size="small" value={businessName} onChange={e => setBusinessName(e.target.value)}
   sx={{
     bgcolor: (theme) =>
    (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    boxShadow: 1,
    color:'#101010',
    WebkitTextFillColor:'black',
    width:'8rem',
    m:1,
    borderRadius: 2, 
  }} />

<TextField id="intlined-basic" label="Dönem(Yıl)" variant="outlined" size="small" value={businessYear} onChange={e =>setBusinessYear(e.target.value)}
    
   sx={{
     bgcolor: (theme) =>
    (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    boxShadow: 1,
    color:'#101010',
    WebkitTextFillColor:'black',
    width:'8rem',
    margin:1,
    borderRadius: 2, 
  }} label="Dönem(Yıl)" />
<TextField id="outlined-basic" multiline minRows={2} size="small" label="Beceriler" variant="outlined" size="small" value={aboutBusiness} onChange={e =>setAboutBusiness(e.target.value)}  
   sx={{
     bgcolor: (theme) =>
    (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    boxShadow: 1,
    color:'#101010',
    WebkitTextFillColor:'black',
    width:'8rem',
    margin:1,
    borderRadius: 2, 
  }} label="Beceriler" />


</Box>

<Box sx={{ display:'box',border:1, gridTemplateColumns: "repeat(1, 1fr)",m:1,}}>
<h3>Beceriler</h3>
<TextField id="outlined-basic" multiline minRows={2} size="small" label="Beceriler" variant="outlined" size="small" value={talents} onChange={e => setTalents(e.target.value)}  
   sx={{
     bgcolor: (theme) =>
    (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    boxShadow: 1,
    color:'#101010',
    WebkitTextFillColor:'black',
    width:'8rem',
    margin:1,
    borderRadius: 2, 
  }} label="Beceriler" />


</Box>


    <Button size="medium"   variant="contained" onClick={OnClickSave} sx={{bgcolor: deepPurple[500], color:deepOrange[300]}}>
      Kaydet</Button> 
     
     </Box>
   
  </Box>
  </Grid>
  );

 function OnClickSave(){


  axios.post('/cvs/add',cvData)
  }
}
