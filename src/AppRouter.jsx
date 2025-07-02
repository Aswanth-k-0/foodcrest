import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={
                <HomeScreen />
            } />
            <Route path='/cart'element={
                <CartScreen/>
            } />
        </Routes>
    )
}

export default AppRouter