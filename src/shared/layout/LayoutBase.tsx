import { Box } from "@mui/system"

interface ILayoutBase {
    titulo: string;
    children: React.ReactNode;
    
}

export const LayoutBase: React.FC<ILayoutBase> = ({children, titulo}) => {

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>  
            <Box>
                {titulo}
            </Box>
            <Box>
                Barra de Ferramentas
            </Box>
            <Box>
                {children}
            </Box>  
            
        </Box>


    )

}