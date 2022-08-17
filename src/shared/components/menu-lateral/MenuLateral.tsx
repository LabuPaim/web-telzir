import { Avatar, Divider, Drawer, List, useTheme, useMediaQuery, ListItemButton, ListItemIcon, Icon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { useAppThemeContext, useDrawerContext } from "shared/contexts";
import { ListItemLink } from "./List";



export const MenuLateral: React.FC<{children: React.ReactNode}> = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext()
  const {toggleTheme, themeName } = useAppThemeContext()

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ?'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} display='flex' height='100%' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={theme.spacing(2)}>
            <Avatar sx={{height: theme.spacing(20), width: theme.spacing(28)}} variant="square" src={require("imagens/logo.png")} />
              
                                           
          </Box>

          <Divider/>
          <Box flex={1}>
            <List component='nav'>
              {drawerOptions.map(drawerOptions =>(
                <ListItemLink
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  to={drawerOptions.path}
                  label={drawerOptions.label}
                  onClick={smDown ?  toggleDrawerOpen : undefined}
                />
              ))}
             
            </List>

          </Box>


          <Box>
            <List component='nav'>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  {themeName === 'light' ?
                  <Icon>dark_mode</Icon>:
                  <Icon>light_mode</Icon>}
                  
                </ListItemIcon>
                <ListItemText primary='Alternar tema' />                  
              </ListItemButton>  
            </List>

          </Box>
          
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={smDown ? theme.spacing(2) : theme.spacing(28)}>
      {children}

      </Box>


    </>
  );
}