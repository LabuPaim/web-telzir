import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useAppThemeContext, useDrawerContext } from "shared/contexts";


// import 'app/App.scss';



export const Home = () => {

    const {toggleTheme } = useAppThemeContext()
    const {toggleDrawerOpen} = useDrawerContext()

  return (
    <>
        <Button variant="contained" onClick={toggleDrawerOpen}>teste</Button>
        <Box>teste</Box>
    </>
    
    
  );
}