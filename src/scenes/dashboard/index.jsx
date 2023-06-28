import { Box, Button, IconButton, Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Topbar from "../global/Topbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from "react";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const navigate = useNavigate();

  const navigateCard = () => {
    navigate('/case1');
  };

  return (
    <Box 
      marginTop={10}
      marginLeft={10}
      marginRight={4}>
      {/* HEADER */}
      <Box marginLeft={4}>
        <Topbar title="Home" />
        <Box>
        <Link to = "/create">
        <Button 
          sx={{
            backgroundColor: colors.blueAccent[500],
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "7px 20px",
          }}
          variant="contained" endIcon={<AddIcon />}> 
          Add Report
        </Button>
        </Link>
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: "Raleway",
          fontSize: "18px",
          fontWeight: 600,
          color: colors.grey[300],
          marginLeft: "35px",
          marginTop: "30px",
        }}
        >
        Recommended
      </Typography>

      <Box marginLeft={2}>
        <Topbar title="Home" />
        <Box display = "flex">
            <Card sx = {{ maxWidth: 345, m: "20px"}}>   
                <CardActionArea onClick={navigateCard}>
                <CardContent>
                        <Typography gutterBottom variant="h5" fontWeight="600" component="div">
                           <ExploreOutlinedIcon /> &nbsp; Explore this data story
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`../../assets/cancer.png`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" fontWeight="600" component="div">
                            Mobile Survey data for a company
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx = {{ maxWidth: 345, m: "20px" }}>
                <CardActionArea>
                <CardContent>
                        <Typography gutterBottom variant="h5" fontWeight="600" component="div">
                           <ExploreOutlinedIcon /> &nbsp; Explore this data story
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`../../assets/covid.png`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" fontWeight="600" component="div">
                            Covid-19 Report 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;