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


export default function GetEmbededCode(props) {
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
          <h2 id="parent-modal-title">Copy Public Embed Code</h2>

          <Box sx={{ display: "flex", justifyContent: "space-between"}}>
            <h5>Teamie Bot</h5>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
            <Button variant='text' sx={{ color : "#3843D0", display: "start-right"}} >Edit Style</Button>
          </Box>
          <TextField multiline maxRows={5} sx={{ width: "100%"}} defaultValue="fwefojiowj wqojfoe nqfp e"/>
              
          

          <Grid sx={{ height: 20}}
          ></Grid>

          <Grid sx={{ display: "flex", justifyContent: "flex-end", gap: 2}}>
            <Button variant='outlined' sx={{ color: "#3843D0"}} onClick={handleOpenEmbedModal}>
                <strong>Cancel</strong>
            </Button>
            

            <Button variant="contained" sx={{ backgroundColor: "#3843D0"}}>
                <strong>Copy Code</strong>
            </Button>
          </Grid>
       

        </Box>

        
   
  );
}