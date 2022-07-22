/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { NavLink } from 'react-router-dom'

import { Scroll, Timer } from 'phosphor-react'

import Logo from '../../assets/images/Logo.svg'

import { HeaderContainer } from './styles'

const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} alt="" />
            <nav>
                <NavLink to="/" title='Timer'> <Timer size={24} /> </NavLink>
                <NavLink to="/history" title='Historico'> <Scroll size={24} /> </NavLink>
            </nav>
        </HeaderContainer>
    )
}

export default Header