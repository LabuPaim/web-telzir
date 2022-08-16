import { BrowserRouter } from "react-router-dom";

import 'app/App.scss';
import { AppRoutes } from "routes";
import { AppThemeProvider, DrawerProvider } from "shared/contexts";
import { MenuLateral } from "shared/components";



export const App = () => {
  return (
    <AppThemeProvider>
    <DrawerProvider>
      <BrowserRouter>
      <MenuLateral>

        <AppRoutes/> 

      </MenuLateral>
      </BrowserRouter>
    </DrawerProvider>
    </AppThemeProvider>
  );
}

