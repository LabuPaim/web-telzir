import { BrowserRouter } from "react-router-dom";

import 'app/App.scss';
import { AppRoutes } from "routes";
import { ThemeProvider } from "@emotion/react";
import { ColorTheme } from "shared/themes";



export const App = () => {
  return (
    <ThemeProvider theme={ColorTheme}>
      <BrowserRouter>
        <AppRoutes/> 
      </BrowserRouter>
    </ThemeProvider>
  );
}

