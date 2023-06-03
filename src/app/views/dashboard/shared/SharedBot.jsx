import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Fab, ListItemIcon, MenuItem, Modal, Select, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {Grid} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import CodeOffRoundedIcon from '@mui/icons-material/CodeOffRounded';
import { useState } from 'react';
import { OutlinedInput, InputAdornment } from '@mui/material';
import GetEmbededCode from './GetEmbedCode';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function SharedBot() {
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
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Share Teamie Bot</h2>
          <FormControl>            
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="private"
              name="radio-buttons-group"
              sx={{ gap: 2 }}
              
            >              
              <FormControlLabel 
                value="private" 
                control={<Radio />}                 
                sx={{
                  border: "2px solid red",
                  borderColor: "#3843D0",
                  borderWidth: 2,
                  borderRadius: 2,
                  marginLeft: 0,
                  marginRight: 0,
                }}
                onClick={handleRadioChange}
                label={
                  <Box sx={{  display:"flex", alignItems: "center", gap: 2}}>
                    <Box>
                      <Fab size='small'>
                      <LockIcon/>
                      </Fab>
                    </Box>

                    <Box>
                      <Typography sx={{ fontSize: 20}}> <strong>Private</strong></Typography>
                      <Typography>No one can access your chatbot except you</Typography>
                    </Box>
                  </Box>
              } /> 

              <FormControlLabel 
                value="public" 
                control={<Radio />}                 
                sx={{
                  border: "2px solid red",
                  borderColor: "#3843D0",
                  borderWidth: 2,
                  borderRadius: 2,
                  marginLeft: 0,
                  marginRight: 0,
                }}
                onClick={handleRadioChange}
                label={
                  <Grid sx={{  display:"flex", alignItems: "center", gap: 2}}>
                    <Grid>
                      <Fab size='small'>
                        <PeopleIcon/>
                      </Fab>
                    </Grid>

                    <Grid>
                      <Typography sx={{ fontSize: 20}}> <strong>Public to Team</strong></Typography>
                      <Typography>All memebers in your team can access your chatbot</Typography>
                    </Grid>
                  </Grid>
              } /> 
              {
                selectedValue === "public" && 
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                  <Select size='small' value={teamieWorkspaceValue} onChange={handleSelectChange} displayEmpty sx={{width: 250}}>
                    <MenuItem value={10}>Teamie 1</MenuItem>
                    <MenuItem value={20}>Teamie 2</MenuItem>
                  </Select>

                  <Button variant='outlined' sx={{color: "#3843D0", fontWeight: "bold"}}>
                    Send
                  </Button>
                </Box>
              }
              <FormControlLabel 
                value="entire" 
                control={<Radio />}                 
                sx={{
                  border: "2px solid red",
                  borderColor: "#3843D0",
                  borderWidth: 2,
                  borderRadius: 2,
                  marginLeft: 0,
                  marginRight: 0,
                }}
                onClick={handleRadioChange}
                label={
                  <Grid sx={{  display:"flex", alignItems: "center", gap: 2}}>
                    <Grid>
                      <Fab size='small'>
                        <PublicIcon />
                      </Fab>
                      
                    </Grid>

                    <Grid>
                      <Typography sx={{ fontSize: 20}}> <strong>Public to Everyone</strong></Typography>
                      <Typography>Anyone with the link can access your chatbot</Typography>
                    </Grid>
                  </Grid>
              } /> 

              {
                selectedValue === "entire" && 
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                  <OutlinedInput
                    size='small'
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />

                  <Button variant='outlined' sx={{color: "#3843D0", fontWeight: "bold"}}>
                    Copy Link
                  </Button>
                </Box>
              }
              
              
            </RadioGroup>
          </FormControl>

          <Grid sx={{ height: 20}}
          ></Grid>

          <Grid sx={{ display: "flex", justifyContent: "space-between"}}>
            <Button variant='outlined' startIcon={<CodeOffRoundedIcon />} sx={{ color: "#3843D0"}} onClick={handleOpenEmbedModal}>
                <strong>Get Embed Code</strong>
            </Button>
            <Modal
              open={openEmbedModal}
              onClose={handleEmbedClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              
              <GetEmbededCode />
            </Modal>
            

            <Button variant="contained" sx={{ backgroundColor: "#3843D0"}}>
                <strong>Done</strong>
            </Button>
          </Grid>
       

        </Box>

        
   
  );
}