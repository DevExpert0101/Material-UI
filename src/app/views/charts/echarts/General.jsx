import { Box, Button, TextField, Typography, styled, useTheme } from '@mui/material';
import Breadcrumb from 'app/components/Breadcrumb';
import SimpleCard from 'app/components/SimpleCard';
import AreaChart from './AreaChart';
import ComparisonChart from './ComparisonChart';
import DoughnutChart from './Doughnut';
import LineChart from './LineChart';
import {Grid} from '@mui/material';
import { RadioGroup , FormControlLabel, Radio, Fab} from '@mui/material';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';



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

function ImageUpload () {
  const [image, setImage] = useState(null);
  const onDrop = (acceptedFiles) => {
    // Here, you can perform additional validations or processing on the uploaded image if needed
    setImage(acceptedFiles[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignContent: "center"}}>
      <Box>
        {image ? (
          <Box>            
            <img src={URL.createObjectURL(image)} alt="Selected" style={{ maxWidth: '100%', marginTop: '8px' }} width={100}/>
          </Box>
        ):(
          <Box>            
            <img src={"/assets/images/random-4.png"} alt="Selected" style={{ maxWidth: '100%', marginTop: '8px' }} width={100}/>
          </Box>

        )}
      </Box>
      
      <Box  sx={{ paddingLeft: 2, marginTop: "8px"}}>
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <Typography variant="body1">Drop the image here...</Typography>
          ) : (            
            <Button {...getRootProps()} variant='outlined'>Upload</Button>
            
          )          
        }
        <Typography sx={{ marginTop: "15px"}}>Image should be at least 100x100px</Typography>
      </Box>

    </Box>
  );
  
}

const General = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState('private');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  }

  return (
    
    <Container>
      <SimpleCard>
        <Box sx={{display: "flex", flexDirection: "row"}}>
          <Box sx={{display: "flex", flexDirection: "column", width: "50%", padding: 5, gap: 3}}>
            <Box>
              <Typography sx={{ fontSize: 20}}>Bot Name</Typography>          
              <TextField defaultValue='Teamie' variant='outlined' />
            </Box>

            <Box>
              <Typography sx={{ fontSize: 20}}>Bot Description</Typography>          
              <TextField defaultValue='Answer quesitons for all Teamie employees' variant='outlined' />
            </Box>

            <Box>
              <Typography sx={{ fontSize: 20}}>Model</Typography>          
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="3.5"
                name="radio-buttons-group"
                sx={{ gap: 2 }}              
              >              
                <FormControlLabel 
                  value="3.5" 
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

                      <Box sx={{ padding : 3}}>
                        <Typography sx={{ fontSize: 20}}> <strong>GPT 3.5</strong></Typography>
                        <Typography>The fastest and cheapest model good for most cases. <br/> Free</Typography>
                      </Box>
                    </Box>
                } /> 

                <FormControlLabel 
                  value="4" 
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

                      <Box sx={{ padding : 3}}>
                        <Typography sx={{ fontSize: 20}}> <strong>GPT 4</strong></Typography>
                        <Typography>More powerful but slower model for advanced reasoning or content creation. <br/> Upgrade to Premium</Typography>
                      </Box>
                    </Box>
                } /> 
              </RadioGroup>
            </Box>
          </Box>

          <Box sx={{ width: "50%", display: "flex", flexDirection: "column", padding: 5}}>
            <Box>
              <Typography sx={{ fontSize: 20}}>
                Chatbot Profile Picture
              </Typography>
            </Box>
            <ImageUpload />          
          </Box>
          
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: 5}}>
          <Button variant='contained' sx={{ backgroundColor : '#3843D0' }}>Save Settings</Button>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default General;
