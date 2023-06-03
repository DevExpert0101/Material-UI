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
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShortcutRoundedIcon from '@mui/icons-material/ShortcutRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddIcon from '@mui/icons-material/Add'


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

function createData(name, status, characters, created) {
  return { name, status, characters, created };
}

const rows = [
  createData('Lecture Notes (Fall 2022).pdf', 'COMPLETED', 12495, 'Apr 15, 2023 06:23PM'),
  createData('Diary', 'IN PROGRESS', 385, 'Apr 15, 2023 06:23PM'),
  createData('https://teamie.ai/', 'ERROR', 1249, 'Apr 15, 2023 06:23PM'),
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


const Teamie = () => {
  const theme = useTheme();

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Container>
      <SimpleCard>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5}}>
          <Box sx={{ display: "flex", flexDirection: "row",justifyContent: 'flex-end', gap: 5}}>          
            {/* <FormControl  variant='outlined'>                

                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start"><EmailIcon/></InputAdornment>}    
                  placeholder='Enter Email Address'            
                />
              </FormControl> */}
            <Button 
              variant='contained' 
              sx={{ 
                bgcolor: "#3843D0", 
                display: 'flex', 
                justifyContent: 'flex-end'
              }} 
              startIcon={<AddIcon />} 
              href='/dashboard/knowledge/create'
            >
              Create Document
            </Button>
          </Box>
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650, marginLeft: '5px' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell >STATUS</TableCell>
                    <TableCell >CHARATERS</TableCell>
                    <TableCell >CREATED ON</TableCell>
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
                      <TableCell>
                        <Box
                          sx={{
                            width: "100px",
                            height: "30px",
                            borderRadius: "10px",
                            bgcolor: row.status === "COMPLETED" ? "#DCFCE7" : row.status === "IN PROGRESS" ? "#FEF3C7" : "#FEE2E2" ,
                            color: row.status === "COMPLETED" ? "#15803D" : row.status === "IN PROGRESS" ? "#B45309" : "#B91C1C",
                            textAlign: "center",
                            
                          }}
                        >
                          <Typography sx={{paddingTop: '4px'}}>{row.status}</Typography>
                          
                        </Box>
                        
                      </TableCell>
                      <TableCell >{row.characters}</TableCell>
                      <TableCell >{row.created}</TableCell>                      
                      <TableCell align="right">
                        <IconButton>
                          <MatxMenu
                            menuButton={<Icon>more_vert</Icon>}
                          >
                            <StyledItem sx={{ gap : 2}}>
                                <VisibilityOutlinedIcon ></VisibilityOutlinedIcon>                      
                                <Typography > Preview</Typography>
                            </StyledItem>
                            <StyledItem sx={{ gap : 2}}>
                                <EditOutlinedIcon ></EditOutlinedIcon>                      
                                <Typography > Rename</Typography>
                            </StyledItem>
                            <StyledItem sx={{ gap : 2}}>
                                <ShortcutRoundedIcon ></ShortcutRoundedIcon>                      
                                <Typography > Move To</Typography>
                            </StyledItem>
                            <StyledItem sx={{ gap : 2}}>
                                <FileDownloadOutlinedIcon ></FileDownloadOutlinedIcon>                      
                                <Typography > Download</Typography>
                            </StyledItem>
                            <StyledItem sx={{ gap : 2}}>
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

export default Teamie;
