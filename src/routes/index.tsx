import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {

    return (
        <Routes>

            <Route path="*" element={<Navigate to={"/api"} />} />

            <Route path="/ddd" element={<>teste</>} />

        </Routes>
    )
}