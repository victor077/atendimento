import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefautlLayout from '../layouts/DefautlLayout'

import History from '../Pages/History'
import Home from '../Pages/Home'

export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<DefautlLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/History' element={<History />} />
            </Route>
        </Routes>
    )
}
