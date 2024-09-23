import {CssBaseline, ThemeProvider} from "@mui/material"
import {createTheme} from "@mui/material/styles"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import {themeSettings} from "./theme"
 import Dashboard from "./scenes/dashboard"
//  import adminDashboard from "./scenes/adminDashboard"
 import Layout from "./scenes/layout"
function App() {
  const mode = useSelector((state)=>state.global.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
           <Routes>
              <Route element={<Layout/>}>
                <Route path="/agent" element={<Navigate to="/agent/dashboard" replace />} />
                <Route path="/agent/dashboard" element={<Dashboard/>} />
                {/* <Route path="/admin/admindashboard" element={<adminDashboard/>} /> */}
              </Route>

           </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
