import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Topbar from "../global/Topbar";

const BarRend = () => {
  return (
    <Box m="100px">
      <Topbar title="Bar Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default BarRend;