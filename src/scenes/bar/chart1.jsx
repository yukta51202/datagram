import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart1 from "../../components/BarChart1";
import Topbar from "../global/Topbar";

const BarRend1 = () => {
  return (
    <Box m="100px">
      <Topbar title="Bar Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <BarChart1 />
      </Box>
    </Box>
  );
};

export default BarRend1;