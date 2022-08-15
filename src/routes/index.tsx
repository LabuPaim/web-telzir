import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppThemeContext } from 'shared/contexts/ThemeContext'

export const AppRoutes = () => {

    const {toggleTheme } = useAppThemeContext()

    return (
        <Routes>

            <Route path="*" element={<Navigate to={"/api"} />} />

            <Route path="/ddd" element={<Button variant="contained" onClick={toggleTheme}>teste</Button>} />

        </Routes>
    )
}