import { useState } from "react";
// React pro side bar is a package that allows us to easily create sidebars
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// Allows to have links when we click on navigation bar
import { Link, useLocation } from "react-router-dom";
// Styles file for react pro sidebar
import "react-pro-sidebar/dist/css/styles.css";
import { colorModeContext, tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import WidgetsIcon from '@mui/icons-material/Widgets';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

// title, to, icon, selected, setSelected are the properties
// this is crreated so that we need not write this coe for every item again and again
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display={"inline-flex"}
      flexDirection={"column"}
      maxWidth={80}>
      <MenuItem
      // set the selected item as active
      active={selected === title}
      style={{
        fontFamily: "Raleway",
        size: 50,
        color: colors.grey[300],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      >
      <Link to={to} />
    </MenuItem>
    <Typography
    align="center"
    sx={{
    fontFamily: "Raleway",
    fontSize: "12px",
    fontWeight: 500,
    color: colors.grey[300],
    marginTop: "-8px",
    marginLeft: "-5px",
    marginBottom: "10px"
  }}
>
  {title}
</Typography>
    </Box>
    
  );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // Represents whether the sidebar will be collapsed or not
    const [isCollapsed, setIsCollapsed] = useState(true);
    // Represents which item or page is selected currently
    const [selected, setSelected] = useState("Dashboard");

    const { pathname } = useLocation();
    if (pathname === "/") return null;
    if (pathname === "/Register") return null;
    if (pathname === "/Login") return null;
  
    return (
      <Box
        position="fixed" // Set the position to fixed
        top={0} // Position it at the top of the viewport
        left={0} // Position it at the left of the viewport
        right={0} // Position it at the right of the viewport
        bottom={1}
        display = "flex" 
        justifyContent = "space-between"
        // overriding the css properties of following items
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.grey[900]} !important`, // important tags make sure the library's css is overriden
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#3a86ff !important",
          },
          "& .pro-menu-item.active": {
            color: "#3a86ff !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(isCollapsed)}
              icon={isCollapsed ? <WidgetsIcon /> : undefined}
              style={{
                marginTop : "-5px",
                marginBottom : "7px",
                color: colors.grey[300],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="10px"
                >
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
  
            {/* Menu Items */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Create"
              to="/create"
              icon={<AddCircleOutlineOutlinedIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tasks"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Workspace"
              to="/workspace"
              icon={<WorkOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          </Menu>
        </ProSidebar>
      </Box>
    );
  };

export default Sidebar;