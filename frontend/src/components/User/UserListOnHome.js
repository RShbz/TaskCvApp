
import  React ,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Stack } from '@mui/material';
import axios from 'axios';
import { SettingsSystemDaydreamRounded } from '@material-ui/icons';
import Admin from '../Admin/Admin';
import { deepPurple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export default function UserAvatarOnHome(props) {

    const[id,setId]=useState(null);
    
    const[error,setError]=useState(null);
    const[isLoad,setIsLoad]=useState(false);
    const[userLists,setAdmin]=useState([]);
    
    useEffect(()=>{
        fetch("/admins/getAll")
            .then(res=>res.json())
            .then((result)=>{ setIsLoad(true); setAdmin(result);},
                 (error)=>{   setIsLoad(true);setError(error);  }
                 )
    
                },
                []);
    
    
        if(error){ return <div> error</div>;}
        else if(!isLoad){ return <div> Loading</div>;}
        else{
 
  return (
          

         userLists.map(list=>(
                                    
      
    
    <Card sx={{ color: deepPurple[800], borderRadius: 18, maxWidth: 344,maxHeight:'3rem', p:1,m:0.5}}>

        <Box>
          <Stack direction="row" spacing={1} sx={{  m: 0, paddingRight:2 }}>
          <Link to={{pathname :'/users/OnClickUseInHome/'+ list.id}} >  
          <Avatar sx={{  boxShadow: 9, bgcolor: deepPurple[800], width: 30, height: 30 }}>
         </Avatar></Link>
         <Box><Link to={{pathname :'/users/'+ list.id}}> 
         <Typography variant="h6" display="block"
            sx={{  color: deepPurple[600] }}>{list.name}  {list.sname}</Typography>
       </Link>
        </Box>
          </Stack>
        </Box>

    </Card>
         ))
);
}
}

