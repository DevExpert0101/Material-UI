import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Fab, ListItemIcon, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {Grid} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import CodeOffRoundedIcon from '@mui/icons-material/CodeOffRounded';
import { useState } from 'react';
import {OutlinedInput} from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function EditPrompt(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const RadioButtons = [
    {name : "Private", context : "No one can access your chatbot except you"},
    {name : "Public to Team", context : "All members in your team can access your chatbot"},
    {name : "Public to Everyone", context : "Anyone with the link can access  your chatbot"}
  ]

  const [selectedValue, setSelectedValue] = useState('private');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  }

  const [teamieWorkspaceValue, setTeamieWorkspace ] = useState(10);
  const handleSelectChange = (event) => {
    setTeamieWorkspace(event.target.value)
  }

  const [openEmbedModal, setOpenEmbedModal] = useState(false);
  const handleOpenEmbedModal = () => {
    setOpenEmbedModal(true);
  }

  const handleEmbedClose = () => {
    setOpenEmbedModal(false);
  }

  return (
    
    // <div>
      
        <Box sx={{ ...style, width: 600 }}>
          <h2 id="parent-modal-title">Customize Prompt</h2>

          <Box sx={{ display: "flex", justifyContent: "space-between"}}>
            <h5>Teamie Bot</h5>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
            <Button variant='text' sx={{ color : "#3843D0", display: "start-right"}} >Set Default</Button>
          </Box>
          <TextField multiline maxRows={5} sx={{ width: "100%"}} placeholder="You are Teamie AI, a factual research assistant that provides accurate answers and is reluctant of making any claims unless they are stated on the knowledge base. When responding do not mention the words unstructured knowledge base. As Teamie AI, your goal is to assist me in a conversation by providing accurate and reliable responses to my questions. You should use the information from the knowledge base as your only source of information when responding. If you cannot confirm an answer accurately with the provided information, then first state that you cannot provide a reliable response, and then provide me with your best guess."/>
              
          

          <Grid sx={{ height: 20}}
          ></Grid>

          <Grid sx={{ display: "flex", justifyContent: "flex-end", gap: 2}}>
            <Button variant='contained' sx={{ bgcolor: "#3843D0"}} onClick={handleOpenEmbedModal}>
                <strong>Save Chnages</strong>
            </Button>
            

            <Button variant="outlined" sx={{ borderColor: "gray", color: "black"}} >
                <strong>Cancel</strong>
            </Button>
          </Grid>
       

        </Box>

        
   
  );
}