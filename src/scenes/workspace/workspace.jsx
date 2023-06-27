import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Topbar from "../global/Topbar";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";

const Chart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="100px">
      <Topbar title="Report" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <Typography
         variant="h2"
         fontWeight={600}
         sx={{
            marginLeft: 5,
         }}> Number of smartphone users by leading countries </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
        {/* ROW 1 */}
            <Box
            marginTop={3}
            marginLeft={7}
            width={600}
            height={350}
            gridColumn="span 1"
            backgroundColor={colors.grey[900]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <BarChart />
            </Box>
            <Box
            marginTop={3}
            marginLeft={4}
            width={600}
            height={350}
            gridColumn="span 1"
            backgroundColor={colors.grey[900]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <PieChart />
            </Box>
            {/* ROW 2 */}
            <Box
            marginLeft={7}
            marginTop={28}
            width={600}
            height={300}
            gridColumn="span 1"
            backgroundColor={colors.grey[900]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <LineChart />
            </Box>
            <Box
            marginLeft={4}
            marginTop={28}
            width={600}
            height={300}
            gridColumn="span 1"
            backgroundColor={colors.grey[900]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <GeographyChart />
            </Box>
        </Box> 
      </Box>
    </Box>
  );
};

export default Chart;