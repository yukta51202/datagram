import { Box } from "@mui/material";
import Header from "../../components/Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

const Line = () => {
    const navigate = useNavigate();
    const navigateLine = () => {
        navigate('/lineChart');
      };
  return (
    <Box m="20px">
        <Header title="Line Chart" />
        <Box display = "flex">
            <Card sx = {{ maxWidth: 345, m: "20px" }}>
                <CardActionArea onClick = {navigateLine}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`../../assets/line.jpg`}
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
                <CardActionArea onClick = {navigateLine}>
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
  );
};

export default Line;