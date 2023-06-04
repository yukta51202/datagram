import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"
import { useLocation } from "react-router-dom";

const Topbar = () => {
    // grabs the theme
    const theme = useTheme();
    // determines the color that should be rendered according to the theme and palette
    const colors = tokens(theme.palette.mode);
    // toggle different states for the color mode
    const colorMode = useContext(colorModeContext);

    const { pathname } = useLocation();
    if (pathname === "/") return null;
    if (pathname === "/Register") return null;

    return(
        // Box is a component of material ui like div component which allow us to use css inline
        <Box display = "flex" justifyContent = "space-between" p = {2} backgroundColor = {colors.grey[900]}>
             {/* Datagram */}
             <Typography
                variant = "h3"
                color = {colors.grey[100]}
                fontWeight = "700"
                margin = "5px"
                >
                    DATAGRAM
             </Typography>
             {/* Search Bar */}
             <Box
               display = "flex"
               backgroundColor = {colors.primary[400]}
               borderRadius = "3px"
               width = "400px"
             >
                <InputBase sx = {{ ml: 2, flex: 2}} placeholder = "Search" />
                    <IconButton type ="button" sx = {{p: 1}}>
                        <SearchIcon />
                    </IconButton>
            </Box>

            {/* ICONS */}
            <Box display="flex">
                {/*colorMode is the context of the react app that allows us to toggle between light and dark mode */}
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                    <LightModeOutlinedIcon />
                )}
                </IconButton>
            
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;