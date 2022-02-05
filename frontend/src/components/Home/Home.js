import * as React from 'react';
import Grid from '@mui/material/Grid';
import { AppBar, Button, LinearProgress, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import UserSignUp from '../User/UserSignUp';
import UserSignIn from '../User/UserSignIn';
import Appbar from '../Appbar/Appbar';
import UserPage from '../User/UserPage';
import CvCreate from '../Cv/CvCreate';
import UserAvatarOnHome from '../User/UserListOnHome';
import InputLabel from '@mui/material/InputLabel';
import { deepPurple } from '@mui/material/colors';
import Admin from '../Admin/Admin';
import CvListo from '../Cv/CvListo';
import UserListo from '../User/UserListo';
import UserInfo from '../User/UserInfo';
import OnClickUseInHome from '../User/OnClickUseInHome';


export default function Home(props) {

  return (

    <Router>

      <Grid>
        <Box sx={{ flexGrow: 29 }}>
          <AppBar position="static" color="success" enableColorOnDark
          sx={{ height:'7rem', bgcolor: deepPurple[600] }}>
            <Toolbar>
             
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bismillahirrahmanirrahim
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" color='write'> HOME </Link>
              </Typography>

               <Link to="/UserSignIn"> 
              <InputLabel underline="none" color='secondary'> Giriş Yap </InputLabel> </Link>
              <Link to="/UserSignUp"> 
              <InputLabel underline="none" color='secondary'> Kayıt Ol </InputLabel> </Link>
            </Toolbar>
          </AppBar>
        </Box>

    </Grid>
    
    <Grid container
      spacing={0}
      direction="center"
      alignItems="left"
      justifyContent="center"
      sx={{
        gap: 0,
        gridTemplateColumns: "repeat(3, 1fr)",
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >


        <Box
          sx={{
           
            boxShadow: 2,
            width: '20rem',
            height: '35rem',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#e3f2fd'),
            m: 1,
            p: 1,
            borderRadius: 2,
          }}
        >
  
          <Routes>
       
          <Route exact  path="/users/info/:userId"  element={<UserInfo name="deneme" />} />
          <Route exact  path="/users/OnClickUseInHome/:userId"  element={<OnClickUseInHome id={props.id} />} />
          <Route exact path="/UserSignUp" element={<UserSignUp/>} />
            <Route exact path="/UserSignIn" element={<UserSignIn />} />
            <Route exact path="/UserPage" element={<UserPage/>} />
            <Route exact path="/Admin" element={<Admin/>} />
          </Routes>
        </Box>
        <Box
          sx={{
            display: 'block',
            borderColor: 'secondary.main',
            boxShadow: 1,
            width: '35rem',
            height: '35rem',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#e3f2fd'),
            m: 1,
            p: 1,
            borderRadius: 2,
          }}
        > 
        ANASAYFA
          <Routes>
          <Route   exact  path="/CvCreate"  element={<CvCreate/>} />
          <Route   exact  path="/CvList"  element={<CvListo/>} />
          <Route   exact  path="/UserListo"  element={<UserListo/>} />
          </Routes>
        </Box>


        <Box
          sx={{
            display: 'box',
            borderColor: 'secondary.main',
            boxShadow: 1,   
            height: '35rem',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#e3f2fd'),
            m: 1, p: 1,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{ 
              overflow: 'auto',
              alignItems:'center',
              display:'block',
              borderColor: '#f3f2fd',
              border:0,
              boxShadow: 0,
              width: '22rem',
            height:'33rem',
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#e3f2fd'),
              m: 0, p: 1,

              borderRadius: 1,
            }}
          >
           <UserAvatarOnHome />
         
          </Box>
        </Box>


      </Grid>
  
 </Router>

  );




}
