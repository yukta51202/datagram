import { colorModeContext, useMode } from "./theme";
// CssBaseline will reset the css to default and ThemeProvider allows us to pass the themes into material ui
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar"
import Sidebar from "./scenes/global/Sidebar"
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard"
import Team from "./scenes/team"
import Calendar from "./scenes/calendar/calendar";
import Add from "./scenes/calendar/add";
import Bar from "./scenes/bar/index"
import Home from "./components/Home";
import Register from "./components/Register"
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart"
import LineChart from "./components/LineChart"
import Line from "./scenes/line"
import Pie from "./scenes/pie"
import Geography from "./scenes/geography"
import GeographyChart from "./components/GeographyChart"
import Login from "./components/Login"
import Create from "./scenes/dashboard/create";
import Chart from "./scenes/bar/chart";
import Chart1 from "./scenes/bar/chart1";
import PieRend from "./scenes/pie/chart";
import PieRend1 from "./scenes/pie/chart1";
import LineRend from "./scenes/line/chart";
import LineRend1 from "./scenes/line/chart1";
import GeoRend from "./scenes/geography/chart";
import Workspace from "./scenes/workspace/workspace";
import Case1 from "./scenes/dashboard/case1";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
          <div className="app"> 
            <Sidebar />
            <main className = "content"> 
              <Topbar />
              <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/Login" element = {<Login />} />
                <Route path = "/create" element = {<Create />} />
                <Route path = "/Register" element = {<Register />} /> 
                <Route path = "/dashboard" element = {<Dashboard />} /> 
                <Route path = "/team" element = {<Team />} />
                <Route path = "/add" element = {<Add />} />
                <Route path = "/bar" element = {<Bar />} />
                <Route path = "/barChart" element = {<Chart />} />
                <Route path = "/barChart1" element = {<Chart1 />} />
                <Route path = "/pieChart" element = {<PieRend />} />
                <Route path = "/pieChart1" element = {<PieRend1 />} />
                <Route path = "/pie" element = {<Pie />} />
                <Route path = "/line" element = {<Line />} />
                <Route path = "/lineChart" element = {<LineRend />} />
                <Route path = "/lineChart1" element = {<LineRend1 />} />
                <Route path = "/geographyChart" element = {<GeoRend />} />
                <Route path = "/geography" element = {<Geography />} />
                <Route path = "/calendar" element = {<Calendar />} />
                <Route path = "/workspace" element = {<Workspace />} />
                <Route path = "/case1" element = {<Case1 />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
