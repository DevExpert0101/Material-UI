import {
  Box,
  Card,
  styled,
  Table,
  useTheme,
  Button,
  Typography,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import UpgradeCard from './UpgradeCard';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

// const ProductTable = styled(Table)(() => ({
//   minWidth: 400,
//   whiteSpace: 'pre',
//   '& small': {
//     width: 50,
//     height: 15,
//     borderRadius: 500,
//     boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
//   },
//   '& td': { borderBottom: 'none' },
//   '& td:first-of-type': { paddingLeft: '16px !important' },
// }));

// const Small = styled('small')(({ bgcolor }) => ({
//   width: 50,
//   height: 15,
//   color: '#fff',
//   padding: '2px 8px',
//   borderRadius: '4px',
//   overflow: 'hidden',
//   background: bgcolor,
//   boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
// }));


const TopSellingTable = () => {
  const { palette } = useTheme();
  // const bgError = palette.error.main;
  // const bgPrimary = palette.primary.main;
  // const bgSecondary = palette.secondary.main;

  const [UpgradeCards, setUpgradeCards] = useState([
    { botname: "Unity Bot", description:"A bot that knows about Game Coding"},
    { botname: "Teamie Bot", description: "Solve questions for all employees"},
    { botname: "UCLA", description: "UCLA study and life assistant"}
  ]);

  const [sharedUpgradeCards, setSharedUpgradeCards] = useState([
    { botname: "Unity Bot", description:"A bot that knows about Game Coding"},
    { botname: "Teamie Bot", description: "Solve questions for all employees"}
  ])
  
  const addNewButton = () => {
    
    setUpgradeCards([...UpgradeCards, { botname: "UCLA", description: "UCLA study and life assistant"}]);
  }

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
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title></Title>

        <Button variant="contained" style={{backgroundColor : "#3843D0"}} startIcon={<AddRoundedIcon />} onClick={addNewButton} href='/dashboard/chat/create'>
          New Bot
        </Button>
      </CardHeader>

      <Box ref={ref} overflow="auto" sx={{display: 'flex', flexWrap: 'wrap', justifyContent: "flex-start", gap: "20px"}}>       
        {UpgradeCards.map((card, idx) => (
            <UpgradeCard key={idx} botname={card.botname} description={card.description} marginWidth={marginWidth}/>
        ))}
        </Box>

        <Typography sx={{ marginLeft: `${marginWidth}px`, fontSize: "20px"}}>Shared with ME</Typography>

        <Box overflow="auto" sx={{display: 'flex', flexWrap: 'wrap', justifyContent: "flex-start", gap: "20px"}}>
        
        {sharedUpgradeCards.length > 0 &&
          sharedUpgradeCards.map((card, idx) => (
            <UpgradeCard key={idx} botname={card.botname} description={card.description} marginWidth={marginWidth}/>
        ))
        }
      </Box>
    </Card>
  );
};

const productList = [
  {
    imgUrl: '/assets/images/products/headphone-2.jpg',
    name: 'earphone',
    price: 100,
    available: 15,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'earphone',
    price: 1500,
    available: 30,
  },
  {
    imgUrl: '/assets/images/products/iphone-2.jpg',
    name: 'iPhone x',
    price: 1900,
    available: 35,
  },
  {
    imgUrl: '/assets/images/products/iphone-1.jpg',
    name: 'iPhone x',
    price: 100,
    available: 0,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'Head phone',
    price: 1190,
    available: 5,
  },
];

export default TopSellingTable;
