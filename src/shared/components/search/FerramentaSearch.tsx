import { Button, Icon, Paper, TextField, useTheme } from "@mui/material"
import { Box } from "@mui/system"

export const FerramentaSearch: React.FC = () => {

    const theme = useTheme();

    return (
        <Box 
        display="flex" 
        alignItems='center' 
        component={Paper} 
        height={theme.spacing(5)} 
        marginX={1} 
        padding={1} 
        paddingX={2} 
        gap={1}
        >
            <TextField size="small" placeholder="Ex.: 80"/>
            <Box flex={1} display="flex" justifyContent='end'>
                <Button 
                variant="contained" 
                color="primary"
                disableElevation
                endIcon={<Icon>add</Icon>}
                >
                    Novo</Button>
            </Box>

        </Box>

    )
}