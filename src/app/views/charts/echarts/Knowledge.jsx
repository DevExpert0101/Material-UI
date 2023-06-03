import { ListItemIcon, Typography, styled } from '@mui/material'
import { SimpleCard } from 'app/components'
import React from 'react'
import { Box, FormControlLabel, Checkbox, Grid, FormGroup, Button } from '@mui/material';
import { FormControl } from '@mui/material';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

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

export default function Knowledge() {
  return (
    <Container>

      <SimpleCard>
        <Box>
          <Typography>Select from knowledge base</Typography>
        </Box>
        
        <FormControl sx={{ width: "100%"}}>
          <FormGroup sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <FormControlLabel control={<Checkbox defaultChecked />} 
              sx={{ 
                alignItems: "baseline", 
                border: "2px solid red",
                borderColor: "#3843D0",
                borderWidth: 2,
                borderRadius: 2,
                marginLeft: 0,
                marginRight: 0,
                width: "400px"}} 
              label={
              <Grid sx={{  display:"flex", alignItems: "center"}}>
                <Grid>                  
                  <ListItemIcon><FolderOutlinedIcon /></ListItemIcon>                  
                </Grid>

                <Grid sx={{ alignItems: "left"}}>
                  {/* <Typography sx={{ fontSize: 20}}> <strong>Public to Everyone</strong></Typography> */}
                  <Typography>Teamie</Typography>
                </Grid>
              </Grid>
            } />
            <FormControlLabel control={<Checkbox />} 
              sx={{ 
                alignItems: "baseline", 
                border: "2px solid red",
                borderColor: "#3843D0",
                borderWidth: 2,
                borderRadius: 2,
                marginLeft: 0,
                marginRight: 0,
                width: "400px"}}  label={
              <Grid sx={{  display:"flex", alignItems: "center"}}>
              <Grid>
                <Grid>                  
                  <ListItemIcon><FolderOutlinedIcon/></ListItemIcon>
                </Grid>
                
              </Grid>

              <Grid>
                {/* <Typography sx={{ fontSize: 20}}> <strong>Public to Everyone</strong></Typography> */}
                <Typography>UCLA</Typography>
              </Grid>
            </Grid>
            } />
            <FormControlLabel control={<Checkbox />} 
              sx={{ 
                alignItems: "baseline", 
                border: "2px solid red",
                borderColor: "#3843D0",
                borderWidth: 2,
                borderRadius: 2,
                marginLeft: 0,
                marginRight: 0,
                width: "400px"}}  label={
              <Grid sx={{  display:"flex", alignItems: "center"}}>
              <Grid>
                <Grid>                  
                  <ListItemIcon><FolderOutlinedIcon /></ListItemIcon>
                </Grid>
                
              </Grid>

              <Grid>
                {/* <Typography sx={{ fontSize: 20}}> <strong>Public to Everyone</strong></Typography> */}
                <Typography>Unity</Typography>
              </Grid>
            </Grid>
            } />
          </FormGroup>
        </FormControl>

        <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
          <Button variant='contained' sx={{ backgroundColor: "#3843D0", marginTop: 3}}>Save Changes</Button>
        </Box>
        
      </SimpleCard>
      
    </Container>
    
  )
}
