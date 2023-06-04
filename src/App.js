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
import AddBarChart from "./scenes/bar/addBarChart";
import BarChart from "./components/BarChart";
// import Line from "./scenes/line"
// import Pie from "./scenes/pie"
// import Geography from "./scenes/geography"

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
                <Route path = "/Register" element = {<Register />} /> 
                <Route path = "/dashboard" element = {<Dashboard />} />
                <Route path = "/team" element = {<Team />} />
                <Route path = "/add" element = {<Add />} />
                <Route path = "/bar" element = {<Bar />} />
                <Route path = "/barChart" element = {<BarChart />} />
                {/* <Route path = "/pie" element = {<Pie />} /> */}
                {/* <Route path = "/line" element = {<Line />} /> */}
                {/* <Route path = "/geography" element = {<Geography />} /> */}
                <Route path = "/calendar" element = {<Calendar />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
