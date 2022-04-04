import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { } from "react-router-dom";
import { AddToken } from "./components/addToken";
import { Home } from "./components/home";
import { EditToken } from "./components/editToken";

const theme = createTheme({
  palette: {
    action: {

      disabled: '#fcfcfc'
    },
    primary: {
      main: "#aa33b5",
    },
    secondary: {
      main: "#646464",
      light: 'white',
    }, error: {
      main: "#920000",
    }
  },
});

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <BrowserRouter>
       <Routes>
            <Route path="/edittoken/:id" element={<EditToken />} />
            <Route path="/addtoken" element={<AddToken />} />
            <Route path="/" element={<Home />} />
            
      
          
          
          
          
          </Routes>
          </BrowserRouter>
          </ThemeProvider>
    </div>

  );
};

export default App;
