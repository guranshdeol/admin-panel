import { ColorModeContext ,useMode} from './Theme';
import{ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar"

function App() {
  const [theme,colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <div className="app"></div>
      <main className="content">
        <Topbar/>
      </main>
      </ThemeProvider>
    </ColorModeContext.Provider>  
  );
}

export default App;
