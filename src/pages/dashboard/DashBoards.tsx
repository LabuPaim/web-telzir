import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useAppThemeContext, useDrawerContext } from "shared/contexts";
import { LayoutBase } from "shared/layout";


// import 'app/App.scss';



export const DashBoards = () => {

    const {toggleTheme } = useAppThemeContext()
    const {toggleDrawerOpen} = useDrawerContext()

  return (
    <LayoutBase titulo={'Telzir'} barraFerramentas={<>Barra de ferramentas</>}>
      {/* <Button variant="contained" onClick={toggleDrawerOpen}>teste</Button> */}
      <Box>teste</Box>

    </LayoutBase>
    
    
    
  );
}