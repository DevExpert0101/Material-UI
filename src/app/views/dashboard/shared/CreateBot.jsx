import { Avatar, Box, Button, TextField, Typography, styled, useTheme } from '@mui/material';
import SimpleCard from 'app/components/SimpleCard';
import { useState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { purple } from '@mui/material/colors';
import {Link} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import General from 'app/views/charts/echarts/General';
import { GetAppRounded } from '@mui/icons-material';
import Knowledge from 'app/views/charts/echarts/Knowledge';
import Personality from 'app/views/charts/echarts/Personality';
import Campus from './Campus';


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



const CreateBot = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState('private');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  }

  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        const diff3 = 10;
        setProgress(progress + diff3);
        setBuffer(progress + diff3 + diff3);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const ref = useRef();
  const [marginWidth, setMarginWidth] = useState(0);

  const resize = () => {
    if (typeof ref.current !== "undefined") {
      const fullWidth = ref.current.offsetWidth
      let cnt = Math.floor(fullWidth / 300)
      const childCount = ref.current.children.length
      cnt = cnt > childCount ? childCount : cnt
      setMarginWidth((fullWidth - cnt * 300) / (2 * cnt))
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize()
    return () => window.removeEventListener("resize", resize);
  }, [resize])

  const refButton = useRef(null);
  const [selectedButton, setSelectedButton] =  useState('start');

  const handlePage = (event) => {
    setSelectedButton(event.target.value)
  }
  

  return (
    
    <Container>
      <SimpleCard>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center', gap: 5}}>
            <Box>
              <Avatar>1</Avatar>
            </Box>
            <Box>
              <Button variant="Text" onClick={handlePage} value="start">Start with a template</Button>
            </Box>
            <Box>
              <LinearProgress  value={progress} sx={{ width: "50px"}}  />
            </Box>

            <Box>
              <Avatar>2</Avatar>
            </Box>
            <Box>
              <Button variant='Text' onClick={handlePage} value="general">General</Button>
            </Box>
            <Box>
              <LinearProgress  value={progress} sx={{ width: "50px"}} />
            </Box>

            <Box>
              <Avatar>3</Avatar>
            </Box>
            <Box>
              <Button variant='Text' onClick={handlePage} value="knowledge">Knowledge Base</Button>
            </Box>
            <Box>
              <LinearProgress  value={progress} sx={{ width: "50px"}} />
            </Box>

            <Box>
              <Avatar>4</Avatar>
            </Box>
            <Box>
              <Button variant='Text' onClick={handlePage} value="custom">Customization</Button>
            </Box>           
          </Box>

          
          <Box ref={ref} overflow="auto" sx={{display: 'flex', flexWrap: 'wrap', justifyContent: "center", gap: "20px"}}>

            {/* <Customize marginWidth={marginWidth}/>
            <Campus marginWidth={marginWidth}/>
            <Campus marginWidth={marginWidth}/>
            <Campus marginWidth={marginWidth}/>
            <Campus marginWidth={marginWidth}/>
            <Campus marginWidth={marginWidth}/>
            <Campus marginWidth={marginWidth}/> */}
            {
            selectedButton === "start" ? 
              // {<Customize marginWidth={marginWidth}/>
              <Campus />
             : selectedButton === "general" ? 
              <General />
             : selectedButton === "knowledge" ? 
              <Knowledge />
             : 
              <Personality />
            }

          </Box>

        </Box>
      </SimpleCard>
    </Container>
  );
};

export default CreateBot;
