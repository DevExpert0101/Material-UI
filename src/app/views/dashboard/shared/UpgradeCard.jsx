import { Button, Box, Card, Fab, styled, Grid, Icon, Typography, Avatar } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';
import { IconButton } from '@mui/material';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import { MatxMenu } from 'app/components';
import { MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from '@mui/material';
import { useState } from 'react';
import SharedBot from './SharedBot';
import { deepOrange, deepPurple } from '@mui/material/colors';


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

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '24px',
  padding: '24px !important',
  [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '24px !important',
  background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const Paragraph = styled('p')(({ theme }) => ({
  margin: 0,
  paddingTop: '24px',
  paddingBottom: '24px',
  color: theme.palette.text.secondary,
}));



const UpgradeCard = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CardRoot sx={{width: "300px", margin: `${props.marginWidth - 10}px`, marginTop: "0px", marginBottom: "0px"}}>
      <StyledCard elevation={0} sx={{height: "350px", alignItems: "center"}}>        
          
          <Grid>          
          <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Avatar sx={{ bgcolor: deepPurple[500]}}>U</Avatar>
          </Box>
          <IconButton sx={{position:"absolute", right: "10px", top: "10px"}}>
                  <MatxMenu
                  menuButton={                               
                      <Icon>more_vert</Icon>                    
                  }
                >
                  <StyledItem>
                    {/* <Link to="/">                       */}
                      <DeleteIcon sx={{ color : "red"}}></DeleteIcon>                      
                      <Typography sx={{ color: "red"}}> Delete</Typography>
                    {/* </Link> */}
                  </StyledItem>

                  
                </MatxMenu>
          </IconButton>

        
        <Paragraph sx={{height: "150px"}}>
          <strong>{props.botname ? props.botname : "Unity"} </strong>
          <br />
          <br />
          {props.description ? props.description : "No Description"}
        </Paragraph>

        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{  backgroundColor: "#3843D0", width: "200px"}}
          startIcon={<ChatRoundedIcon />}
        >
          Chat
        </Button>
        </Grid>
        
        <Grid sx={{display: "flex", justifyContent: "space-between" , marginTop: "20px"}}>
           <Button variant="outlined" sx={{width: "40%"}} startIcon={<EditIcon />}>Edit</Button> 
           <Button variant="outlined" sx={{width: "40%"}} startIcon={<ShareIcon />} onClick={handleOpen}>Share</Button>
           <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            
            <SharedBot />
          </Modal>
        </Grid>
      </StyledCard>
    </CardRoot>
  );
};

export default UpgradeCard;
