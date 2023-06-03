import { Box, Button, CssBaseline, Divider, Icon, InputAdornment, InputLabel, Menu, OutlinedInput, TextField, Typography, styled, useTheme } from '@mui/material';
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
import CheckIcon from '@mui/icons-material/Check';
import { Check } from '@mui/icons-material';


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

function createData(visa, date, amount) {
  return { visa, date, amount };
}

const rows = [
  createData('Visa ****6522', '28 December 2023', '$99.00'),
  createData('Visa ****6522', '28 December 2023', '$99.00'),
];



const Billing = () => {
  const theme = useTheme();

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Container>
      <SimpleCard>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5}}>
          <Box>
            <Typography sx={{ fontSize: '20px'}}>Select Plan</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              border: '1px solid #AAA', 
              borderRadius: '5px', 
              width: '300px', 
              height: '400px',
              padding: '20px'
              }}>
              <Typography sx={{ fontSize: '18px'}}>Starter</Typography>
              <Typography>All the basics for personal use</Typography>
              <Typography sx={{ fontSize: '20px'}}><strong>Free</strong></Typography>
              <Button sx={{ display: 'flex', bgcolor: '#3843D0'}} variant='contained'>
                Select Plan
              </Button>
              <Divider/ >
              <Typography>What's included</Typography>
              <Box sx={{ height: "70px"}}>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 3}}><CheckIcon sx={{ color: '#3843D0'}}/>1 Workspace</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 3}}><CheckIcon sx={{ color: '#3843D0'}}/>10 Bots</Typography>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              border: '1px solid #AAA', 
              borderRadius: '5px', 
              width: '300px', 
              height: '400px',
              padding: '20px'
              }}>
              <Typography sx={{ fontSize: '18px'}}>Premium</Typography>
              <Typography>More Comprehensive AI Solutions</Typography>
              <Typography sx={{ fontSize: '20px'}}><strong>$39/mo</strong></Typography>
              <Button sx={{ display: 'flex', bgcolor: '#3843D0'}} variant='contained'>
                Select Plan
              </Button>
              <Divider/ >
              <Typography>What's included</Typography>
              <Box sx={{ height: "70px"}}>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 3}}><CheckIcon sx={{ color: '#3843D0'}}/>GPT4.0 Model</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 3}}><CheckIcon sx={{ color: '#3843D0'}}/>50 Bots</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 3}}><CheckIcon sx={{ color: '#3843D0'}}/>Embedded Chatbot</Typography>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              border: '1px solid #AAA', 
              borderRadius: '5px', 
              width: '300px', 
              height: '400px',
              padding: '20px'
              }}>
              <Typography sx={{ fontSize: '18px'}}>Advanced</Typography>
              <Typography>Deploying Bots for Multiple Bussinesses</Typography>
              <Typography sx={{ fontSize: '20px'}}><strong>$99 /mo</strong></Typography>
              <Button sx={{ display: 'flex', bgcolor: '#3843D0'}} variant='contained'>
                Select Plan
              </Button>
              <Divider/ >
              <Typography>What's included</Typography>
              <Box sx={{ height: "70px"}}>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 3}}><CheckIcon sx={{ color: '#3843D0'}}/>100 Workspace</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 3}}><CheckIcon sx={{ color: '#3843D0'}}/>100 Bots</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 3}}><CheckIcon sx={{ color: '#3843D0'}}/>25,000 Documents</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "860px"}}>
            <Typography>Payment History</Typography>
            
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 600, maxWidth: 800, marginLeft: "5px" }} aria-label="simple table">
                <TableHead>
                  <TableRow >
                    <TableCell sx={{ color: "#AAA"}}>Card</TableCell>
                    <TableCell sx={{ color: "#AAA"}}>Period</TableCell>
                    <TableCell sx={{ color: "#AAA"}}>Total</TableCell>                      
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.visa}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.visa}
                      </TableCell>
                      <TableCell >{row.date}</TableCell>                        
                      <TableCell >{row.amount}</TableCell>
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

export default Billing;
