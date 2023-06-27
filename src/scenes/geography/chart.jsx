import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import Topbar from "../global/Topbar";

const GeoRend = () => {
  return (
    <Box m="100px">
      <Topbar title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default GeoRend;