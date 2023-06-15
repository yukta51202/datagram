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
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const withouSidebarRoutes = ["/", "/Register"];

// title, to, icon, selected, setSelected are the properties
// this is crreated so that we need not write this coe for every item again and again
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      // set the selected item as active
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
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
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="20px"
                >
                  <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="40px"
                    height="40px"
                    src={`../../assets/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                <Typography
                    variant="h6"
                    color={colors.grey[100]}
                    fontWeight="400"
                    sx={{ m: "10px 0 7px 10px" }}
                  >
                    Yukta Malhotra
                  </Typography>
                </Box>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
  
            {/* Menu Items */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notes"
              to="/notes"
              icon={<DescriptionOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
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
          </Box>
          </Menu>
        </ProSidebar>
      </Box>
    );
  };

export default Sidebar;