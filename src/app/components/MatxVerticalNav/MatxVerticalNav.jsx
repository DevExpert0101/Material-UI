import { Box, ButtonBase, Icon, styled } from '@mui/material';
import useSettings from 'app/hooks/useSettings';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Paragraph, Span } from '../Typography';
import MatxVerticalNavExpansionPanel from './MatxVerticalNavExpansionPanel';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const ListLabel = styled(Paragraph)(({ theme, mode }) => ({
  fontSize: '12px',
  marginTop: '20px',
  marginLeft: '15px',
  marginBottom: '10px',
  textTransform: 'uppercase',
  display: mode === 'compact' && 'none',
  color: theme.palette.text.secondary,
}));

const ExtAndIntCommon = {
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '4px',
  height: 44,
  whiteSpace: 'pre',
  marginBottom: '8px',
  textDecoration: 'none',
  justifyContent: 'space-between',
  transition: 'all 150ms ease-in',
  '&:hover': { background: 'rgba(255, 255, 255, 0.08)' },
  '&.compactNavItem': {
    overflow: 'hidden',
    justifyContent: 'center !important',
  },
  '& .icon': {
    fontSize: '18px',
    paddingLeft: '16px',
    paddingRight: '16px',
    verticalAlign: 'middle',
  },
};
const ExternalLink = styled('a')(({ theme }) => ({
  ...ExtAndIntCommon,
  color: theme.palette.text.primary,
}));

const InternalLink = styled(Box)(({ theme }) => ({
  '& a': {
    ...ExtAndIntCommon,
    color: theme.palette.text.primary,
  },
  '& .navItemActive': {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
  },
}));

const StyledText = styled(Span)(({ mode }) => ({
  fontSize: '0.875rem',
  paddingLeft: '0.8rem',
  display: mode === 'compact' && 'none',
}));

const BulletIcon = styled('div')(({ theme }) => ({
  padding: '2px',
  marginLeft: '24px',
  marginRight: '8px',
  overflow: 'hidden',
  borderRadius: '300px',
  background: theme.palette.text.primary,
}));

const BadgeValue = styled('div')(() => ({
  padding: '1px 8px',
  overflow: 'hidden',
  borderRadius: '300px',
}));

const menuMap = {
  "Chat": 0,
  "Bot": 1,
  "Knowledge Base": 2,
  "Team": 3,
}

const MatxVerticalNav = ({ items }) => {
  const { settings } = useSettings();
  const { mode } = settings.layout1Settings.leftSidebar;

  const [currentMenu, setCurrentMenu] = useState("Chat");

  const renderLevels = (data) => {
    const handleMenuClick = (name) => {
      setCurrentMenu(name)
    }

    return data.map((item, index) => {
      if (item.parent) {
        if (item.parent === currentMenu)
        return (
          <InternalLink key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `navItemActive ${mode === 'compact' && 'compactNavItem'}`
                  : `${mode === 'compact' && 'compactNavItem'}`
              }
            >
              <ButtonBase key={item.name} name="child" sx={{ width: '100%' }}>
                {item?.icon ? (
                                                      
                  <Icon className="icon" sx={{ width: 36, color: item.col }} >
                    {item.icon}                    
                  </Icon>
                  
                ) : (
                  <Fragment>
                    <BulletIcon
                      className={`nav-bullet`}
                      sx={{ display: mode === 'compact' && 'none' }}
                    />
                    <Box
                      className="nav-bullet-text"
                      sx={{
                        ml: '20px',
                        fontSize: '20px',
                        display: mode !== 'compact' && 'none',
                        border: item.iconText === 'New Chat' && '2px solid #000',
                        borderRadius: 2 
                      }}
                    >
                      <strong>{item.iconText}</strong>
                    </Box>
                  </Fragment>
                )}
                <StyledText mode={mode} className="sidenavHoverShow">
                  {item.name}
                </StyledText>

                <Box mx="auto" />

                {item.badge && (
                  <BadgeValue className="sidenavHoverShow">{item.badge.value}</BadgeValue>
                )}
              </ButtonBase>
            </NavLink>
          </InternalLink>
        );
      } else {
        return (
          <InternalLink key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `navItemActive ${mode === 'compact' && 'compactNavItem'}`
                  : `${mode === 'compact' && 'compactNavItem'}`
              }
            >
              <ButtonBase key={item.name} name="child" sx={{ width: '100%' }} onClick={(e) => handleMenuClick(item.name)}>
                {item?.icon ? (
                                                      
                  <Icon className="icon" sx={{ width: 36, color: item.col }} >
                    {item.icon}                    
                  </Icon>
                  
                ) : (
                  <Fragment>
                    <BulletIcon
                      className={`nav-bullet`}
                      sx={{ display: mode === 'compact' && 'none' }}
                    />
                    <Box
                      className="nav-bullet-text"
                      sx={{
                        ml: '20px',
                        fontSize: '20px',
                        display: mode !== 'compact' && 'none',
                        border: item.iconText === 'New Chat' && '2px solid #000',
                        borderRadius: 2 
                      }}
                    >
                      <strong>{item.iconText}</strong>
                    </Box>
                  </Fragment>
                )}
                <StyledText mode={mode} className="sidenavHoverShow">
                  {item.name}
                </StyledText>

                <Box mx="auto" />

                {item.badge && (
                  <BadgeValue className="sidenavHoverShow">{item.badge.value}</BadgeValue>
                )}
              </ButtonBase>
            </NavLink>
          </InternalLink>
        );
      }
    });
  };

  return <div className="navigation">{renderLevels(items)}</div>;
};

export default React.memo(MatxVerticalNav);
