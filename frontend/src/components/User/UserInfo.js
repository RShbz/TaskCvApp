
import React, { useState } from "react";

import  Card  from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box,Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple,deepOrange } from "@mui/material/colors";
import Home from "../Home/Home";

export default function UserInfo(props) {



  return ( 


    <Grid
          direction="left"
          alignItems="left"
          justifyContent="left"
          >
      <Card 

      
      sx={{ maxWidth: 340, }}>
        <Box>
          <Stack direction="row" spacing={1} sx={{ m: 1, p: 0 }}>
            <Avatar sx={{ bgcolor: deepPurple[800], width: 65, height: 65 }}>
            Elif Beyza
            </Avatar>
          </Stack>
        </Box>
        <CardContent
    
        
        >
          <Typography
            gutterLeft
            variant="h5"
            component="div"
            sx={{  boxShadow: 9, color: deepPurple[600] }}
          >
            Elif Beyza ŞAHBAZ{props.name} 
          </Typography>

          <Typography variant="body2" color="text.secondary">
            hakkkında hakkkındahak kkın dahakkk ındahakkkında hakkkında
            hakkkında hakkkında hakkkındahak kkın dahakkk ındahakkkında hakkkında
            hakkkında
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{boxShadow: 3,color: deepOrange[300] , bgcolor: deepOrange[800],  }} size="small">Profil Düzenle</Button>
            <Button href="/CvCreate/cvid" size="small" sx={{ boxShadow: 3,color: deepPurple[300] , bgcolor: deepPurple[800],  }}>Cv Düzenle</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}




