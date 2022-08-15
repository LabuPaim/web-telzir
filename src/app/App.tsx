import { BrowserRouter } from "react-router-dom";

import 'app/App.scss';
import { AppRoutes } from "routes";
import { AppThemeProvider } from "shared/contexts";



export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes/> 
      </BrowserRouter>
    </AppThemeProvider>
  );
}

