import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart1 from "../../components/LineChart1";
import Topbar from "../global/Topbar";

const LineRend1 = () => {
  return (
    <Box m="50px">
      <Topbar title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <LineChart1 />
      </Box>
    </Box>
  );
};

export default LineRend1;