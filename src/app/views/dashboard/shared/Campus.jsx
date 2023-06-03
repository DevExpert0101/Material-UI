import { Box, Button,Avatar, Typography, styled, useTheme } from '@mui/material';
import SimpleCard from 'app/components/SimpleCard';
import { useState, useRef, useEffect } from 'react';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import {Link} from '@mui/material';
import AddIcon from '@mui/icons-material/Add'



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


const Customize = (props) => {
  return (
    <Box sx={{ width: '300px', height: '300px', border: '1px', borderStyle: 'dashed', borderColor:  '#AAA', borderRadius: '10px', margin: `${props.marginWidth - 10}px`}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '100px', alignItems: 'center'}}>
        <Box >
          <Avatar><AddIcon/></Avatar>
        </Box>        
        <Box>
          <Typography sx={{ color: '#AAA' , fontSize: '20px'}}><strong>Customize</strong></Typography>  
        </Box>
        <Box sx={{ alignItems: 'center'}}>
          
          <Typography>Create my own bot</Typography>
        </Box>
        
      </Box>
    </Box>
  )
}

const camp = [
  "support","support","support","support","support","support"
]


const Campus = (props) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState('private');

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

  return (
    
    <Container>
      <SimpleCard>
        <Box ref={ref} overflow="auto" sx={{display: 'flex', flexWrap: 'wrap', justifyContent: "center", gap: "20px"}}>
          <Customize />
          {
            camp.map((item, idx) =>
            <Box key={idx} sx={{ width: '300px', height: '300px', border: '1px solid #AAA', borderRadius: '10px', margin: `${props.marginWidth - 10}px`}}>
              <Box sx={{ padding: 2}}>
                <Avatar sx={{ bgcolor: "#9fa8da", color: '#3834D0'}}><SchoolOutlinedIcon /></Avatar>
              </Box>
              <Box sx={{ padding: 2}}>
                <Typography sx={{ fontSize: "15px"}}><strong>Campus Support</strong><br/><br/></Typography>
                <Typography>Engage and support students <br/> with accurate information. Reduce the<br/>workload for adminstrative stuff.</Typography>
              </Box>
              <Box sx={{ padding: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1 }}>
                <Link>Read more</Link>
                <Button variant='contained' sx={{ bgcolor: "#3843D0"}}>Select</Button>
              </Box>
            </Box>
            )
          }
         
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default Campus;
