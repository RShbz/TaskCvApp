import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';


const columns = [
  {
    field: 'AdıSoyadı',
    headerName: 'Adı Soyadı',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.name || ''} ${params.row.sname || ''}`,
      renderCell: (cellValues) => <Link to={{pathname:'/users/info/'+cellValues.row.id}}>{cellValues.row.name +" "+cellValues.row.sname} </Link>,
      
  },{
    field: 'email',
    headerName: 'E-mail',
    width: 170,
    editable: false,   sortable: false,
    renderCell: (cellValues) => <Link to={{pathname:'/users/info/'+cellValues.row.id}}>{cellValues.row.email} </Link>,
 
  }
 ,
  {
    field: 'phone',
    headerName: 'Gsm',
    width: 100,
   sortable: false,
    editable: false,
    renderCell: (cellValues) => <Link to={{pathname:'/users/info/'+cellValues.row.id}}>{cellValues.row.phone} </Link>,
 
  },

{
    field: 'edit',
    headerName: 'İşlem',
    width: 161,
   sortable: false,
    editable: false,
    renderCell: (cellValues) => {
      return (
       <> <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ marginLeft:0,borderRadius:0, }}
          >
          Düzenle
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ marginLeft:0,borderRadius:0, bgcolor:red[700]}}
          >
          Sil
        </Button>
        </>
      );
    }
  },
  
];

const rows = [
  { id: 1, name: 'Snow', sname: 'Jon', Gsm: '4445443454', email:'remzis@gmail.com'},
  { id: 2, name: 'Lannister', sname: 'Cersei', Gsm: 42 , email:'remzis@gmail.com'},
  { id: 3, name: 'Lannister', sname: 'Jaime', Gsm: 45 , email:'remzis@gmail.com'},
  { id: 4, name: 'Stark', sname: 'Arya', Gsm: 16, email:'remzis@gmail.com' },
  { id: 5, name: 'Targaryen', sname: 'Daenerys', Gsm: null , email:'remzis@gmail.com'},
  { id: 6, name: 'Melisandre', sname: null, Gsm: 150, email:'remzis@gmail.com' },
  { id: 7, name: 'Clifford', sname: 'Ferrara', Gsm: 44, email:'remzis@gmail.com' },
  { id: 8, name: 'Frances', sname: 'Rossini', Gsm: 36 , email:'remzis@gmail.com'},
  { id: 9, name: 'Roxie', sname: 'Harvey', Gsm: 65 , email:'remzis@gmail.com'},
];

export default function UserListo() {
  const[error,setError]=useState(null);
  const[isLoad,setIsLoad]=useState(false);
  const[userLists,setAdmin]=useState([]);
  
  useEffect(async ()=>{
     await fetch("/users/getAll")
          .then(res=>res.json())
          .then((result)=>{ setIsLoad(true); setAdmin(result);},
               (error)=>{   setIsLoad(true);setError(error);  }
               )
  
              },
              []);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userLists}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[2]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
