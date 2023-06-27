import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart1 from "../../components/PieChart1";
import Topbar from "../global/Topbar";

const PieRend1 = () => {
  return (
    <Box m="50px">
      <Topbar title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart1 />
      </Box>
    </Box>
  );
};

export default PieRend1;