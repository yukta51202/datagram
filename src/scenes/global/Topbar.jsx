import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Topbar = ({title}) => {
    // grabs the theme
    const theme = useTheme();
    // determines the color that should be rendered according to the theme and palette
    const colors = tokens(theme.palette.mode);
    // toggle different states for the color mode
    const colorMode = useContext(colorModeContext);

    const [isNotificationsClicked, setIsNotificationsClicked] = useState(true);
    const [isSettingsClicked, setIsSettingsClicked] = useState(true);
    const [isPersonClicked, setIsPersonClicked] = useState(true);

    const { pathname } = useLocation();
    if (pathname === "/") return null;
    if (pathname === "/Register") return null;
    if (pathname === "/Login") return null;

    const handleNotificationsClick = () => {
        setIsNotificationsClicked(!isNotificationsClicked);
    };
    
    const handleSettingsClick = () => {
        setIsSettingsClicked(!isSettingsClicked);
    };
    
    const handlePersonClick = () => {
        setIsPersonClicked(!isPersonClicked);
    };

    return(
        // Box is a component of material ui like div component which allow us to use css inline
        <Box 
        position="fixed" // Set the position to fixed
        top={0} // Position it at the top of the viewport
        left={65} // Position it at the left of the viewport
        right={0} // Position it at the right of the viewport
        zIndex={1000} // Set a higher z-index to ensure it appears above other elements
        display = "flex" 
        justifyContent = "space-between" 
        p = {1} 
        backgroundColor = {colors.grey[900]} 
        >
            <Box display= "flex">
            <Typography
                variant = "h3"
                component = "div"
                fontFamily = "Raleway"
                fontSize = "20px"
                padding= "7px"
                marginLeft={2}
                color = "#6870fa"
                fontWeight = "600">
                 DATAGRAM |
             </Typography>
             <Typography
                variant = "h3"
                fontSize = "18px"
                component = "div"
                fontFamily = "Montserrat"
                padding= "7px"
                color="#8338ec">
                {title}
             </Typography>
            </Box> 
             
             {/* Search Bar */}
             <Box
               display = "flex"
               alignItems="center"
               backgroundColor = {colors.primary[400]}
               borderRadius = "3px"
               border={`1px solid ${colors.primary[900]}`}
               width = "350px"
               marginLeft="-5px"
             >
                <InputBase sx = {{ ml: 2, flex: 2}} placeholder = "Search" />
                    <IconButton type ="button" sx = {{p: 1}}>
                        <SearchIcon />
                    </IconButton>
            </Box>

            {/* ICONS */}
            <Box display="flex" style={{
                color: colors.grey[100],
              }}>
                {/*colorMode is the context of the react app that allows us to toggle between light and dark mode */}
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                    <LightModeOutlinedIcon />
                )}
                </IconButton>
            
                <IconButton onClick={handleNotificationsClick}>
                {isNotificationsClicked ? (
                    <NotificationsOutlinedIcon />
                ) : (
                    <NotificationsIcon />
                )}
                </IconButton>

                <IconButton onClick={handleSettingsClick}>
                {isSettingsClicked ? <SettingsOutlinedIcon /> : <SettingsIcon />}
                </IconButton>

                <IconButton onClick={handlePersonClick}>
                {isPersonClicked ? <PersonOutlinedIcon /> : <PersonIcon />}
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;