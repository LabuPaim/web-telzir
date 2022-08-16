import { Button } from '@mui/material'
import { Home } from 'pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppThemeContext } from 'shared/contexts/ThemeContext'

export const AppRoutes = () => {

    

    return (
        <Routes>

            <Route path="/" element={<Home/>} />            

        </Routes>
    )
}