import React from 'react'
import { SimpleCard } from 'app/components';
import { Box, Button,Avatar, Typography, styled, useTheme, TextField } from '@mui/material';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import { useState } from 'react';
import {IconButton} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { FiLink, FiType } from "react-icons/fi";
import { FaDiceD6 } from "react-icons/fa";
import { BsFileEarmarkText} from 'react-icons/bs';
import {ToggleButtonGroup} from '@mui/material';
import {ToggleButton} from '@mui/material';
import { useEffect } from 'react';
import { CiCircleCheck } from "react-icons/ci";


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

function ToggleButtonStyled (props) {

  
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <IconButton sx={{ borderRadius: "10px", width: "250px",  border: isChecked ? '2px solid #3843D0' : '2px solid #AAA', fontSize: "15px"}} onClick={handleClick} color={isChecked ? 'primary' : 'default'}>
      {props.value === "text" ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '2px', gap: 2, width: "200px"}}> 
          <FiType style={{width:"25px", height:"25px"}}/>
          <Box>
            <Typography sx={{ textAlign: 'initial'}}><strong>Text</strong></Typography>
            <Typography>Write or copy paste document</Typography>
          </Box>
        </Box>
        ) : props.value === 'upload' ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '2px', gap: 2, width: "200px"}}> 
            <BsFileEarmarkText style={{width:"25px", height:"25px"}}/>
            <Box>
              <Typography sx={{ textAlign: 'initial'}}><strong>Upload</strong></Typography>
              <Typography>PDF, Word, TXT files</Typography>
            </Box>
          </Box>
        ) : props.value === 'web' ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '2px', gap: 2, width: "200px"}}> 
            <FiLink style={{width:"25px", height:"25px"}}/>
            <Box>
              <Typography sx={{ textAlign: 'initial'}}><strong>Import Web Page</strong></Typography>
              <Typography>Webpage with text content</Typography>
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '2px', gap: 2, width: "200px"}}> 
         
          <FaDiceD6 style={{width:"25px", height:"25px"}}/>         
            <Box>
              <Typography sx={{ textAlign: 'initial'}}><strong>Import from other APPS</strong></Typography>
              <Typography>Google Doc, Slack, Discord</Typography>
            </Box>
          </Box>
        )
      }
    </IconButton>
  );
}


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(3),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));




function DocumentUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  
  const [fileList, setFileList] = useState([])
  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile.name);
      setFileList([...fileList, selectedFile.name]);
    }
  };


  return (
    <div>
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ border: '2px dashed gray', padding: '20px', textAlign: 'center' }}
    >
      {selectedFile ? (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleUpload}>Upload</button>
        </div>
      ) : (
        <p>Drag and drop a document file here, or click to select a file.</p>
      )}
      
    </div>
    <div>
      {fileList.map((file, idx) => (
        <Typography key={idx}> <CiCircleCheck style={{ width: "20px", height: "20px" , backgroundColor: "green", color: "red"}}/>{file}</Typography>
      ))}
    </div>
    </div>
  );
}



export default function TeamieCreat() {

  const [selected, setSelected] = useState(false);

  const [alignment, setAlignment] = React.useState('text');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  
  return (
    <Container>
      <SimpleCard>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
          <Box>
            <Typography sx={{ fontSize: '25px'}}>Select Document Type</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <StyledToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between'
                  }}
                >
                <ToggleButton value="text" sx={{border: '1px solid #AAA', borderRadius: '10px' }} >
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '2px', gap: 2, width: "200px"}}> 
                    <FiType style={{width:"25px", height:"25px"}}/>
                    <Box>
                      <Typography sx={{ textAlign: 'initial'}}><strong>Text</strong></Typography>
                      <Typography sx={{ textAlign: 'initial'}}>Write or copy paste document</Typography>
                    </Box>
                  </Box> 
                </ToggleButton>

                <ToggleButton value="upload" sx={{border: '1px solid #AAA', borderRadius: '10px'}} >
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '2px', gap: 2, width: "200px"}}> 
                    <BsFileEarmarkText style={{width:"25px", height:"25px", color: 'black'}}/>
                    <Box sx={{ textAlign: 'initial'}}>
                      <Typography sx={{  color: 'black'}}><strong>Upload</strong></Typography>
                      <Typography sx={{height: '50px'}}>PDF, Word, TXT files<br/></Typography>
                    </Box>
                  </Box> 
                </ToggleButton>

                <ToggleButton value="web" sx={{border: '1px solid #AAA', borderRadius: '10px', }} >
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '2px', gap: 2, width: "200px"}}> 
                    <FiLink style={{width:"25px", height:"25px", color: 'black'}}/>
                    <Box>
                      <Typography sx={{ textAlign: 'initial', color: 'black'}}><strong>Import Web Page</strong></Typography>
                      <Typography sx={{ textAlign: 'initial'}}>Webpage with text content</Typography>
                    </Box>
                  </Box> 
                </ToggleButton>

                <ToggleButton value="other" sx={{border: '1px solid #AAA', borderRadius: '10px'}} >
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '2px', gap: 2, width: "200px"}}> 
                    <FaDiceD6 style={{width:"25px", height:"25px", color: 'black'}}/>
                    <Box>
                      <Typography sx={{ textAlign: 'initial', color: 'black'}}><strong>Import from other APPS</strong></Typography>
                      <Typography sx={{ textAlign: 'initial'}}>Google Doc, Slack, Discord</Typography>
                    </Box>
                  </Box> 
                </ToggleButton>
                
            </StyledToggleButtonGroup>
          </Box>

          {alignment === "text" ? (
            <Box>
              <Box>
                <Typography sx={{ fontSize: '25px'}}>Input Text</Typography>
                <TextField 
                  sx={{ 
                    display: 'flex'}} 
                    multiline 
                    rows={15} 
                    placeholder='You are Teamie AI, a factual research assistant that 
                    provides accurate answers and is reluctant of making any claims 
                    unless they are stated on the knowledge base. When responding do not 
                    mention the words unstructured knowledge base. As Cody, your goal is to 
                    assist me in a conversation by providing accurate and reliable responses to my questions. 
                    You should use the information from the knowledge base as your only source of 
                    information when responding. If you cannot confirm an answer accurately with the 
                    provided information, then first state that you cannot provide a reliable response, 
                    and then provide me with your best guess.'>                      
                </TextField>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant='contained' sx={{ bgcolor: "#3843D0"}}>Add ot Knowledge Base</Button>
              </Box>
            </Box>) : alignment === 'upload' ? (
              <DocumentUpload />
            ) : alignment === 'web' ? (
              <Box sx={{display: 'flex', flexDirection: 'column', gap : 3}}>
                <Box >
                  <Typography sx={{ fontSize: "25px"}}>Import Web Page</Typography>
                  <TextField defaultValue="www.teamie.com"></TextField>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3}}>
                  <TextField defaultValue="www.chatbot.com"></TextField>
                  <Box sx={{ border : '2px solid #000', borderRadius: "10px", width: "30px", height: "30px",alignItems: 'center', display: 'flex', justifyContent: 'space-around'}}>+</Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                  <Button variant='contained' sx={{ bgcolor: '#3843D0'}}>Add to Knowledge Base</Button>
                </Box>
              </Box>
            ) : (<Box></Box>)}
            <Box>
              
            </Box>
        </Box>
      </SimpleCard>
    </Container>
  )
}
