import { Palette } from '@mui/icons-material'
import {createTheme} from '@mui/material'

export const DarkTheme = createTheme({
    palette: {
        primary:{
            main: '#339DA2',
            dark: '#2A6D7',
            light: '#3CB6C1',
            contrastText: '#FFFFFF',
        },
        secondary:{
            main: '#406374',
            dark: '#000000',
            light: '#4A9AC1',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#000000',
            paper: '#202124',
        }

    }
});