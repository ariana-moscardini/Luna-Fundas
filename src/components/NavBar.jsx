import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
const NavBar = () => {
    return (
        <div>
            <h3>Brand-comerce</h3>
            
            <Menu>
                <MenuButton>
                    productos
                </MenuButton>
                <MenuList>
                    <MenuItem>ver todo en productos</MenuItem>
                    <MenuItem>iphone</MenuItem>
                    <MenuItem>samsung</MenuItem>
                    <MenuItem>motorola</MenuItem>
                    <MenuItem>xiaomi</MenuItem>
                </MenuList>
            </Menu>
            <CartWidget/>
        </div>
    )
}

export default NavBar