import React, {useState} from 'react'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDownwardOutlined } from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import images from "assets/images.jpg"
import { useTheme } from '@emotion/react'
import { AppBar, IconButton, InputBase, Toolbar, useMediaQuery } from '@mui/material'
import shadows from '@mui/material/styles/shadows'
const Navbar=() => {
    const dispatch = useDispatch()
    const theme = useTheme()
  return <AppBar
 sx={{
    position:'static',
    background:'none',
    shadows:'none'
    
 }}
  
  >
    
<Toolbar
sx={{
    justifyContent:'space-between'
}}
>

<FlexBetween>
  <IconButton onClick={ ()=>console.log("test")}>
    <MenuIcon/>
  </IconButton>
  <FlexBetween
    backgroundColor={theme.palette.alt}
    borderColor="black"
    border="2px"
    borderRadius="9px"
    gap="3rem"
    p="0.1rem 1.2rem"
  >
    <InputBase placeholder='Search here'/>
    <IconButton>
      <Search/>
    </IconButton>
  </FlexBetween>
</FlexBetween>
<FlexBetween gap="1.3rem">
  <IconButton onClick={()=>dispatch(setMode())} >
    {theme.palette.mode==="dark"?(
      <DarkModeOutlined sx={{fontSize:"25px"}}/>
    ):(
      <LightModeOutlined sx={{fontSize:"25px"}}/>)}
  </IconButton>
  <IconButton>
    <SettingsOutlined sx={{fontSize:"25px"}} />
  </IconButton>
</FlexBetween>

</Toolbar>
  </AppBar>
}

export default Navbar