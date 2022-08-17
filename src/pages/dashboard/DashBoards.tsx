import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { FerramentaSearch } from "shared/components";
import { useAppThemeContext, useDrawerContext } from "shared/contexts";
import { LayoutBase } from "shared/layout";


// import 'app/App.scss';



export const DashBoards = () => {

    const {toggleTheme } = useAppThemeContext()
    const {toggleDrawerOpen} = useDrawerContext()

  return (
    <LayoutBase titulo={'Telzir'} barraFerramentas={(
      <FerramentaSearch></FerramentaSearch>
    )}>
      {/* <Button variant="contained" onClick={toggleDrawerOpen}>teste</Button> */}
      <Box>teste</Box>

    </LayoutBase>
    
    
    
  );
}