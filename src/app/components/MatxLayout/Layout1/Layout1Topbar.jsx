import { memo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  useMediaQuery,
  Box,
  styled,
  useTheme,
  Fab,
  Button
} from '@mui/material';

import { MatxMenu, MatxSearchBox } from 'app/components';
import { themeShadows } from 'app/components/MatxTheme/themeColors';
import { NotificationProvider } from 'app/contexts/NotificationContext';
import useAuth from 'app/hooks/useAuth';
import useSettings from 'app/hooks/useSettings';
import { topBarHeight } from 'app/utils/constant';

import { Paragraph, Span } from '../../Typography';
import NotificationBar from '../../NotificationBar/NotificationBar';
import ShoppingCart from '../../ShoppingCart';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary
}));

const TopbarRoot = styled('div')({
  top: 0,
  zIndex: 96,
  height: topBarHeight,
  boxShadow: themeShadows[8],
  transition: 'all 0.3s ease'
});

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  paddingLeft: 18,
  paddingRight: 20,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 14,
    paddingRight: 16
  }
}));

const UserMenu = styled(Box)({
  padding: 4,
  display: 'flex',
  borderRadius: 24,
  cursor: 'pointer',
  alignItems: 'center',
  '& span': { margin: '0 8px' }
});

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 185,
  '& a': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  '& span': { marginRight: '10px', color: theme.palette.text.primary }
}));

const IconBox = styled('div')(({ theme }) => ({
  display: 'inherit',
  [theme.breakpoints.down('md')]: { display: 'none !important' }
}));

const Layout1Topbar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { logout, user } = useAuth();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [v, setV] = useState(10);

  const handleChange = (event) => {
    setV(event.target.value);
  };

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({ layout1Settings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close';
    } else {
      mode = layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full';
    }
    updateSidebarMode({ mode });
  };

  const location = useLocation();

  // useEffect(() => {
  //   console.log(location.pathname)
  // }, [location.pathname])

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">          
          <Paragraph sx={{fontSize: 20}}>
            {/* <strong>My Bots</strong> */}
            {location.pathname === "/dashboard/team" || location.pathname === "/dashboard/team/billing" ? (
              <FormControl sx={{ m: 1, minWidth: 120, display: 'flex', alignItems: "center" }}>
              <Select
                value={v}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ display: 'flex', alignItems: "center"}}
              >                
                <MenuItem value={10}>Teamie Workspace</MenuItem>
                <MenuItem value={20}>UCLA Workspace</MenuItem>
                <MenuItem value={30} sx={{ alignItems: "center", textAlign: "center"}}><Icon>add</Icon>Create Workspace</MenuItem>
              </Select>              
            </FormControl>
            ) : (<strong>My Bots</strong>)}
          </Paragraph>
          
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-around" sx={{ width: "400px",  display: "flex", justifyContent: "space-between"}}>
          <Fab size='small' color="#3843D0" sx={{ borderColor: "#3843D0", borderWidth: "2px"}}>
            <Avatar src={"/assets/images/discord.png"} sx={{ cursor: 'pointer', width:"20px", height: "20px" }} />
          </Fab>

          <Fab size='small' color="#3843D0" sx={{ borderColor: "#3843D0", borderWidth: "2px"}}>
            
            <QuestionMarkIcon sx={{ color: "#3843D0" }}/>
          </Fab>

          <Button variant='contained' sx={{ color: "white",  backgroundColor: "#3843D0"}}>
            Upgrade Plan
          </Button>

          <MatxMenu
            menuButton={
              <UserMenu>
                <Avatar src={user.avatar} sx={{ cursor: 'pointer' }} />

                <Hidden xsDown>
                  <Span>
                    <strong>{user.name}</strong>
                  </Span>
                </Hidden>
                
              </UserMenu>
            }
          >
            <StyledItem>
              <Link to="/">
                <Icon> home </Icon>
                <Span> Home </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Link to="/page-layouts/user-profile">
                <Icon> person </Icon>
                <Span> Profile </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Icon> settings </Icon>
              <Span> Settings </Span>
            </StyledItem>

            <StyledItem onClick={logout}>
              <Icon> power_settings_new </Icon>
              <Span> Logout </Span>
            </StyledItem>
          </MatxMenu>
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default memo(Layout1Topbar);
