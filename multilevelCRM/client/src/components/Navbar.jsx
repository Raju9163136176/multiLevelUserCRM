import React, {useState} from 'react'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDownwardOutlined } from '@mui/icons-material'
import FlexBetween from './flexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import images from "assets/images.jpg"
import { useTheme } from '@emotion/react'
import { AppBar } from '@mui/material'
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
<toolbar
sx={{
    justifyContent:'space-between'
}}
>

</toolbar>
  </AppBar>
}

export default Navbar