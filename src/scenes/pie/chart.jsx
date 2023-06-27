import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import Topbar from "../global/Topbar";

const PieRend = () => {
  return (
    <Box m="50px">
      <Topbar title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default PieRend;