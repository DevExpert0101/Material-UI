import { Avatar, RadioGroup, TextField, Typography, styled } from '@mui/material'
import { SimpleCard } from 'app/components'
import React from 'react'
import { Box, FormControlLabel, Radio, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import {ToggleButtonGroup} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditPrompt from './EditPrompt';
import {Modal} from '@mui/material';
import { grey } from '@mui/material/colors';

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

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  width: '5rem',
  height: '5rem',
};


function ToggleButton (props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <IconButton sx={{ borderRadius: "20px", height: "40px", border: isChecked ? '2px solid #3843D0' : '2px solid #000', fontSize: "15px"}} onClick={handleClick} color={isChecked ? 'primary' : 'default'}>
      {props.type ? <AddIcon /> : ( isChecked && <CheckIcon />) }{props.text}
    </IconButton>
  );
}

export default function Interface() {

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <Container>
      <SimpleCard>
        <Box>
        <Box sx={{ display: "flex", flexDirection: "row"}} >
          
          <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: 5, padding: 2}}>
            <Box>
              <Typography sx={{ fontSize: 20}}><strong>Pop-up Chatbot Interface</strong></Typography>
              <Typography>Applies when embedded on a website</Typography>
            </Box>
            <Box sx={{ gap: 2}}>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Typography sx={{ fontSize: 20}}><strong>Initial Messages</strong></Typography>
                <Button sx={{ color: "black", bgcolor: grey[300]}}>Reset</Button>
              </Box>
              
              
              <TextField style={{display:"flex"}} variant='outlined' defaultValue='Hi! What can I help you with?'></TextField>
              <Typography sx={{ color: "gray"}}>Enter each message in a new line.</Typography>
              
            </Box>

            <Box>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Typography sx={{ fontSize: 20}}><strong>The bot's role</strong></Typography>
                <Button sx={{ color: "black", bgcolor: grey[300]}}>Reset</Button>
              </Box>
              
              <TextField style={{display:"flex"}} variant='outlined' defaultValue='What is Teamie?'></TextField>
              <Typography sx={{ color: "gray"}}>Enter each message in a new line.</Typography>
            </Box>

            <Box>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                  <Typography sx={{ fontSize: 20}}><strong>User Message Color</strong></Typography>
                  <Button sx={{ color: "black", bgcolor: grey[300]}}>Reset</Button>
                </Box>
              <Box sx={{ display: "flex", flexDirection: "row"}}>
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#888EE3"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#FFC366"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#F9623E"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#FF81A9"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#4A52EC"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#6ECFBD"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#D4D4D4"}} />
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                  <Typography sx={{ fontSize: 20}}><strong>Bot Message Color</strong></Typography>
                  <Button sx={{ color: "black", bgcolor: grey[300]}}>Reset</Button>
                </Box>
              <Box sx={{ display: "flex", flexDirection: "row"}}>
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#888EE3"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#FFC366"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#F9623E"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#FF81A9"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#4A52EC"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#6ECFBD"}} />
                <Box sx={{...commonStyles, borderRadius: "50%", bgcolor: "#D4D4D4"}} />
              </Box>
            </Box>

            
          </Box>

          <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: 5, padding: 2}}>
            <Box>
              <Typography sx={{ fontSize: "20px"}}><strong>Customize Prompt</strong></Typography>
              <Typography>This will be the primary instructions given to your bot.</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
              <Button variant='outlined' onClick={handleOpen}>Edit Prompt</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                
                <EditPrompt />
              </Modal>
            </Box>

            <Box>
              <TextField rows={10} multiline sx={{ width: "100%", height: "600px"}} placeholder='You are Teamie AI, a factual research assistant that provides accurate answers and is reluctant of making any claims unless they are stated on the knowledge base. When responding do not mention the words unstructured knowledge base. As Teamie AI, your goal is to assist me in a conversation by providing accurate and reliable responses to my questions. You should use the information from the knowledge base as your only source of information when responding. If you cannot confirm an answer accurately with the provided information, then first state that you cannot provide a reliable response, and then provide me with your best guess.'></TextField>
            </Box>
          </Box>

          
          
        </Box>
          <Box sx={{display: "flex", justifyContent: "flex-end"}}>
            <Button variant='contained' sx={{ bgcolor: "#3843D0"}}>Save Changes</Button>
          </Box>
        </Box>
        
      </SimpleCard>      
    </Container>
    
  )
}
