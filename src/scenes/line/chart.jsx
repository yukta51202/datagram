import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Topbar from "../global/Topbar";

const LineRend = () => {
  return (
    <Box m="50px">
      <Topbar title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default LineRend;