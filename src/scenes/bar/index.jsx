import { Box } from "@mui/material";
import Header from "../../components/Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import BarChart from "../../components/BarChart"; 

const Bar = () => {
    const navigate = useNavigate();
    const navigateBar = () => {
        navigate('/barChart');
      };
     
  return (
    <Box m="20px">
        <Header title="Bar Chart" />
        <Box display = "flex">
            <Card sx = {{ maxWidth: 345, m: "20px"}}>
                <CardActionArea onClick = {navigateBar}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`../../assets/bar.jpg`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" fontWeight="600" component="div">
                            Mock Data
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            This bar graph represents the demand of food items across selected countries.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx = {{ maxWidth: 345, m: "20px" }}>
                <CardActionArea onClick = {navigateBar}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`../../assets/add.jpg`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" fontWeight="600" component="div">
                            Add File
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Submit your file for data visualization and analysis.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    </Box>
  )
};

export default Bar;