import React from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,    
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import styled from 'styled-components'
//import { makeStyles } from '@mui/material' NÃO FUNCIONA


const MyApp = styled.div`
    color: #0057B8;
    background-color: #FFD500;
    width: 90px;
    font-weight: 900;   
    margin-left: 1px; 
    padding: 0px;    
    display: flex;    
    justify-content: center;    
`

const Menu = styled.div`
    color:#FFD500;
    font-weight: 900;
`


const Header = () => {
    

    return (
        
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            <Menu><MenuIcon /></Menu>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <MyApp>News</MyApp>
            </Typography>                                  
            <Button color="inherit"><MyApp>Login</MyApp></Button>
            </Toolbar>
        </AppBar>
        
    
    )
}


export default Header