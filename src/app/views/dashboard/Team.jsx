import { Box, Button, Icon, InputAdornment, InputLabel, Menu, OutlinedInput, TextField, Typography, styled, useTheme } from '@mui/material';
import SimpleCard from 'app/components/SimpleCard';
import EmailIcon from '@mui/icons-material/Email';
import {FormControl} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IconButton} from '@mui/material';
import { MatxMenu } from 'app/components';
import DeleteIcon from '@mui/icons-material/Delete';
import {MenuItem} from '@mui/material';
import { useState } from 'react';
import {Select} from '@mui/material';
import {NativeSelect} from '@mui/material';


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px'
  },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px'
    }
  }
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 100,
  '& a': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  '& span': { marginRight: '10px', color: theme.palette.text.primary }
}));

function createData(name, email, role) {
  return { name, email, role };
}

const rows = [
  createData('Jeffery Yu (you)', 'jeffrey@ucla.edu', 'Admin'),
  createData('Simon Yuan', 'simon@ucla.edu', 'Editor'),
  createData('Lillian Sun', 'lillian@ucla.edu', 'Member'),
  createData('Belinda Wang', 'belinda@ucla.edu', 'Member')
];

const v = {
  "Editor": 10,
  "Member": 20
}

function RoleButton (props){
  const [value, setValue] = useState(props.role);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="filled" sx={{m:1,  minWidth: 120 }}>      
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        onChange={handleChange}        
        defaultValue={v[props.role]}
      >                                
        <MenuItem value={10}>Editor</MenuItem>
        <MenuItem value={20}>Member</MenuItem>                
      </Select>
    </FormControl>
  )
}


const Team = () => {
  const theme = useTheme();

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Container>
      <SimpleCard>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5}}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 5}}>          
            <FormControl  variant='outlined'>
                {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}

                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start"><EmailIcon/></InputAdornment>}    
                  placeholder='Enter Email Address'            
                />
              </FormControl>
            <Button variant='contained' sx={{ bgcolor: "#3843D0"}}>Invite</Button>
          </Box>
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650, marginLeft: '5px' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell >EMAIL</TableCell>
                    <TableCell >ROLE</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell >{row.email}</TableCell>
                      <TableCell >
                        {row.role === "Admin" ? (row.role): (
                          <RoleButton role={row.role} />
                        )}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <MatxMenu
                            menuButton={<Icon>more_vert</Icon>}
                          >
                            <StyledItem>                              
                                <DeleteIcon sx={{ color : "red"}}></DeleteIcon>                      
                                <Typography sx={{ color: "red"}}> Delete</Typography>
                            </StyledItem>
                          </MatxMenu>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default Team;
