import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const Bar = () => {
  return (
    <Box m="20px">
        <Header title="Bar Chart" />
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        Mock Data
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        This bar graphs represents the demand of food items across different countries.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    {/* //   <Box height="75vh">
    //     <BarChart />
    //   </Box> */}
    </Box>
  )
};

export default Bar;