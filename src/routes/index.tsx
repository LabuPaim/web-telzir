
import { DashBoards } from '../pages'
import { useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import { useDrawerContext } from 'shared/contexts/DrawerContext'
import { ListDdd } from 'pages/ddd/ListDdd'

export const AppRoutes = () => {

    const { setDrawerOptions} = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/',
                label: 'Página Inicial',
            },
            {
                icon: 'perm_contact_calendar',
                path: '/contato',
                label: 'Contato',
            }
        ])


    }, [])

    

    return (
        <Routes>

            <Route path="/" element={<DashBoards/>} />

        </Routes>
    )
}