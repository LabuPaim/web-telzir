import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, useTheme, ListItemText, Icon, useMediaQuery } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemLinkProps {
  label: string;
  icon: string;
  to: string;
  onClick: (() => void) | undefined;
}



export const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {

  const resolvePath = useResolvedPath(to)
  const match = useMatch({path: resolvePath.pathname, end: false})

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
    onClick?.()
  }
  
  return (   
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />                  
    </ListItemButton>         
  );
}