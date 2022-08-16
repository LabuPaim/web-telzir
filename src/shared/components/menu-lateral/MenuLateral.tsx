import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, useTheme, ListItemText, Icon, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "shared/contexts";



export const MenuLateral: React.FC<{children: React.ReactNode}> = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext()

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ?'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} display='flex' height='100%' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={theme.spacing(2)}>
            <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12)}}  src="/static/images/avatar/1.jpg" />
            Victor Paim              
          </Box>

          <Divider/>
          <Box flex={1}>
            <List component='nav'>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary='Página Inicial' />                  
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